/**
 * APAC OECD member countries: published AI investment commitments and
 * national AI strategies, as catalogued by the OECD AI Policy Observatory.
 *
 * All figures are headline announcements - the dollar amount governments
 * have publicly earmarked for AI, not amounts spent or evaluated. Currency
 * conversions are approximate, taken from OECD AI dashboards or the source
 * documents at the time of the announcement. Treat values as direction of
 * magnitude for comparison, not point estimates.
 *
 * Evidence class on each row reflects the public commitment (observed),
 * with confidence tagged per row. Refresh against OECD AI Policy
 * Observatory country dashboards when adding a new content version.
 */

export type EvidenceClass = "observed" | "derived" | "expert" | "placeholder";
export type Confidence = "low" | "medium" | "high";

export interface OECDApacRow {
  /** ISO 3166-1 alpha-2 code. */
  code: "AU" | "JP" | "KR" | "NZ";
  name: string;
  /** Approximate population in millions (OECD Data, 2024 vintage). */
  populationMillions: number;
  /** Most prominent national AI strategy and year published or refreshed. */
  strategy: { name: string; year: number };
  /** Headline AI investment as publicly announced. */
  investment: {
    /** Short label shown in the table cell, e.g. "A$102.0M". */
    label: string;
    /** Period covered by the announcement. */
    period: string;
    /**
     * Approximate USD equivalent for cross-country sizing.
     * `null` where no consolidated AI budget envelope is reported.
     */
    approxUsdMillions: number | null;
    /** Scope of the headline figure. */
    scope: string;
  };
  evidence: { class: EvidenceClass; confidence: Confidence };
  /** OECD AI Policy Observatory country dashboard URL. */
  oecdAiUrl: string;
  /** Primary source URL (official strategy doc or budget paper). */
  sourceUrl: string;
  sourceLabel: string;
  /** One-line plain-English context, NZ English. */
  notes: string;
}

export const OECD_APAC_ROWS: ReadonlyArray<OECDApacRow> = [
  {
    code: "AU",
    name: "Australia",
    populationMillions: 26.8,
    strategy: { name: "Safe and Responsible AI agenda", year: 2024 },
    investment: {
      label: "A$102.0M",
      period: "5 years from 2023-24",
      approxUsdMillions: 68,
      scope:
        "Responsible AI uptake, National AI Centre, regulator capability",
    },
    evidence: { class: "observed", confidence: "medium" },
    oecdAiUrl: "https://oecd.ai/en/dashboards/countries/Australia",
    sourceUrl:
      "https://www.industry.gov.au/news/government-response-safe-and-responsible-ai-australia-consultation",
    sourceLabel: "DISR - Government response: Safe and Responsible AI",
    notes:
      "Funds the National AI Centre, the AI in Government Taskforce, and standards work. Defence AI and broader digital programmes sit outside this envelope.",
  },
  {
    code: "JP",
    name: "Japan",
    populationMillions: 124.5,
    strategy: {
      name: "AI Strategy 2022 (annually updated) + Hiroshima AI Process",
      year: 2022,
    },
    investment: {
      label: "\u00a572.5B",
      period: "FY2024 GENIAC programme",
      approxUsdMillions: 470,
      scope:
        "Generative AI compute and foundation-model R&D (GENIAC)",
    },
    evidence: { class: "observed", confidence: "medium" },
    oecdAiUrl: "https://oecd.ai/en/dashboards/countries/Japan",
    sourceUrl: "https://www.meti.go.jp/english/press/2024/0202_002.html",
    sourceLabel: "METI - GENIAC generative AI development support",
    notes:
      "Headline figure is METI's GENIAC compute and model-development envelope. Additional AIST and NEDO compute investments add further hundreds of billions of yen across multiple years.",
  },
  {
    code: "KR",
    name: "Korea",
    populationMillions: 51.7,
    strategy: {
      name: "National AI Strategy (refreshed) + K-AI initiative",
      year: 2023,
    },
    investment: {
      label: "\u20a99.4T",
      period: "Announced May 2024, to 2027",
      approxUsdMillions: 7000,
      scope:
        "AI semiconductor R&D, compute infrastructure, talent, public-sector adoption",
    },
    evidence: { class: "observed", confidence: "medium" },
    oecdAiUrl: "https://oecd.ai/en/dashboards/countries/Korea",
    sourceUrl: "https://english.president.go.kr/briefing/Speeches/Wb6Q4kFc",
    sourceLabel: "Office of the President - AI G3 Strategy briefing",
    notes:
      "Largest headline AI commitment in the APAC OECD set. Spans the AI-semiconductor fab programme (approximately \u20a91.4T) and the wider K-AI envelope to 2027.",
  },
  {
    code: "NZ",
    name: "New Zealand",
    populationMillions: 5.2,
    strategy: {
      name: "MBIE Public Service AI Framework + AI Strategy",
      year: 2024,
    },
    investment: {
      label: "No consolidated AI budget envelope",
      period: "Budgets 2023-2025",
      approxUsdMillions: null,
      scope:
        "Policy frameworks, Algorithm Charter, sector-specific digital lines",
    },
    evidence: { class: "observed", confidence: "low" },
    oecdAiUrl: "https://oecd.ai/en/dashboards/national/new-zealand",
    sourceUrl:
      "https://www.mbie.govt.nz/business-and-employment/economic-development/artificial-intelligence",
    sourceLabel: "MBIE - Artificial Intelligence in New Zealand",
    notes:
      "No standalone AI funding programme appears in Budgets 2023-2025. Activity is spread across MBIE, DPMC, Stats NZ, and sector agencies, so a single comparable envelope is not reported. AI Forum NZ has flagged this gap in successive State of AI reports.",
  },
];

export const OECD_APAC_META = {
  lastReviewed: "2026-05-23",
  baseSource: {
    label: "OECD AI Policy Observatory - country dashboards",
    url: "https://oecd.ai/en/dashboards/countries",
  },
  fxNote:
    "USD equivalents are approximate, using the OECD AI Policy Observatory's reported conversions or central-bank reference rates at announcement date.",
} as const;
