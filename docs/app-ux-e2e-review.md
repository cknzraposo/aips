# Application UX and End-to-End Review

*Date: 2026-07-12*  
*Status: Review complete - implementation backlog proposed*  
*Scope: `app/`, `components/`, app-visible model outputs, responsive behaviour, accessibility, and end-to-end verification*

---

## 1. Executive assessment

The application has a credible editorial briefing aesthetic, a clear baseline-to-comparison concept, deterministic client-side behaviour, and strong non-forecast caveats. Its desktop implementation is technically healthy and the existing automated checks pass.

The app is not ready for a public release in its current form. The primary blockers are:

1. global horizontal overflow at mobile and tablet widths
2. public claims of equal NZ-dollar budgets where the model currently provides equal dimensionless intensity
3. adoption and enabling-capacity labels that overstate what the calibrated indexes measure
4. a productivity aggregate that does not currently apply the calibrated Tier 1 productivity ceilings
5. incomplete Evidence and Methodology routes
6. insufficient end-to-end coverage for mobile, URL reproducibility, accessibility, evidence, export, and research-integrity claims

The recommended sequence is to correct interpretation and mobile navigation before adding visual polish. Evidence drill-down, approved sensitivity controls, and export should follow the research protocol and registry work rather than expose the current point-calibrated model more widely.

---

## 2. Review method

The review combined:

- direct inspection of all `app/` routes and the components they own
- inspection of app-visible calculations in `lib/model/`
- unit, type, lint, production-build, and Playwright execution
- Playwright browser probes at 320 px, 390 px, 768 px, and 1440 px widths
- full-page screenshot review of the landing, comparison, and explainer routes
- browser checks for console errors, horizontal overflow, chart bounds, URL restoration, invalid comparison handling, reset behaviour, and accessible chart names

This is an implementation and interpretation review. It is not an external accessibility certification or an economist's approval of the research protocol.

---

## 3. Verification results

| Check | Result |
| --- | --- |
| Focused Vitest suite | 23 passed, 0 failed |
| TypeScript | Passed |
| ESLint | Passed |
| Next.js production build | Passed |
| Static prerender | 9 routes generated, including `_not-found` |
| Existing Playwright suite | 9 passed, 0 failed |
| Desktop route probe | All public routes loaded without console or page errors |
| Shared comparison URL | All 9 encoded controls restored correctly |
| Empty scenario selection | Correct validation and no-comparison state displayed |
| Reset | Restored calibrated results and removed the query string |
| Chart accessibility names | Present for both trajectories and the sector chart |
| Mobile and tablet overflow | Failed on every public route |

The existing test suite covers desktop Chromium only. Passing it does not establish mobile, tablet, cross-browser, accessibility, visual, performance, static-host, or complete research-integrity behaviour.

---

## 4. Priority findings

### P0 - Mobile navigation breaks every route

`components/layout/site-header.tsx` renders seven navigation links in a fixed inline pill beside the brand at every breakpoint. Browser probes found:

- approximately 500 px horizontal overflow at 320 px viewport width
- approximately 430 px horizontal overflow at 390 px
- approximately 68 px horizontal overflow at 768 px

The screenshots show the page occupying only the left part of a much wider document, with the navigation extending off-screen.

**Recommendation:** implement a compact mobile header with an accessible menu or disclosure below a suitable breakpoint. Include `aria-expanded`, `aria-controls`, visible focus states, Escape-to-close behaviour, route-change close behaviour, and `aria-current="page"` on the active link.

**Acceptance test:** every public route has `document.documentElement.scrollWidth <= window.innerWidth + 1` at 320, 390, and 768 px.

### P0 - The explainer has a second mobile overflow source

`components/explainer/on-this-page.tsx` uses a non-wrapping horizontal list inside a grid item without a minimum-width constraint. At 390 px, the navigation and following content column expand to approximately 1001 px.

**Recommendation:** add `min-w-0 max-w-full` at the navigation/grid boundary and keep overflow local to the list. Consider a compact disclosure at narrow widths if the chip row remains difficult to scan.

**Acceptance test:** `/how-it-works` has no document-level overflow while the jump navigation remains independently scrollable or collapsible.

### P0 - Equal-intensity experiments are presented as equal NZ-dollar budgets

