import {
  OECD_APAC_META,
  OECD_APAC_ROWS,
  type OECDApacRow,
} from "@/lib/oecd-apac";

function formatUsd(approxUsdMillions: number | null): string {
  if (approxUsdMillions === null) return "n/a";
  if (approxUsdMillions >= 1000) {
    return `\u2248 US$${(approxUsdMillions / 1000).toFixed(1)}B`;
  }
  return `\u2248 US$${approxUsdMillions.toLocaleString()}M`;
}

function formatPerCapita(row: OECDApacRow): string {
  if (row.investment.approxUsdMillions === null) return "n/a";
  // Per-capita USD = (USD millions * 1,000,000) / (population millions * 1,000,000)
  const perCapita = row.investment.approxUsdMillions / row.populationMillions;
  if (perCapita >= 100) return `\u2248 US$${perCapita.toFixed(0)}/person`;
  return `\u2248 US$${perCapita.toFixed(1)}/person`;
}

function confidenceTone(c: OECDApacRow["evidence"]["confidence"]): string {
  switch (c) {
    case "high":
      return "border-datum/40 bg-datum/10 text-ink";
    case "medium":
      return "border-ink/20 bg-white text-ink";
    case "low":
      return "border-accent/40 bg-accent/10 text-ink";
  }
}

export default function ApacInvestmentTable() {
  return (
    <section className="surface-card p-6" id="apac-comparison">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="eyebrow">International context</p>
          <h2 className="mt-1 font-display text-2xl text-ink">
            How NZ compares: APAC OECD members&apos; AI investment
          </h2>
        </div>
        <a
          href={OECD_APAC_META.baseSource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-ink underline underline-offset-4"
        >
          {OECD_APAC_META.baseSource.label} ↗
        </a>
      </header>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">
        The four OECD member countries in APAC have taken visibly different
        positions on national AI investment. The figures below are headline
        commitments - the amounts each government has publicly earmarked,
        not amounts spent or independently evaluated. Use the per-capita
        column to read scale relative to population, not as a forecast or
        ranking.
      </p>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-[0.12em] text-steel">
              <th scope="col" className="border-b border-ink/15 py-2 pr-3">
                Country
              </th>
              <th scope="col" className="border-b border-ink/15 px-3 py-2">
                National AI strategy
              </th>
              <th scope="col" className="border-b border-ink/15 px-3 py-2">
                Headline AI investment
              </th>
              <th scope="col" className="border-b border-ink/15 px-3 py-2">
                Approx. USD
              </th>
              <th scope="col" className="border-b border-ink/15 px-3 py-2">
                Per capita
              </th>
              <th scope="col" className="border-b border-ink/15 px-3 py-2">
                Evidence
              </th>
              <th scope="col" className="border-b border-ink/15 py-2 pl-3">
                Source
              </th>
            </tr>
          </thead>
          <tbody>
            {OECD_APAC_ROWS.map((row) => (
              <tr
                key={row.code}
                className={row.code === "NZ" ? "bg-ink/[0.03]" : undefined}
              >
                <th
                  scope="row"
                  className="border-b border-ink/10 py-3 pr-3 align-top"
                >
                  <span className="font-mono text-[11px] text-steel">
                    {row.code}
                  </span>
                  <span className="ml-2 font-display text-base text-ink">
                    {row.name}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-steel">
                    pop {row.populationMillions.toFixed(1)}M
                  </span>
                </th>
                <td className="border-b border-ink/10 px-3 py-3 align-top text-ink">
                  <span className="block">{row.strategy.name}</span>
                  <span className="mt-0.5 block text-[11px] text-steel">
                    {row.strategy.year}
                  </span>
                </td>
                <td className="border-b border-ink/10 px-3 py-3 align-top text-ink">
                  <span className="block font-medium">
                    {row.investment.label}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-steel">
                    {row.investment.period}
                  </span>
                  <span className="mt-1 block text-[11px] leading-snug text-steel">
                    {row.investment.scope}
                  </span>
                </td>
                <td className="border-b border-ink/10 px-3 py-3 align-top font-mono text-xs tabular-nums text-ink">
                  {formatUsd(row.investment.approxUsdMillions)}
                </td>
                <td className="border-b border-ink/10 px-3 py-3 align-top font-mono text-xs tabular-nums text-ink">
                  {formatPerCapita(row)}
                </td>
                <td className="border-b border-ink/10 px-3 py-3 align-top">
                  <span
                    className={`inline-flex flex-col rounded-md border px-2 py-1 text-[11px] ${confidenceTone(row.evidence.confidence)}`}
                  >
                    <span className="font-medium capitalize">
                      {row.evidence.class}
                    </span>
                    <span className="text-steel">
                      {row.evidence.confidence} confidence
                    </span>
                  </span>
                </td>
                <td className="border-b border-ink/10 py-3 pl-3 align-top">
                  <div className="grid gap-1">
                    <a
                      href={row.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-ink underline underline-offset-4"
                    >
                      {row.sourceLabel} ↗
                    </a>
                    <a
                      href={row.oecdAiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-steel underline underline-offset-4"
                    >
                      OECD AI dashboard ↗
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {OECD_APAC_ROWS.map((row) => (
          <details
            key={`note-${row.code}`}
            className="rounded-xl border border-ink/15 bg-white p-3 text-sm"
          >
            <summary className="cursor-pointer font-medium text-ink">
              {row.name} - context
            </summary>
            <p className="mt-2 text-xs leading-relaxed text-steel">
              {row.notes}
            </p>
          </details>
        ))}
      </div>

      <aside
        role="note"
        className="mt-5 rounded-2xl border border-accent/40 bg-accent/10 p-4 text-xs leading-relaxed text-ink"
      >
        <p className="font-medium">How to read this table</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-steel">
          <li>
            Headline figures are <em>announcements</em>, not audited spend.
            They cover different periods, scopes (R&amp;D vs adoption vs
            compute), and accounting boundaries.
          </li>
          <li>
            {OECD_APAC_META.fxNote} Treat USD totals as direction of
            magnitude only.
          </li>
          <li>
            Per-capita figures are derived from the headline envelope divided
            by population - they do not adjust for purchasing power, FX
            timing, or programme duration.
          </li>
          <li>
            New Zealand has policy frameworks in place but no consolidated AI
            investment envelope in current budgets, which is the gap this
            sandbox helps stress-test.
          </li>
          <li>
            Last reviewed {OECD_APAC_META.lastReviewed}. Refresh from the{" "}
            <a
              href={OECD_APAC_META.baseSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              OECD AI Policy Observatory
            </a>{" "}
            before reusing in published material.
          </li>
        </ul>
      </aside>
    </section>
  );
}
