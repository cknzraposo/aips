type Props = {
  symbol: string;
  name: string;
  story: string;
  analogy: string;
  badge?: string;
};

export default function ConceptCard({ symbol, name, story, analogy, badge }: Props) {
  return (
    <article className="surface-card flex h-full flex-col p-5">
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-display text-2xl text-ink">{symbol}</p>
        {badge ? (
          <span className="rounded-full border border-ink/15 bg-canvas px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-steel">
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="mt-1 text-base font-semibold text-ink">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-steel">{story}</p>
      <p className="mt-3 rounded-md border border-accent/30 bg-accent/5 px-3 py-2 text-xs leading-relaxed text-ink">
        <span className="font-semibold">Picture it:</span> {analogy}
      </p>
    </article>
  );
}
