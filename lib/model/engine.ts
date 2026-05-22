// AI Policy Sandbox dynamic engine - v0.3 calibrated equations.
// Bounded gain-loss ODEs integrated with RK4 (fixed dt = 0.1 yr).
// All states stay in [0,1] by construction.

import { CONTENT } from "./content";
import type {
  PolicyScenario,
  Tier1ParamRow,
  Tier2ParamRow,
  Tier3ParamRow,
} from "./schemas";

/** Step size for the integrator (years). */
const DT = 0.1;

/** Result of one trajectory. */
export interface Trajectory {
  scenarioId: string;
  times: number[];
  /** Tier 1 K, A, P, L per sector (indexed by tier1Ids order). */
  tier1: {
    sectorId: string;
    K: number[];
    A: number[];
    P: number[];
    L: number[];
  }[];
  /** Tier 2 A, P per sector. */
  tier2: { sectorId: string; A: number[]; P: number[] }[];
  /** Tier 3 A per sector. */
  tier3: { sectorId: string; A: number[] }[];
  /** Economy-wide enabling stock. */
  E: number[];
}

/** Apply the bounded gain-loss form dX/dt = rho * [(1-X) gain - X loss]. */
function gainLoss(X: number, rho: number, gain: number, loss: number): number {
  return rho * ((1 - X) * gain - X * loss);
}

/**
 * Resolve per-sector policy support G_s and national investment G_E at time t
 * for a given scenario.
 *
 * Scenario equations (v0.3):
 *  - status-quo:      G_s = 0, G_E = G_E^base
 *  - aggregate:       G_s = Delta / n,                    G_E = G_E^base
 *  - targeted-demand: G_s = Delta * (1 - A_s(0)) / sumGap, G_E = G_E^base
 *  - targeted-supply: G_s = 0,                            G_E = G_E^base + Delta
 *  - mixed:           G_s = 0.5 * Delta * w_s^demand,     G_E = G_E^base + 0.5 * Delta
 *
 * Lever is only active while t <= leverDurationYears.
 */
function buildLevers(scenario: PolicyScenario) {
  const { sectors, globals } = CONTENT;
  const n = sectors.length;
  const GEbase = globals.GEbase.value;

  // Pre-compute demand weights from initial A_s(0) across all 19 sectors.
  const initialA = new Map<string, number>();
  for (const id of CONTENT.tier1Ids)
    initialA.set(id, CONTENT.parameters.tier1[id].A0);
  for (const id of CONTENT.tier2Ids)
    initialA.set(id, CONTENT.parameters.tier2[id].A0);
  for (const id of CONTENT.tier3Ids)
    initialA.set(id, CONTENT.parameters.tier3[id].A0);

  const gap = (id: string) => 1 - (initialA.get(id) ?? 0);
  const totalGap = sectors.reduce((acc, s) => acc + gap(s.id), 0);
  const demandWeight = new Map<string, number>();
  for (const s of sectors) demandWeight.set(s.id, gap(s.id) / totalGap);

  const Delta = scenario.deltaIntensity;
  const D = scenario.leverDurationYears;
  const active = (t: number) => t <= D + 1e-9;

  return {
    Gs(sectorId: string, t: number): number {
      if (!active(t) || Delta <= 0) return 0;
      switch (scenario.archetype) {
        case "baseline":
          return 0;
        case "aggregate":
          return Delta / n;
        case "targeted-demand":
          return Delta * (demandWeight.get(sectorId) ?? 0);
        case "targeted-supply":
          return 0;
        case "mixed":
          return 0.5 * Delta * (demandWeight.get(sectorId) ?? 0);
      }
    },
    GE(t: number): number {
      if (!active(t) || Delta <= 0) return GEbase;
      switch (scenario.archetype) {
        case "targeted-supply":
          return GEbase + Delta;
        case "mixed":
          return GEbase + 0.5 * Delta;
        default:
          return GEbase;
      }
    },
  };
}

type Levers = ReturnType<typeof buildLevers>;

/** Full mutable state vector. */
interface State {
  E: number;
  tier1: Float64Array; // length 9*4: [K0,A0,P0,L0, K1,...]
  tier2: Float64Array; // length 6*2
  tier3: Float64Array; // length 4
}

