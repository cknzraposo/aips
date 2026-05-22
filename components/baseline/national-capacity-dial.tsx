type Props = {
  value: number; // 0..1
  label: string;
  caption: string;
};

const W = 560;
const H = 90;
const BAR_Y = 38;
const BAR_H = 22;
const PAD_X = 18;

export default function NationalCapacityDial({ value, label, caption }: Props) {
  const clamped = Math.max(0, Math.min(1, value));
  const barW = W - PAD_X * 2;
  const fillW = clamped * barW;
  const ticks = [0, 0.25, 0.5, 0.75, 1];

  return (
    <figure className="surface-card p-5">
      <figcaption className="mb-3">
        <p className="eyebrow">National enabling capacity</p>
        <h3 className="mt-1 font-display text-xl text-ink">{label}</h3>
        <p className="mt-1 text-sm text-steel">{caption}</p>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`National enabling capacity at ${(clamped * 100).toFixed(0)} percent`}
        className="block h-auto w-full"
      >
        {/* track */}
        <rect
          x={PAD_X}
          y={BAR_Y}
          width={barW}
          height={BAR_H}
          rx={4}
          fill="#e2e8f0"
        />
        {/* fill */}
        <rect
          x={PAD_X}
          y={BAR_Y}
          width={fillW}
          height={BAR_H}
          rx={4}
          fill="#0f172a"
        />
        {/* marker */}
        <line
          x1={PAD_X + fillW}
          x2={PAD_X + fillW}
          y1={BAR_Y - 6}
          y2={BAR_Y + BAR_H + 6}
          stroke="#ea580c"
          strokeWidth={2}
        />
        <text
          x={PAD_X + fillW}
          y={BAR_Y - 10}
          textAnchor="middle"
          className="fill-ink"
          fontSize={13}
          fontWeight={600}
        >
          {clamped.toFixed(2)}
        </text>
        {/* ticks */}
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={PAD_X + t * barW}
              x2={PAD_X + t * barW}
              y1={BAR_Y + BAR_H + 2}
              y2={BAR_Y + BAR_H + 6}
              stroke="#94a3b8"
            />
            <text
              x={PAD_X + t * barW}
              y={BAR_Y + BAR_H + 18}
              textAnchor="middle"
              className="fill-steel"
              fontSize={10}
            >
              {t.toFixed(2)}
            </text>
          </g>
        ))}
        {/* anchor labels */}
        <text x={PAD_X} y={BAR_Y - 8} className="fill-steel" fontSize={10}>
          minimal
        </text>
        <text
          x={PAD_X + barW}
          y={BAR_Y - 8}
          textAnchor="end"
          className="fill-steel"
          fontSize={10}
        >
          fully enabled
        </text>
      </svg>
    </figure>
  );
}
