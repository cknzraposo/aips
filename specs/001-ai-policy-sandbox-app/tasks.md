# Tasks: Interactive AI Policy Sandbox App

**Input**: Design documents from `specs/001-ai-policy-sandbox-app/`
**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [contracts/data-contracts.md](contracts/data-contracts.md), [quickstart.md](quickstart.md)

**Tests**: TDD is not mandated for story work, but constitution-driven validation is included through schema, contract, unit, e2e, type-safety, performance, UX, and copy-review tasks.

**Organization**: Tasks are grouped by user story so each story can be implemented and verified independently.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create the Next.js + TypeScript + Tailwind/shadcn project foundation for the showcase app.

- [ ] T001 Create Next.js package manifest with scripts and dependencies in package.json
- [ ] T002 Create TypeScript configuration for the app in tsconfig.json
- [ ] T003 Create Next.js configuration for static-friendly deployment in next.config.ts
- [ ] T004 [P] Configure Tailwind CSS theme and content paths in tailwind.config.ts
- [ ] T005 [P] Create global stylesheet with Tailwind layers and base tokens in app/globals.css
- [ ] T006 [P] Configure linting for TypeScript and React in eslint.config.mjs
- [ ] T007 [P] Configure Vitest unit test environment in vitest.config.ts
- [ ] T008 [P] Configure Playwright end-to-end test project in playwright.config.ts
- [ ] T009 Create root app layout and metadata shell in app/layout.tsx

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish data contracts, repo-backed content loading, shared UI primitives, and model utilities required by all user stories.

**Critical**: No user story work can begin until this phase is complete.

- [ ] T010 Create shared TypeScript domain types in lib/schemas/types.ts
- [ ] T011 [P] Implement Published Content Version Zod schema in lib/schemas/published-content.ts
- [ ] T012 [P] Implement Policy Scenario Zod schema in lib/schemas/policy-scenario.ts
- [ ] T013 [P] Implement Sector Zod schema with 19-sector aggregate coverage validation in lib/schemas/sector.ts
- [ ] T014 [P] Implement Evidence Record Zod schema in lib/schemas/evidence-record.ts
- [ ] T015 [P] Implement Approved Control Zod schema in lib/schemas/approved-control.ts
- [ ] T016 [P] Implement Static Summary Export Zod schema in lib/schemas/static-summary-export.ts
- [ ] T017 Implement repo-backed content loader and validation pipeline in lib/content/load-content.ts
- [ ] T018 Create initial reviewed content version record in content/versions/2026-05-03-showcase.json
- [ ] T019 [P] Create initial scenario archetype content in content/scenarios/showcase-scenarios.yaml
- [ ] T020 [P] Create initial 19-sector tiered content in content/sectors/anzsic-sectors.yaml
- [ ] T021 [P] Create initial evidence records for showcase assumptions in content/evidence/showcase-evidence.yaml
- [ ] T022 [P] Create approved public controls content in content/controls/showcase-controls.yaml
- [ ] T023 Implement comparison state helpers for browser-session-only state in lib/state/comparison-state.ts
- [ ] T024 Implement core tradeoff calculation helpers using approved controls in lib/model/compare-scenarios.ts
- [ ] T025 Implement comparability validation for budget, horizon, sector coverage, and scenario assumptions in lib/model/validate-comparison.ts
- [ ] T026 Create shared non-forecast caveat text utilities in lib/content/caveats.ts
- [ ] T027 Create shadcn-compatible base UI components in components/ui/button.tsx
- [ ] T028 [P] Create shadcn-compatible card component in components/ui/card.tsx
- [ ] T029 [P] Create shadcn-compatible tabs component in components/ui/tabs.tsx
- [ ] T030 [P] Create shadcn-compatible slider component in components/ui/slider.tsx
- [ ] T031 [P] Create responsive app navigation shell in components/layout/app-shell.tsx

**Checkpoint**: Content contracts, validation, shared UI, and model helpers are ready for story implementation.

---

## Phase 3: User Story 1 - Compare Policy Tradeoffs (Priority: P1)

**Goal**: Public users and policy analysts can compare multiple scenario archetypes under like-for-like assumptions and see the core tradeoff dimensions without forecast framing.

**Independent Test**: Select at least two scenarios, apply common budget and horizon values, adjust approved public controls, and confirm the comparison view shows productivity, adoption spread, labour adjustment pressure, and national enabling capacity with caveats.

### Implementation for User Story 1

