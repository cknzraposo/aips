"use client";

import { useId } from "react";

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (next: number) => void;
  /** Suffix shown beside the numeric readout, e.g. "years" or "x". */
  unit?: string;
  /** Short helper text rendered under the label. */
  hint?: string;
  /** Override how the readout is formatted (defaults to two-decimal). */
  format?: (value: number) => string;
  disabled?: boolean;
};

/**
 * Labelled range slider with a numeric readout. No third-party dependency.
 * Keyboard support comes from the native range input (Arrow / Page keys).
 */
export default function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  unit,
  hint,
  format,
  disabled,
}: SliderProps) {
  const id = useId();
  const display = format ? format(value) : value.toFixed(step < 1 ? 2 : 0);
  return (
    <div className="grid gap-1.5">
      <div className="flex items-baseline justify-between gap-3">
        <label
          htmlFor={id}
          className="text-sm font-medium text-ink"
        >
          {label}
        </label>
        <span className="font-mono text-xs tabular-nums text-ink">
          {display}
          {unit ? <span className="ml-1 text-steel">{unit}</span> : null}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-ink/10 accent-ink disabled:cursor-not-allowed disabled:opacity-50"
      />
      {hint ? <p className="text-xs leading-snug text-steel">{hint}</p> : null}
    </div>
  );
}
