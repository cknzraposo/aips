export type ScenarioOption = {
  id: string;
  name: string;
  description?: string;
  disabled?: boolean;
};

type ScenarioSelectorProps = {
  options: readonly ScenarioOption[];
  selected: string[];
  onToggle: (scenarioId: string) => void;
};

export default function ScenarioSelector({
  options,
  selected,
  onToggle
}: ScenarioSelectorProps) {
  return (
    <section className="surface-card p-5">
      <h2 className="font-display text-2xl text-ink">Scenario selection</h2>
      <p className="mt-2 text-sm text-steel">
        Status quo is always run as the reference. Choose one or more archetypes to compare against it.
      </p>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {options.map((option) => {
          const isSelected = selected.includes(option.id);
          return (
            <button
              key={option.id}
              type="button"
              disabled={option.disabled}
              onClick={() => onToggle(option.id)}
              className={`rounded-xl border px-3 py-2 text-left text-sm transition disabled:cursor-not-allowed disabled:opacity-60 ${
                isSelected
                  ? "border-ink bg-ink text-canvas"
                  : "border-ink/20 bg-white text-ink hover:border-ink/40"
              }`}
            >
              <span className="block font-medium">{option.name}</span>
              {option.description ? (
                <span
                  className={`mt-1 block text-xs leading-snug ${
                    isSelected ? "text-canvas/80" : "text-steel"
                  }`}
                >
                  {option.description}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}
