import Link from "next/link";

import BaselineSectorChart from "@/components/baseline/baseline-sector-chart";
import NationalCapacityDial from "@/components/baseline/national-capacity-dial";
import PageHeader from "@/components/layout/page-header";
import { buildBaselineSnapshot } from "@/lib/model/baseline";
import { CONTENT } from "@/lib/model/content";

const E0_COMPONENTS = [
  {
    label: "Skills & talent",
    text: "Workforce able to build, deploy, and supervise AI systems. Includes data literacy, engineering capacity, and ongoing reskilling.",
  },
  {
    label: "Digital infrastructure",
    text: "Connectivity, compute access, cloud and data platforms that AI applications depend on.",
  },
  {
    label: "Public trust & social license",
    text: "Community confidence that AI is used responsibly across services, employment, and public administration.",
  },
  {
    label: "Regulation & assurance",
    text: "Rules, guidance, and assurance pathways that let organisations adopt AI without unmanaged risk.",
  },
];

const STATE_VARIABLES = [
  {
    symbol: "A_s",
    name: "Adoption",
    text: "Share of activity in sector s where AI is in genuine use, not pilots. Visible in the chart below.",
  },
  {
    symbol: "K_s",
    name: "Absorptive capability",
    text: "How ready a sector is to adopt — skills, data maturity, processes. High capability lets adoption rise faster.",
  },
  {
    symbol: "P_s",
    name: "Realised productivity",
    text: "The productivity uplift actually delivered. Sits below the theoretical ceiling (`pbar`) and grows with adoption.",
  },
  {
    symbol: "L_s",
    name: "Labour adjustment pressure",
    text: "Strain on workers and labour markets from task displacement and reorganisation as AI spreads.",
  },
  {
    symbol: "E",
    name: "National enabling capacity",
    text: "Whole-of-nation conditions (skills, infrastructure, trust, regulation) that every sector draws on.",
  },
];

export default function BaselinePage() {
  const snap = buildBaselineSnapshot();
  const weightedPct = (snap.weightedAdoption * 100).toFixed(0);
  const minPct = (snap.spread.min.A0 * 100).toFixed(0);
  const maxPct = (snap.spread.max.A0 * 100).toFixed(0);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
      <PageHeader
        eyebrow="Baseline · Today"
        title="Where Aotearoa stands today"
        description="Before comparing policy options, see the picture each scenario is reacting to: the country's current AI enabling capacity and each sector's current adoption. Numbers are calibrated estimates with visible confidence, not measurements."
      />

      <section className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <NationalCapacityDial
          value={snap.E0}
          label={`E₀ = ${snap.E0.toFixed(2)}`}
          caption={`Composite of skills, infrastructure, trust, and regulation — mid-tier OECD position. Evidence: ${snap.E0Evidence.evidenceClass}, confidence: ${snap.E0Evidence.confidence}.`}
        />

        <div className="surface-card p-5">
          <p className="eyebrow">What this number means</p>
          <h3 className="mt-1 font-display text-xl text-ink">
            A single dial for the conditions every sector shares
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-steel">
            E is one composite score in [0,1] that bundles the four shared
            conditions below. It is the lever that supply-side policy moves
            (skills funding, infrastructure, assurance) — the same lever every
            sector draws on. At 0.38 New Zealand is in the middle band among
            comparable OECD economies.
          </p>
          <ul className="mt-4 space-y-3">
            {E0_COMPONENTS.map((c) => (
              <li key={c.label} className="rounded-md border border-ink/10 bg-white/60 p-3">
                <p className="text-sm font-semibold text-ink">{c.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-steel">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <BaselineSectorChart sectors={snap.sectors} />
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="surface-card p-5">
          <p className="eyebrow">GDP-weighted adoption today</p>
          <p className="mt-2 font-display text-3xl text-ink">{weightedPct}%</p>
          <p className="mt-2 text-xs leading-relaxed text-steel">
            Adoption averaged across the 19 sectors using each sector&apos;s share
            of GDP. This is one summary of where the economy sits, not a
            forecast or a target.
          </p>
        </div>
        <div className="surface-card p-5">
          <p className="eyebrow">Highest sector</p>
          <p className="mt-2 font-display text-2xl text-ink">
            {snap.spread.max.name}
          </p>
          <p className="mt-1 text-sm text-steel">A₀ ≈ {maxPct}%</p>
          <p className="mt-2 text-xs leading-relaxed text-steel">
            Tier {snap.spread.max.tier} · evidence: {snap.spread.max.evidenceClass} ·
            confidence: {snap.spread.max.confidence}
          </p>
        </div>
        <div className="surface-card p-5">
          <p className="eyebrow">Lowest sector</p>
          <p className="mt-2 font-display text-2xl text-ink">
            {snap.spread.min.name}
          </p>
          <p className="mt-1 text-sm text-steel">A₀ ≈ {minPct}%</p>
          <p className="mt-2 text-xs leading-relaxed text-steel">
            Tier {snap.spread.min.tier} · evidence: {snap.spread.min.evidenceClass} ·
            confidence: {snap.spread.min.confidence}
          </p>
        </div>
      </section>

      <section className="mt-8 surface-card p-6">
        <p className="eyebrow">What each indicator tracks</p>
        <h2 className="mt-1 font-display text-2xl text-ink">
          Reading the dashboard
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel">
          The sandbox tracks five quantities for each scenario. Today&apos;s
          values are the baseline; a policy scenario nudges them along over the
          horizon you choose.
        </p>
        <dl className="mt-4 grid gap-4 md:grid-cols-2">
          {STATE_VARIABLES.map((v) => (
            <div key={v.symbol} className="rounded-md border border-ink/10 bg-white/60 p-4">
              <dt className="font-display text-lg text-ink">
                {v.symbol} · {v.name}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-steel">{v.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-8 surface-card p-6">
        <p className="eyebrow">Next step</p>
        <h2 className="mt-1 font-display text-2xl text-ink">
          Adjust a policy and compare against today
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel">
          The comparison workspace always runs the <em>status-quo</em> trajectory
          alongside your selections. Status-quo carries today&apos;s values
          forward with no new policy effort, so every other scenario is shown
          as a deviation from this baseline. You can also adjust the policy
          budget envelope and time horizon.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/compare"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-brief"
          >
            Open comparison workspace →
          </Link>
          <Link
            href="/methodology"
            className="rounded-full border border-ink/25 bg-white/60 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
          >
            Read methodology summary
          </Link>
        </div>
        <p className="mt-4 text-xs text-steel">
          Content version {CONTENT.version.id} · published{" "}
          {CONTENT.version.publishedAt.slice(0, 10)}
        </p>
      </section>
    </main>
  );
}
