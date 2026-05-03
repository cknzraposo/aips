# Quickstart: Interactive AI Policy Sandbox App

This quickstart describes how to verify the planned showcase experience once implementation tasks exist. The app is planned as a Next.js + TypeScript public showcase with repo-backed YAML/JSON content and session-only public comparison state.

## Prerequisites

- Node.js current LTS
- npm or pnpm, to be finalised during implementation setup
- Reviewed repo-backed content files for scenarios, sectors, evidence, controls, and content version

## Local Setup

```powershell
npm install
npm run dev
```

Open the local URL shown by the dev server.

## Core Verification Flow

1. Open the public sandbox comparison workspace.
2. Select at least three policy scenarios.
3. Confirm all core tradeoff dimensions are visible: productivity, adoption spread, labour adjustment pressure, and national enabling capacity.
4. Adjust only approved public controls: scenario selection, budget envelope, time horizon, and approved uncertainty ranges.
5. Confirm the app labels adjusted inputs as temporary exploratory visualisation inputs.
6. Confirm no control allows public editing of sector-specific parameter values, evidence records, source data, model structure, or repository-backed scenario definitions.
7. Inspect sector coverage and confirm aggregate comparisons include all 19 ANZSIC Level 1 sectors.
8. Inspect an evidence item and confirm evidence class, source, method, confidence, access date, and selection-bias notes appear where available.
9. Export a static summary file.
10. Confirm the export includes selected scenarios, exploratory inputs, published content version, tradeoffs, uncertainty notes, caveats, and non-forecast framing.

## Session-Only Verification

1. Create an exploratory comparison.
2. Refresh or close the browser session according to the implementation's session boundary.
3. Confirm the comparison is not available as a saved application record.
4. Confirm static exports remain local/downloaded files only.

## Content Publication Verification

1. Create a draft change to authoritative data or scenario definitions in repository content.
2. Confirm the public app continues using the last published reviewed content until a reviewed publication step occurs.
3. Publish reviewed content.
4. Confirm the app identifies the new published content version or source revision.

## Build And Test

```powershell
npm run lint
npm run test
npm run test:e2e
npm run build
```

The exact package manager and scripts will be finalised during implementation setup.
