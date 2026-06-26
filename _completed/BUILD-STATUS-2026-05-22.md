# Build Status - NZ AI Policy Sandbox Web App

**Snapshot date:** 2026-05-22
**Content version:** `v0.3.2026-05-22`
**Equation version:** v0.3 (calibrated, see [src/equations/model-equations-v0.3.tex](../src/equations/model-equations-v0.3.tex))
**Build:** lint, typecheck, and 8 static routes prerender clean (no new runtime dependencies beyond Zod).

---

## Pages shipped

| Route | Purpose | Source |
| --- | --- | --- |
| `/` | Landing, framing, primary CTAs | [app/page.tsx](../app/page.tsx) |
| `/baseline` | Today's state - national capacity dial, 19-sector adoption snapshot, plain-English indicators | [app/baseline/page.tsx](../app/baseline/page.tsx) |
| `/compare` | Scenario comparison workspace - status-quo reference plus selected archetypes, three visualisations, outcome cards | [app/compare/page.tsx](../app/compare/page.tsx) |
| `/methodology` | Methodology summary | [app/methodology/page.tsx](../app/methodology/page.tsx) |
| `/evidence` | Evidence base summary | [app/evidence/page.tsx](../app/evidence/page.tsx) |
| `/glossary` | Plain-English glossary (17 entries) | [app/glossary/page.tsx](../app/glossary/page.tsx) |

Navigation order (intentional flow): Baseline -> Compare -> Evidence -> Methodology -> Glossary. See [components/layout/site-header.tsx](../components/layout/site-header.tsx).

---

## Content layer

All published content is validated by Zod at module load. See [lib/model/schemas.ts](../lib/model/schemas.ts) and [lib/model/content.ts](../lib/model/content.ts).

| File | Contents |
| --- | --- |
| [content/version.json](../content/version.json) | Published content version stamp |
| [content/global.json](../content/global.json) | E(0), rho_E, delta_E, G_E_base, tier rates - every value tagged with evidenceClass and confidence |
| [content/sectors.json](../content/sectors.json) | 19 ANZSIC Level 1 sectors with id, code S01-S19, tier (1/2/3), gdpWeight, weightEvidence |
| [content/parameters.json](../content/parameters.json) | Full v0.3 calibrated rows: Tier 1 (K0, A0, P0, L0, alpha, kappa, lambda, phi, eta, mu, pbar), Tier 2 (A0, P0, beta, kappa, phi), Tier 3 (A0, gamma, psi) |
| [content/scenarios.json](../content/scenarios.json) | 5 archetypes: `status-quo`, `aggregate`, `targeted-demand`, `targeted-supply`, `mixed` |

Coverage guarantees enforced at load time:

- Exactly 19 sectors, unique ids.
- GDP weights sum to within 5e-3 of 1.0 then renormalised to exactly 1.0.
- Tier params present for every sector at its tier.

Tier membership:

- **Tier 1 (9):** `ag, mfg, prof, pub, tech, hlth, con, fin, ret`
- **Tier 2 (6):** `edu, trn, acc, adm, imt, utl`
- **Tier 3 (4):** `min, rnt, art, oth`

---

## Simulation engine

[lib/model/engine.ts](../lib/model/engine.ts) - pure functional, no I/O. Implements v0.3 equations exactly.

- **Integrator:** RK4 at dt = 0.1 yr over Float64Arrays.
- **State:** `{ E, tier1: [K, A, P, L] x 9, tier2: [A, P] x 6, tier3: [A] x 4 }`.
- **Bounded gain-loss form** keeps every state in [0, 1] by construction.
- **Policy levers:** `buildLevers(scenario)` returns time functions `G_s(sectorId, t)` and `G_E(t)`, honouring `leverDurationYears`.
- **Intensity mapping:** `Delta = clamp(budgetEnvelope / 1000, 0, 1)` with defaults 400 NZ$M and 10-year horizon.
- **Output:** `Trajectory` with yearly snapshots of every state.

Implements the eta_s * A_s feedback into K_s and the `(1 - beta_s E) / (1 - gamma_s E)` Tier 2/3 loss drivers exactly as in v0.3.

---

## Comparison layer

[lib/model/compare.ts](../lib/model/compare.ts) computes the four outcome dimensions plus time series.

| Dimension | Direction | Formula |
| --- | --- | --- |
| Whole-economy productivity | Higher better | GDP-weighted P-bar = sum_s omega_s * P_s |
| Adoption spread | Lower better | Standard deviation of A_s across 19 sectors |
| Labour adjustment pressure | Lower better | Trapezoidal integral of GDP-weighted Tier 1 L_s + Tier 2 phi_s * A_s |
| National enabling stock | Higher better | E at horizon |

