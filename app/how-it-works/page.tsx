import Link from "next/link";

import ConceptCard from "@/components/explainer/concept-card";
import EquationCard from "@/components/explainer/equation-card";
import PageHeader from "@/components/layout/page-header";
import { CONTENT } from "@/lib/model/content";

const TLDR = [
  "It is a comparison tool, not a forecast. You set policy levers; it shows how they trade off.",
  "It covers every part of the New Zealand economy, all 19 ANZSIC sectors, not just the big ones.",
  "Every number carries its evidence label, so you can see what is measured and what is assumed.",
];

const WHY_POINTS = [
  {
    title: "The question",
    text: "What mix of AI policy gives the best whole-of-economy outcome for Aotearoa over the next decade?",
  },
  {
    title: "The evidence gap",
    text: "Different surveys put national AI use anywhere from 32% to 87%. The disagreement itself is the finding.",
  },
  {
    title: "The need",
    text: "A transparent way to weigh tradeoffs across productivity, adoption spread, jobs pressure, and shared capacity.",
  },
];

const STATE_VARIABLES = [
  {
    symbol: "E",
    name: "National enabling capacity",
    story:
      "The whole-of-nation conditions that every sector draws on: skills, infrastructure, public trust, and regulation.",
    analogy:
      "the tide. It lifts every boat in every harbour at the same time, but it takes years to come in and years to go out.",
    badge: "shared",
  },
  {
    symbol: "K",
    name: "Absorptive capability",
    story:
      "How ready a sector is to actually use AI: in-house skills, data maturity, processes that can absorb new tools.",
    analogy:
      "the on-ramp onto a motorway. If the on-ramp is narrow or closed, cars cannot get on no matter how many drivers want to.",
    badge: "per sector",
  },
  {
    symbol: "A",
    name: "AI adoption",
    story: "How much AI is actually in genuine operational use in a sector, not just in pilots or media releases.",
    analogy:
      "cars actually on the motorway. Adoption needs an open on-ramp; without it, cars idle and back up.",
    badge: "per sector",
  },
  {
    symbol: "P",
    name: "Realised productivity",
    story:
      "The productivity gain genuinely delivered. Sits below the theoretical ceiling and grows only as adoption matures.",
    analogy:
      "how fast traffic actually moves. More cars using the motorway well makes everyone's trip faster.",
    badge: "per sector",
  },
  {
    symbol: "L",
    name: "Labour adjustment pressure",
    story:
      "Strain on workers and labour markets from tasks being reorganised, automated, or augmented as AI spreads.",
    analogy:
      "stress on drivers and depots when traffic rises. More movement means more retraining, rotation, and reorganisation.",
    badge: "per sector",
  },
];

const TIER_RIBBON = [
  {
    label: "Tier 1 - 9 sectors",
    text: "Full picture: capability, adoption, productivity, and labour pressure all tracked. Covers about 61% of GDP.",
    analogy: "state highways - full signage, full detail.",
  },
  {
    label: "Tier 2 - 6 sectors",
    text: "Simpler picture: adoption and productivity, with labour pressure reported alongside.",
    analogy: "regional roads - drawn on the map, fewer markings.",
  },
  {
    label: "Tier 3 - 4 sectors",
    text: "Minimum picture: adoption only. Included so the whole economy adds up honestly.",
    analogy: "back roads - named so the country adds up, not the focus.",
  },
];

const EQUATIONS = [
  {
    name: "National enabling capacity",
    reference: "dE/dt",
    formula: "dE/dt = (1 - E) * rho_E * G_E   -   E * rho_E * delta_E",
    story:
      "The shared tide rises when the country invests in skills, infrastructure, trust, and rules. It ebbs slowly on its own through wear and obsolescence.",
    analogy:
      "filling a bathtub. The tap (national investment) adds water; a slow drain (depreciation) takes some out. The bath cannot overflow because the closer to full it is, the slower it fills.",
  },
  {
    name: "Absorptive capability (Tier 1)",
    reference: "dK/dt",
    formula:
      "dK/dt = (1 - K) * rho_K * ( phi_s*E  +  G_s  +  eta_s*A )   -   K * rho_K * mu_s",
    story:
      "A sector's on-ramp gets wider when the tide is high (phi_s * E), when the sector receives targeted help (G_s), and when adoption is already underway and creates pull (eta_s * A). It narrows over time from skill turnover and tool obsolescence (mu_s).",
    analogy:
      "widening an on-ramp. National conditions, direct funding, and existing drivers all push the work along. Without maintenance, the on-ramp narrows again.",
  },
  {
    name: "AI adoption (Tier 1)",
    reference: "dA/dt",
    formula: "dA/dt = (1 - A) * rho_A * alpha_s * K   -   A * rho_A * (1 - K)",
    story:
      "Adoption grows when the on-ramp is open (high K). When the on-ramp is poor (low K), existing adoption stalls or reverses.",
    analogy:
      "cars merging onto the motorway. Open the on-ramp and traffic flows on; close it and cars peel away.",
  },
  {
    name: "Realised productivity",
    reference: "dP/dt",
    formula: "dP/dt = (1 - P) * rho_P * kappa_s * A   -   P * rho_P * (1 - A)",
    story:
      "Productivity gains build up as adoption matures. If adoption drops back, the gains fade rather than persisting on their own.",
    analogy:
      "average traffic speed. Speed rises once cars are using the motorway well; it drops when cars leave or the lane closes.",
  },
  {
    name: "Labour adjustment pressure (Tier 1)",
    reference: "dL/dt",
    formula: "dL/dt = (1 - L) * rho_L * lambda_s * A   -   L * rho_L * (1 - A)",
    story:
      "Pressure on workers and labour markets rises with adoption and eases when adoption plateaus or reverses. Lambda_s captures how exposed each sector's workforce is.",
    analogy:
      "stress on drivers and depots. Traffic up - more rosters, more retraining, more reorganising. Traffic down - the system relaxes.",
  },
];

