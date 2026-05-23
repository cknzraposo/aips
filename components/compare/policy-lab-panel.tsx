"use client";

import { useState } from "react";

import Slider from "@/components/ui/slider";

/**
 * Shape of all user-tweakable inputs on the Compare page.
 * Held in two copies by the page: `staged` (what the panel mutates) and
 * `applied` (what the engine runs on, committed on Run).
 */
export type PolicyLabConfig = {
  selectedScenarioIds: string[];
  budgetEnvelope: number;
  horizonYears: number;
  leverDurationYears: number;
  demandSupplySplit: number;
  multipliers: {
    adoption: number;
    capability: number;
    productivity: number;
    labour: number;
  };
};

export const CALIBRATED_CONFIG: PolicyLabConfig = Object.freeze({
  selectedScenarioIds: ["aggregate", "targeted-demand"],
  budgetEnvelope: 400,
  horizonYears: 10,
  leverDurationYears: 5,
  demandSupplySplit: 0.5,
  multipliers: {
    adoption: 1,
    capability: 1,
    productivity: 1,
    labour: 1,
  },
}) as PolicyLabConfig;

export type ScenarioChip = {
  id: string;
  name: string;
  description?: string;
};

type Props = {
  scenarios: ReadonlyArray<ScenarioChip>;
  staged: PolicyLabConfig;
  applied: PolicyLabConfig;
  onChange: (next: PolicyLabConfig) => void;
  onRun: () => void;
  onReset: () => void;
  onShare: () => void;
  shareLabel?: string;
};

function configsEqual(a: PolicyLabConfig, b: PolicyLabConfig): boolean {
  if (a.budgetEnvelope !== b.budgetEnvelope) return false;
  if (a.horizonYears !== b.horizonYears) return false;
  if (a.leverDurationYears !== b.leverDurationYears) return false;
  if (a.demandSupplySplit !== b.demandSupplySplit) return false;
  if (
    a.multipliers.adoption !== b.multipliers.adoption ||
    a.multipliers.capability !== b.multipliers.capability ||
    a.multipliers.productivity !== b.multipliers.productivity ||
    a.multipliers.labour !== b.multipliers.labour
  )
    return false;
  if (a.selectedScenarioIds.length !== b.selectedScenarioIds.length) return false;
  const sa = [...a.selectedScenarioIds].sort();
  const sb = [...b.selectedScenarioIds].sort();
  return sa.every((id, i) => id === sb[i]);
}

