"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, useTransition } from "react";

import CaveatBanner from "@/components/compare/caveat-banner";
import ComparabilityWarning from "@/components/compare/comparability-warning";
import PolicyLabPanel, {
  CALIBRATED_CONFIG,
  type PolicyLabConfig,
  type ScenarioChip,
} from "@/components/compare/policy-lab-panel";
import ScenarioResultsCard from "@/components/compare/scenario-results-card";
import SectorAdoptionChart from "@/components/compare/sector-adoption-chart";
import TrajectoryChart from "@/components/compare/trajectory-chart";
import PageHeader from "@/components/layout/page-header";
import { runComparison } from "@/lib/model/compare";
import { CONTENT } from "@/lib/model/content";
import { validateComparison } from "@/lib/model/validate-comparison";

const REFERENCE_ID = "status-quo";

const SCENARIO_CHIPS: readonly ScenarioChip[] = CONTENT.scenarios
  .filter((s) => s.id !== REFERENCE_ID)
  .map((s) => ({ id: s.id, name: s.name, description: s.description }));

const SCENARIO_IDS = new Set(SCENARIO_CHIPS.map((s) => s.id));

/** Encode the full config into a URL query string. */
function encodeConfig(c: PolicyLabConfig): string {
  const params = new URLSearchParams();
  params.set("s", c.selectedScenarioIds.join(","));
  params.set("b", String(c.budgetEnvelope));
  params.set("h", String(c.horizonYears));
  params.set("d", String(c.leverDurationYears));
  params.set("sp", c.demandSupplySplit.toFixed(2));
  params.set("ma", c.multipliers.adoption.toFixed(2));
  params.set("mc", c.multipliers.capability.toFixed(2));
  params.set("mp", c.multipliers.productivity.toFixed(2));
  params.set("ml", c.multipliers.labour.toFixed(2));
  return params.toString();
}

/** Decode a URL search-string back into a PolicyLabConfig, falling back to calibration. */
function decodeConfig(search: string): PolicyLabConfig {
  const params = new URLSearchParams(search);
  const base = CALIBRATED_CONFIG;
  const num = (key: string, fallback: number): number => {
    const raw = params.get(key);
    if (raw === null) return fallback;
    const v = Number(raw);
    return Number.isFinite(v) ? v : fallback;
  };
  const rawIds = params.get("s");
  const ids = rawIds
    ? rawIds
        .split(",")
        .map((v) => v.trim())
        .filter((v) => SCENARIO_IDS.has(v))
    : base.selectedScenarioIds;
  return {
    selectedScenarioIds: ids.length > 0 ? ids : base.selectedScenarioIds,
    budgetEnvelope: num("b", base.budgetEnvelope),
    horizonYears: num("h", base.horizonYears),
    leverDurationYears: num("d", base.leverDurationYears),
    demandSupplySplit: num("sp", base.demandSupplySplit),
    multipliers: {
      adoption: num("ma", base.multipliers.adoption),
      capability: num("mc", base.multipliers.capability),
      productivity: num("mp", base.multipliers.productivity),
      labour: num("ml", base.multipliers.labour),
    },
  };
}

function configToOverrides(c: PolicyLabConfig) {
  return {
    leverDurationYears: c.leverDurationYears,
    demandSupplySplit: c.demandSupplySplit,
    rateMultipliers: { ...c.multipliers },
  };
}

