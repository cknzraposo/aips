"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import BudgetHorizonControls from "@/components/compare/budget-horizon-controls";
import CaveatBanner from "@/components/compare/caveat-banner";
import ComparabilityWarning from "@/components/compare/comparability-warning";
import ScenarioResultsCard from "@/components/compare/scenario-results-card";
import ScenarioSelector, {
  type ScenarioOption,
} from "@/components/compare/scenario-selector";
import SectorAdoptionChart from "@/components/compare/sector-adoption-chart";
import TrajectoryChart from "@/components/compare/trajectory-chart";
import PageHeader from "@/components/layout/page-header";
import { runComparison } from "@/lib/model/compare";
import { CONTENT } from "@/lib/model/content";
import { validateComparison } from "@/lib/model/validate-comparison";

const REFERENCE_ID = "status-quo";

const SCENARIO_OPTIONS: readonly ScenarioOption[] = CONTENT.scenarios
  .filter((s) => s.id !== REFERENCE_ID)
  .map((s) => ({ id: s.id, name: s.name, description: s.description }));

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "aggregate",
    "targeted-demand",
  ]);
  const [budgetEnvelope, setBudgetEnvelope] = useState(400);
  const [horizonYears, setHorizonYears] = useState(10);

  const validation = validateComparison({
    selectedScenarioIds: selectedIds,
    budgetEnvelope,
    horizonYears,
  });

  const comparison = useMemo(() => {
    if (!validation.comparable) return null;
    return runComparison(selectedIds, horizonYears, budgetEnvelope);
  }, [selectedIds, horizonYears, budgetEnvelope, validation.comparable]);

  const toggleScenario = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
      <PageHeader
        eyebrow="Comparison workspace"
        title="Policy scenario comparison"
        description="Run policy archetypes against the status-quo reference across all 19 sectors. Outputs are comparative signals under uncertainty, not forecasts."
      />

      <p className="mt-3 text-sm text-steel">
        New here?{" "}
        <Link href="/baseline" className="font-medium text-ink underline underline-offset-4">
          See today&apos;s baseline first →
        </Link>{" "}
        Every scenario below is shown alongside the status-quo run that carries
        today&apos;s values forward unchanged.
      </p>

      <CaveatBanner />

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <ScenarioSelector
          options={SCENARIO_OPTIONS}
          selected={selectedIds}
          onToggle={toggleScenario}
        />
        <BudgetHorizonControls
          budgetEnvelope={budgetEnvelope}
          horizonYears={horizonYears}
          onBudgetChange={setBudgetEnvelope}
          onHorizonChange={setHorizonYears}
        />
      </section>

      <section className="mt-6">
        <ComparabilityWarning messages={validation.messages} />
      </section>

      {comparison ? (
        <>
          <section className="mt-6 grid gap-4 lg:grid-cols-2">
            <TrajectoryChart
              scenarios={comparison.scenarios}
              series="pBar"
              title="Whole-economy productivity over time"
              subtitle="GDP-weighted P-bar(t) across all 19 sectors. Dashed line is the status-quo reference."
              yLabel="P-bar (0 to 1)"
            />
            <TrajectoryChart
              scenarios={comparison.scenarios}
              series="E"
              title="National enabling capacity over time"
              subtitle="Shared enabling stock E(t). The supply-side scenario lifts E directly; demand-side does not."
              yLabel="E (0 to 1)"
            />
          </section>

          <section className="mt-6">
            <SectorAdoptionChart
              scenarios={comparison.scenarios}
              horizonYears={comparison.horizonYears}
            />
          </section>

          <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {comparison.scenarios.map((r) => (
              <ScenarioResultsCard key={r.scenarioId} result={r} />
            ))}
          </section>
        </>
      ) : null}

      <section className="surface-card mt-6 p-6 text-sm text-steel">
        <h2 className="font-display text-2xl text-ink">How to read these cards</h2>
        <ul className="mt-3 grid list-disc gap-2 pl-5 md:grid-cols-2">
          <li>
            Status quo is always run as the reference; every other card shows
            qualitative direction and magnitude relative to it.
          </li>
          <li>
            All selected scenarios share the same budget envelope and horizon,
            so the comparison is like-for-like by construction.
          </li>
          <li>
            Hover any outcome tile to see the raw value, the reference value,
            and the absolute delta.
          </li>
          <li>
            Confidence on most structural parameters is low - see the v0.3
            calibration tables and the Evidence page for class and source.
          </li>
        </ul>
      </section>
    </main>
  );
}
