// Shared concept diagram for the explainer and home pages.
//
// Renders the electrification analogy the sandbox is built around: a shared
// national grid (E) underpins every sector, policy spending either builds the
// grid (supply) or wires up a sector (demand), and a wired sector runs work on
// power (A) that yields output (P) while creating workforce strain (L).
//
// The SVG is decorative-with-meaning: it carries role="img" plus a full-sentence
// aria-label, and the visible mapping list below doubles as the text alternative
// and a no-detail-lost fallback. Colours reference the shared CSS tokens so the
// diagram tracks the rest of the palette.

type Variant = "full" | "compact";

type Tone = "grid" | "sector" | "payoff" | "strain";

const TONE_STYLE: Record<Tone, { fill: string; fillOpacity: number; stroke: string }> = {
  grid: { fill: "var(--datum)", fillOpacity: 0.1, stroke: "var(--datum)" },
  sector: { fill: "#ffffff", fillOpacity: 0.92, stroke: "var(--ink)" },
  payoff: { fill: "var(--accent)", fillOpacity: 0.1, stroke: "var(--accent)" },
  strain: { fill: "var(--steel)", fillOpacity: 0.1, stroke: "var(--steel)" },
};

type NodeProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  symbol: string;
  title: string;
  subtitle?: string;
  tone: Tone;
};

function Node({ x, y, w, h, symbol, title, subtitle, tone }: NodeProps) {
  const style = TONE_STYLE[tone];
  const cx = x + 26;
  const cy = y + 26;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={12}
        fill={style.fill}
        fillOpacity={style.fillOpacity}
        stroke={style.stroke}
        strokeWidth={1.5}
      />
      <circle cx={cx} cy={cy} r={15} fill={style.stroke} />
      <text
        x={cx}
        y={cy + 5}
        textAnchor="middle"
        fontSize={16}
        fontWeight={700}
        fill="#f7f3ea"
      >
        {symbol}
      </text>
      <text x={x + 52} y={y + 24} fontSize={14} fontWeight={600} fill="var(--ink)">
        {title}
      </text>
      {subtitle ? (
        <text x={x + 18} y={y + 50} fontSize={11.5} fill="var(--steel)">
          {subtitle}
        </text>
      ) : null}
    </g>
  );
}

const MAPPING: { symbol: string; label: string; gloss: string }[] = [
  { symbol: "E", label: "National grid", gloss: "Shared skills, infrastructure, trust, and rules every sector draws on." },
  { symbol: "K", label: "Sector wired up", gloss: "How ready a sector is to actually plug AI into its work." },
  { symbol: "A", label: "Work on power", gloss: "How much AI is in genuine operational use." },
  { symbol: "P", label: "Extra output", gloss: "The productivity gain actually delivered as use matures." },
  { symbol: "L", label: "Workforce strain", gloss: "Pressure on workers as roles are reorganised." },
];

function FullDiagram() {
  return (
    <svg
      viewBox="0 0 820 440"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram of the electrification analogy. A shared national grid, labelled E, underpins every sector. A policy budget splits into supply spending that builds the grid and demand spending that wires up a sector, labelled K. Once a sector is wired, work runs on power, labelled A, which yields extra output, labelled P, and creates workforce reorganisation strain, labelled L."
    >
      <title>How AI policy moves through the economy</title>
      <desc>
        Policy budget feeds the national grid (supply) and individual sectors (demand);
        a wired sector turns power into output while creating workforce strain.
      </desc>
      <defs>
        <marker id="arrow-ink" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--ink)" />
        </marker>
        <marker id="arrow-accent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--accent)" />
        </marker>
        <marker id="arrow-datum" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--datum)" />
        </marker>
      </defs>

      {/* Policy budget */}
      <Node x={285} y={18} w={250} h={50} symbol="$" title="Policy budget" subtitle="Same envelope, same horizon" tone="payoff" />

      {/* Sector pipeline */}
      <Node x={40} y={168} w={210} h={92} symbol="K" title="Sector wired up" subtitle="Skills, data, processes ready" tone="sector" />
      <Node x={305} y={168} w={210} h={92} symbol="A" title="Work on power" subtitle="AI in genuine use" tone="sector" />
      <Node x={570} y={168} w={210} h={92} symbol="P" title="Extra output" subtitle="Productivity gain delivered" tone="payoff" />

      {/* Labour strain */}
      <Node x={305} y={296} w={210} h={56} symbol="L" title="Workforce strain" tone="strain" />

      {/* National grid foundation */}
      <rect x={40} y={372} width={740} height={56} rx={12} fill="var(--datum)" fillOpacity={0.1} stroke="var(--datum)" strokeWidth={1.5} />
      <circle cx={66} cy={400} r={15} fill="var(--datum)" />
      <text x={66} y={405} textAnchor="middle" fontSize={16} fontWeight={700} fill="#f7f3ea">E</text>
      <text x={92} y={396} fontSize={14} fontWeight={600} fill="var(--ink)">National grid - shared by every sector</text>
      <text x={92} y={416} fontSize={11.5} fill="var(--steel)">Skills, infrastructure, trust, and the standards and rules for AI</text>

      {/* Policy -> demand -> K */}
      <path d="M360,68 C 300,110 220,128 150,166" fill="none" stroke="var(--accent)" strokeWidth={1.75} markerEnd="url(#arrow-accent)" />
      <text x={205} y={120} fontSize={11.5} fontWeight={600} fill="var(--accent)">demand</text>

      {/* Policy -> supply -> grid (routed down the right corridor) */}
      <path d="M470,66 C 700,90 800,210 790,360" fill="none" stroke="var(--accent)" strokeWidth={1.75} markerEnd="url(#arrow-accent)" />
      <text x={690} y={150} fontSize={11.5} fontWeight={600} fill="var(--accent)">supply</text>

      {/* Grid -> K (the grid underpins capability) */}
      <path d="M130,372 L132,264" fill="none" stroke="var(--datum)" strokeWidth={1.75} markerEnd="url(#arrow-datum)" />

      {/* K -> A */}
      <path d="M250,214 L301,214" fill="none" stroke="var(--ink)" strokeWidth={1.75} markerEnd="url(#arrow-ink)" />
      <text x={258} y={205} fontSize={11} fill="var(--steel)">opens</text>

      {/* A -> P */}
      <path d="M515,214 L566,214" fill="none" stroke="var(--ink)" strokeWidth={1.75} markerEnd="url(#arrow-ink)" />
      <text x={523} y={205} fontSize={11} fill="var(--steel)">yields</text>

      {/* A -> L */}
      <path d="M410,260 L410,292" fill="none" stroke="var(--steel)" strokeWidth={1.75} markerEnd="url(#arrow-ink)" />
      <text x={418} y={282} fontSize={11} fill="var(--steel)">strains</text>
    </svg>
  );
}