export default function ComparePage() {
  const [staged, setStaged] = useState<PolicyLabConfig>(CALIBRATED_CONFIG);
  const [applied, setApplied] = useState<PolicyLabConfig>(CALIBRATED_CONFIG);
  const [shareLabel, setShareLabel] = useState<string>("Copy share link");
  const [, startTransition] = useTransition();

  // Hydrate from URL on mount. This is the textbook "read from an external
  // system on mount" case the React docs allow effects for - the URL is the
  // external store and we sync it into local state exactly once.
  useEffect(() => {
    if (typeof window === "undefined" || !window.location.search) return;
    const fromUrl = decodeConfig(window.location.search);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStaged(fromUrl);
    setApplied(fromUrl);
  }, []);

  const validation = validateComparison({
    selectedScenarioIds: applied.selectedScenarioIds,
    budgetEnvelope: applied.budgetEnvelope,
    horizonYears: applied.horizonYears,
    overrides: configToOverrides(applied),
  });

  const comparison = useMemo(() => {
    if (!validation.comparable) return null;
    return runComparison(
      applied.selectedScenarioIds,
      applied.horizonYears,
      applied.budgetEnvelope,
      configToOverrides(applied),
    );
  }, [applied, validation.comparable]);

  const handleRun = () => {
    startTransition(() => {
      setApplied(staged);
      if (typeof window !== "undefined") {
        const next = `${window.location.pathname}?${encodeConfig(staged)}`;
        window.history.replaceState(null, "", next);
      }
    });
  };

  const handleReset = () => {
    setStaged(CALIBRATED_CONFIG);
    startTransition(() => {
      setApplied(CALIBRATED_CONFIG);
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", window.location.pathname);
      }
    });
  };

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}${window.location.pathname}?${encodeConfig(applied)}`;
    try {
      await navigator.clipboard.writeText(url);
      setShareLabel("Link copied");
    } catch {
      setShareLabel("Copy failed - select URL bar");
    }
    setTimeout(() => setShareLabel("Copy share link"), 2000);
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
        <Link href="/how-it-works" className="font-medium text-ink underline underline-offset-4">
          ← Read the plain-English explainer
        </Link>{" "}
        or{" "}
        <Link href="/baseline" className="font-medium text-ink underline underline-offset-4">
          see today&apos;s baseline first →
        </Link>
        . Every scenario below is shown alongside the status-quo run that carries
        today&apos;s values forward unchanged.
      </p>

      <CaveatBanner />

      <section className="mt-6">
        <PolicyLabPanel
          scenarios={SCENARIO_CHIPS}
          staged={staged}
          applied={applied}
          onChange={setStaged}
          onRun={handleRun}
          onReset={handleReset}
          onShare={handleShare}
          shareLabel={shareLabel}
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
              subtitle="Productivity averaged across all 19 sectors using each sector's share of GDP. The dashed line is the status-quo reference - carrying today's values forward unchanged."
              yLabel="P-bar (0 to 1)"
              symbol="P-bar(t), GDP-weighted"
              explainerHref="/how-it-works#equations"
            />
            <TrajectoryChart
              scenarios={comparison.scenarios}
              series="E"
              title="National enabling capacity over time"
              subtitle="The shared conditions every sector draws on - skills, infrastructure, trust, regulation. Supply-side scenarios lift this directly; demand-side scenarios do not."
              yLabel="E (0 to 1)"
              symbol="E(t)"
              explainerHref="/how-it-works#equations"
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
              <ScenarioResultsCard
                key={r.scenarioId}
                result={r}
                horizonYears={comparison.horizonYears}
              />
            ))}
          </section>
        </>
      ) : null}

      <section className="surface-card mt-6 p-6 text-sm text-steel">
        <h2 className="font-display text-2xl text-ink">How to read these cards</h2>
        <ul className="mt-3 grid list-disc gap-2 pl-5 md:grid-cols-2">
          <li>
            Status quo is always run as the reference; every other card shows
            qualitative direction and magnitude relative to it at the chosen
            horizon.
          </li>
          <li>
            All selected scenarios share the same budget envelope, horizon, and
            uncertainty dials, so the comparison is like-for-like by construction.
          </li>
          <li>
            Hover any outcome tile to see the raw value, the reference value,
            and the absolute delta.
          </li>
          <li>
            Moving the uncertainty dials changes the model&apos;s assumptions,
            not its forecasts. Use them to stress-test, not to predict.
          </li>
        </ul>
      </section>
    </main>
  );
}
