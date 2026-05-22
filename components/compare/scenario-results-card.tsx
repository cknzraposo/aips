import type {
  Direction,
  Magnitude,
  ScenarioOutcomes,
} from "@/lib/model/compare";

type Props = {
  result: ScenarioOutcomes;
};

const MAGNITUDE_LABEL: Record<Magnitude, string> = {
  negligible: "Negligible",
  small: "Small",
  moderate: "Moderate",
  large: "Large",
};

function describeDirection(
  direction: Direction,
  higherIsBetter: boolean,
): { label: string; tone: "positive" | "negative" | "neutral" } {
  if (direction === "flat") return { label: "No material change", tone: "neutral" };
  const isImprovement =
    (direction === "up" && higherIsBetter) ||
    (direction === "down" && !higherIsBetter);
  return {
    label: direction === "up" ? "Higher than status quo" : "Lower than status quo",
    tone: isImprovement ? "positive" : "negative",
  };
}

const TONE_CLASS: Record<"positive" | "negative" | "neutral", string> = {
  positive: "border-datum/40 bg-datum/10",
  negative: "border-accent/40 bg-accent/10",
  neutral: "border-ink/15 bg-white",
};

export default function ScenarioResultsCard({ result }: Props) {
  return (
    <article className="surface-card p-5">
      <header className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl text-ink">{result.scenarioName}</h3>
        {result.isReference ? (
          <span className="text-[11px] uppercase tracking-[0.16em] text-steel">
            Reference run
          </span>
        ) : null}
      </header>

      <div className="mt-4 grid gap-3">
        {result.outcomes.map((o) => {
          const dir = describeDirection(o.direction, o.higherIsBetter);
          const magnitude =
            result.isReference || o.direction === "flat"
              ? null
              : MAGNITUDE_LABEL[o.magnitude];
          return (
            <div
              key={o.dimensionId}
              className={`rounded-xl border p-3 ${TONE_CLASS[dir.tone]}`}
              title={`Raw: ${o.rawValue.toFixed(4)} (reference ${o.rawReference.toFixed(4)}; delta ${o.delta.toFixed(4)} ${o.unit})`}
            >
              <p className="text-sm font-medium text-ink">{o.dimensionLabel}</p>
              <p className="mt-1 text-xs text-steel">
                {result.isReference ? (
                  <>Baseline reading: {o.rawValue.toFixed(3)} {o.unit}</>
                ) : (
                  <>
                    {dir.label}
                    {magnitude ? ` - ${magnitude} difference` : ""}
                  </>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </article>
  );
}
