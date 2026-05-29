"use client";

import ChartIntro from "@/components/charts/chart-intro";
import ChartLegend from "@/components/ui/chart-legend";
import type { ScenarioOutcomes } from "@/lib/model/compare";
import {
  AXIS_COLOUR,
  GRIDLINE_COLOUR,
  MUTED_COLOUR,
  SCENARIO_NON_REFERENCE,
  TIER_COLOURS,
} from "@/lib/ui/theme";

type Props = {
  scenarios: ReadonlyArray<ScenarioOutcomes>;
  horizonYears: number;
};

const WIDTH = 560;
const ROW_HEIGHT = 18;
const MARGIN = { top: 16, right: 18, bottom: 24, left: 96 };

export default function SectorAdoptionChart({ scenarios, horizonYears }: Props) {
  if (scenarios.length === 0) return null;
  // Reference order from the first scenario (all have the same sector order).
  const sectors = scenarios[0].series.adoptionAtHorizon;
  const innerW = WIDTH - MARGIN.left - MARGIN.right;
  const innerH = sectors.length * ROW_HEIGHT;
  const height = MARGIN.top + innerH + MARGIN.bottom;
  const barH = ROW_HEIGHT - 6;
  const barGroupH = barH / Math.max(scenarios.length, 1);

  const xScale = (v: number) => v * innerW; // domain [0,1]

  return (
    <figure className="surface-card p-5">
      <ChartIntro
        eyebrow="Sector adoption at the end of the run"
        title={`Where each sector lands after ${horizonYears} year${horizonYears === 1 ? "" : "s"}`}
        description="One row per ANZSIC Level 1 sector. The status-quo run is shown alongside the scenarios you selected so you can see how each option pulls each sector. Colour band on the left marks the tier."
        symbol="A_s at t = horizon"
        explainerHref="/how-it-works#five-things"
      />

      <svg
        viewBox={`0 0 ${WIDTH} ${height}`}
        role="img"
        aria-label={`Adoption per sector at year ${horizonYears} for ${scenarios
          .map((s) => s.scenarioName)
          .join(", ")}`}
        className="block h-auto w-full"
      >
        <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
          {/* vertical gridlines */}
          {[0, 0.25, 0.5, 0.75, 1].map((v) => (
            <g key={`g-${v}`}>
              <line
                x1={xScale(v)}
                x2={xScale(v)}
                y1={0}
                y2={innerH}
                stroke={GRIDLINE_COLOUR}
                strokeWidth={1}
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

          {sectors.map((sector, rowIdx) => {
            const y = rowIdx * ROW_HEIGHT;
            return (
              <g key={sector.sectorId} transform={`translate(0,${y})`}>
                {/* tier swatch */}
                <rect
                  x={-MARGIN.left + 4}
                  y={(ROW_HEIGHT - barH) / 2}
                  width={4}
                  height={barH}
                  fill={TIER_COLOURS[sector.tier]}
                />
                {/* sector label */}
                <text
                  x={-MARGIN.left + 12}
                  y={ROW_HEIGHT / 2}
                  dominantBaseline="central"
                  className="fill-ink"
                  fontSize={10}
                >
                  {sector.code} {sector.name.length > 18 ? sector.name.slice(0, 17) + "..." : sector.name}
                </text>

                {/* one bar per scenario, stacked vertically inside the row */}
                {scenarios.map((s, sIdx) => {
                  const value = s.series.adoptionAtHorizon[rowIdx].A;
                  const colour =
                    sIdx === 0 || s.isReference
                      ? MUTED_COLOUR
                      : SCENARIO_NON_REFERENCE[
                          (sIdx - 1) % SCENARIO_NON_REFERENCE.length
                        ];
                  return (
                    <rect
                      key={`${s.scenarioId}-${sector.sectorId}`}
                      x={0}
                      y={(ROW_HEIGHT - barH) / 2 + sIdx * barGroupH}
                      width={xScale(value)}
                      height={Math.max(barGroupH - 0.5, 1)}
                      fill={colour}
                      opacity={s.isReference ? 0.5 : 0.9}
                    >
                      <title>{`${s.scenarioName}: A = ${value.toFixed(3)}`}</title>
                    </rect>
                  );
                })}
              </g>
            );
          })}

          {/* baseline axis */}
          <line x1={0} x2={0} y1={0} y2={innerH} stroke={AXIS_COLOUR} strokeWidth={1.2} />
        </g>
      </svg>

      <ChartLegend
        items={[
          { id: "t1", colour: TIER_COLOURS[1], label: "Tier 1 (full state)" },
          { id: "t2", colour: TIER_COLOURS[2], label: "Tier 2 (reduced)" },
          { id: "t3", colour: TIER_COLOURS[3], label: "Tier 3 (adoption only)" },
        ]}
      />
    </figure>
  );
}