function makeInitialState(): State {
  const t1 = new Float64Array(CONTENT.tier1Ids.length * 4);
  CONTENT.tier1Ids.forEach((id, i) => {
    const p = CONTENT.parameters.tier1[id];
    t1[i * 4 + 0] = p.K0;
    t1[i * 4 + 1] = p.A0;
    t1[i * 4 + 2] = p.P0;
    t1[i * 4 + 3] = p.L0;
  });
  const t2 = new Float64Array(CONTENT.tier2Ids.length * 2);
  CONTENT.tier2Ids.forEach((id, i) => {
    const p = CONTENT.parameters.tier2[id];
    t2[i * 2 + 0] = p.A0;
    t2[i * 2 + 1] = p.P0;
  });
  const t3 = new Float64Array(CONTENT.tier3Ids.length);
  CONTENT.tier3Ids.forEach((id, i) => {
    const p = CONTENT.parameters.tier3[id];
    t3[i] = p.A0;
  });
  return { E: CONTENT.globals.E0.value, tier1: t1, tier2: t2, tier3: t3 };
}

function cloneState(s: State): State {
  return {
    E: s.E,
    tier1: new Float64Array(s.tier1),
    tier2: new Float64Array(s.tier2),
    tier3: new Float64Array(s.tier3),
  };
}

function addScaled(target: State, src: State, base: State, k: number): void {
  target.E = base.E + k * src.E;
  for (let i = 0; i < target.tier1.length; i++)
    target.tier1[i] = base.tier1[i] + k * src.tier1[i];
  for (let i = 0; i < target.tier2.length; i++)
    target.tier2[i] = base.tier2[i] + k * src.tier2[i];
  for (let i = 0; i < target.tier3.length; i++)
    target.tier3[i] = base.tier3[i] + k * src.tier3[i];
}

/** Compute derivatives. Returns a fresh State holding dX/dt. */
function derivatives(s: State, t: number, levers: Levers): State {
  const { globals, tier1Ids, tier2Ids, tier3Ids, parameters } = CONTENT;
  const rhoK = globals.tier1Rates.rhoK.value;
  const rhoA1 = globals.tier1Rates.rhoA.value;
  const rhoP1 = globals.tier1Rates.rhoP.value;
  const rhoL = globals.tier1Rates.rhoL.value;
  const rhoA2 = globals.tier2Rates.rhoA.value;
  const rhoP2 = globals.tier2Rates.rhoP.value;
  const rhoA3 = globals.tier3Rates.rhoA.value;
  const rhoE = globals.rhoE.value;
  const deltaE = globals.deltaE.value;

  const d: State = {
    E: 0,
    tier1: new Float64Array(s.tier1.length),
    tier2: new Float64Array(s.tier2.length),
    tier3: new Float64Array(s.tier3.length),
  };

  // E dynamics: dE/dt = rho_E [(1-E) G_E - E delta_E]
  d.E = gainLoss(s.E, rhoE, levers.GE(t), deltaE);

  // Tier 1
  tier1Ids.forEach((id, i) => {
    const p = parameters.tier1[id] as Tier1ParamRow;
    const K = s.tier1[i * 4 + 0];
    const A = s.tier1[i * 4 + 1];
    const P = s.tier1[i * 4 + 2];
    const L = s.tier1[i * 4 + 3];
    const G = levers.Gs(id, t);

    // dK/dt = (1-K) rho_K (phi E + G + eta A) - K rho_K mu
    d.tier1[i * 4 + 0] = gainLoss(K, rhoK, p.phi * s.E + G + p.eta * A, p.mu);
    // dA/dt = (1-A) rho_A alpha K - A rho_A (1-K)
    d.tier1[i * 4 + 1] = gainLoss(A, rhoA1, p.alpha * K, 1 - K);
    // dP/dt = (1-P) rho_P kappa A - P rho_P (1-A)
    d.tier1[i * 4 + 2] = gainLoss(P, rhoP1, p.kappa * A, 1 - A);
    // dL/dt = (1-L) rho_L lambda A - L rho_L (1-A)
    d.tier1[i * 4 + 3] = gainLoss(L, rhoL, p.lambda * A, 1 - A);
  });

  // Tier 2
  tier2Ids.forEach((id, i) => {
    const p = parameters.tier2[id] as Tier2ParamRow;
    const A = s.tier2[i * 2 + 0];
    const P = s.tier2[i * 2 + 1];
    const G = levers.Gs(id, t);
    const drive = p.beta * s.E + G;
    // dA/dt = (1-A) rho_A (beta E + G) - A rho_A (1 - beta E)
    d.tier2[i * 2 + 0] = gainLoss(A, rhoA2, drive, 1 - p.beta * s.E);
    // dP/dt as Tier 1
    d.tier2[i * 2 + 1] = gainLoss(P, rhoP2, p.kappa * A, 1 - A);
  });

  // Tier 3
  tier3Ids.forEach((id, i) => {
    const p = parameters.tier3[id] as Tier3ParamRow;
    const A = s.tier3[i];
    const G = levers.Gs(id, t);
    // dA/dt = (1-A) rho_A (gamma E + G) - A rho_A (1 - gamma E)
    d.tier3[i] = gainLoss(A, rhoA3, p.gamma * s.E + G, 1 - p.gamma * s.E);
  });

  return d;
}

