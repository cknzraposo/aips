type BudgetHorizonControlsProps = {
  budgetEnvelope: number;
  horizonYears: number;
  onBudgetChange: (value: number) => void;
  onHorizonChange: (value: number) => void;
};

export default function BudgetHorizonControls({
  budgetEnvelope,
  horizonYears,
  onBudgetChange,
  onHorizonChange
}: BudgetHorizonControlsProps) {
  return (
    <section className="surface-card p-5">
      <h2 className="font-display text-2xl text-ink">Like-for-like assumptions</h2>
      <p className="mt-2 text-sm text-steel">Keep shared assumptions aligned across compared scenarios.</p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-steel">
          Budget envelope (NZD millions)
          <input
            type="number"
            min={0}
            step={50}
            value={budgetEnvelope}
            onChange={(event) => onBudgetChange(Number(event.target.value))}
            className="rounded-xl border border-ink/20 bg-white px-3 py-2 text-ink"
          />
        </label>

        <label className="grid gap-2 text-sm text-steel">
          Time horizon (years)
          <input
            type="number"
            min={1}
            max={20}
            value={horizonYears}
            onChange={(event) => onHorizonChange(Number(event.target.value))}
            className="rounded-xl border border-ink/20 bg-white px-3 py-2 text-ink"
          />
        </label>
      </div>
    </section>
  );
}