const SCENARIOS = [
  {
    symbol: "0",
    name: "Status quo",
    story: "No new policy effort. Today's values carry forward. This is the reference every other scenario is compared against.",
    analogy: "wallet stays shut.",
  },
  {
    symbol: "A",
    name: "Aggregate",
    story: "Spread the same budget evenly across every sector. A little for everyone, no targeting.",
    analogy: "buy a small treat for the whole class.",
  },
  {
    symbol: "B",
    name: "Targeted demand",
    story: "Direct the budget to sectors with low current adoption. Help where the on-ramps are narrowest.",
    analogy: "tutor the students who are furthest behind.",
  },
  {
    symbol: "C",
    name: "Targeted supply",
    story: "Invest the budget in the shared tide itself - national skills, infrastructure, trust, regulation.",
    analogy: "fix the whole school, not single classrooms.",
  },
  {
    symbol: "D",
    name: "Mixed",
    story: "Split the budget between the shared tide and targeted demand-side help.",
    analogy: "half school upgrade, half tutoring.",
  },
];

const LIMITS = [
  "It does not predict GDP, employment, or adoption levels in any specific future year.",
  "It does not pick winners. Sectors are described in tiers; there is no league table of best sectors for AI.",
  "It does not include international spillovers, regional differences inside New Zealand, or distributional analysis.",
  "Where evidence is weak, the model says so. Confidence tags travel with every number.",
];

