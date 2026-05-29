import Link from "next/link";

import SystemDiagram from "@/components/explainer/system-diagram";

const RNZ_URL =
  "https://www.rnz.co.nz/news/political/595655/nearly-9000-public-sector-jobs-to-go-government-agencies-to-merge-nicola-willis-announces";

const pillars = [
  {
    title: "Comparative, Not Predictive",
    text: "Explore structural policy tradeoffs without presenting forecasts, exact GDP paths, or definitive rankings."
  },
  {
    title: "Whole-Economy Sector Coverage",
    text: "Compare policy effects across all 19 ANZSIC Level 1 sectors through the Tier 1 to Tier 3 structure."
  },
  {
    title: "Evidence-Aware Transparency",
    text: "Trace assumptions with evidence classes and caveats so confidence limits remain visible to decision-makers."
  }
];

const dimensions = [
  "Productivity effect",
  "Adoption spread",
  "Labour adjustment pressure",
  "National enabling capacity"
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-8 pt-14 md:grid-cols-[1.3fr_0.7fr] md:px-10 lg:pt-20">
        <div className="space-y-8">
          <p className="eyebrow inline-flex rounded-full border border-ink/20 bg-white/70 px-4 py-1 tracking-[0.18em]">
            New Zealand AI Policy Sandbox
          </p>

          <h1 className="max-w-4xl font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            A policy briefing interface for evaluating AI strategy tradeoffs under uncertainty.
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-steel">
            Different surveys put New Zealand&apos;s AI use anywhere from 32% to 87%. This
            sandbox is a transparent way to compare policy options under that uncertainty -
            same assumptions, same budget, same economy-wide scope - so the tradeoffs stay
            visible rather than hidden.
          </p>

          <div className="grid gap-3 sm:flex sm:items-center">
            <Link
              href="/how-it-works"
              className="rounded-full bg-ink px-6 py-3 text-center text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-brief"
            >
              Start with how it works
            </Link>
            <Link
              href="/baseline"
              className="rounded-full border border-ink/25 bg-white/60 px-6 py-3 text-center text-sm font-semibold text-ink transition hover:bg-white"
            >
              See today&apos;s baseline
            </Link>
            <Link
              href="/compare"
              className="rounded-full border border-ink/15 bg-white/40 px-6 py-3 text-center text-sm font-semibold text-steel transition hover:bg-white"
            >
              Skip to comparison workspace
            </Link>
          </div>
        </div>

        <aside className="data-card rounded-2xl border border-ink/20 bg-white/80 p-6 shadow-brief backdrop-blur">
          <p className="eyebrow">Briefing Note</p>
          <h2 className="mt-3 font-display text-2xl text-ink">Policy posture</h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            Outputs are comparative reasoning signals. They should be interpreted with evidence caveats and uncertainty framing, not as precise forecasts.
          </p>

          <dl className="mt-6 space-y-4 border-t border-ink/10 pt-4">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-sm text-steel">Scenario archetypes</dt>
              <dd className="font-semibold text-ink">5</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-sm text-steel">ANZSIC sectors</dt>
              <dd className="font-semibold text-ink">19</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-sm text-steel">Core tradeoff dimensions</dt>
              <dd className="font-semibold text-ink">4</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 md:px-10">
        <article className="rounded-2xl border border-ink/20 bg-white/85 p-6 shadow-brief backdrop-blur md:p-8">
          <p className="eyebrow">In plain English</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-ink">What this project is and why it exists</h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-steel">
            Different reports suggest very different AI adoption levels in New Zealand, so it is hard to know which policy choices are likely to help most. This project provides a structured way to compare policy approaches using the same assumptions, the same budget envelope, and the same economy-wide scope.
          </p>
          <p className="mt-3 max-w-4xl text-base leading-relaxed text-steel">
            Instead of asking for one perfect answer, you can test tradeoffs across productivity, adoption spread, labour adjustment pressure, and national enabling capacity. This helps decision-makers see where broad policy works, where targeted support works better, and what caveats matter.
          </p>

          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            <li className="rounded-xl border border-ink/15 bg-canvas px-4 py-3 text-sm leading-relaxed text-ink">
              <span className="font-semibold">What it is:</span> a policy comparison sandbox for all 19 ANZSIC Level 1 sectors.
            </li>
            <li className="rounded-xl border border-ink/15 bg-canvas px-4 py-3 text-sm leading-relaxed text-ink">
              <span className="font-semibold">What it does:</span> compares policy scenarios side by side under uncertainty.
            </li>
            <li className="rounded-xl border border-ink/15 bg-canvas px-4 py-3 text-sm leading-relaxed text-ink">
              <span className="font-semibold">What it does not do:</span> provide exact forecasts, exact GDP paths, or definitive rankings.
            </li>
          </ul>

          <SystemDiagram variant="compact" className="mt-6" />
          <p className="mt-3 text-sm leading-relaxed text-steel">
            The short version: a shared national capacity underpins every sector; a
            sector has to be ready before AI use grows, and productivity follows use.{" "}
            <Link
              href="/how-it-works"
              className="font-medium text-ink underline underline-offset-4"
            >
              See the full picture in plain English
            </Link>
            .
          </p>
        </article>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-6 md:grid-cols-3 md:px-10">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-2xl border border-ink/15 bg-white/75 p-6 shadow-sm backdrop-blur"
          >
            <h3 className="font-display text-2xl text-ink">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-steel">{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-8 md:px-10">
        <div className="rounded-2xl border border-datum/30 bg-datum/10 p-6 md:p-8">
          <p className="eyebrow !text-datum">Primary comparison dimensions</p>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {dimensions.map((dimension) => (
              <li
                key={dimension}
                className="rounded-xl border border-datum/20 bg-white/80 px-4 py-3 text-sm font-medium text-ink"
              >
                {dimension}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-steel">
            Every head-to-head comparison should maintain like-for-like assumptions for budget envelope, horizon, and sector coverage.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
        <div className="rounded-2xl border border-ink/15 bg-white/70 p-6 md:p-8">
          <p className="eyebrow">In the news</p>
          <h2 className="mt-2 font-display text-2xl text-ink">
            When productivity is banked before it arrives
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
            Policy debates increasingly treat AI as a productivity lever - sometimes
            counting the dividend in advance. For example, the Government&apos;s May 2026
            plan to reduce the public-sector workforce by roughly 8,700 roles and merge
            agencies leaned on AI and digital tools to maintain services with fewer
            people. The sandbox does not forecast whether such bets pay off; it makes the
            preconditions visible - productivity rises only as adoption matures, and
            adoption grows only where a sector is ready. Those figures are the
            Government&apos;s own announced target, used here as context, not a model
            output.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link
              href="/how-it-works#why-now"
              className="font-medium text-ink underline underline-offset-4"
            >
              See how the sandbox reads this
            </Link>
            <Link
              href="/evidence"
              className="font-medium text-steel underline underline-offset-4 hover:text-ink"
            >
              Public-sector signal in the evidence index
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
        </div>
      </section>
    </main>
  );
}
