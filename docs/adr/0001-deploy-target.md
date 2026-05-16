# ADR 0001: Deploy target for AIPS showcase

- Status: Accepted
- Date: 2026-05-16
- Deciders: AIPS delivery team
- Technical story: `specs/001-ai-policy-sandbox-app`

## Context

AIPS is being built as a public policy comparison application.
The current stack is Next.js, TypeScript, Tailwind CSS,
shadcn/ui, ECharts, and Zod.

The implementation plan originally described a
"deployable to Vercel free tier" showcase target.
That wording was suitable as an early default,
but it did not yet reflect platform selection criteria
specific to this project and operating context.

This decision records the deployment target for the
showcase MVP and clarifies how that target aligns with
functional requirements, risk profile, and ongoing operations.

## Problem statement

The team must choose a deployment target that:

- supports a static-first public web app
- keeps operations simple for a small delivery team
- avoids avoidable commercial or usage-policy risk
- tolerates potentially spiky public traffic
- aligns with existing hosting and DNS operations
- preserves a clear path for future server-side additions

## Architecture and delivery constraints

AIPS currently has the following delivery characteristics:

- no authentication surface
- no database
- no API routes
- no Server Actions
- no ISR requirement
- no dynamic runtime data fetch requirement
- all public comparison compute runs client-side
- content is loaded from repo-reviewed YAML at build time
- public runs are browser-session-only

Given these constraints, the deployment target does not need
runtime server capability for MVP.

## Decision

Adopt **Cloudflare Pages** as the deployment target,
using **Next.js static export** via `output: 'export'`.

Build output for deployment is static HTML, JS, and CSS,
served from the `out/` directory produced by `npm run build`.

This decision is based on the factors below.

### 1) App is genuinely static

AIPS does not rely on runtime server features in scope.
Comparison logic, sensitivity behaviour, and summary export
run in the browser session.

Authoritative content is repo-reviewed and consumed at build time.
This fits static export directly.

### 2) Operational consistency

Other production sites for this owner run on Cloudflare Pages
or adjacent Cloudflare services.

Selecting Cloudflare Pages keeps deployment, access,
and operational conventions in one platform instead of
splitting one project onto a separate provider.

### 3) Commercial-use policy risk reduction

Cloudflare Pages free tier has no equivalent commercial-use
restriction that maps to the Vercel Hobby clause.

AIPS is launching under AI for Good NZ and is currently
non-commercial, but policy should not create a future constraint
if that boundary changes.

### 4) Bandwidth risk reduction

Cloudflare Pages free tier includes unmetered bandwidth.
Vercel Hobby has a monthly bandwidth cap.

For a public policy tool that may receive sudden traffic
from media or government-linked sharing, unmetered bandwidth
removes a known operational risk class.

### 5) Security posture on free tier

Cloudflare provides DDoS protection, WAF capability,
and bot-management controls as first-class platform features.

For a public-facing policy tool, this baseline is useful
without introducing extra paid security layers at launch.

### 6) DNS alignment assumption

`aiforgood.org.nz` DNS is assumed to be managed on Cloudflare.
If confirmed, custom domain onboarding and TLS setup are
simpler within one provider boundary.

This is an assumption to verify before launch.

### 7) Future extension path

If later scope introduces telemetry or lightweight server endpoints
for features such as "email me this summary", Cloudflare Workers
provides a co-located path in the same dashboard and account model.

## Consequences

### Positive consequences

- Deployment target matches static app architecture.
- No dependency on Next.js runtime adapters for MVP.
- Lower operational surface area for team administration.
- Lower risk of free-tier bandwidth exhaustion.
- Lower policy risk from commercial-use restrictions.
- Baseline edge security controls are available by default.
- Clear progression path if small server workloads are added later.

### Negative consequences

- No runtime `next/image` optimisation.
  Image optimisation must be handled at build time or in assets.
- No ISR, Server Actions, or dynamic runtime RSC fetch capability
  under the current static-export mode.
- Any future move to runtime server features will require a new
  architecture decision and likely platform adapter work.

### Tradeoffs accepted

- Using static export intentionally constrains runtime feature use.
  This is acceptable because current requirements do not need those
  capabilities.
- Chart-heavy UI relies mainly on ECharts canvas rendering,
  so runtime image optimisation limits are minor for MVP.
- Content updates require rebuild and redeploy.
  This matches the intended authoritative-content workflow.

## Alternatives considered

## Alternative A: Vercel Hobby with mostly static Next.js

### Pros

- First-party alignment with Next.js defaults.
- Strong preview deployment workflow by default.
- Minimal setup for common Next.js usage patterns.

### Cons

- Hobby tier has a monthly bandwidth cap.
- Hobby terms include commercial-use limits that may create future
  governance risk even if current launch is non-commercial.
- Adds another provider dashboard, billing context,
  and access-management surface for a single app.
- Operational posture diverges from existing site fleet.

### Why not selected

Vercel is technically viable.
It was not selected because Cloudflare Pages offers a better fit
for this static workload and existing operational context,
with fewer future policy and bandwidth risks.

## Implementation notes

- In `next.config.ts`, set `output: 'export'`.
- Ensure `npm run build` produces the `out/` directory for Pages.
- Configure Cloudflare Pages project build settings accordingly.
- Keep content loading build-time only for MVP scope.

These points imply a small update to Setup tasks
(T001 to T009 in the planning artefacts),
particularly T003 and build-output expectations.

## Open questions and assumptions to verify before launch

1. Confirm DNS provider for `aiforgood.org.nz` is Cloudflare.
2. Confirm custom-domain choice for AIPS
   (for example `aips.aiforgood.org.nz` or another subdomain).
3. Confirm preview-deployment workflow requirements:
   - branch preview URL retention policy
   - access expectations for internal reviewers
   - promotion path from preview to production
4. Confirm whether Cloudflare Pages project-level WAF rules
   need explicit hardening before public launch.

## References

- `specs/001-ai-policy-sandbox-app/spec.md`
- `specs/001-ai-policy-sandbox-app/plan.md`
- `specs/001-ai-policy-sandbox-app/research.md`
- `specs/001-ai-policy-sandbox-app/tasks.md`
