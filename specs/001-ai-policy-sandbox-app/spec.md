# Feature Specification: Interactive AI Policy Sandbox App

**Feature Branch**: `001-build-ai-policy-sandbox`  
**Created**: 2026-05-03  
**Status**: Draft  
**Input**: User description: "an interactive application as a New Zealand AI Policy Sandbox: a transparent, NZ sector-calibrated policy sandbox for comparing AI policy tradeoffs under uncertainty. Treat it as a policy comparison framework and structured evidence synthesis, not as a forecasting engine, black-box simulator, definitive adoption ranking, or source of exact GDP and employment predictions"

## Clarifications

### Session 2026-05-03

- Q: What access model should the application use for public users versus analysts? → A: Public read-only users can adjust allowed exploratory variables to visualise cause and effect; only analysts can change repository content or authoritative data.
- Q: Which exploratory variables should public read-only users be allowed to adjust? → A: Public users can adjust scenario selection, budget envelope, time horizon, and approved uncertainty ranges; authoritative data and model parameters remain locked.
- Q: How should analyst changes become authoritative application data? → A: Analyst changes are made through repository-reviewed data and specification files; the app consumes only published reviewed content.
- Q: How should public comparison runs be persisted or shared? → A: Public runs exist only in the browser session; users can export a static summary file.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Compare Policy Tradeoffs (Priority: P1)

A public user or policy analyst compares multiple AI policy archetypes under the same high-level assumptions so they can understand tradeoffs across productivity, adoption spread, labour adjustment pressure, and national enabling capacity without treating outputs as forecasts.

**Why this priority**: This is the core purpose of the sandbox and provides the minimum useful experience for structured policy comparison.

**Independent Test**: Can be tested by selecting at least two policy scenarios, applying a common budget and horizon, and reviewing a side-by-side tradeoff summary that explicitly frames results as comparative and uncertain.

**Acceptance Scenarios**:

1. **Given** a public user has opened the sandbox, **When** they select two or more policy scenarios, **Then** the application presents comparable outcomes across all core tradeoff dimensions.
2. **Given** selected scenarios use different budget or horizon assumptions, **When** the user attempts to compare them, **Then** the application flags the comparability issue and prompts for like-for-like assumptions.
3. **Given** the user reviews scenario outputs, **When** output values are shown, **Then** the application displays caveats that the outputs are structured comparisons under uncertainty, not forecasts or exact predictions.
4. **Given** a public user adjusts scenario selection, budget envelope, time horizon, or an approved uncertainty range, **When** the comparison updates, **Then** the application treats the change as a temporary visualisation and does not alter authoritative repository data, evidence records, or model parameters.
5. **Given** a public user has created an exploratory comparison, **When** they leave the browser session, **Then** the application does not preserve the run as a saved application record.

---

### User Story 2 - Inspect Sector And Evidence Basis (Priority: P2)

A researcher or reviewer inspects how scenario comparisons relate to New Zealand sector coverage and the evidence base, including where evidence is observed, derived, expert, placeholder, or assumed.

**Why this priority**: The sandbox must be transparent enough for reviewers to understand the basis and limits of each comparison.

**Independent Test**: Can be tested by opening a sector or outcome detail view and tracing the displayed assumptions to evidence class, source, method, confidence, access date, and caveat information where available.

**Acceptance Scenarios**:

1. **Given** a reviewer is viewing comparison results, **When** they inspect a sector contribution, **Then** the application identifies the sector, tier, key assumptions, and evidence provenance used in the comparison.
2. **Given** an assumption relies on weak or placeholder evidence, **When** it appears in the interface, **Then** the application labels the evidence weakness plainly and avoids implying precision.
3. **Given** whole-economy comparison is requested, **When** the reviewer checks sector coverage, **Then** all 19 ANZSIC Level 1 sectors are represented through the Tier 1, Tier 2, and Tier 3 structure.
4. **Given** an analyst has proposed a change to authoritative data or scenario definitions, **When** the change has not completed repository review, **Then** the application does not expose it as published authoritative content.

---

### User Story 3 - Explore Uncertainty And Sensitivity (Priority: P3)

A policy user explores how uncertain assumptions affect the direction and relative scale of scenario tradeoffs so they can identify robust conclusions and fragile conclusions.

**Why this priority**: Uncertainty is central to the sandbox framing, but this can build on the core comparison and transparency experience.

