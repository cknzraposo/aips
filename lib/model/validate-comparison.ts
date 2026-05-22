export type ComparisonInput = {
  selectedScenarioIds: string[];
  budgetEnvelope: number;
  horizonYears: number;
};

export type ComparisonValidation = {
  comparable: boolean;
  messages: string[];
};

/**
 * Lightweight checks on user inputs before running the engine.
 * Whole-economy, shared-envelope, and shared-horizon comparability is
 * enforced by construction in runComparison (all scenarios use the same
 * envelope and horizon, and status-quo is always run as the reference).
 */
export function validateComparison(input: ComparisonInput): ComparisonValidation {
  const messages: string[] = [];

  if (input.selectedScenarioIds.length < 1) {
    messages.push("Select at least one scenario to compare against status quo.");
  }

  if (input.budgetEnvelope <= 0) {
    messages.push("Budget envelope must be greater than zero.");
  }

  if (input.horizonYears < 1 || input.horizonYears > 20) {
    messages.push("Time horizon must be between 1 and 20 years.");
  }

  return {
    comparable: messages.length === 0,
    messages,
  };
}
