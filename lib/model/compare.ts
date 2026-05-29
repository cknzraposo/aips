// Compare module: run multiple scenarios + status-quo, emit qualitative deltas.

import { CONTENT, sectorById } from "./content";
import { runScenario, type RunOverrides, type Trajectory } from "./engine";
import type { PolicyScenario } from "./schemas";

export type { RunOverrides } from "./engine";

/** Direction qualifier for a delta. */
export type Direction = "up" | "down" | "flat";

/** Qualitative magnitude bucket. */
export type Magnitude = "negligible" | "small" | "moderate" | "large";

/** A single computed outcome for one scenario vs reference. */
export interface OutcomeDelta {
  dimensionId: string;
  dimensionLabel: string;
  unit: string;
  rawReference: number;
  rawValue: number;
  delta: number;
  direction: Direction;
  magnitude: Magnitude;
  /** Higher-is-better orientation for plain-English direction labels. */
  higherIsBetter: boolean;
}

/** Time-series sample for line charts. */
export interface SeriesPoint {
  t: number;
  value: number;
}

/** Per-sector snapshot at the horizon, for the adoption chart. */
export interface SectorAdoptionPoint {
  sectorId: string;
  code: string;
  name: string;
  tier: 1 | 2 | 3;
  A: number;
}

/** One scenario's bundle of outcomes for the Compare view. */
export interface ScenarioOutcomes {
  scenarioId: string;
  scenarioName: string;
  isReference: boolean;
  outcomes: OutcomeDelta[];
  series: {
    pBar: SeriesPoint[];
    E: SeriesPoint[];
    adoptionAtHorizon: SectorAdoptionPoint[];
  };
}

/** Comparison result for the Compare page. */
export interface ComparisonResult {
  referenceScenarioId: string;
  horizonYears: number;
  contentVersion: string;
  scenarios: ScenarioOutcomes[];
}

/** Outcome dimension metadata - mirrored to UI cards. */
export const OUTCOME_DIMENSIONS = [
  {
    id: "whole-economy-productivity",
    label: "Whole-economy productivity",
    unit: "P-bar at horizon",
    higherIsBetter: true,
    summary:
      "GDP-weighted normalised productivity at the horizon (eq:Ptotal). Higher means more realised AI gain across all 19 sectors.",
  },
  {
    id: "adoption-spread",
    label: "Adoption spread",
    unit: "stdev(A_s) at horizon",
    higherIsBetter: false,
    summary:
      "Standard deviation of sector adoption A_s at the horizon. Lower means more even diffusion across the economy.",
  },
  {
    id: "labour-pressure",
    label: "Labour adjustment pressure",
    unit: "L-bar integral, GDP-weighted",
    higherIsBetter: false,
    summary:
      "Time-integral of GDP-weighted labour adjustment pressure (Tier 1 dynamic L, Tier 2 ex-post phi*A). Lower means smoother workforce transition.",
  },
  {
    id: "enabling-stock",
    label: "Enabling capacity at horizon",
    unit: "E at horizon",
    higherIsBetter: true,
    summary:
      "National enabling stock E at the horizon. Higher means stronger residual capacity (infrastructure, skills, governance) after the lever ends.",
  },
] as const;

/** Compute aggregate P-bar at a snapshot index from a trajectory. */
function aggregatePBar(traj: Trajectory, snapshotIdx: number): number {
  let total = 0;
  CONTENT.tier1Ids.forEach((id, i) => {
    total += sectorById(id).gdpWeight * traj.tier1[i].P[snapshotIdx];
  });
  CONTENT.tier2Ids.forEach((id, i) => {
    total += sectorById(id).gdpWeight * traj.tier2[i].P[snapshotIdx];
  });
  CONTENT.tier3Ids.forEach((id, i) => {
    // Tier 3 has no explicit P state; psi * A is its productivity proxy.
    const psi = CONTENT.parameters.tier3[id].psi;
    total += sectorById(id).gdpWeight * psi * traj.tier3[i].A[snapshotIdx];
  });
  return total;
}