function CompactDiagram() {
  return (
    <svg
      viewBox="0 0 760 220"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram of the electrification analogy. A shared national grid, labelled E, underpins each sector. A wired-up sector, labelled K, lets work run on power, labelled A, which yields extra output, labelled P."
    >
      <title>How AI adoption turns into productivity</title>
      <desc>A shared national grid underpins each sector; a wired sector turns power into output.</desc>
      <defs>
        <marker id="arrow-ink-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--ink)" />
        </marker>
        <marker id="arrow-datum-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill="var(--datum)" />
        </marker>
      </defs>

      <Node x={30} y={24} w={210} h={84} symbol="K" title="Sector wired up" subtitle="Ready to use AI" tone="sector" />
      <Node x={275} y={24} w={210} h={84} symbol="A" title="Work on power" subtitle="AI in genuine use" tone="sector" />
      <Node x={520} y={24} w={210} h={84} symbol="P" title="Extra output" subtitle="Productivity gain" tone="payoff" />

      <rect x={30} y={150} width={700} height={48} rx={12} fill="var(--datum)" fillOpacity={0.1} stroke="var(--datum)" strokeWidth={1.5} />
      <circle cx={54} cy={174} r={13} fill="var(--datum)" />
      <text x={54} y={179} textAnchor="middle" fontSize={14} fontWeight={700} fill="#f7f3ea">E</text>
      <text x={78} y={179} fontSize={13} fontWeight={600} fill="var(--ink)">National grid - shared skills, infrastructure, trust, and rules</text>

      <path d="M240,66 L271,66" fill="none" stroke="var(--ink)" strokeWidth={1.75} markerEnd="url(#arrow-ink-c)" />
      <text x={246} y={57} fontSize={11} fill="var(--steel)">opens</text>
      <path d="M485,66 L516,66" fill="none" stroke="var(--ink)" strokeWidth={1.75} markerEnd="url(#arrow-ink-c)" />
      <text x={491} y={57} fontSize={11} fill="var(--steel)">yields</text>
      <path d="M120,150 L122,110" fill="none" stroke="var(--datum)" strokeWidth={1.75} markerEnd="url(#arrow-datum-c)" />
    </svg>
  );
}

type SystemDiagramProps = {
  variant?: Variant;
  className?: string;
};

/**
 * The shared electrification concept diagram.
 *
 * - `full` shows the whole system: policy budget (supply and demand), the grid
 *   foundation, the K to A to P pipeline, and the L strain branch.
 * - `compact` shows just the grid foundation under the K to A to P pipeline,
 *   for use on the home page.
 */
export default function SystemDiagram({ variant = "full", className }: SystemDiagramProps) {
  const showMapping = variant === "full";
  return (
    <figure className={className}>
      <div className="rounded-2xl border border-ink/15 bg-white/70 p-4 md:p-6">
        {variant === "full" ? <FullDiagram /> : <CompactDiagram />}
      </div>
      {showMapping ? (
        <figcaption className="mt-4">
          <p className="eyebrow">What each part means</p>
          <dl className="mt-2 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {MAPPING.map((m) => (
              <div key={m.symbol} className="flex gap-2 text-sm leading-relaxed">
                <dt className="shrink-0 font-semibold text-ink">
                  {m.symbol} - {m.label}:
                </dt>
                <dd className="text-steel">{m.gloss}</dd>
              </div>
            ))}
          </dl>
        </figcaption>
      ) : null}
    </figure>
  );
}
