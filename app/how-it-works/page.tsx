import Link from "next/link";

import ConceptCard from "@/components/explainer/concept-card";
import EquationCard from "@/components/explainer/equation-card";
import OnThisPage, { type OnThisPageItem } from "@/components/explainer/on-this-page";
import SystemDiagram from "@/components/explainer/system-diagram";
import PageHeader from "@/components/layout/page-header";
import { CONTENT } from "@/lib/model/content";

const RNZ_URL =
  "https://www.rnz.co.nz/news/political/595655/nearly-9000-public-sector-jobs-to-go-government-agencies-to-merge-nicola-willis-announces";

const NAV_ITEMS: OnThisPageItem[] = [
  { id: "why", label: "The goal" },
  { id: "big-idea", label: "The big idea" },
  { id: "five-things", label: "Five things tracked" },
  { id: "build-and-wear", label: "How it adds up" },
  { id: "equations", label: "The equations" },
  { id: "tiers", label: "Three tiers" },
  { id: "scenarios", label: "Policy scenarios" },
  { id: "why-now", label: "Why it matters now" },
  { id: "limits", label: "Honest limits" },
];

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
      "The whole-of-nation conditions every sector relies on: skills in the workforce, infrastructure, public trust, and the standards and rules governing AI use.",
    analogy:
      "the national electricity grid the whole country plugs into - generation, lines, standards, and a workforce that knows how to use power. Every sector draws on it.",
    badge: "shared",
  },
  {
    symbol: "K",
    name: "Absorptive capability",
    story:
      "How ready a sector is to actually use AI: in-house skills, data maturity, and processes that can absorb new tools.",
    analogy:
      "that sector being wired up and ready - the switchboard, safe wiring, and trained staff. Until it is wired, extra power on the grid changes nothing for that sector.",
    badge: "per sector",
  },
  {
    symbol: "A",
    name: "AI adoption",
    story:
      "How much AI is actually in genuine operational use in a sector - not pilots, not press releases.",
    analogy:
      "how much of the sector's work is actually running on power. Wiring has to come first; without it, the machines sit idle no matter how much power is available.",
    badge: "per sector",
  },
  {
    symbol: "P",
    name: "Realised productivity",
    story:
      "The productivity gain genuinely delivered. It sits below the theoretical ceiling and only grows as adoption matures.",
    analogy:
      "the extra output that electrified work delivers. It builds as more work runs on power, and fades if the power is switched back off.",
    badge: "per sector",
  },
  {
    symbol: "L",
    name: "Labour adjustment pressure",
    story:
      "Strain on workers and labour markets as tasks are reorganised, automated, or augmented when AI spreads.",
    analogy:
      "the strain of reorganising the workforce as machines take on tasks - retraining, redeploying, and rewriting roles. It rises as more work moves onto power.",
    badge: "per sector",
  },
];

const TIER_RIBBON = [
  {
    label: "Tier 1 - 9 sectors",
    text: "Full picture: capability, adoption, productivity, and labour pressure all tracked. Covers about 61% of GDP.",
    analogy: "fully wired regions - every circuit, meter, and load mapped.",
  },
  {
    label: "Tier 2 - 6 sectors",
    text: "Simpler picture: adoption and productivity, with labour pressure reported alongside.",
    analogy: "partly mapped regions - the main connections, fewer details.",
  },
  {
    label: "Tier 3 - 4 sectors",
    text: "Minimum picture: adoption only. Included so the whole economy adds up honestly.",
    analogy: "metered but not detailed - counted so the national total adds up.",
  },
];

