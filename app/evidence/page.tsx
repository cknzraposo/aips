import PageHeader from "@/components/layout/page-header";
import { EVIDENCE_CLASSES } from "@/lib/reference-data";

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

      <section className="mt-6 rounded-2xl border border-accent/30 bg-accent/10 p-6">
        <h2 className="font-display text-2xl text-ink">Implementation status</h2>
        <p className="mt-2 text-sm text-steel">
          Sector coverage tables, evidence metadata drill-down, and published content version banners are queued for the next implementation slice.
        </p>
      </section>
    </main>
  );
}
