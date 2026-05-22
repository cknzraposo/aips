import PageHeader from "@/components/layout/page-header";

export default function MethodologyPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
      <PageHeader
        eyebrow="Methodology brief"
        title="How to read sandbox outputs"
        description="The model supports structured comparison of policy archetypes under uncertainty. It is not a forecasting engine and does not provide definitive adoption rankings."
      />

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="surface-card p-6">
          <h2 className="font-display text-2xl text-ink">Comparability conditions</h2>
          <ul className="mt-3 space-y-2 text-sm text-steel">
            <li>- Match budget envelope before comparing scenarios</li>
            <li>- Match simulation horizon</li>
            <li>- Preserve all 19 ANZSIC sector coverage</li>
            <li>- Keep caveat framing visible in every summary</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-datum/25 bg-datum/10 p-6">
          <h2 className="font-display text-2xl text-ink">Interpretation caution</h2>
          <p className="mt-3 text-sm leading-relaxed text-steel">
            Treat results as directional evidence for policy discussion. When evidence quality is weak or assumptions are highly sensitive, confidence should be reduced accordingly.
          </p>
        </article>
      </section>

      <section className="surface-card mt-6 p-6">
        <h2 className="font-display text-2xl text-ink">Implementation status</h2>
        <p className="mt-2 text-sm text-steel">
          The full methodology content will be expanded from repository documentation and equation references in a subsequent integration step.
        </p>
      </section>
    </main>
  );
}
