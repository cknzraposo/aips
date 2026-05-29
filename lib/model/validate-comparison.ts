import type { RunOverrides } from "./engine";

/** Keys of the rate-multiplier override block, used for typed iteration. */
type RateMultiplierKey = keyof NonNullable<RunOverrides["rateMultipliers"]>;
const RATE_MULTIPLIER_KEYS: readonly RateMultiplierKey[] = [
  "adoption",
  "capability",
  "productivity",
  "labour",
];

export type ComparisonInput = {
  selectedScenarioIds: string[];
  budgetEnvelope: number;
  horizonYears: number;
  overrides?: RunOverrides;
};

export type ComparisonValidation = {
  comparable: boolean;
  messages: string[];
};

/** Inclusive ranges enforced for advanced controls. */
export const OVERRIDE_BOUNDS = {
  leverDurationYears: { min: 1, max: 20 },
  demandSupplySplit: { min: 0, max: 1 },
  rateMultiplier: { min: 0.5, max: 1.5 },
} as const;

/**
 * Lightweight checks on user inputs before running the engine.
 * Whole-economy, shared-envelope, and shared-horizon comparability is
 * enforced by construction in runComparison (all scenarios use the same
 * envelope, horizon, and overrides, and status-quo is always run as the
 * reference).
 */
export function validateComparison(input: ComparisonInput): ComparisonValidation {
  const messages: string[] = [];

  if (input.selectedScenarioIds.length < 1) {
    messages.push("Pick at least one scenario to compare against status quo.");
  }

  if (input.budgetEnvelope <= 0) {
    messages.push("Set a budget envelope above zero before running.");
  }

  if (input.horizonYears < 1 || input.horizonYears > 20) {
    messages.push("Time horizon must be between 1 and 20 years.");
  }

  const o = input.overrides;
  if (o) {
    const dur = o.leverDurationYears;
    if (
      dur !== undefined &&
      (dur < OVERRIDE_BOUNDS.leverDurationYears.min ||
        dur > OVERRIDE_BOUNDS.leverDurationYears.max)
    ) {
      messages.push("Lever duration must be between 1 and 20 years.");
    }

    const split = o.demandSupplySplit;
    if (split !== undefined && (split < 0 || split > 1)) {
      messages.push("Demand vs supply split must be between 0 and 100 percent.");
    }

    const m = o.rateMultipliers;
    const labels: Record<RateMultiplierKey, string> = {
      adoption: "Adoption speed",
      capability: "Capability building",
      productivity: "Productivity sensitivity",
      labour: "Labour pressure sensitivity",
    };
    if (m) {
      for (const key of RATE_MULTIPLIER_KEYS) {
        const v = m[key];
        if (v === undefined) continue;
        if (
          v < OVERRIDE_BOUNDS.rateMultiplier.min ||
          v > OVERRIDE_BOUNDS.rateMultiplier.max
        ) {
          messages.push(
            `${labels[key]} multiplier must be between 0.5 and 1.5 times the calibrated value.`,
          );
        }
      }
    }
  }

  return {
    comparable: messages.length === 0,
    messages,
  };
}
