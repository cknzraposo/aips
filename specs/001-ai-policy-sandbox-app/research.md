# Research: Interactive AI Policy Sandbox App

## Decision: Use Next.js with TypeScript for the public showcase application

**Rationale**: Next.js provides a strong public showcase shell with routing, metadata, static generation, deploy previews, and mature React ecosystem support. TypeScript gives compile-time safety for policy scenario, sector, evidence, and summary-export structures. The app can be hosted on Vercel as a mostly static site and can later move to another static host if needed.

**Alternatives considered**: SvelteKit would be excellent for interactivity but has a smaller contributor pool. Astro with React islands would be strong for an evidence-heavy site, but the core experience is an interactive comparison workspace. Streamlit would be fast for analyst prototyping but less polished and less suitable for public static showcase hosting.

## Decision: Use Tailwind CSS with shadcn/ui for interface composition

**Rationale**: Tailwind and shadcn/ui support a polished, restrained, accessible civic-tech style without introducing a heavy design system. Components remain source-owned and can be adapted to the policy sandbox's dense comparison interface. This suits tabs, filters, evidence panels, controls, and export actions.

**Alternatives considered**: Material UI is comprehensive but visually opinionated and heavier. CSS modules alone would be simple but slower for building a coherent showcase. A fully custom design system would be premature for MVP.

## Decision: Use ECharts for comparison and uncertainty visualisation

**Rationale**: ECharts supports rich interactive charts, responsive dashboards, uncertainty bands, stacked sector views, and comparison visualisations suitable for public exploration. It can render the core tradeoff dimensions clearly while supporting tooltips and annotations that reinforce caveats.

**Alternatives considered**: Observable Plot is elegant for statistical graphics but less dashboard-oriented. Plotly is capable but larger and can feel heavier. Recharts is React-friendly but less flexible for complex uncertainty and sector views.

## Decision: Use Zod for schema validation and runtime data contracts

**Rationale**: Authoritative content is repo-backed YAML/JSON and must be validated before the app treats it as published content. Zod provides TypeScript inference and runtime validation for sector records, scenario records, evidence records, approved controls, content versions, and static summary exports.

**Alternatives considered**: JSON Schema is useful for external validation but less ergonomic in TypeScript. Valibot is lightweight but less familiar. Hand-written validation would risk untraceable data failures.

## Decision: Store authoritative content as repo-backed YAML/JSON

**Rationale**: The specification requires analyst-controlled authoritative data and repository review before publication. YAML/JSON files align with the planned registry direction, allow focused diffs, and support static build-time validation. The application can consume only reviewed content versions and expose the source revision in summaries.

**Alternatives considered**: A database would add operational complexity and conflict with repo-reviewed authority for the MVP. CSV-only storage is familiar but weak for nested provenance and range structures. A headless CMS would introduce another authority path and review workflow.

## Decision: Keep public comparison runs browser-session-only

**Rationale**: The spec states public runs are not saved by the application. Browser-session-only state avoids user accounts, privacy storage, moderation, database costs, and server-side persistence. It supports the Vercel free-tier showcase path.

**Alternatives considered**: Server-saved public runs would require storage, retention policy, moderation, and user identity decisions. Encoded URLs would improve shareability but were not selected. Analyst-only saved runs can be revisited later if needed.

## Decision: Provide static summary export for public sharing

**Rationale**: Static exports meet the sharing requirement without creating saved app records. Exports can include selected scenarios, exploratory inputs, published content version, tradeoffs, uncertainty notes, evidence caveats, and non-forecast framing.

**Alternatives considered**: Server-generated PDFs increase runtime complexity. Saved public links conflict with the session-only requirement. Clipboard-only summaries are too fragile for policy review.

## Decision: Use client-side exploratory calculations for MVP

**Rationale**: Public controls are limited to scenario selection, budget envelope, time horizon, and approved uncertainty ranges. These can be evaluated in the browser using reviewed published content and model utilities. This keeps hosting simple and avoids treating the app as a black-box simulation service.

**Alternatives considered**: Serverless calculation functions may become useful for heavier workloads but add deployment and reproducibility complexity. A separate backend service is not justified for the showcase MVP.

## Decision: Use Vitest and Playwright for validation

**Rationale**: Vitest can validate schemas, comparison helpers, and export generation quickly. Playwright can verify public flows, caveat visibility, session-only behaviour, and chart rendering at desktop and mobile sizes.

**Alternatives considered**: Jest is mature but less aligned with modern Vite-style tooling. Cypress is viable but Playwright is better for multi-browser and export-oriented flows.
