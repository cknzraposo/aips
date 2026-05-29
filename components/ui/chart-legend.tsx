import type { ReactNode } from "react";

export type ChartLegendItem = {
  /** Stable key for the item. */
  id: string;
  colour: string;
  label: ReactNode;
  /** "swatch" draws a filled square; "line" draws a horizontal rule. */
  shape?: "swatch" | "line";
  /** Render the line/swatch with the reference dash pattern. */
  dashed?: boolean;
};

type Props = {
  items: ReadonlyArray<ChartLegendItem>;
};

/** Shared legend used by the baseline and compare charts. */
export default function ChartLegend({ items }: Props) {
  return (
    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-steel">
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-2">
          {item.shape === "line" ? (
            <svg aria-hidden width={20} height={6} className="inline-block">
              <line
                x1={0}
                x2={20}
                y1={3}
                y2={3}
                stroke={item.colour}
                strokeWidth={2}
                strokeDasharray={item.dashed ? "4 3" : undefined}
              />
            </svg>
          ) : (
            <svg aria-hidden width={8} height={8} className="inline-block">
              <rect width={8} height={8} rx={1.5} fill={item.colour} />
            </svg>
          )}
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
