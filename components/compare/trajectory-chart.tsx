"use client";

import ChartIntro from "@/components/charts/chart-intro";
import type { ScenarioOutcomes, SeriesPoint } from "@/lib/model/compare";

type SeriesSelector = "pBar" | "E";

type Props = {
  scenarios: ReadonlyArray<ScenarioOutcomes>;
  series: SeriesSelector;
  title: string;
  subtitle: string;
  yLabel: string;
  symbol?: string;
  explainerHref?: string;
};

const PALETTE = [
  "#0f172a", // ink
  "#0891b2", // datum
  "#ea580c", // accent
  "#7c3aed",
  "#16a34a",
];

const WIDTH = 560;
const HEIGHT = 240;
const MARGIN = { top: 12, right: 18, bottom: 32, left: 40 };

function pickPoints(s: ScenarioOutcomes, which: SeriesSelector): SeriesPoint[] {
  return which === "pBar" ? s.series.pBar : s.series.E;
}

export default function TrajectoryChart({
  scenarios,
  series,
  title,
  subtitle,
  yLabel,
  symbol,
  explainerHref,
}: Props) {
  if (scenarios.length === 0) return null;

  const allPoints = scenarios.flatMap((s) => pickPoints(s, series));
  const tMax = Math.max(...allPoints.map((p) => p.t), 1);
  const rawMax = Math.max(...allPoints.map((p) => p.value), 0.0001);
  const yMax = Math.min(1, Math.ceil(rawMax * 10) / 10 || 0.1);
  const yMin = 0;

  const innerW = WIDTH - MARGIN.left - MARGIN.right;
  const innerH = HEIGHT - MARGIN.top - MARGIN.bottom;

  const xScale = (t: number) => (t / tMax) * innerW;
  const yScale = (v: number) => innerH - ((v - yMin) / (yMax - yMin)) * innerH;

  // y-axis ticks: 0, 0.25*max, 0.5*max, 0.75*max, max
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((f) => yMin + f * (yMax - yMin));
  // x-axis ticks at integer years.
  const xTicks: number[] = [];
  for (let y = 0; y <= Math.floor(tMax); y++) xTicks.push(y);

  const pathFor = (pts: SeriesPoint[]) =>
    pts
      .map((p, i) => `${i === 0 ? "M" : "L"}${xScale(p.t).toFixed(2)},${yScale(p.value).toFixed(2)}`)
      .join(" ");

  return (
    <figure className="surface-card p-5">
      <ChartIntro
        title={title}
        description={subtitle}
        symbol={symbol}
        explainerHref={explainerHref}
      />

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={`${title} - line chart across selected scenarios`}
        className="block h-auto w-full"
      >
        <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
          {/* y gridlines and labels */}
          {yTicks.map((v) => (
            <g key={`y-${v}`}>
              <line
                x1={0}
                x2={innerW}
                y1={yScale(v)}
                y2={yScale(v)}
                stroke="#e2e8f0"
                strokeWidth={1}
              />
              <text
                x={-6}
                y={yScale(v)}
                textAnchor="end"
                dominantBaseline="central"
                className="fill-steel"
                fontSize={10}
              >
                {v.toFixed(2)}
              </text>
            </g>
          ))}
          {/* x ticks */}
          {xTicks.map((t) => (
            <g key={`x-${t}`}>
              <line
                x1={xScale(t)}
                x2={xScale(t)}
                y1={innerH}
                y2={innerH + 4}
                stroke="#94a3b8"
                strokeWidth={1}
              />
              <text
                x={xScale(t)}
                y={innerH + 16}
                textAnchor="middle"
                className="fill-steel"
                fontSize={10}
              >
                {t}
              </text>
            </g>
          ))}
          {/* axes */}
          <line x1={0} x2={innerW} y1={innerH} y2={innerH} stroke="#0f172a" strokeWidth={1.2} />
          <line x1={0} x2={0} y1={0} y2={innerH} stroke="#0f172a" strokeWidth={1.2} />
          {/* axis labels */}
          <text
            x={innerW / 2}
            y={innerH + 28}
            textAnchor="middle"
            className="fill-steel"
            fontSize={11}
          >
            Years from t = 0
          </text>
          <text
            transform={`translate(-30,${innerH / 2}) rotate(-90)`}
            textAnchor="middle"
            className="fill-steel"
            fontSize={11}
          >
            {yLabel}
          </text>

          {/* series */}
          {scenarios.map((s, i) => {
            const pts = pickPoints(s, series);
            const colour = PALETTE[i % PALETTE.length];
            return (
              <g key={s.scenarioId}>
                <path
                  d={pathFor(pts)}
                  fill="none"
                  stroke={colour}
                  strokeWidth={s.isReference ? 2.4 : 1.8}
                  strokeDasharray={s.isReference ? "4 3" : undefined}
                />
                {pts.map((p) => (
                  <circle
                    key={`${s.scenarioId}-${p.t}`}
                    cx={xScale(p.t)}
                    cy={yScale(p.value)}
                    r={2.2}
                    fill={colour}
                  />
                ))}
              </g>
            );
          })}
        </g>
      </svg>

      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-steel">
        {scenarios.map((s, i) => (
          <li key={s.scenarioId} className="flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block h-0.5 w-5"
              style={{
                backgroundColor: PALETTE[i % PALETTE.length],
                borderTop: s.isReference ? `2px dashed ${PALETTE[i % PALETTE.length]}` : undefined,
                height: 0,
              }}
            />
            <span>
              {s.scenarioName}
              {s.isReference ? " (reference)" : ""}
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
