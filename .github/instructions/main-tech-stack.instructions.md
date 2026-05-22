---
description: "Use when implementing or modifying the NZ AI Policy Sandbox web app stack, architecture, data contracts, state handling, testing, and deployment configuration."
name: "NZ Sandbox Main Tech Stack"
applyTo: "app/**, components/**, lib/**, content/**, tests/**, package.json, tsconfig.json, next.config.ts, tailwind.config.ts, vitest.config.ts, playwright.config.ts, .github/workflows/**"
---

# NZ Sandbox Main Tech Stack

- Use Next.js App Router with React and TypeScript as the primary application framework.
- Use Tailwind CSS with shadcn-style component primitives for consistent, accessible UI patterns.
- Design for a policy and economics audience: professional, credible, and institution-ready visual presentation.
- Prefer an editorial briefing aesthetic over startup marketing styles: clear hierarchy, restrained accents, and high readability.
- Use charts, metrics, and caveat blocks that support analytical reading and evidence interpretation.
- Keep motion subtle and purposeful so it improves comprehension rather than drawing attention away from content.
- Use ECharts for comparison and sensitivity visualisations.
- Keep authoritative content in repository-managed YAML and JSON files under `content/`.
- Validate all structured content and export payloads with Zod before use.
- Keep comparison, validation, and sensitivity logic in pure TypeScript modules under `lib/model/`.
- Keep side effects isolated to adapters such as state and export modules.
- Keep public exploration session-only using URL/query state and browser session state.
- Do not persist public comparison runs server-side for the MVP.
- Generate static summary exports client-side and include assumptions, caveats, and published content version.
- Use TypeScript strict mode and schema-contract checks for policy-critical data paths.
- Use Vitest for model/schema unit testing and Playwright for end-to-end comparison and export flows.
- Prefer static-first deployment using Next.js static export to Cloudflare Pages for the MVP.
- Do not introduce a database or public-write backend unless a requirement explicitly justifies it.