const EQUATIONS = [
  {
    name: "National enabling capacity",
    reference: "dE/dt",
    formula: "dE/dt = (1 - E) * rho_E * G_E   -   E * rho_E * delta_E",
    story:
      "The shared grid improves when the country invests in skills, infrastructure, trust, and rules. It runs down slowly on its own through wear and obsolescence.",
    analogy:
      "extending and upgrading the national grid. Crews (G_E) add capacity; age and obsolescence wear it back (delta_E). The closer to fully built, the less each new crew adds.",
  },
  {
    name: "Absorptive capability (Tier 1)",
    reference: "dK/dt",
    formula:
      "dK/dt = (1 - K) * rho_K * ( phi_s*E  +  G_s  +  eta_s*A )   -   K * rho_K * mu_s",
    story:
      "A sector gets wired up faster when the shared grid is strong (phi_s * E), when it receives targeted help (G_s), and when existing use is already pulling it along (eta_s * A). Wiring degrades over time through skill turnover and tool obsolescence (mu_s).",
    analogy:
      "wiring up a sector. A strong grid, direct help for this sector, and work already on power all speed it up. Without upkeep, the wiring degrades.",
  },
  {
    name: "AI adoption (Tier 1)",
    reference: "dA/dt",
    formula: "dA/dt = (1 - A) * rho_A * alpha_s * K   -   A * rho_A * (1 - K)",
    story:
      "Use grows when the sector is well wired (high K). When the wiring is poor (low K), existing use stalls or switches back off.",
    analogy:
      "switching work onto power. Good wiring lets more machines run; poor wiring trips the circuit and work drops back.",
  },
  {
    name: "Realised productivity",
    reference: "dP/dt",
    formula: "dP/dt = (1 - P) * rho_P * kappa_s * A   -   P * rho_P * (1 - A)",
    story:
      "Productivity gains build up as adoption matures. If adoption drops back, the gains fade rather than persisting on their own.",
    analogy:
      "the extra output from electrified work. It rises as more work runs on power, and falls when the power goes off.",
  },
  {
    name: "Labour adjustment pressure (Tier 1)",
    reference: "dL/dt",
    formula: "dL/dt = (1 - L) * rho_L * lambda_s * A   -   L * rho_L * (1 - A)",
    story:
      "Pressure on workers and labour markets rises with adoption and eases when adoption plateaus or reverses. Lambda_s captures how exposed each sector's workforce is.",
    analogy:
      "the strain of reorganising around machines. More work on power means more retraining and redeployment; less work, less strain.",
  },
];

