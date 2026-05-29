// Shared visual constants for charts and legends.
// Centralised here so tier colours, scenario palette, and labels stay
// consistent across the baseline and compare visualisations.

/** Colour per sector tier (1 = full dynamics, 2 = simplified, 3 = residual). */
export const TIER_COLOURS: Record<1 | 2 | 3, string> = {
  1: "#0f172a",
  2: "#0891b2",
  3: "#94a3b8",
};

/** Long-form tier labels for legends. */
export const TIER_LABELS: Record<1 | 2 | 3, string> = {
  1: "Tier 1 — full dynamics",
  2: "Tier 2 — simplified",
  3: "Tier 3 — residual",
};

/**
 * Scenario line/bar palette. Index 0 (ink) is used for the first/reference
 * series; subsequent entries cycle for the selected scenarios.
 */
export const SCENARIO_PALETTE = [
  "#0f172a", // ink
  "#0891b2", // datum
  "#ea580c", // accent
  "#7c3aed",
  "#16a34a",
] as const;

/** Non-reference scenario colours (the palette without the leading ink). */
export const SCENARIO_NON_REFERENCE = SCENARIO_PALETTE.slice(1);

/** Muted grey used for the status-quo / reference series. */
export const MUTED_COLOUR = "#94a3b8";

/** Gridline colour used by SVG charts. */
export const GRIDLINE_COLOUR = "#e2e8f0";

/** Axis line colour used by SVG charts. */
export const AXIS_COLOUR = "#0f172a";
