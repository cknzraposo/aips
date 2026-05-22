import type { BaselineSectorPoint } from "@/lib/model/baseline";

type Props = {
  sectors: ReadonlyArray<BaselineSectorPoint>;
};

const TIER_COLOUR: Record<1 | 2 | 3, string> = {
  1: "#0f172a",
  2: "#0891b2",
  3: "#94a3b8",
};

const TIER_LABEL: Record<1 | 2 | 3, string> = {
  1: "Tier 1 — full dynamics",
  2: "Tier 2 — simplified",
  3: "Tier 3 — residual",
};

const WIDTH = 640;
const ROW_HEIGHT = 22;
const MARGIN = { top: 16, right: 56, bottom: 28, left: 168 };

export default function BaselineSectorChart({ sectors }: Props) {
  // sort descending by adoption so the headline ordering is visible.
  const sorted = [...sectors].sort((a, b) => b.A0 - a.A0);
  const innerW = WIDTH - MARGIN.left - MARGIN.right;
  const innerH = sorted.length * ROW_HEIGHT;
  const height = MARGIN.top + innerH + MARGIN.bottom;
  const barH = ROW_HEIGHT - 8;

  const xScale = (v: number) => v * innerW;

  return (
    <figure className="surface-card p-5">
      <figcaption className="mb-3">
        <p className="eyebrow">Sector adoption today</p>
        <h3 className="mt-1 font-display text-xl text-ink">
          Where each sector stands now (A_s at t=0)
        </h3>
        <p className="mt-1 max-w-3xl text-sm text-steel">
          One bar per ANZSIC Level 1 sector, ordered from highest to lowest
          current AI use. The wide spread is the fragmentation finding from the
          evidence base — different surveys point to between 32% and 87% national
          adoption depending on what is counted. Treat each value as a calibrated
          estimate, not an exact measurement.
        </p>
      </figcaption>

      <svg
        viewBox={`0 0 ${WIDTH} ${height}`}
        role="img"
        aria-label="Sector adoption today across all 19 sectors"
        className="block h-auto w-full"
      >
        <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
          {[0, 0.25, 0.5, 0.75, 1].map((v) => (
            <g key={`g-${v}`}>
              <line
                x1={xScale(v)}
                x2={xScale(v)}
                y1={0}
                y2={innerH}
                stroke="#e2e8f0"
              />
              <text
                x={xScale(v)}
                y={-4}
                textAnchor="middle"
                className="fill-steel"
                fontSize={10}
              >
                {v.toFixed(2)}
              </text>
            </g>
          ))}

          {sorted.map((s, i) => {
            const y = i * ROW_HEIGHT;
            return (
              <g key={s.sectorId} transform={`translate(0,${y})`}>
                <rect
                  x={-MARGIN.left + 4}
                  y={(ROW_HEIGHT - barH) / 2}
                  width={4}
                  height={barH}
                  fill={TIER_COLOUR[s.tier]}
                />
                <text
                  x={-MARGIN.left + 14}
                  y={ROW_HEIGHT / 2}
                  dominantBaseline="central"
                  className="fill-ink"
                  fontSize={11}
                >
                  {s.code} {s.name.length > 22 ? s.name.slice(0, 21) + "…" : s.name}
                </text>
                <rect
                  x={0}
                  y={(ROW_HEIGHT - barH) / 2}
                  width={xScale(s.A0)}
                  height={barH}
                  fill={TIER_COLOUR[s.tier]}
                  opacity={0.85}
                >
                  <title>
                    {s.name}: A₀ = {s.A0.toFixed(2)} · evidence: {s.evidenceClass} · confidence: {s.confidence}
                    {s.notes ? ` · ${s.notes}` : ""}
                  </title>
                </rect>
                <text
                  x={xScale(s.A0) + 4}
                  y={ROW_HEIGHT / 2}
                  dominantBaseline="central"
                  className="fill-steel"
                  fontSize={10}
                >
                  {s.A0.toFixed(2)}
                </text>
              </g>
            );
          })}
        </g>

        {/* tier legend */}
        <g transform={`translate(${MARGIN.left},${height - 10})`}>
          {([1, 2, 3] as const).map((t, idx) => (
            <g key={t} transform={`translate(${idx * 170},0)`}>
              <rect width={10} height={10} y={-9} fill={TIER_COLOUR[t]} />
              <text x={14} y={0} className="fill-steel" fontSize={10}>
                {TIER_LABEL[t]}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </figure>
  );
}
