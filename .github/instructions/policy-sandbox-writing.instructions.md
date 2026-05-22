---
description: "Use when writing or editing NZ AI Policy Sandbox markdown content, including README, scenarios, methods, findings, and evidence notes. Enforces policy-sandbox framing, claim discipline, NZ English style, and provenance expectations."
name: "NZ Policy Sandbox Writing Guardrails"
applyTo: "**/*.md"
---

# NZ AI Policy Sandbox Writing Guardrails

- Follow these rules for all repository content. Only deviate when the user explicitly states which specific rule to override and why.
- Keep the project framing explicit: this is a policy comparison sandbox under uncertainty, not a forecasting engine or definitive ranking tool.
- Avoid precise future claims unless directly supported by a cited source. Do not present exact GDP or employment predictions as model outputs.
- Treat scenarios as comparative archetypes, not recommendations. Report tradeoffs across productivity, adoption spread, labour adjustment pressure, and enabling capacity.
- Preserve whole-economy coverage language: aggregate comparisons should represent all 19 ANZSIC Level 1 sectors using the tiered structure.
- Respect locked model structure language. Do not propose or imply changes to core state variables unless explicitly requested.
- When introducing quantitative claims or parameter values, always label the evidence class: observed, derived, expert, placeholder, or assumed.
- When introducing or modifying parameter-related statements, include provenance details where available: source, method, confidence, access date, and known bias limits.
- If NZ-specific evidence is thin, prefer Stats NZ first, then NZ policy or industry context, then international benchmarks with caveats.
- Use NZ English and spaced hyphens in prose (for example, "policy sandbox - comparative, transparent").
- State assumptions and caveats plainly, especially when evidence is weak or mixed.
- For equation-version references, treat v0.3 as current and v0.1/v0.2 as historical unless explicitly asked to revise history.