const SCENARIOS = [
  {
    symbol: "0",
    name: "Status quo",
    story:
      "No new policy effort. Today's values carry forward. This is the reference every other scenario is compared against.",
    analogy: "no new grid or wiring budget - leave the network as it is.",
  },
  {
    symbol: "A",
    name: "Aggregate",
    story: "Spread the same budget evenly across every sector. A little for everyone, no targeting.",
    analogy:
      "a small wiring crew sent to every sector - a little everywhere, nothing focused.",
  },
  {
    symbol: "B",
    name: "Targeted demand",
    story:
      "Direct the budget to sectors with low current adoption. Help where sectors are least wired up.",
    analogy:
      "send the crews to the least-wired sectors first.",
  },
  {
    symbol: "C",
    name: "Targeted supply",
    story:
      "Invest the budget in the shared grid itself - national skills, infrastructure, trust, regulation.",
    analogy:
      "pour the budget into the shared grid - skills, infrastructure, trust, rules - rather than any single sector.",
  },
  {
    symbol: "D",
    name: "Mixed",
    story:
      "Split the budget between the shared grid and targeted demand-side help.",
    analogy:
      "half into the shared grid, half into wiring up the least-ready sectors.",
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
          <p className="eyebrow">The goal, in one line</p>
          <h2 className="mt-1 font-display text-2xl text-ink">
            Compare AI policy options for Aotearoa, honestly
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            Different surveys put New Zealand&apos;s AI use anywhere from 32% to 87%.
            With the evidence that scattered, no one can credibly say which policy will
            help most. This sandbox gives you a transparent way to compare policy
            approaches side by side - same assumptions, same budget, same horizon - so
            the tradeoffs are visible instead of hidden. It is a thinking tool, not a
            crystal ball: it shows how options <em>differ</em>, never what <em>will</em>
            {" "}happen.
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

      <div className="mt-8 grid gap-8 lg:grid-cols-[210px_minmax(0,1fr)]">
        <OnThisPage items={NAV_ITEMS} />

        <div className="min-w-0">
          <section id="why" className="surface-card p-6 scroll-mt-24">
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

          <section id="big-idea" className="mt-8 surface-card p-6 scroll-mt-24">
            <p className="eyebrow">The big idea</p>
            <h2 className="mt-1 font-display text-2xl text-ink">
              An electricity grid for AI policy
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
              Picture New Zealand&apos;s economy as a country getting electrified. There
              is one shared national grid - skills, infrastructure, trust, and the
              standards and rules for AI - and every sector has to be wired up before it
              can draw on it. Wiring a sector is its capability, work actually running on
              power is adoption, and the extra output that electrified work delivers is
              the productivity payoff.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
              Policy is the budget for building the grid and wiring sectors up. You can
              spread wiring crews thinly across every sector, send them to the least-ready
              sectors, or invest in the shared grid itself. Same budget, same time
              horizon, different mix - that is what makes the options comparable. Every
              result is a comparison between mixes, never a forecast of next year&apos;s
              output.
            </p>
            <SystemDiagram variant="full" className="mt-6" />
          </section>

      <section id="five-things" className="mt-8 scroll-mt-24">
        <header className="mb-3">
          <p className="eyebrow">The five things we track</p>
          <h2 className="mt-1 font-display text-2xl text-ink">
            One shared network, four sector flows
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel">
            Every quantity is a number between 0 and 1 - think of it as how built-out
            that piece of the network is. 0 means none of it; 1 means the most the model
            allows.
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

      <section id="build-and-wear" className="mt-8 surface-card p-6 scroll-mt-24">
        <p className="eyebrow">How every equation works (one picture)</p>
        <h2 className="mt-1 font-display text-2xl text-ink">
          Build it up, wear it down
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1fr]">
          <p className="text-sm leading-relaxed text-steel">
            Every equation in the model behaves like a piece of the grid being built and
            worn. Construction crews add capacity - faster when there is still plenty of
            room to add, slower as it approaches fully built. Meanwhile age and use wear
            it back down at a rate that depends on how built it already is.
          </p>
          <p className="text-sm leading-relaxed text-steel">
            That is why every quantity stays between 0 (nothing built) and 1 (fully built)
            by construction. You will not see adoption above 100% or productivity below
            zero. The shape is the same for every equation; only what counts as a
            “crew” and what counts as “wear” changes.
          </p>
        </div>
      </section>

      <section id="equations" className="mt-8 scroll-mt-24 rounded-2xl border border-ink/15 border-l-4 border-l-accent bg-white/50 p-6">
        <header className="mb-3">
          <p className="eyebrow !text-accent">Going deeper - optional</p>
          <h2 className="mt-1 font-display text-2xl text-ink">
            The equations, in plain English
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel">
            You do not need this part to use the sandbox - it is here for anyone who
            wants to see under the bonnet. The boxed lines are the actual v0.3 equations
            the engine runs. The story underneath is what each one is doing in everyday
            words. Symbols starting with rho, alpha, kappa, lambda, phi, eta, mu, beta,
            delta are sector-specific speed and sensitivity dials calibrated from
            evidence.
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

      <section id="tiers" className="mt-8 surface-card p-6 scroll-mt-24">
        <p className="eyebrow">Why three tiers</p>
        <h2 className="mt-1 font-display text-2xl text-ink">
          A wiring map of the economy
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
          Not every sector has the same depth of evidence behind it. Instead of pretending
          they do, we group sectors into three tiers of detail - like a national wiring map
          where some regions are surveyed circuit by circuit and others are only metered at
          the connection. Every sector is always on the map; only the level of detail varies.
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

      <section id="scenarios" className="mt-8 scroll-mt-24">
        <header className="mb-3">
          <p className="eyebrow">The five policy scenarios</p>
          <h2 className="mt-1 font-display text-2xl text-ink">
            Different ways to spend the same electrification budget
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-steel">
            Every scenario uses the same budget envelope and the same time horizon. Only
            the spending mix changes - which is what makes them comparable.
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

      <section id="why-now" className="mt-8 scroll-mt-24 surface-card p-6">
        <p className="eyebrow">Why it matters now</p>
        <h2 className="mt-1 font-display text-2xl text-ink">
          A real productivity bet, read through the sandbox
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
          A common policy claim is that AI will lift productivity - and sometimes that
          promised dividend is banked in advance. In May 2026 the Government announced
          plans to reduce the public-sector workforce by roughly 8,700 roles and merge
          agencies, with AI and digital tools cited among the ways services would be
          maintained with fewer people. Those figures are the Government&apos;s own
          announced target, used here only as context - not a model output.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
          The sandbox does not judge whether that bet pays off. It makes the
          preconditions visible. In our framing, the productivity gain (P) only arrives
          as work actually runs on power (A), and adoption only grows where a sector is
          wired up (K). Evidence on the public sector points to a low starting K -
          capability gaps, a risk-averse culture, and pilots that have not yet shown a
          clear dividend.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
          Read that way, trimming headcount on the strength of a future AI dividend is a
          wager that wiring (K) and adoption (A) rise fast enough to deliver the output
          (P) before the workforce strain (L) bites. The sandbox lets you see what would
          have to be true; it does not promise the outcome either way.
        </p>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/evidence"
            className="font-medium text-ink underline underline-offset-4"
          >
            See the public-sector signal in the evidence index
          </Link>
          <a
            href={RNZ_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-steel underline underline-offset-4 hover:text-ink"
          >
            Source: RNZ, 24 May 2026
          </a>
        </div>
      </section>

      <section id="limits" className="mt-8 scroll-mt-24 rounded-2xl border border-datum/25 bg-datum/10 p-6">
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
        </div>
      </div>

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
