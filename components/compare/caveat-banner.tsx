import { CONTENT } from "@/lib/model/content";

/**
 * Mandatory project-wide caveat strip plus content version stamp.
 * Reinforces that outputs are comparative signals under uncertainty, not forecasts.
 */
export default function CaveatBanner() {
  const { version } = CONTENT;
  return (
    <aside
      role="note"
      className="mt-6 rounded-2xl border border-accent/40 bg-accent/10 p-4 text-sm text-ink"
    >
      <p className="font-medium">
        Comparative signals only. Not a forecast, not a policy recommendation,
        not a definitive ranking.
      </p>
      <p className="mt-1 text-xs text-steel">
        Whole-economy coverage across all 19 ANZSIC Level 1 sectors. Many
        parameters are calibrated against international benchmarks where NZ
        evidence is sparse - see Methodology and the v0.3 calibration tables
        for evidence class and confidence on every value.
      </p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-steel">
        Content version {version.id}
      </p>
    </aside>
  );
}
