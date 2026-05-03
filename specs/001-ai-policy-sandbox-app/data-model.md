# Data Model: Interactive AI Policy Sandbox App

## Entity: Published Content Version

**Purpose**: Identifies the reviewed repository content consumed by the public application.

**Fields**:

- `id`: stable version identifier, such as a release tag, commit SHA, or generated content version.
- `sourceRevision`: repository revision used to build the content.
- `publishedAt`: ISO date for publication.
- `summary`: short description of the published content set.
- `includes`: list of included scenario, sector, evidence, and registry content files.

**Relationships**:

- Owns many Policy Scenarios, Sectors, Evidence Records, and Approved Controls.
- Referenced by every Comparison Run and Static Summary Export.

**Validation Rules**:

- Must be present before public comparisons are shown.
- Must identify a source revision.
- Must not include unreviewed analyst draft content.

## Entity: Policy Scenario

**Purpose**: Represents a scenario archetype available for comparison.

**Fields**:

- `id`: stable scenario identifier.
- `name`: display name.
- `archetype`: status quo, aggregate, targeted demand-side, targeted supply-side, or mixed targeted.
- `description`: policy-neutral scenario description.
- `defaultBudgetEnvelope`: numeric or categorical budget envelope.
- `defaultHorizonYears`: default comparison horizon.
- `assumptions`: list of scenario-level assumptions.
- `caveats`: non-forecast and evidence caveats.
- `evidenceRefs`: Evidence Record identifiers.

**Relationships**:

- Used by Comparison Runs.
- References Evidence Records.

**Validation Rules**:

- Must preserve scenario-as-archetype language.
- Must not describe a scenario as a recommendation.
- Must declare default budget and horizon for like-for-like comparison.

## Entity: Sector

**Purpose**: Represents one ANZSIC Level 1 sector in the whole-economy model denominator.

**Fields**:

- `id`: stable sector identifier.
- `anzsicCode`: ANZSIC Level 1 code.
- `name`: sector name.
- `tier`: 1, 2, or 3.
- `baselineAssumptions`: sector assumptions used in comparisons.
- `evidenceRefs`: Evidence Record identifiers.

**Relationships**:

- Used in aggregate comparison coverage checks.
- References Evidence Records.

**Validation Rules**:

- Aggregate comparison content must include all 19 ANZSIC Level 1 sectors.
- Tier 1 sectors must support full explanatory detail.
- Tier 2 and Tier 3 sectors must be included in whole-economy totals even if simplified.

## Entity: Outcome Dimension

**Purpose**: Defines the dimensions used to compare policy tradeoffs.

**Fields**:

- `id`: stable outcome identifier.
- `name`: productivity, adoption spread, labour adjustment pressure, or national enabling capacity.
- `description`: plain-language description.
- `directionality`: whether higher values are beneficial, costly, or contextual.
- `caveats`: interpretation notes.

**Relationships**:

- Each Comparison Run reports values or indicators for each Outcome Dimension.

**Validation Rules**:

- Must not collapse multiple dimensions into a single best-policy score.
- Must include caveats where interpretation is context-dependent.

## Entity: Evidence Record

**Purpose**: Captures provenance for assumptions, parameters, and displayed claims.

**Fields**:

- `id`: stable evidence identifier.
- `evidenceClass`: observed, derived, expert, placeholder, or assumed.
- `source`: citation or source ID.
- `method`: method used to derive or apply the evidence.
- `confidence`: high, medium, or low.
- `accessDate`: ISO date where available.
- `selectionBias`: known bias or limitation where available.
- `notes`: caveats or review notes.

**Relationships**:

- Referenced by Policy Scenarios, Sectors, and Summary Exports.

**Validation Rules**:

- Must distinguish evidence class explicitly.
- Observed and derived evidence should include source and method.
- Weak, placeholder, or assumed evidence must be visible to users.

## Entity: Approved Control

**Purpose**: Defines a public user control that can be adjusted for temporary cause-and-effect visualisation.

**Fields**:

- `id`: stable control identifier.
- `type`: scenario selection, budget envelope, time horizon, or uncertainty range.
- `label`: user-facing label.
- `description`: plain-language description.
- `defaultValue`: value from reviewed content.
- `allowedRange`: allowed values or range.
- `appliesTo`: scenario, outcome, sector group, or comparison-wide target.
- `caveat`: explanatory caveat shown near the control.

**Relationships**:

- Used by Comparison Runs as exploratory input.

**Validation Rules**:

- Must not expose sector-specific parameter editing to public users.
- Must not alter authoritative data or model parameters.
- Must be published through reviewed content before appearing in the public app.

## Entity: Comparison Run

**Purpose**: Represents a public browser-session-only comparison state.

**Fields**:

- `selectedScenarioIds`: selected Policy Scenario identifiers.
- `budgetEnvelope`: exploratory budget envelope.
- `horizonYears`: exploratory time horizon.
- `approvedControlValues`: values for approved public controls.
- `publishedContentVersionId`: content version used.
- `createdInSessionAt`: client-side timestamp.

**Relationships**:

- References Published Content Version, Policy Scenarios, Approved Controls, Sectors, Outcome Dimensions, and Evidence Records.
- Can produce one Static Summary Export.

**Validation Rules**:

- Must remain browser-session-only for public users.
- Must not be saved as an application record.
- Must flag inconsistent budget, horizon, sector coverage, or scenario assumptions.

## Entity: Static Summary Export

**Purpose**: A downloadable summary for sharing public exploratory results without server-side run persistence.

**Fields**:

- `title`: summary title.
- `generatedAt`: client-side export timestamp.
- `publishedContentVersionId`: content version used.
- `selectedScenarios`: selected scenario names and IDs.
- `exploratoryInputs`: public input values used.
- `tradeoffSummary`: outcome dimension summary.
- `sensitivityNotes`: conclusions sensitive to uncertainty.
- `evidenceCaveats`: caveats and weak evidence notes.
- `nonForecastStatement`: required statement that results are comparative and uncertain.

**Relationships**:

- Derived from a Comparison Run.

**Validation Rules**:

- Must include published content version.
- Must include non-forecast framing.
- Must include caveats for weak, placeholder, or assumed evidence.
- Must not imply a definitive recommendation or ranking.

## State Transitions

```text
Reviewed repo content -> Published Content Version -> Public comparison session -> Static Summary Export

Analyst draft change -> Repository review -> Published Content Version
Analyst draft change -> Not reviewed -> Not visible as authoritative content

Public exploratory input -> Browser session state -> Discarded when session ends
Public exploratory input -> Static Summary Export -> Downloaded file only
```