- [ ] T032 [P] [US1] Create public landing page that routes users into the sandbox in app/page.tsx
- [ ] T033 [P] [US1] Create scenario selection component in components/compare/scenario-selector.tsx
- [ ] T034 [P] [US1] Create budget and time horizon controls in components/compare/budget-horizon-controls.tsx
- [ ] T035 [P] [US1] Create approved uncertainty range controls in components/compare/uncertainty-controls.tsx
- [ ] T036 [US1] Implement comparison workspace page using session-only state in app/compare/page.tsx
- [ ] T037 [P] [US1] Create tradeoff summary panel in components/compare/tradeoff-summary.tsx
- [ ] T038 [P] [US1] Create ECharts tradeoff chart component in components/charts/tradeoff-chart.tsx
- [ ] T039 [P] [US1] Create comparability warning component in components/compare/comparability-warning.tsx
- [ ] T040 [US1] Integrate non-forecast framing and caveat text in components/compare/tradeoff-summary.tsx
- [ ] T041 [US1] Ensure public controls cannot mutate authoritative content in lib/state/comparison-state.ts

**Checkpoint**: User Story 1 is independently functional as the MVP comparison workspace.

---

## Phase 4: User Story 2 - Inspect Sector And Evidence Basis (Priority: P2)

**Goal**: Researchers and reviewers can trace displayed assumptions and sector contributions to evidence class, source, method, confidence, access date, and caveats where available.

**Independent Test**: Open a sector or evidence detail view from a comparison result and trace a displayed assumption to sector tier, evidence class, source information, method, confidence, access date, and caveats.

### Implementation for User Story 2

- [ ] T042 [P] [US2] Create sector coverage panel showing all 19 ANZSIC sectors in components/evidence/sector-coverage-panel.tsx
- [ ] T043 [P] [US2] Create evidence badge component for observed, derived, expert, placeholder, and assumed classes in components/evidence/evidence-badge.tsx
- [ ] T044 [P] [US2] Create evidence detail drawer in components/evidence/evidence-detail-drawer.tsx
- [ ] T045 [US2] Add sector and evidence drill-down interactions to app/compare/page.tsx
- [ ] T046 [P] [US2] Create evidence index page in app/evidence/page.tsx
- [ ] T047 [P] [US2] Implement published content version display in components/evidence/content-version-banner.tsx
- [ ] T048 [US2] Surface weak, placeholder, assumed, and low-confidence evidence caveats in components/evidence/evidence-detail-drawer.tsx
- [ ] T049 [US2] Enforce last-published reviewed content behaviour in lib/content/load-content.ts

**Checkpoint**: User Story 2 is independently verifiable through sector and evidence inspection.

---

## Phase 5: User Story 3 - Explore Uncertainty And Export Summaries (Priority: P3)

**Goal**: Public users can explore sensitivity to approved uncertainty ranges and export a static summary without creating a saved application record.

**Independent Test**: Adjust an approved uncertainty range, observe sensitivity notes update, export a static summary file, and confirm the app does not retain the public comparison as a saved run after the browser session ends.

### Implementation for User Story 3

- [ ] T050 [P] [US3] Implement sensitivity analysis helper in lib/model/sensitivity.ts
- [ ] T051 [P] [US3] Create sensitivity notes component in components/compare/sensitivity-notes.tsx
- [ ] T052 [US3] Connect sensitivity notes to approved uncertainty controls in app/compare/page.tsx
- [ ] T053 [P] [US3] Implement static summary export generator in lib/export/static-summary.ts
- [ ] T054 [P] [US3] Create export summary button and status UI in components/compare/export-summary-button.tsx
- [ ] T055 [US3] Integrate static summary export into comparison workspace in app/compare/page.tsx
- [ ] T056 [US3] Validate exported summary content with Zod in lib/export/static-summary.ts
- [ ] T057 [US3] Confirm browser-session-only reset behaviour in lib/state/comparison-state.ts

**Checkpoint**: User Story 3 is independently verifiable through sensitivity exploration and static export.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Validate end-to-end quality, documentation, accessibility, and deployment readiness across all stories.

