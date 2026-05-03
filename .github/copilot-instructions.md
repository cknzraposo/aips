<!-- SPECKIT START -->
For additional context about technologies to be used, project structure,
shell commands, and other important information, read specs/001-ai-policy-sandbox-app/plan.md
<!-- SPECKIT END -->

# Repository Instructions

This repository and project is the New Zealand AI Policy Sandbox: a transparent, NZ sector-calibrated policy sandbox for comparing AI policy tradeoffs under uncertainty. Treat it as a policy comparison framework and structured evidence synthesis, not as a forecasting engine, black-box simulator, definitive adoption ranking, or source of exact GDP and employment predictions.

## Read First

- Start with `README.md` for the project framing, research question, current status, and evidence base.
- Treat `.specify/memory/constitution.md` as the governing Spec Kit constitution for feature planning, tasks, implementation, and review.
- For scope and modelling posture, read `SCOPE.md`, `METHODS.md`, and `STATE-VARIABLES.md` before changing model structure.
- For policy scenarios, read `SCENARIOS.md` before changing scenario language, run definitions, or outcome measures.
- For evidence and calibration work, read `docs/provenance-analysis.md`, `data/required-data-catalogue.md`, and `registry/REGISTRY-SCHEMA.md`.
- For equation work, read `src/equations/README.md` and the current equation source before editing LaTeX.

## Project Guardrails

- Preserve the policy sandbox framing. The model supports comparative reasoning under uncertainty; do not present outputs as forecasts or precise future claims.
- Prefer simple, maintainable designs. Add abstractions, services, persistence, or model dimensions only when the need is documented and a simpler option is insufficient.
- Prefer functional programming patterns for model, content, validation, and export logic: pure transformations, immutable inputs, deterministic outputs, and isolated side effects.
- Keep implementation code type safe. Use explicit schemas or typed contracts for structured data and validate repo-backed content before use.
- Keep user-facing UX uniform across navigation, controls, terminology, caveats, responsive layout, and accessibility patterns.
- Whole-economy coverage is mandatory. Aggregate-policy comparisons must cover all 19 ANZSIC Level 1 sectors, not only the 9 Tier 1 narrative sectors.
- Respect the tiered structure: Tier 1 has full explanatory sectors, Tier 2 has simplified sectors, and Tier 3 closes the residual economy denominator.
- Treat `STATE-VARIABLES.md` as locked unless the user explicitly asks to revisit the state space. The core structure is adoption maturity, absorptive capability, realised productivity effect, labour adjustment pressure, and national enabling capacity.
- Keep one mechanism per layer. Avoid double counting capability, productivity, labour pressure, trust, or enabling effects across multiple variables.
- Prefer the simplest model that answers the policy question credibly. Do not add firm-level agents, regional variation, fiscal feedback, international spillovers, or distributional analysis unless the scope changes.

## Evidence And Provenance

- Distinguish evidence classes explicitly: observed, derived, expert, placeholder, or assumed.
- For parameters and factual claims, record source, method, confidence, access date, and selection bias where available.
- Treat the 32%-87% NZ AI adoption range as core context. The point is methodological fragmentation, not choosing a single national adoption number.
- When NZ-specific evidence is thin, use Stats NZ baselines first, then NZ policy or industry context, then international benchmarks as derived inputs with caveats.
- Do not make untraceable parameter changes. Future parameter work should align with the structured YAML registry direction in `registry/REGISTRY-SCHEMA.md`.

## Scenarios And Claims

- Scenarios are archetypes for structural comparison, not policy recommendations.
- Compare like with like: scenarios compared head-to-head should use the same aggregate budget envelope and simulation horizon unless the task explicitly says otherwise.
- Report tradeoffs across productivity, adoption spread, labour adjustment pressure, and enabling capacity. Do not collapse the sandbox into a single best-policy score.
- Avoid exact GDP forecasts, exact job-loss counts, definitive sector rankings, or definitive national adoption rates unless the supporting document explicitly warrants that claim.

## Artefact Guidance

- Markdown and documentation must use NZ English and spaced hyphens (` - `), following `.github/CONTRIBUTING-STYLE.md`.
- State assumptions and caveats plainly. If evidence is weak, label it weak.
- Equation versions `v0.1` and `v0.2` are historical. `v0.3` is the current calibrated specification; do not rewrite older versions unless explicitly asked.
- Build equations with `cd src/equations && make`. Use `make v02` or `make v01` only for historical versions.
- No simulation tech stack is locked yet. Before adding implementation code, align with the equation specification, scenario specification, registry schema, and any current Spec Kit plan.
- Existing Speckit agents and prompts are workflow tooling. Do not treat their generic templates as domain rules for this project.

## Unresolved Conventions

Ask or document a decision before inventing conventions for simulation language, package management, result storage, calibration QA, run versioning, peer review, sensitivity-analysis file layout, or registry validation commands.