/** Single RK4 step from time t with step h. */
function rk4Step(s: State, t: number, h: number, levers: Levers): void {
  const k1 = derivatives(s, t, levers);
  const tmp = cloneState(s);
  addScaled(tmp, k1, s, h / 2);
  const k2 = derivatives(tmp, t + h / 2, levers);
  addScaled(tmp, k2, s, h / 2);
  const k3 = derivatives(tmp, t + h / 2, levers);
  addScaled(tmp, k3, s, h);
  const k4 = derivatives(tmp, t + h, levers);

  s.E += (h / 6) * (k1.E + 2 * k2.E + 2 * k3.E + k4.E);
  for (let i = 0; i < s.tier1.length; i++)
    s.tier1[i] +=
      (h / 6) * (k1.tier1[i] + 2 * k2.tier1[i] + 2 * k3.tier1[i] + k4.tier1[i]);
  for (let i = 0; i < s.tier2.length; i++)
    s.tier2[i] +=
      (h / 6) * (k1.tier2[i] + 2 * k2.tier2[i] + 2 * k3.tier2[i] + k4.tier2[i]);
  for (let i = 0; i < s.tier3.length; i++)
    s.tier3[i] +=
      (h / 6) * (k1.tier3[i] + 2 * k2.tier3[i] + 2 * k3.tier3[i] + k4.tier3[i]);
}

/** Integrate a scenario over [0, horizonYears]. Records yearly snapshots. */
export function runScenario(
  scenario: PolicyScenario,
  horizonYears: number,
): Trajectory {
  const levers = buildLevers(scenario);
  const state = makeInitialState();
  const stepsPerYear = Math.round(1 / DT);
  const totalSteps = horizonYears * stepsPerYear;

  const traj: Trajectory = {
    scenarioId: scenario.id,
    times: [],
    tier1: CONTENT.tier1Ids.map((id) => ({
      sectorId: id,
      K: [],
      A: [],
      P: [],
      L: [],
    })),
    tier2: CONTENT.tier2Ids.map((id) => ({ sectorId: id, A: [], P: [] })),
    tier3: CONTENT.tier3Ids.map((id) => ({ sectorId: id, A: [] })),
    E: [],
  };

  const snapshot = (t: number) => {
    traj.times.push(t);
    traj.E.push(state.E);
    CONTENT.tier1Ids.forEach((_, i) => {
      traj.tier1[i].K.push(state.tier1[i * 4 + 0]);
      traj.tier1[i].A.push(state.tier1[i * 4 + 1]);
      traj.tier1[i].P.push(state.tier1[i * 4 + 2]);
      traj.tier1[i].L.push(state.tier1[i * 4 + 3]);
    });
    CONTENT.tier2Ids.forEach((_, i) => {
      traj.tier2[i].A.push(state.tier2[i * 2 + 0]);
      traj.tier2[i].P.push(state.tier2[i * 2 + 1]);
    });
    CONTENT.tier3Ids.forEach((_, i) => {
      traj.tier3[i].A.push(state.tier3[i]);
    });
  };

  snapshot(0);
  for (let step = 1; step <= totalSteps; step++) {
    const t = (step - 1) * DT;
    rk4Step(state, t, DT, levers);
    if (step % stepsPerYear === 0) snapshot(step * DT);
  }
  return traj;
}