The landing, compare, explainer, methodology, and policy-control copy repeatedly state that scenarios share the same budget. The compare UI displays an NZ-dollar amount and describes it as total policy spend. The executable mapping currently converts NZ$1,000M to dimensionless intensity 1 without instrument-specific cost functions.

Affected surfaces include:

- `app/page.tsx`
- `app/compare/page.tsx`
- `app/how-it-works/page.tsx`
- `app/methodology/page.tsx`
- `components/compare/policy-lab-panel.tsx`
- `components/explainer/system-diagram.tsx`

**Recommendation:** until cost mappings are reviewed, rename the control to **Intervention intensity**, remove NZ-dollar units, and describe comparisons as equal-intensity model experiments. Restore NZ-dollar framing only after the research protocol's cost-equivalence requirements are met.

**Acceptance test:** no public route claims equal fiscal cost or displays NZ-dollar policy spend while the model remains intensity-based.

### P0 - Adoption maturity is presented as an observed percentage

`app/baseline/page.tsx` defines adoption as a share of sector activity, reports a GDP-weighted adoption percentage, and labels highest and lowest sectors as percentages of activity. The locked state specification defines `A_s` as a normalised operational-maturity index, not the share of firms, workers, expenditure, or activity using AI.

**Recommendation:** use index language consistently, for example `Adoption maturity 0.35 / 1.00`. Explain that values are calibrated latent states informed by mixed evidence. Do not use percentage symbols unless a separate observed prevalence measure is introduced.

**Acceptance test:** users can correctly explain in comprehension testing that `A_s=0.35` is not evidence that 35% of sector activity uses AI.

### P0 - Enabling capacity is presented as an observed OECD position

`app/baseline/page.tsx` calls `E0=0.38` a middle-band position among comparable OECD economies. `content/global.json` classifies this value as assumed with low confidence, and no executable international comparison index supports the rank.

**Recommendation:** describe it as the model's assumed starting composite and surface its evidence class and confidence next to the value. Remove the comparative OECD rank unless a reviewed benchmark is added.

### P0 - The app-facing productivity outcome omits `pbar`

`lib/model/compare.ts` aggregates Tier 1 productivity states using GDP weights but does not multiply by the calibrated sector productivity ceiling stored as `pbar`. The UI labels the output whole-economy productivity, while it is currently a GDP-weighted normalised realisation index.

**Recommendation:** decide under the research protocol whether the primary output is normalised realisation or potential-adjusted productivity effect. If it is the latter, apply `pbar` consistently and add a direct unit test. Rename all chart and card labels to match the selected construct.

### P0 - Public-sector workforce cuts are used as a calibration anchor

`app/evidence/page.tsx` describes the announced public-sector workforce reduction as a labour-trajectory calibration anchor. The event is a fiscal-policy target, not causal evidence of AI substitution.

**Recommendation:** present it as a separately labelled policy stress signal. Do not use it to calibrate AI labour effects without an identification argument and reviewed provenance.

### P1 - Evidence and Methodology routes expose implementation placeholders

Both routes end with visible implementation-status cards. The Evidence page lacks sector coverage and parameter-level drill-down. The Methodology page lacks the newly adopted conditional hypothesis, equal-intensity limitation, outcome definitions, uncertainty protocol, and coverage limits.

**Recommendation:** complete these routes before public release. The Methodology route should summarise `docs/research-protocol.md`; the Evidence route should consume parameter-level registry records rather than duplicate prose.

### P1 - Scenario selection state is visual only

Scenario buttons change colour when selected but have no `aria-pressed`. Browser inspection confirmed `aria-pressed` is absent for selected scenarios.

**Recommendation:** add `aria-pressed={isOn}` and an explicit selected indicator that does not rely on colour alone.

### P1 - The comparison action has no pending feedback

`app/compare/page.tsx` uses `useTransition` but discards `isPending`. Fast local runs hide the issue, but slower devices receive no feedback and can repeat actions.

**Recommendation:** expose pending state in the Run button, disable repeated submission, and set `aria-live="polite"` on concise status text.

### P1 - Outcome orientation can imply normative judgement

Result tiles colour higher or lower adoption spread as negative or positive. Lower spread is not inherently better when all sectors remain at a low maturity level. Labour coverage is also partial because Tier 3 contributes no labour measure.