/** Standard deviation of A_s across all 19 sectors at a snapshot. */
function adoptionSpread(traj: Trajectory, snapshotIdx: number): number {
  const adoptions: number[] = [];
  traj.tier1.forEach((row) => adoptions.push(row.A[snapshotIdx]));
  traj.tier2.forEach((row) => adoptions.push(row.A[snapshotIdx]));
  traj.tier3.forEach((row) => adoptions.push(row.A[snapshotIdx]));
  const mean = adoptions.reduce((a, b) => a + b, 0) / adoptions.length;
  const variance =
    adoptions.reduce((acc, v) => acc + (v - mean) ** 2, 0) / adoptions.length;
  return Math.sqrt(variance);
}

/** Trapezoidal integral of GDP-weighted labour pressure over [0, horizon]. */
function labourPressureIntegral(traj: Trajectory): number {
  const n = traj.times.length;
  // Pre-compute weights and Tier 2 phi.
  const weightsT1 = CONTENT.tier1Ids.map((id) => sectorById(id).gdpWeight);
  const weightsT2 = CONTENT.tier2Ids.map((id) => sectorById(id).gdpWeight);
  const phiT2 = CONTENT.tier2Ids.map((id) => CONTENT.parameters.tier2[id].phi);

  const lAt = (idx: number): number => {
    let sum = 0;
    traj.tier1.forEach((row, i) => {
      sum += weightsT1[i] * row.L[idx];
    });
    traj.tier2.forEach((row, i) => {
      sum += weightsT2[i] * phiT2[i] * row.A[idx];
    });
    return sum;
  };

  let integral = 0;
  for (let i = 0; i < n - 1; i++) {
    const dt = traj.times[i + 1] - traj.times[i];
    integral += 0.5 * (lAt(i) + lAt(i + 1)) * dt;
  }
  return integral;
}

/** Build the horizon adoption snapshot, ordered by tier then code. */
function buildAdoptionAtHorizon(traj: Trajectory): SectorAdoptionPoint[] {
  const lastIdx = traj.times.length - 1;
  const points: SectorAdoptionPoint[] = [];
  const meta = (id: string) => sectorById(id);
  CONTENT.tier1Ids.forEach((id, i) => {
    const m = meta(id);
    points.push({
      sectorId: id,
      code: m.code,
      name: m.name,
      tier: 1,
      A: traj.tier1[i].A[lastIdx],
    });
  });
  CONTENT.tier2Ids.forEach((id, i) => {
    const m = meta(id);
    points.push({
      sectorId: id,
      code: m.code,
      name: m.name,
      tier: 2,
      A: traj.tier2[i].A[lastIdx],
    });
  });
  CONTENT.tier3Ids.forEach((id, i) => {
    const m = meta(id);
    points.push({
      sectorId: id,
      code: m.code,
      name: m.name,
      tier: 3,
      A: traj.tier3[i].A[lastIdx],
    });
  });
  return points.sort((a, b) => a.code.localeCompare(b.code));
}

function bucketMagnitude(absDelta: number, scale: number): Magnitude {
  const r = scale > 0 ? absDelta / scale : 0;
  if (r < 0.01) return "negligible";
  if (r < 0.05) return "small";
  if (r < 0.15) return "moderate";
  return "large";
}

function buildDelta(
  dim: (typeof OUTCOME_DIMENSIONS)[number],
  reference: number,
  value: number,
): OutcomeDelta {
  const delta = value - reference;
  const direction: Direction =
    Math.abs(delta) < 1e-6 ? "flat" : delta > 0 ? "up" : "down";
  // Scale magnitude relative to the reference value, falling back to value
  // itself if reference is zero (e.g. labour integral at status quo).
  const scale = Math.max(Math.abs(reference), Math.abs(value), 1e-6);
  return {
    dimensionId: dim.id,
    dimensionLabel: dim.label,
    unit: dim.unit,
    rawReference: reference,
    rawValue: value,
    delta,
    direction,
    magnitude: bucketMagnitude(Math.abs(delta), scale),
    higherIsBetter: dim.higherIsBetter,
  };
}