**Independent Test**: Can be tested by adjusting assumption ranges and confirming that the application updates the comparison narrative, uncertainty indication, and caveats without producing a single definitive ranking.

**Acceptance Scenarios**:

1. **Given** a user is viewing a scenario comparison, **When** they adjust an uncertainty range for an assumption, **Then** the application updates the tradeoff view and indicates which conclusions are sensitive to that assumption.
2. **Given** scenario results are close or evidence is weak, **When** the user reviews the comparison, **Then** the application identifies the conclusion as uncertain rather than presenting a definitive winner.
3. **Given** the user wants to share findings, **When** they produce a summary, **Then** the summary includes scenario assumptions, caveats, evidence limitations, and the comparative nature of the result.
4. **Given** a public user exports a static summary, **When** another person reads it, **Then** the summary includes the selected scenarios, exploratory inputs, published content version, and caveats needed to interpret the result.

### Edge Cases

- When evidence is missing for a sector or parameter, the application must label the gap and use the agreed placeholder or assumed classification rather than hiding the uncertainty.
- When a user attempts to compare only Tier 1 sectors for an aggregate policy question, the application must warn that whole-economy coverage requires all 19 ANZSIC Level 1 sectors.
- When a user tries to interpret outputs as exact GDP, employment, adoption, or sector-ranking forecasts, the application must present corrective framing in the result text or summary.
- When scenarios use different budgets, horizons, or incompatible assumptions, the application must prevent or clearly flag direct head-to-head comparison.
- When sensitivity changes reverse a tradeoff conclusion, the application must make the reversal visible and identify the assumption behind it.
- When a public user adjusts scenario selection, budget envelope, time horizon, or approved uncertainty ranges, the application must clearly distinguish those temporary visualisation inputs from analyst-controlled authoritative assumptions, data, and model parameters.
- When analyst changes are proposed but not yet reviewed through the repository workflow, the application must continue using the last published reviewed content.
- When a public browser session ends, the application must not retain the user's exploratory comparison as a saved run.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The application MUST provide an interactive policy comparison workspace centred on the New Zealand AI Policy Sandbox framing.
- **FR-001a**: The application MUST allow public read-only users to explore scenario selection, budget envelope, time horizon, and approved uncertainty ranges for cause-and-effect visualisation without changing repository content, authoritative assumptions, model parameters, or source data.
- **FR-002**: The application MUST allow users to compare at least two policy scenarios under a shared budget envelope and simulation horizon.
- **FR-003**: The application MUST support the recognised scenario archetypes, including status quo, aggregate, targeted demand-side, targeted supply-side, and mixed targeted options.
- **FR-004**: The application MUST represent whole-economy comparisons across all 19 ANZSIC Level 1 sectors using the Tier 1, Tier 2, and Tier 3 structure.
- **FR-005**: The application MUST report scenario tradeoffs across productivity, adoption spread, labour adjustment pressure, and national enabling capacity.
- **FR-006**: The application MUST describe outputs as comparative reasoning under uncertainty and MUST NOT present them as forecasts, exact GDP predictions, exact employment predictions, definitive adoption rankings, or definitive sector rankings.
- **FR-007**: Users MUST be able to inspect sector-level assumptions, outcome drivers, and evidence provenance for displayed comparisons.
- **FR-008**: Evidence records shown in the application MUST distinguish observed, derived, expert, placeholder, and assumed evidence classes.
- **FR-009**: Evidence and parameter displays MUST include source, method, confidence, access date, and selection-bias notes where available.
- **FR-010**: The application MUST make weak, missing, placeholder, or assumed evidence visible in both detailed views and generated summaries.
- **FR-011**: Users MUST be able to adjust approved uncertainty ranges for comparison purposes while retaining the original evidence and caveat context.
- **FR-012**: The application MUST identify when conclusions are sensitive to uncertain assumptions.
- **FR-013**: The application MUST prevent or clearly flag comparisons that use inconsistent budget envelopes, horizons, sector coverage, or scenario assumptions.
- **FR-014**: Users MUST be able to produce a shareable comparison summary that includes selected scenarios, key assumptions, tradeoffs, uncertainty notes, and evidence caveats.
- **FR-015**: The application MUST preserve the sandbox's policy-neutral posture by presenting scenarios as archetypes for comparison, not as recommendations.
- **FR-016**: Only analysts MUST be able to change authoritative data, evidence records, scenario definitions, or repository-backed content.
- **FR-017**: Public users MUST NOT be able to edit sector-specific parameter values, evidence records, source data, model structure, or repository-backed scenario definitions.
- **FR-018**: Analyst changes to authoritative data, evidence records, scenario definitions, or specification files MUST become available in the application only after repository review and publication.
- **FR-019**: The application MUST identify the published content version or source revision used for displayed comparisons.
- **FR-020**: Public comparison runs MUST remain browser-session-only and MUST NOT be saved as application records.
- **FR-021**: Public users MUST be able to export a static summary file for an exploratory comparison.
- **FR-022**: The application MUST use uniform navigation, public controls, terminology, caveat presentation, accessibility patterns, and responsive behaviour across comparison, evidence, methodology, and export flows.