**Recommendation:** pair spread with mean adoption maturity, label it as dispersion rather than an improvement by itself, and disclose the labour coverage directly in the result card or tooltip.

### P1 - Research caveats are separated from the result interpretation

The main caveat appears before a long policy-control panel. Results can be viewed much later on the page without a nearby statement of equal-intensity, partial labour coverage, and conditional interpretation.

**Recommendation:** add a concise result-level interpretation strip and evidence link before the charts.

### P2 - Desktop hierarchy is credible but overly card-heavy

The desktop screenshots show a coherent restrained palette and readable typography. The experience nevertheless presents nearly every section as a rounded card, which reduces hierarchy and makes long pages feel mechanically segmented.

**Recommendation:** preserve cards for controls, repeated result items, and evidence records. Render explanatory sections as unframed editorial bands, reduce the number of nested bordered containers, and use stronger section typography and whitespace to establish hierarchy.

### P2 - The landing page repeats the same framing

The hero, briefing note, plain-English section, three pillars, dimensions panel, and news section repeat policy-sandbox positioning before a user reaches the tool.

**Recommendation:** compress the first screen around the central evidence problem, one primary action, one secondary action, and a compact statement of limits. Move detailed explanation to `/how-it-works`.

### P2 - Active navigation and focus treatment need completion

The header does not show the active route and does not set `aria-current="page"`. Several controls rely primarily on hover styles.

**Recommendation:** add active-route state and consistent `focus-visible` rings through shared link and button primitives.

---

## 5. Findings not substantiated

The review deliberately rejects several plausible but unverified concerns:

- **Policy sliders do not independently cause mobile overflow.** They already stack in responsive grids and rendered within the mobile content column.
- **Baseline and comparison SVG charts do not independently overflow their containers.** Their fixed `viewBox` dimensions scale through `w-full`. Legibility still requires visual regression coverage, but geometry is contained once page-level overflow is fixed.
- **The invalid comparison state works.** Empty scenario selection displays a specific warning and a no-comparison result state after the transition settles.
- **Full shared-URL restoration works.** Scenario IDs, intensity, horizon, duration, split, and all four multipliers restored correctly in the browser probe.
- **The app produced no console or page errors during route and workflow probes.**

---

## 6. Recommended implementation sequence

### Slice 1 - Mobile shell and claim integrity

1. implement the responsive header and active navigation
2. contain the explainer jump navigation
3. replace NZ-dollar budget language with intervention intensity
4. correct adoption and enabling-capacity labels
5. isolate the public-sector workforce signal from calibration language
6. add mobile no-overflow and claim-integrity E2E tests

### Slice 2 - Outcome contract

1. decide normalised versus potential-adjusted productivity under the protocol
2. implement and test the selected productivity definition
3. add mean adoption maturity beside dispersion
4. disclose labour coverage by tier
5. add result-level caveats and evidence links

### Slice 3 - Evidence and methodology

1. replace implementation placeholders
2. build parameter-level evidence records and references
3. expose source, method, confidence, access date, bias, and range
4. publish a plain-language methodology summary tied to the protocol

### Slice 4 - Sensitivity and export

1. implement approved parameter-range controls
2. show robust, fragile, and indeterminate conclusions
3. add a validated static summary export
4. include source revision, model version, assumptions, uncertainty notes, and non-forecast framing

### Slice 5 - Editorial refinement

1. simplify landing-page repetition
2. reduce decorative card density
3. improve chart label legibility after mobile shell repair
4. complete focus, contrast, reduced-motion, and keyboard review

---

## 7. End-to-end test plan

### 7.1 Critical workflow tests

1. **Route smoke:** every public route returns successfully with one `main` landmark and no console or page errors.
2. **Responsive shell:** no document-level horizontal overflow at 320, 390, 768, and 1440 px.
3. **Mobile navigation:** menu opens and closes by pointer, Enter, Space, Escape, outside click, and route change; focus returns to the trigger.
4. **Scenario selection:** selected state exposes `aria-pressed`; deselecting all scenarios blocks comparison with a specific message.
5. **All controls:** each slider responds to keyboard input and respects its registered bounds.
6. **Advanced controls:** duration and mixed split are available only through the disclosure and persist through a run.
7. **Run state:** dirty, pending, applied, and up-to-date states are distinguishable.
8. **Reset:** restores every calibrated control, results, and clean URL.
9. **URL round trip:** all nine configuration fields survive copy, navigation, and refresh.
10. **Invalid URL:** unknown scenarios and non-numeric or out-of-range values fall back safely and visibly.