export default function HowItWorksPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
      <PageHeader
        eyebrow="Plain English"
        title="How this works, in everyday terms"
        description="A short level-setter for anyone visiting for the first time. No background in economics or AI is needed. Read this once, then explore the baseline and the comparison workspace."
      />

      <section className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <article className="surface-card p-6">
          <p className="eyebrow">In 30 seconds</p>
          <h2 className="mt-1 font-display text-2xl text-ink">
            A test kitchen for AI policy in Aotearoa
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            This site helps anyone compare what could happen if New Zealand chose different
            AI policies. You set the levers; the model shows the tradeoffs. It is a
            thinking tool, not a crystal ball. We do not say what <em>will</em> happen -
            we show how options differ when you make the same assumptions visible.
          </p>
        </article>
        <article className="surface-card p-6">
          <p className="eyebrow">TL;DR</p>
          <ul className="mt-2 space-y-2">
            {TLDR.map((t) => (
              <li key={t} className="text-sm leading-relaxed text-ink">
                - {t}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-8 surface-card p-6">
        <p className="eyebrow">Why we built it</p>
        <h2 className="mt-1 font-display text-2xl text-ink">
          AI policy is being shaped without a shared picture
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {WHY_POINTS.map((w) => (
            <div key={w.title} className="rounded-md border border-ink/10 bg-white/60 p-4">
              <p className="font-semibold text-ink">{w.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-steel">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 surface-card p-6">
        <p className="eyebrow">The big idea</p>
        <h2 className="mt-1 font-display text-2xl text-ink">
          A test kitchen, not a weather forecast
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
          Imagine a test kitchen with the same oven, the same time, and the same budget.
          You swap one ingredient at a time and taste the difference. That is what this
          sandbox does for AI policy: same horizon, same envelope, different mix. We
          compare cakes; we never claim to predict next Sunday&apos;s weather.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
          Every result you see is therefore a <span className="font-semibold text-ink">comparison</span>,
          not a forecast. Treat the numbers as <em>directional</em> signals about how
          options differ, not as exact future values.
        </p>
      </section>

      <section className="mt-8">
        <header className="mb-3">
          <p className="eyebrow">The five things we track</p>
          <h2 className="mt-1 font-display text-2xl text-ink">
            One shared tide, four sector things
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel">
            Every quantity is a number between 0 and 1 - think of it as a fill level.
            0 means none of it, 1 means the maximum the model allows.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {STATE_VARIABLES.map((v) => (
            <ConceptCard
              key={v.symbol}
              symbol={v.symbol}
              name={v.name}
              story={v.story}
              analogy={v.analogy}
              badge={v.badge}
            />
          ))}
        </div>
      </section>

      <section className="mt-8 surface-card p-6">
        <p className="eyebrow">How every equation works (one picture)</p>
        <h2 className="mt-1 font-display text-2xl text-ink">
          Think of each quantity as a bathtub
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1fr]">
          <p className="text-sm leading-relaxed text-steel">
            Every equation in the model is a bathtub with a tap and a drain. The level
            sits between empty (0) and full (1). The tap adds at a rate that depends on
            how empty it still is - so the closer to full, the slower it fills. The drain
            takes some out at a rate that depends on how full it is - so an empty tub
            cannot drain further.
          </p>
          <p className="text-sm leading-relaxed text-steel">
            This is why every quantity stays between 0 and 1 by construction. You will
            not see adoption above 100% or productivity below zero. The shape is the
            same for every equation; only the tap and drain change.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <header className="mb-3">
          <p className="eyebrow">The equations, in plain English</p>
          <h2 className="mt-1 font-display text-2xl text-ink">
            What each formula is saying
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel">
            The boxed lines are the actual v0.3 equations the engine runs. The story
            underneath is what each one is doing in everyday words. Symbols starting with
            rho, alpha, kappa, lambda, phi, eta, mu, beta, delta are sector-specific
            speed and sensitivity dials calibrated from evidence.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {EQUATIONS.map((e) => (
            <EquationCard
              key={e.name}
              name={e.name}
              formula={e.formula}
              story={e.story}
              analogy={e.analogy}
              reference={e.reference}
            />
          ))}
        </div>
        <p className="mt-3 text-xs text-steel">
          Tier 2 sectors use the same shapes with fewer moving parts: the tide acts on
          adoption directly through beta_s, and labour pressure is reported alongside
          rather than tracked as its own bathtub. Tier 3 sectors track adoption only,
          with productivity reported through psi_s. The structure is the same; the
          fidelity matches the evidence available.
        </p>
      </section>

      <section className="mt-8 surface-card p-6">
        <p className="eyebrow">Why three tiers</p>
        <h2 className="mt-1 font-display text-2xl text-ink">
          A road atlas of the economy
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
          Not every sector has the same depth of evidence behind it. Instead of pretending
          they do, we group sectors into three tiers of detail - like a road atlas with
          state highways, regional roads, and back roads. The whole country is always on
          the map; only the level of detail varies.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {TIER_RIBBON.map((t) => (
            <div key={t.label} className="rounded-md border border-ink/10 bg-white/60 p-4">
              <p className="font-semibold text-ink">{t.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-steel">{t.text}</p>
              <p className="mt-2 text-xs italic leading-relaxed text-steel">
                {t.analogy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <header className="mb-3">
          <p className="eyebrow">The five policy scenarios</p>
          <h2 className="mt-1 font-display text-2xl text-ink">
            Different ways to spend the same wallet
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel">
            Every scenario uses the same budget envelope and the same time horizon. Only
            the spending mix changes. That is what makes them comparable.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SCENARIOS.map((s) => (
            <ConceptCard
              key={s.name}
              symbol={s.symbol}
              name={s.name}
              story={s.story}
              analogy={s.analogy}
            />
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-datum/25 bg-datum/10 p-6">
        <p className="eyebrow">What this cannot tell you</p>
        <h2 className="mt-1 font-display text-2xl text-ink">
          Honest limits, kept in view
        </h2>
        <ul className="mt-3 space-y-2">
          {LIMITS.map((l) => (
            <li key={l} className="text-sm leading-relaxed text-ink">
              - {l}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-steel">
          See the <Link href="/methodology" className="font-medium text-ink underline underline-offset-4">methodology brief</Link> for the longer technical version.
        </p>
      </section>

      <section className="mt-8 surface-card p-6">
        <p className="eyebrow">Next step</p>
        <h2 className="mt-1 font-display text-2xl text-ink">
          Now look at today, then compare
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
          The baseline page shows where Aotearoa stands today. The comparison workspace
          lets you set a policy mix, a budget envelope, and a horizon, then see how the
          options differ from carrying today forward unchanged.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/baseline"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-brief"
          >
            See today&apos;s baseline -&gt;
          </Link>
          <Link
            href="/compare"
            className="rounded-full border border-ink/25 bg-white/60 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
          >
            Open comparison workspace
          </Link>
          <Link
            href="/glossary"
            className="rounded-full border border-ink/15 bg-white/40 px-6 py-3 text-sm font-semibold text-steel transition hover:bg-white"
          >
            Glossary
          </Link>
        </div>
        <p className="mt-4 text-xs text-steel">
          Content version {CONTENT.version.id} - published{" "}
          {CONTENT.version.publishedAt.slice(0, 10)}
        </p>
      </section>
    </main>
  );
}
