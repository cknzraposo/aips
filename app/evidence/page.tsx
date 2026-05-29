import ApacInvestmentTable from "@/components/evidence/apac-investment-table";
import PageHeader from "@/components/layout/page-header";
import { EVIDENCE_CLASSES } from "@/lib/reference-data";

const RNZ_URL =
  "https://www.rnz.co.nz/news/political/595655/nearly-9000-public-sector-jobs-to-go-government-agencies-to-merge-nicola-willis-announces";

export default function EvidencePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
      <PageHeader
        eyebrow="Evidence index"
        title="Provenance and sector basis"
        description="Each policy comparison should trace assumptions to source quality and limitations. This interface will present evidence class, method, confidence, and caveats for transparent interpretation."
      />

      <section className="surface-card mt-6 p-6">
        <h2 className="font-display text-2xl text-ink">Evidence classes used in the sandbox</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {EVIDENCE_CLASSES.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-ink/15 bg-canvas px-4 py-3 text-sm font-medium text-ink"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 surface-card border-l-4 border-l-accent p-6">
        <p className="eyebrow !text-accent">Featured signal</p>
        <h2 className="mt-1 font-display text-2xl text-ink">
          Public-sector productivity vs labour pressure
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
          The May 2026 plan to reduce the public-sector workforce and lean on AI to
          maintain services is the clearest current example of a productivity dividend
          being banked in advance. We hold it as a calibration anchor for the labour
          adjustment trajectory (L) of the Public Sector (ANZSIC O), so the
          productivity-versus-jobs tradeoff can be stress-tested rather than assumed. It
          is a policy-target path, not a structural forecast.
        </p>

        <dl className="mt-4 grid gap-x-6 gap-y-3 rounded-xl border border-ink/10 bg-white/60 p-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-steel">Anchor</dt>
            <dd className="mt-0.5 text-sm text-ink">
              Public Administration FTE trajectory (Dec 2025 to Jul 2029)
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-steel">Implied change</dt>
            <dd className="mt-0.5 text-sm text-ink">
              ~ -2,500 FTE/yr (plausible range -2,200 to -2,800)
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-wide text-steel">Basis</dt>
            <dd className="mt-0.5 text-sm text-ink">
              63,657 FTE (Dec 2025) to 55,000 (Jul 2029), annualised
            </dd>
          </div>
        </dl>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-ink">
            Evidence class: derived
          </span>
          <span className="rounded-full border border-ink/20 bg-canvas px-3 py-1 text-xs font-semibold text-steel">
            Confidence: medium
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={RNZ_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline underline-offset-4"
          >
            Source: Willis announcement, RNZ, 24 May 2026
          </a>
          <a
            href="/how-it-works#why-now"
            className="font-medium text-steel underline underline-offset-4 hover:text-ink"
          >
            How the sandbox reads this signal
          </a>
        </div>
      </section>

      <div className="mt-6">
        <ApacInvestmentTable />
      </div>

      <section className="mt-6 rounded-2xl border border-accent/30 bg-accent/10 p-6">
        <h2 className="font-display text-2xl text-ink">Implementation status</h2>
        <p className="mt-2 text-sm text-steel">
          Sector coverage tables, evidence metadata drill-down, and published content version banners are queued for the next implementation slice.
        </p>
      </section>
    </main>
  );
}
