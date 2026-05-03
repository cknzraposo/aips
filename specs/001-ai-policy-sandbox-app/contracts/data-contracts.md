# Contracts: Interactive AI Policy Sandbox App

The showcase MVP has no public write API and no saved public runs. Its primary contracts are repo-backed content contracts, comparison state contracts, and static summary export contracts.

## Published Content Contract

Authoritative app content is loaded from reviewed YAML/JSON files in the repository and validated with Zod before use.

Required shape:

```ts
type PublishedContentVersion = {
  id: string;
  sourceRevision: string;
  publishedAt: string;
  summary: string;
  includes: string[];
};
```

Contract rules:

- `id` and `sourceRevision` are required for every public comparison.
- Only reviewed repository content can produce a Published Content Version.
- Displayed comparisons and exports must identify the Published Content Version.

## Scenario Contract

```ts
type PolicyScenario = {
  id: string;
  name: string;
  archetype: 'status-quo' | 'aggregate' | 'targeted-demand-side' | 'targeted-supply-side' | 'mixed-targeted';
  description: string;
  defaultBudgetEnvelope: number | string;
  defaultHorizonYears: number;
  assumptions: string[];
  caveats: string[];
  evidenceRefs: string[];
};
```

Contract rules:

- Scenario text must frame scenarios as archetypes, not recommendations.
- Budget and horizon defaults are required.
- Evidence references must resolve to Evidence Records.

## Sector Contract

```ts
type Sector = {
  id: string;
  anzsicCode: string;
  name: string;
  tier: 1 | 2 | 3;
  baselineAssumptions: string[];
  evidenceRefs: string[];
};
```

Contract rules:

- Aggregate comparison data must include exactly the 19 ANZSIC Level 1 sectors.
- Tier information is required for every sector.
- Tier 2 and Tier 3 sectors cannot be omitted from aggregate totals.

## Evidence Record Contract

```ts
type EvidenceRecord = {
  id: string;
  evidenceClass: 'observed' | 'derived' | 'expert' | 'placeholder' | 'assumed';
  source?: string;
  method?: string;
  confidence?: 'high' | 'medium' | 'low';
  accessDate?: string;
  selectionBias?: string;
  notes?: string;
};
```

Contract rules:

- Evidence class is required.
- Observed and derived records should include source and method.
- Placeholder, assumed, low-confidence, or missing evidence must be surfaced in UI and exports.

## Approved Control Contract

```ts
type ApprovedControl = {
  id: string;
  type: 'scenario-selection' | 'budget-envelope' | 'time-horizon' | 'uncertainty-range';
  label: string;
  description: string;
  defaultValue: unknown;
  allowedRange?: unknown;
  appliesTo: string[];
  caveat: string;
};
```

Contract rules:

- Public controls are limited to the listed `type` values.
- Public controls must not expose sector-specific parameter editing.
- Controls must be published through reviewed repo content before appearing publicly.

## Public Comparison State Contract

```ts
type PublicComparisonState = {
  selectedScenarioIds: string[];
  budgetEnvelope: number | string;
  horizonYears: number;
  approvedControlValues: Record<string, unknown>;
  publishedContentVersionId: string;
  createdInSessionAt: string;
};
```

Contract rules:

- State is browser-session-only for public users.
- State must not be posted to a server for persistence.
- Comparisons must flag inconsistent budget, horizon, sector coverage, or scenario assumptions.

## Static Summary Export Contract

```ts
type StaticSummaryExport = {
  title: string;
  generatedAt: string;
  publishedContentVersionId: string;
  selectedScenarios: Array<{ id: string; name: string }>;
  exploratoryInputs: Record<string, unknown>;
  tradeoffSummary: string;
  sensitivityNotes: string[];
  evidenceCaveats: string[];
  nonForecastStatement: string;
};
```

Contract rules:

- Export must include selected scenarios, exploratory inputs, published content version, tradeoffs, uncertainty notes, and caveats.
- Export must include non-forecast framing.
- Export must not imply a definitive recommendation, exact GDP prediction, exact employment prediction, or definitive sector ranking.
