type Props = {
  name: string;
  formula: string;
  story: string;
  analogy: string;
  reference?: string;
};

export default function EquationCard({ name, formula, story, analogy, reference }: Props) {
  return (
    <article className="surface-card flex h-full flex-col p-5">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-lg text-ink">{name}</h3>
        {reference ? (
          <span className="text-[10px] uppercase tracking-[0.14em] text-steel">{reference}</span>
        ) : null}
      </div>
      <pre className="mt-3 overflow-x-auto rounded-md border border-ink/10 bg-canvas px-3 py-2 font-mono text-[11px] leading-snug text-ink">
        {formula}
      </pre>
      <p className="mt-3 text-sm leading-relaxed text-steel">{story}</p>
      <p className="mt-3 rounded-md border border-datum/30 bg-datum/5 px-3 py-2 text-xs leading-relaxed text-ink">
        <span className="font-semibold">Picture it:</span> {analogy}
      </p>
    </article>
  );
}
