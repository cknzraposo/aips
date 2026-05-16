# Implementation Plan: Interactive AI Policy Sandbox App

**Branch**: `001-build-ai-policy-sandbox` | **Date**: 2026-05-03 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `specs/001-ai-policy-sandbox-app/spec.md`

## Summary

Build a public showcase application for the New Zealand AI Policy Sandbox. Public users can compare policy scenario archetypes, adjust approved exploratory controls, inspect evidence and sector provenance, and export static summaries. Authoritative data and scenario definitions remain repo-reviewed content consumed by the app, not user-edited app state.

The selected technical approach is a mostly static Next.js application with TypeScript, Tailwind CSS, shadcn/ui, ECharts, Zod validation, and repo-backed YAML/JSON content. Exploratory calculations run client-side for public sessions; public comparison runs are not saved server-side.

## Technical Context

**Language/Version**: TypeScript on current stable Node.js LTS for a Next.js App Router project  
**Primary Dependencies**: Next.js, React, Tailwind CSS, shadcn/ui, ECharts, Zod, YAML parser, lightweight state/query-string helpers  
**Storage**: Repo-backed YAML/JSON content under version control; no database for public runs  
**Testing**: Vitest for schema/model utilities, React Testing Library for components where useful, Playwright for public comparison flows and export behaviour  
**Target Platform**: Static public web app deployable to Cloudflare Pages using Next.js static export (`output: 'export'`) for showcase MVP  
**Project Type**: Web application with client-side exploratory sandbox and repo-reviewed content pipeline  
**Performance Goals**: First meaningful public view in under 2 seconds on typical broadband; public comparison update in under 250 ms for approved controls; static summary export in under 3 seconds after comparison completion; validate with documented Playwright desktop and mobile profiles using explicit network and CPU throttling assumptions  
**Constraints**: No public saved runs; no public edits to authoritative data; no forecasts or exact GDP/employment claims; all aggregate comparisons cover all 19 ANZSIC Level 1 sectors; all authoritative inputs trace to reviewed repo content  
**Scale/Scope**: Showcase MVP for public users, analysts, researchers, and reviewers; initial content covers existing scenario archetypes, sector tiers, core outcome dimensions, evidence classes, and published content versioning

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The ratified constitution is applied as the planning gate:

| Gate | Status | Notes |
| --- | --- | --- |
| Policy Sandbox Integrity | PASS | Plan states outputs are comparative reasoning under uncertainty, not forecasts, and requires whole-economy coverage for aggregate comparisons. |
| Simplicity & Maintainability | PASS | Mostly static Next.js app avoids database, public accounts, server-side saved runs, and a separate backend service for the showcase MVP. |
| Functional, Type-Safe Implementation | PASS | Zod contracts, TypeScript, and client-side model helpers are planned for structured content, comparison state, and export validation. |
| UX Uniformity | PASS | Shared app shell, shadcn-compatible components, public controls, caveat copy, and responsive charts are planned. |
| Evidence Provenance & Reviewed Authority | PASS | Data model and contracts require evidence classes, source metadata, reviewed content versions, and no public authoritative edits. |

## Project Structure

### Documentation (this feature)

```text
specs/001-ai-policy-sandbox-app/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── data-contracts.md
└── checklists/
    └── requirements.md
```

### Source Code (repository root)

```text
app/
├── layout.tsx
├── page.tsx
├── compare/
│   └── page.tsx
├── evidence/
│   └── page.tsx
└── methodology/
    └── page.tsx

components/
├── charts/
├── compare/
├── evidence/
├── layout/
└── ui/

content/
├── scenarios/
├── sectors/
├── evidence/
├── controls/
└── versions/

lib/
├── model/
├── schemas/
├── content/
├── export/
└── state/

tests/
├── unit/
├── contract/
└── e2e/
```

**Structure Decision**: Use a single Next.js application at the repository root. Keep public UI in `app/` and `components/`, reusable model and validation logic in `lib/`, and repo-reviewed authoritative content in `content/`. This keeps the showcase deployable as a static or mostly static app while preserving the repo-reviewed content workflow.

## Complexity Tracking

No constitution gate violations are introduced. The plan deliberately avoids a database, authentication surface for public users, server-side saved runs, and separate backend service for the showcase MVP.

## Phase 0 Research Summary

See [research.md](research.md) for decisions. All technical unknowns from the requested stack are resolved.

Deployment target decision is captured in [ADR 0001](../../docs/adr/0001-deploy-target.md).

## Setup Phase Follow-up Note

Setup tasks T001 to T009 require a small deployment alignment update during implementation:

- T003 should set `output: 'export'` in `next.config.ts`.
- Build configuration should use `npm run build` producing the `out/` directory for Cloudflare Pages.

## Phase 1 Design Summary

See [data-model.md](data-model.md), [contracts/data-contracts.md](contracts/data-contracts.md), and [quickstart.md](quickstart.md). The design models public session-only comparison runs, static summary export, repo-reviewed content versions, sector coverage, evidence provenance, and approved exploratory controls.

## Post-Design Constitution Check

The Phase 1 design continues to pass the constitution gates above:

| Gate | Status | Design Evidence |
| --- | --- | --- |
| Policy Sandbox Integrity | PASS | Contracts require caveats, non-forecast summary text, and 19-sector aggregate coverage. |
| Simplicity & Maintainability | PASS | Session-only public state and static exports avoid extra infrastructure. |
| Functional, Type-Safe Implementation | PASS | Design defines Zod-backed content, comparison state, and export contracts. |
| UX Uniformity | PASS | Tasks require shared UI components, consistent public controls, copy review, and responsive chart review. |
| Evidence Provenance & Reviewed Authority | PASS | Evidence records and content versions are first-class entities consumed from reviewed repository content. |
