import PageHeader from "@/components/layout/page-header";
import { GLOSSARY } from "@/lib/reference-data";

export default function GlossaryPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-14">
      <PageHeader
        eyebrow="Plain-language glossary"
        title="Key terms used in the sandbox"
        description="Short, plain English definitions for the concepts behind the policy sandbox. Use this page to interpret terminology used in scenarios, methodology, and evidence views."
      />

      <section className="mt-6 grid gap-3 md:grid-cols-2">
        {GLOSSARY.map((entry) => (
          <article key={entry.term} className="surface-card p-5">
            <h2 className="font-display text-xl text-ink">{entry.term}</h2>
            <p className="mt-2 text-sm leading-relaxed text-steel">{entry.definition}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-2xl border border-datum/30 bg-datum/10 p-6">
        <p className="text-sm leading-relaxed text-steel">
          Definitions are aligned with the project glossary in the repository. They describe how each term is used in this sandbox - not formal economic or statistical definitions.
        </p>
      </section>
    </main>
  );
}