function computeOutcomes(
  traj: Trajectory,
  reference: Trajectory | null,
): OutcomeDelta[] {
  const lastIdx = traj.times.length - 1;
  const refIdx = reference ? reference.times.length - 1 : lastIdx;

  const refPbar = reference ? aggregatePBar(reference, refIdx) : aggregatePBar(traj, lastIdx);
  const refSpread = reference ? adoptionSpread(reference, refIdx) : adoptionSpread(traj, lastIdx);
  const refLabour = reference ? labourPressureIntegral(reference) : labourPressureIntegral(traj);
  const refE = reference ? reference.E[refIdx] : traj.E[lastIdx];

  return [
    buildDelta(OUTCOME_DIMENSIONS[0], refPbar, aggregatePBar(traj, lastIdx)),
    buildDelta(
      OUTCOME_DIMENSIONS[1],
      refSpread,
      adoptionSpread(traj, lastIdx),
    ),
    buildDelta(
      OUTCOME_DIMENSIONS[2],
      refLabour,
      labourPressureIntegral(traj),
    ),
    buildDelta(OUTCOME_DIMENSIONS[3], refE, traj.E[lastIdx]),
  ];
}

/**
 * Run a comparison across selected scenarios.
 * - Always includes the status-quo scenario as the reference.
 * - All selected scenarios share the same horizon, budget envelope, and
 *   user-supplied overrides (rate multipliers, lever duration, mixed split).
 *   The reference (`status-quo`) deliberately ignores the budget envelope
 *   but still receives the rate multipliers so the "uncertainty dials"
 *   move both runs in lock-step.
 */
export function runComparison(
  scenarioIds: ReadonlyArray<string>,
  horizonYears: number,
  budgetEnvelopeNzdM: number,
  overrides?: RunOverrides,
): ComparisonResult {
  const referenceId = "status-quo";
  const scenarios = CONTENT.scenarios.filter(
    (s) => scenarioIds.includes(s.id) || s.id === referenceId,
  );
  if (!scenarios.some((s) => s.id === referenceId)) {
    throw new Error("Status-quo scenario missing from content");
  }

  // Map the user-facing budget envelope (NZ$M) onto the model's bounded
  // intensity Delta in [0,1]. NZ$1,000M maps to full intensity.
  const intensityFromEnvelope = Math.min(
    Math.max(budgetEnvelopeNzdM / 1000, 0),
    1,
  );
  const apply = (s: PolicyScenario): PolicyScenario =>
    s.id === referenceId
      ? s
      : { ...s, deltaIntensity: intensityFromEnvelope };

  const trajectories = new Map<string, Trajectory>();
  for (const s of scenarios)
    trajectories.set(s.id, runScenario(apply(s), horizonYears, overrides));

  const reference = trajectories.get(referenceId);
  if (!reference) throw new Error("Reference trajectory missing after run");

  const scenarioOutcomes: ScenarioOutcomes[] = scenarios.map((s) => {
    const traj = trajectories.get(s.id);
    if (!traj) throw new Error(`Trajectory missing for scenario ${s.id}`);
    return {
      scenarioId: s.id,
      scenarioName: s.name,
      isReference: s.id === referenceId,
      outcomes: computeOutcomes(
        traj,
        s.id === referenceId ? null : reference,
      ),
      series: {
        pBar: traj.times.map((t, i) => ({ t, value: aggregatePBar(traj, i) })),
        E: traj.times.map((t, i) => ({ t, value: traj.E[i] })),
        adoptionAtHorizon: buildAdoptionAtHorizon(traj),
      },
    };
  });

  return {
    referenceScenarioId: referenceId,
    horizonYears,
    contentVersion: CONTENT.version.id,
    scenarios: scenarioOutcomes,
  };
}