Bucketing: `<1%` negligible, `<5%` small, `<15%` moderate, else large.
Reference: `status-quo` is always included in every run.
Per-scenario series exposed: `pBar: SeriesPoint[]`, `E: SeriesPoint[]`, `adoptionAtHorizon: SectorAdoptionPoint[]`.

---

## Baseline visualisations (`/baseline`)

Implemented in response to the "show current state first" requirement.

- [components/baseline/national-capacity-dial.tsx](../components/baseline/national-capacity-dial.tsx) - horizontal gauge for E(0) = 0.38 with min-to-fully-enabled anchor labels.
- [components/baseline/baseline-sector-chart.tsx](../components/baseline/baseline-sector-chart.tsx) - sorted horizontal bar chart of A_s(0) across all 19 sectors, tier colour band, hover tooltips with evidence class, confidence, and notes.
- [lib/model/baseline.ts](../lib/model/baseline.ts) - assembles `BaselineSnapshot` (E0, sector points, GDP-weighted adoption, min/max spread).

Page also includes:

- Four explainer cards for what E bundles (skills, infrastructure, trust, regulation).
- Three headline stat cards: GDP-weighted adoption today, highest sector, lowest sector.
- Five state-variable cards (A_s, K_s, P_s, L_s, E) in plain English.
- Next-step CTA into `/compare`.

---

## Comparison visualisations (`/compare`)

Three pure SVG charts, zero chart-library dependencies.

- [components/compare/trajectory-chart.tsx](../components/compare/trajectory-chart.tsx) - multi-series line chart for P-bar(t) and E(t). Reference scenario rendered as dashed stroke.
- [components/compare/sector-adoption-chart.tsx](../components/compare/sector-adoption-chart.tsx) - horizontal stacked bars showing A_s at horizon for all 19 sectors per scenario, tier colour band, hover tooltips per scenario value.
- [components/compare/scenario-results-card.tsx](../components/compare/scenario-results-card.tsx) - per-scenario summary card with positive/negative/neutral tone and raw values in tooltip.

Supporting components:

- [components/compare/caveat-banner.tsx](../components/compare/caveat-banner.tsx) - mandatory non-forecast strip plus content version stamp.
- [components/compare/scenario-selector.tsx](../components/compare/scenario-selector.tsx) - multi-select archetypes (status-quo excluded; always run as reference).
- [components/compare/budget-horizon-controls.tsx](../components/compare/budget-horizon-controls.tsx) - budget envelope and horizon sliders.
- [components/compare/comparability-warning.tsx](../components/compare/comparability-warning.tsx) - surfaces validation messages.

---

## Stack and tooling

- Next.js 16.2.6 (Turbopack) + React 19 + TypeScript strict
- Tailwind v3 with custom tokens (`canvas`, `ink`, `steel`, `accent`, `datum`) and utilities (`surface-card`, `eyebrow`)
- Zod 4.4.3 for content validation
- ESLint flat config
- Static export (every route prerenders)

---

## Known issues and deferred work

### Open issue

- v0.3 LaTeX note states Tier 1 omega sum = 0.506 but the published table values sum to 0.601 (full 19-sector table sums to 0.9997, accepted within tolerance and renormalised). The remark text in [src/equations/model-equations-v0.3.tex](../src/equations/model-equations-v0.3.tex) needs reconciliation or a methodology note. Engine behaviour is correct.

### Deferred and in-progress follow-up

- URL state sharing on `/compare` is now implemented (query-string encode/decode plus share-link copy in [app/compare/page.tsx](../app/compare/page.tsx)).
- Vitest and Playwright suites are now configured with baseline coverage in `tests/unit` and `tests/e2e`; remaining work is deeper scenario-ordering and export/session-reset coverage.
- Sensitivity nudge (+/-25% one-at-a-time parameter sweep with small inspector UI).
- Static JSON export implementing the `StaticSummaryExport` contract in [specs/001-ai-policy-sandbox-app/contracts/data-contracts.md](../specs/001-ai-policy-sandbox-app/contracts/data-contracts.md).
- Tier ribbon visualisation (compact 19-sector strip showing tier membership and current adoption).
- Sector parameter inspector (drawer showing v0.3 rows with evidence class, confidence, notes).

---

## How to verify locally

```powershell
npm install
npm run lint
npm run typecheck
npm run build
npm run dev    # http://localhost:3000
```

All four commands are expected to exit cleanly on `main` as of the snapshot date.