export default function PolicyLabPanel({
  scenarios,
  staged,
  applied,
  onChange,
  onRun,
  onReset,
  onShare,
  shareLabel,
}: Props) {
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const isCalibrated = configsEqual(staged, CALIBRATED_CONFIG);
  const isDirty = !configsEqual(staged, applied);
  const presetLabel = isCalibrated ? "Calibrated baseline" : "Custom";

  const update = (patch: Partial<PolicyLabConfig>) => onChange({ ...staged, ...patch });
  const updateMult = (patch: Partial<PolicyLabConfig["multipliers"]>) =>
    onChange({ ...staged, multipliers: { ...staged.multipliers, ...patch } });

  const toggleScenario = (id: string) => {
    const next = staged.selectedScenarioIds.includes(id)
      ? staged.selectedScenarioIds.filter((v) => v !== id)
      : [...staged.selectedScenarioIds, id];
    update({ selectedScenarioIds: next });
  };

  return (
    <section className="surface-card p-5">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-display text-2xl text-ink">Policy lab</h2>
        <span className="rounded-full border border-ink/15 px-2.5 py-0.5 text-[11px] uppercase tracking-[0.16em] text-steel">
          {presetLabel}
        </span>
      </header>
      <p className="mt-2 text-sm text-steel">
        Pick the scenarios to compare against status quo, set the policy
        levers, then nudge the uncertainty dials to stress-test the result.
        Click Run when you are happy with the settings.
      </p>

      {/* Block 1: scenarios to compare */}
      <fieldset className="mt-5">
        <legend className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
          1. Scenarios to compare
        </legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {scenarios.map((s) => {
            const isOn = staged.selectedScenarioIds.includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => toggleScenario(s.id)}
                className={`rounded-xl border px-3 py-2 text-left text-sm transition ${
                  isOn
                    ? "border-ink bg-ink text-canvas"
                    : "border-ink/20 bg-white text-ink hover:border-ink/40"
                }`}
              >
                <span className="block font-medium">{s.name}</span>
                {s.description ? (
                  <span
                    className={`mt-1 block text-xs leading-snug ${
                      isOn ? "text-canvas/80" : "text-steel"
                    }`}
                  >
                    {s.description}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Block 2: policy levers */}
      <fieldset className="mt-6">
        <legend className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
          2. Policy levers
        </legend>
        <div className="mt-3 grid gap-5 sm:grid-cols-2">
          <Slider
            label="Budget envelope"
            value={staged.budgetEnvelope}
            min={0}
            max={1500}
            step={25}
            unit="NZ$M"
            hint="Total policy spend assumed for each non-status-quo scenario over the lever period."
            onChange={(v) => update({ budgetEnvelope: v })}
            format={(v) => v.toFixed(0)}
          />
          <Slider
            label="Time horizon"
            value={staged.horizonYears}
            min={1}
            max={20}
            step={1}
            unit="years"
            hint="How far forward the simulation runs from today."
            onChange={(v) => update({ horizonYears: v })}
            format={(v) => v.toFixed(0)}
          />
        </div>
      </fieldset>

      {/* Block 3: uncertainty dials */}
      <fieldset className="mt-6">
        <legend className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">
          3. Uncertainty dials
        </legend>
        <p className="mt-1 text-xs leading-snug text-steel">
          Multiply the calibrated rate constants. 1.0x leaves the v0.3
          calibration unchanged; below 1.0 slows the response, above 1.0
          speeds it up.
        </p>
        <div className="mt-3 grid gap-5 sm:grid-cols-2">
          <Slider
            label="Adoption speed"
            value={staged.multipliers.adoption}
            min={0.5}
            max={1.5}
            step={0.05}
            unit="x"
            hint="How quickly sectors take up AI once the conditions are in place."
            onChange={(v) => updateMult({ adoption: v })}
          />
          <Slider
            label="Capability building"
            value={staged.multipliers.capability}
            min={0.5}
            max={1.5}
            step={0.05}
            unit="x"
            hint="How fast Tier 1 sectors build the absorptive capability that unlocks adoption."
            onChange={(v) => updateMult({ capability: v })}
          />
          <Slider
            label="Productivity sensitivity"
            value={staged.multipliers.productivity}
            min={0.5}
            max={1.5}
            step={0.05}
            unit="x"
            hint="How strongly adoption converts into realised productivity in each sector."
            onChange={(v) => updateMult({ productivity: v })}
          />
          <Slider
            label="Labour pressure sensitivity"
            value={staged.multipliers.labour}
            min={0.5}
            max={1.5}
            step={0.05}
            unit="x"
            hint="How strongly adoption translates into workforce adjustment pressure."
            onChange={(v) => updateMult({ labour: v })}
          />
        </div>
      </fieldset>

      {/* Advanced drawer */}
      <details
        className="mt-6 rounded-xl border border-ink/15 bg-white/60 p-4"
        open={advancedOpen}
        onToggle={(event) =>
          setAdvancedOpen((event.target as HTMLDetailsElement).open)
        }
      >
        <summary className="cursor-pointer text-sm font-medium text-ink">
          Advanced - lever shape
        </summary>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <Slider
            label="Lever duration"
            value={staged.leverDurationYears}
            min={1}
            max={20}
            step={1}
            unit="years"
            hint="How long the policy stays active. After this point, only diffused effects continue."
            onChange={(v) => update({ leverDurationYears: v })}
            format={(v) => v.toFixed(0)}
          />
          <Slider
            label="Mixed: demand share"
            value={staged.demandSupplySplit}
            min={0}
            max={1}
            step={0.05}
            unit="of budget"
            hint="In the Mixed scenario, share of the envelope routed to per-sector demand vs national supply."
            onChange={(v) => update({ demandSupplySplit: v })}
            format={(v) => `${Math.round(v * 100)}%`}
          />
        </div>
      </details>

      {/* Action bar */}
      <div className="mt-6 flex flex-wrap items-center justify-end gap-2 border-t border-ink/10 pt-4">
        <button
          type="button"
          onClick={onShare}
          className="rounded-xl border border-ink/20 px-3 py-2 text-sm text-ink hover:border-ink/40"
        >
          {shareLabel ?? "Copy share link"}
        </button>
        <button
          type="button"
          onClick={onReset}
          className="rounded-xl border border-ink/20 px-3 py-2 text-sm text-ink hover:border-ink/40 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isCalibrated && !isDirty}
        >
          Reset to calibration
        </button>
        <button
          type="button"
          onClick={onRun}
          className="rounded-xl bg-ink px-4 py-2 text-sm font-medium text-canvas hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!isDirty}
        >
          {isDirty ? "Run simulation" : "Run simulation (no changes)"}
        </button>
      </div>
    </section>
  );
}