### 7.2 Research-integrity tests

1. all public comparison language uses equal-intensity terminology until cost mappings exist
2. adoption maturity is never displayed as an observed percentage
3. enabling capacity is labelled assumed and low-confidence where shown
4. result cards identify partial labour coverage
5. adoption dispersion is displayed with mean adoption maturity
6. the targeted-demand caveat states that the allocation rule is oriented towards closing initial gaps
7. every result view includes non-forecast and non-recommendation framing
8. displayed model and content versions match the published content bundle
9. potential-adjusted productivity uses `pbar` if selected by the protocol
10. no output claims exact GDP, employment, adoption prevalence, or definitive ranking

### 7.3 Result and chart tests

1. reference plus selected scenario cards render
2. every scenario exposes all four registered outcomes
3. whole-economy charts include all selected scenarios and the reference
4. sector output includes all 19 sectors
5. charts have descriptive accessible names and text summaries
6. chart legends remain readable at mobile, tablet, and desktop widths
7. close or indeterminate results do not receive definitive positive or negative language

### 7.4 Evidence, methodology, and export tests

1. a sector or outcome can be traced to parameter-level evidence within two interactions
2. low-confidence, assumed, and placeholder inputs are visibly identified
3. source, method, confidence, access date, bias, and range appear when available
4. methodology states the conditional question, null, equal-intensity limitation, outcome coverage, and uncertainty posture
5. export validates against its Zod contract
6. export includes selected scenarios, inputs, version, tradeoffs, sensitivity notes, evidence caveats, and non-forecast text
7. public comparisons are not persisted as server-side records

### 7.5 Accessibility and visual tests

1. run automated accessibility checks with `@axe-core/playwright`
2. verify keyboard order and no keyboard traps
3. verify visible focus on every interactive control
4. verify 44 px touch targets for mobile primary controls
5. verify contrast against WCAG 2.1 AA targets
6. verify reduced-motion behaviour
7. capture stable screenshots at 390, 768, and 1440 px for landing, baseline, compare, evidence, and methodology
8. add visual assertions for navigation, policy controls, charts, and result cards

### 7.6 Browser and deployment tests

1. run Chromium on every pull request
2. run Firefox and WebKit for the critical route and comparison workflows
3. test the generated static `out/` directory through a static HTTP server
4. verify direct route loads and query-string comparisons under static hosting
5. assert no runtime API calls are required for public comparison

### 7.7 Performance tests

1. first meaningful public view under the documented network and CPU profile
2. comparison update under the registered interaction budget
3. export generation under the registered time budget
4. record thresholds and environment so results are reproducible rather than machine-specific

---

## 8. Playwright configuration roadmap

Add projects for:

- Desktop Chromium
- Mobile Chromium at 390 px
- Tablet Chromium at 768 px
- Desktop Firefox
- Desktop WebKit

Retain screenshots and video on failure, keep traces on the first retry, and add a shared fixture that fails on unexpected console errors or page errors.

Visual and accessibility checks should be focused on representative routes to control runtime. Full cross-browser execution can run nightly if pull-request duration becomes excessive.

---

## 9. Release gates

The application is ready for public release only when:

- no public route has document-level horizontal overflow at supported widths
- public labels match the research protocol's constructs and resource interpretation
- the productivity outcome matches its documented equation and unit
- Evidence and Methodology routes contain production content
- scenario selection and navigation expose accessible state
- critical E2E workflows pass on desktop and mobile Chromium
- route, URL, reset, evidence, export, and research-integrity tests pass
- an automated accessibility scan has no serious or critical violations
- static-host direct routes and query strings pass
- users can distinguish indexes from observed prevalence and comparisons from forecasts

---

## 10. Next action

Begin with Slice 1. It removes the largest usability defect and the most consequential public-claim mismatches while adding tests that prevent both classes of regression.