### Key Entities *(include if feature involves data)*

- **Policy Scenario**: A policy archetype or scenario configuration used for comparison, including budget envelope, horizon, assumptions, and caveats.
- **Sector**: One of the 19 ANZSIC Level 1 sectors, including tier classification and sector-specific assumptions.
- **Outcome Dimension**: A comparison dimension such as productivity, adoption spread, labour adjustment pressure, or national enabling capacity.
- **Evidence Record**: A provenance item supporting a parameter, assumption, or sector baseline, including evidence class, source, method, confidence, access date, and limitations.
- **Published Content Version**: The repository-reviewed data, evidence, scenario, and specification state consumed by the application for authoritative comparisons.
- **Comparison Run**: A user-created comparison of selected scenarios under shared assumptions, including resulting tradeoffs and uncertainty notes.
- **Static Summary Export**: A user-generated file containing selected scenarios, exploratory inputs, published content version, tradeoffs, uncertainty notes, and caveats without creating a saved application record.
- **Sensitivity Setting**: A user-adjustable assumption range used to explore uncertainty and robustness of conclusions.
- **Exploratory Input**: A public read-only adjustment to scenario selection, budget envelope, time horizon, or an approved uncertainty range, used for temporary cause-and-effect visualisation without changing authoritative data, model parameters, or scenario definitions.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A public user or policy analyst can complete a like-for-like comparison of three scenarios across all core tradeoff dimensions in under 10 minutes.
- **SC-002**: 100% of aggregate comparison summaries include all 19 ANZSIC Level 1 sectors or explicitly explain why the comparison is not whole-economy.
- **SC-003**: 100% of generated summaries include language stating that outputs are comparative and uncertain, not forecasts or exact predictions.
- **SC-004**: At least 90% of test reviewers can trace a displayed sector assumption to its evidence class and source information within two interactions.
- **SC-005**: At least 90% of test users correctly identify that the sandbox compares policy tradeoffs and does not recommend a single best policy option.
- **SC-006**: At least 95% of scenario comparisons with inconsistent budget, horizon, or sector coverage are flagged before the user treats them as like-for-like comparisons.
- **SC-007**: Users can generate a shareable comparison summary containing scenarios, assumptions, tradeoffs, uncertainty notes, and caveats in under 3 minutes after completing a comparison.
- **SC-008**: 100% of public exploratory input changes are visually labelled as temporary and do not modify authoritative data, evidence records, scenario definitions, or repository-backed content.
- **SC-009**: 100% of public controls are limited to scenario selection, budget envelope, time horizon, and approved uncertainty ranges unless an analyst has explicitly published a new approved input.
- **SC-010**: 100% of displayed authoritative comparisons identify the published content version or source revision used.
- **SC-011**: 100% of public exported summaries include selected scenarios, exploratory inputs, published content version, tradeoffs, uncertainty notes, and caveats.
- **SC-012**: 0 public exploratory comparison runs are retained as saved application records after the browser session ends.

## Assumptions

- Initial users include public read-only users, policy analysts, researchers, sector reviewers, and collaborators; public users can explore approved variables, while analysts control authoritative data and repository-backed changes through repository review.
- The current calibrated equation specification is the authoritative basis for model behaviour unless a future planning step explicitly documents a revision.
- The application uses the repository's existing scenario definitions, evidence classes, and sector tier structure as the starting point.
- The initial release focuses on comparison, transparency, and evidence synthesis rather than public consultation workflows or operational policy approval.
- Public sharing in the initial release is handled through static summary export, not server-side saved public runs.
- Where New Zealand-specific evidence is thin, the application follows the repository's evidence hierarchy: Stats NZ baselines first, then New Zealand policy or industry context, then international benchmarks as caveated derived inputs.
