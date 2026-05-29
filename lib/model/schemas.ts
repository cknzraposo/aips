import { z } from "zod";

export const EvidenceClass = z.enum([
  "observed",
  "derived",
  "expert",
  "placeholder",
  "assumed",
]);
export type EvidenceClass = z.infer<typeof EvidenceClass>;

export const Confidence = z.enum(["high", "medium", "low"]);
export type Confidence = z.infer<typeof Confidence>;

export const EvidenceRecord = z.object({
  evidenceClass: EvidenceClass,
  confidence: Confidence,
  source: z.string().optional(),
  notes: z.string().optional(),
});
export type EvidenceRecord = z.infer<typeof EvidenceRecord>;

// Rate constants are bounded gain-loss coefficients and stocks in [0, 10].
// The generous upper bound catches calibration typos (e.g. 30 instead of 0.30)
// while leaving headroom above the current v0.3 values (all <= 1).
const Rate = z
  .object({ value: z.number().nonnegative().max(10) })
  .and(EvidenceRecord);

export const GlobalParams = z.object({
  E0: Rate,
  rhoE: Rate,
  deltaE: Rate,
  GEbase: Rate,
  tier1Rates: z.object({
    rhoK: Rate,
    rhoA: Rate,
    rhoP: Rate,
    rhoL: Rate,
  }),
  tier2Rates: z.object({ rhoA: Rate, rhoP: Rate }),
  tier3Rates: z.object({ rhoA: Rate }),
});
export type GlobalParams = z.infer<typeof GlobalParams>;

export const Sector = z.object({
  id: z.string().min(1),
  code: z.string().regex(/^S\d{2}$/),
  name: z.string().min(1),
  anzsic: z.string().min(1),
  tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  gdpWeight: z.number().min(0).max(1),
  weightEvidence: EvidenceRecord,
});
export type Sector = z.infer<typeof Sector>;

export const SectorsFile = z.object({ sectors: z.array(Sector).length(19) });

const Tier1ParamRow = z.object({
  K0: z.number().min(0).max(1),
  A0: z.number().min(0).max(1),
  P0: z.number().min(0).max(1),
  L0: z.number().min(0).max(1),
  alpha: z.number().nonnegative(),
  kappa: z.number().nonnegative(),
  lambda: z.number().nonnegative(),
  phi: z.number().min(0).max(1),
  eta: z.number().nonnegative(),
  mu: z.number().nonnegative(),
  pbar: z.number().min(0).max(1),
  evidenceClass: EvidenceClass,
  confidence: Confidence,
  notes: z.string().optional(),
});
export type Tier1ParamRow = z.infer<typeof Tier1ParamRow>;

const Tier2ParamRow = z.object({
  A0: z.number().min(0).max(1),
  P0: z.number().min(0).max(1),
  beta: z.number().min(0).max(1),
  kappa: z.number().nonnegative(),
  phi: z.number().min(0).max(1),
  evidenceClass: EvidenceClass,
  confidence: Confidence,
  notes: z.string().optional(),
});
export type Tier2ParamRow = z.infer<typeof Tier2ParamRow>;

const Tier3ParamRow = z.object({
  A0: z.number().min(0).max(1),
  gamma: z.number().min(0).max(1),
  psi: z.number().min(0).max(1),
  evidenceClass: EvidenceClass,
  confidence: Confidence,
  notes: z.string().optional(),
});
export type Tier3ParamRow = z.infer<typeof Tier3ParamRow>;

export const ParametersFile = z.object({
  tier1: z.record(z.string(), Tier1ParamRow),
  tier2: z.record(z.string(), Tier2ParamRow),
  tier3: z.record(z.string(), Tier3ParamRow),
});
export type ParametersFile = z.infer<typeof ParametersFile>;

export const ScenarioArchetype = z.enum([
  "baseline",
  "aggregate",
  "targeted-demand",
  "targeted-supply",
  "mixed",
]);
export type ScenarioArchetype = z.infer<typeof ScenarioArchetype>;

export const PolicyScenario = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  archetype: ScenarioArchetype,
  description: z.string().min(1),
  targeting: z.enum(["none", "uniform", "adoption-gap", "enabling-stock", "mixed"]),
  deltaIntensity: z.number().min(0).max(1),
  leverDurationYears: z.number().int().min(0).max(20),
  assumptions: z.array(z.string()).min(1),
  caveats: z.array(z.string()).min(1),
});
export type PolicyScenario = z.infer<typeof PolicyScenario>;

export const ScenariosFile = z.object({
  scenarios: z.array(PolicyScenario).min(2),
});

export const PublishedContentVersion = z.object({
  id: z.string().min(1),
  sourceRevision: z.string().min(1),
  publishedAt: z.string().min(1),
  summary: z.string().min(1),
  includes: z.array(z.string()).min(1),
});
export type PublishedContentVersion = z.infer<typeof PublishedContentVersion>;