- [ ] T058 [P] Create methodology page explaining sandbox framing and limits in app/methodology/page.tsx
- [ ] T059 [P] Add quickstart usage notes for public showcase users in README.md
- [ ] T060 [P] Add content authoring guidance for analysts in docs/showcase-content-workflow.md
- [ ] T061 Create unit coverage for schemas and model utilities in tests/unit/model-and-schema.test.ts
- [ ] T062 Create contract validation coverage for repo-backed content in tests/contract/content-contracts.test.ts
- [ ] T063 Create Playwright flow covering comparison, evidence inspection, export, and session-only reset in tests/e2e/public-sandbox.spec.ts
- [ ] T064 Run quickstart validation commands and record gaps in specs/001-ai-policy-sandbox-app/quickstart.md
- [ ] T065 Run build validation for the Next.js app using package.json scripts
- [ ] T066 Audit UI copy for non-forecast framing and NZ English in app/compare/page.tsx
- [ ] T067 Audit responsive layout and chart readability in components/charts/tradeoff-chart.tsx
- [ ] T068 Run TypeScript strict type-safety validation for policy-critical paths using package.json scripts
- [ ] T069 Validate public performance goals for first view, comparison update, and static export in tests/e2e/public-sandbox.spec.ts using Playwright desktop and mobile profiles with documented network and CPU throttling assumptions
- [ ] T070 Audit UX uniformity for navigation, controls, caveats, and responsive accessibility across app/ and components/

---

## Dependencies & Execution Order

### Phase Dependencies

- Setup (Phase 1): no dependencies.
- Foundational (Phase 2): depends on Setup completion and blocks all user stories.
- User Story 1 (Phase 3): depends on Foundational completion and forms the MVP.
- User Story 2 (Phase 4): depends on Foundational completion; can proceed after User Story 1 shell exists for integration points.
- User Story 3 (Phase 5): depends on User Story 1 comparison workspace and Foundational export/schema helpers.
- Polish (Phase 6): depends on selected user stories being complete.

### User Story Dependencies

- US1: no dependency on other user stories after Foundation.
- US2: can be implemented after Foundation, but `T045` integrates with the comparison page from US1.
- US3: depends on US1 controls and comparison workspace for sensitivity and export integration.

### Parallel Opportunities

- Setup config tasks `T004` through `T008` can run in parallel.
- Foundational schema/content tasks `T011` through `T016` and `T019` through `T022` can run in parallel.
- US1 component tasks `T032` through `T035` and `T037` through `T039` can run in parallel after Foundation.
- US2 component/page tasks `T042` through `T044`, `T046`, and `T047` can run in parallel after Foundation.
- US3 helper/component tasks `T050`, `T051`, `T053`, and `T054` can run in parallel after US1 state contracts exist.
- Polish documentation tasks `T058` through `T060` can run in parallel.

---

## Parallel Examples

### User Story 1

```text
Task: T033 Create scenario selection component in components/compare/scenario-selector.tsx
Task: T034 Create budget and time horizon controls in components/compare/budget-horizon-controls.tsx
Task: T035 Create approved uncertainty range controls in components/compare/uncertainty-controls.tsx
Task: T038 Create ECharts tradeoff chart component in components/charts/tradeoff-chart.tsx
```

### User Story 2

```text
Task: T042 Create sector coverage panel showing all 19 ANZSIC sectors in components/evidence/sector-coverage-panel.tsx
Task: T043 Create evidence badge component for observed, derived, expert, placeholder, and assumed classes in components/evidence/evidence-badge.tsx
Task: T044 Create evidence detail drawer in components/evidence/evidence-detail-drawer.tsx
Task: T046 Create evidence index page in app/evidence/page.tsx
```

### User Story 3

```text
Task: T050 Implement sensitivity analysis helper in lib/model/sensitivity.ts
Task: T051 Create sensitivity notes component in components/compare/sensitivity-notes.tsx
Task: T053 Implement static summary export generator in lib/export/static-summary.ts
Task: T054 Create export summary button and status UI in components/compare/export-summary-button.tsx
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 setup.
2. Complete Phase 2 foundation.
3. Complete Phase 3 User Story 1.
4. Validate the comparison workspace independently against its acceptance scenarios.
5. Demo the public comparison MVP before adding evidence drill-down and export polish.

### Incremental Delivery

1. Deliver Setup and Foundation so content contracts and app shell are stable.
2. Deliver US1 for public comparison and non-forecast framing.
3. Deliver US2 for sector and evidence transparency.
4. Deliver US3 for uncertainty exploration and static summary export.
5. Complete polish tasks for documentation, accessibility, responsive charts, and validation.

### Validation Focus

- Verify aggregate comparisons include all 19 ANZSIC Level 1 sectors.
- Verify public controls cannot alter authoritative repo-backed content.
- Verify weak evidence and placeholder assumptions are visible.
- Verify static exports include selected scenarios, inputs, published content version, caveats, and non-forecast framing.
- Verify no public comparison runs are saved as application records.
- Verify type safety, UX uniformity, and public performance goals before release.
