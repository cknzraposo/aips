# Research Hypothesis Review and Implementation Plan

*Date: 2026-07-12*  
*Status: Implementation baseline*  
*Scope: Research question, model-to-claim alignment, evidence, uncertainty, validation, reporting, and public interpretation*

---

## 1. Purpose

This document records the comprehensive review of the NZ AI Policy Sandbox research hypothesis and converts the findings into an implementation plan.

The project has a credible and differentiated diagnostic contribution: reported New Zealand AI-adoption figures are not directly comparable, and sector structure is a more useful policy lens than a single national average. The stronger quantitative claim - that sector-targeted policy systematically outperforms aggregate policy - is not yet established.

The implementation priority is therefore to strengthen the research protocol before extending the public product. This means reconciling the written and executable model, establishing defensible resource comparability, propagating uncertainty, and reporting conditions of robustness rather than declaring a winning policy.

---

## 2. Review conclusion

- The research intent is clear and worthwhile: replace misleading single-number adoption discourse with transparent, whole-economy scenario comparison under uncertainty.
- The strongest completed result is the adoption-measure provenance diagnosis in [provenance-analysis.md](provenance-analysis.md).
- The sector-heterogeneity mechanism is plausible and qualitatively supported, but policy responsiveness is mostly inferred rather than observed.
- The model core is deterministic, bounded, typed, and covers all 19 sector blocks, which provides a strong implementation base.
- The current quantitative experiment is not publication-ready because the primary hypothesis is under-specified, same-budget comparability is asserted rather than cost-calibrated, parameter uncertainty is not propagated, and model, content, documentation, and interface contracts have drifted.

---

## 3. Hypothesis assessment

The research programme contains three claims with different evidential status.

### 3.1 Descriptive claim - supported

New Zealand AI-adoption figures are methodologically non-comparable. The reported 32%-87% range combines different populations, definitions, survey frames, and selection biases. This is the project's strongest completed contribution and should lead the paper and public framing.

### 3.2 Structural claim - plausible but partly evidenced

New Zealand sectors differ in digital maturity, firm structure, regulation, governance, capital requirements, and likely AI response pathways. The sector typology is useful and qualitatively supported, but many policy-response coefficients remain analyst assumptions rather than observed sector relationships.

### 3.3 Causal and comparative claim - not yet established

A specified targeted policy rule may produce materially different outcomes from specified aggregate rules under common resource constraints. The current model can explore this claim, but point-calibrated runs cannot establish that targeting systematically outperforms aggregate policy.

### 3.4 Revised primary question

> Under which combinations of sector heterogeneity, policy instrument, resource-allocation rule, and parameter uncertainty do targeted AI policies produce materially different productivity, adoption, labour-adjustment, and enabling-capacity tradeoffs from broad aggregate policies in New Zealand?

### 3.5 Null hypothesis

> After applying common resource constraints and propagating plausible parameter and structural uncertainty, targeted allocation does not produce a robust material improvement over defensible aggregate allocation rules on the nominated outcome or Pareto criteria.

"Systematically" must be operationalised as a pre-specified robustness rate across parameter draws, structural variants, and horizons. It must not mean that one calibrated point run has a favourable direction.

---

## 4. Strengths to preserve

- The provenance comparison is clear, differentiated, and directly policy-relevant.
- Whole-economy denominator coverage is enforced across 19 sector blocks using the 9/6/4 tier structure.
- The bounded ordinary differential equation design is deterministic, inspectable, and simple enough for external critique.
- The one-mechanism-per-layer discipline reduces obvious double counting and makes assumptions legible.
- Zod validation, strict TypeScript, deterministic integration, content-version fields, and runtime sector checks provide a strong reproducibility base.
- The four-outcome framing is preferable to a composite best-policy score and supports transparent policy tradeoffs.
- The repository consistently states that the sandbox is not a forecasting engine, exact GDP or employment model, or policy recommendation system.
- Source limitations and confidence weaknesses are stated rather than hidden.

---

## 5. Priority findings

### 5.1 The headline claim is under-specified

`README.md`, `SCOPE.md`, and `METHODS.md` ask whether aggregate policy systematically produces worse outcomes, but do not define the null, materiality threshold, robustness threshold, or decision criterion. Without these definitions, a favourable calibrated run is descriptive model behaviour rather than a test of the hypothesis.

### 5.2 The executable experiment is narrower than the stated question

`SCOPE.md` and `PAPER-OUTLINE.md` allow GDP-share or equivalent aggregate allocation. `SCENARIOS.md` describes older multi-lever interventions and bottleneck thresholds. `content/scenarios.json` and `lib/model/engine.ts` implement equal-per-sector direct support, static adoption-gap targeting, and enabling-stock investment. These are materially different experiments. Results can only support claims about the implemented rules.

### 5.3 Equal intensity is not equal fiscal cost

`lib/model/compare.ts` maps NZ$1,000M to a dimensionless intervention intensity of 1, then applies that intensity to direct sector support and national enabling investment. No cost or production function establishes that these interventions purchase comparable changes in sector support and enabling capacity. The current dollar label creates unjustified economic comparability.

### 5.4 The targeting rule partly encodes its intended result

Adoption-gap targeting assigns more support where the initial adoption gap is largest. It is mechanically oriented towards reducing adoption gaps. This is a valid scenario, but it is not general evidence for targeted policy, and spread outcomes must be interpreted in light of that construction.

### 5.5 Adoption is presented inconsistently

`STATE-VARIABLES.md` defines adoption maturity as a latent operational-maturity index, not a share of firms or economic activity using AI. The baseline interface presents it as adoption today, current AI use, and a percentage of activity. This turns a calibrated state into an apparent observed prevalence statistic and risks reproducing the single-number problem the project critiques.

### 5.6 The enabling score is over-interpreted

The initial enabling-capacity value and shared rate parameters are assumed and low-confidence. The public baseline nevertheless describes the value as a middle-band position among comparable OECD economies. No observed comparative index in the executable content supports that ranking.

### 5.7 The productivity outcome may omit the sector-scale parameter

The mathematical definition says raw sector productivity gain is the product of the sector productivity ceiling and the normalised realisation state. The content calibrates `pbar`, but `aggregatePBar` aggregates the realisation state without `pbar`. The current result is a GDP-weighted normalised realisation index, not necessarily a GDP-weighted productivity gain. Scenario ordering may change when heterogeneous ceilings are applied.

### 5.8 Evidence classification is too coarse

`content/parameters.json` assigns evidence class and confidence once per sector row. The v0.3 equation specification states that most Tier 1 structural coefficients are assumed even where the initial adoption value is partly derived. The executable schema can therefore present assumed response coefficients as derived because one better-supported input shares their row.

### 5.9 Uncertainty is declared but not propagated

The equation appendix includes sensitivity ranges, and the registry design anticipates ranges and distributions. Executable content carries point values, while the app exposes broad global multipliers rather than approved parameter ranges. No global sensitivity, uncertainty distribution, reversal analysis, or Monte Carlo result supports the central comparative claim.

### 5.10 Lower-tier uncertainty remains material

Tier 2 uses reduced adoption and productivity dynamics plus ex-post labour pressure. Tier 3 uses adoption plus an ex-post productivity proxy and no labour measure. These are transparent modelling choices, but generic whole-economy outcome labels can imply greater fidelity than the model provides.

### 5.11 Outcome definitions contain normative choices

Adoption spread is an unweighted standard deviation across sectors, while productivity and labour are GDP-weighted. Lower spread is labelled favourable even though uniform low adoption is not favourable. The metric must be paired with adoption level and explicitly described as a selected concept of sector equality or economic exposure.

### 5.12 The labour outcome is incomplete

The reported labour indicator combines dynamic Tier 1 labour pressure and a Tier 2 adoption-based proxy, with no Tier 3 contribution. It is suitable as a partial comparative indicator if labelled accordingly, not as a comprehensive labour-market outcome.

### 5.13 Authoritative artefacts have drifted

The v0.3 GDP table values imply tier shares of approximately 60.1% / 21.7% / 18.2%, but the accompanying text and confidence-adjusted calculation use 50.6% / 21.7% / 28.2%. The live engine renormalises the table values. The confidence-adjusted aggregate documented in the equations is not implemented in the app.

### 5.14 Current tests establish software properties, not research validity

Existing tests cover sector counts, boundedness, determinism, reference runs, outcome count, and budget responsiveness. They do not test cost conservation, scenario-contract consistency, productivity-ceiling use, robustness, reversal conditions, structural alternatives, or the central targeted-versus-aggregate proposition.

### 5.15 Some causal evidence should be isolated from calibration

The Public Administration full-time-equivalent reduction is a fiscal-policy event, not causal evidence that AI displaced those roles. It may be useful as a separately labelled stress scenario, but should not anchor AI labour-substitution parameters without an identification argument.

---

## 6. Evidence status

| Area | Current status |
| --- | --- |
| Stats NZ economic denominators | Strong - observed, authoritative, and current |
| Source inventory and integrity verification | Strong - manifest and hash workflow are reproducible |
| Adoption-measure provenance critique | Strong - definitions, populations, and biases are distinguished |
| Policy and regulatory context | Strong to moderate - primarily authoritative NZ sources |
| Direction of sector heterogeneity | Moderate - multiple sources support different barriers and pathways |
| Broad productivity mechanisms | Moderate - supported mainly by international evidence and NZ structural context |
| Tier 1 adoption baselines | Mixed - several convenience samples, weak sector cuts, and construct differences |
| Sector response coefficients | Weak - mostly assumed or derived from archetypes |
| Shared dynamic rates | Weak - assumed and not fitted to NZ time series |
| NZ-specific productivity conversion | Weak - no firm-level adoption-productivity panel |
| Causal labour effects | Weak - international proxies and no NZ identification strategy |
| Tier 2 and Tier 3 dynamics | Weak - reduced forms and assumed coefficients |
| Parameter distributions and correlated uncertainty | Not operationalised |
| Cost-equivalent policy instruments | Not operationalised |
| Robustness rates and reversal conditions | Not operationalised |
| Backtesting and independent reproduction | Not completed |

---

## 7. Implementation phases

### Phase 1 - Lock the research protocol

1. Split the argument into descriptive, structural, and causal claims and assign an evidence status to each.
2. Replace the unconditional working hypothesis with conditional hypotheses and a null.
3. Define materiality, robustness, reversal, Pareto, and indeterminate-result criteria before running final comparisons.
4. Create a versioned analysis protocol covering scenario rules, outcomes, uncertainty ranges, structural variants, seeds, exclusions, and reporting tables.

**Exit gate:** the protocol is reviewable without consulting implementation code, and every planned result maps to a pre-specified question and criterion.

### Phase 2 - Reconcile the authoritative model

1. Reconcile `SCENARIOS.md`, the v0.3 equations, `content/scenarios.json`, and `lib/model/engine.ts` into one versioned scenario contract.
2. Resolve GDP-proportional versus equal-per-sector aggregate allocation, old multi-lever versus current single-lever scenarios, and static adoption-gap versus bottleneck targeting.
3. Correct the stale tier-share arithmetic and either implement or remove the confidence-adjusted aggregate.
4. Make the content version identify an immutable reviewed source revision.
5. Correct adoption, enabling-capacity, productivity, spread, and labour construct mappings.

**Exit gate:** equations, prose, content, code, tests, and public labels describe the same model and scenario experiment.

### Phase 3 - Make comparisons economically meaningful

1. Define instrument-to-model and cost mappings for direct support and enabling investment.
2. Until cost calibration exists, replace the public NZ-dollar budget label with abstract intervention intensity.
3. Compare more than one defensible aggregate rule: equal per sector, GDP-proportional, and another broad rule only if evidence supports it.
4. Compare these with pre-specified targeted rules such as adoption gap, diagnosed bottleneck, or expected marginal benefit per cost.
5. Keep targeting rules ex ante and observable so the model does not optimise against its own assumed response coefficients.
6. Test resource-envelope conservation in cost units across every scenario.

**Exit gate:** like-for-like comparisons use a defensible common resource definition, or are explicitly labelled as equal-intensity model experiments.

### Phase 4 - Operationalise evidence and uncertainty

1. Move from sector-row labels to parameter-level provenance using the registry design.
2. Record evidence class, source, method, confidence, access date, selection bias, plausible range, and history for every active parameter.
3. Prioritise global rates, Tier 1 structural coefficients, Agriculture and Construction adoption, Financial Services sampling, Healthcare admin versus clinical AI, labour effects, and Tier 2/3 multipliers.
4. Isolate the Public Administration reduction as an external stress scenario unless an identification argument supports calibration use.
5. Implement one-at-a-time screening, global parameter sampling, correlated-source groups, and structural sensitivity cases.
6. Include alternative aggregate rules, no adoption-to-capability feedback, alternative tier reductions, low-confidence-sector treatment, 5/10/15/20-year horizons, and integration-step convergence.
7. Report distributions and reversal conditions for every outcome.

**Exit gate:** each result can be classified as robust, fragile, or indeterminate against declared uncertainty and structural alternatives.

### Phase 5 - Validate and report

1. Expand tests to analytical cases, zero-policy equivalence, resource conservation, justified monotonicity, productivity-ceiling use, outcome coverage, and locked-protocol regression fixtures.
2. Obtain an economist or model reviewer for identification and cost comparability.
3. Obtain sector-expert review for bottlenecks, signs, and plausible parameter ranges.
4. Obtain policy-user review for interpretability and decision usefulness.
5. Record disagreements instead of averaging them away.
6. Seek higher-value evidence in parallel, including sector cuts, Agriculture and Construction outreach, Healthcare separation, finance evidence, and a pathway to firm-level adoption-productivity data.
7. Draft the paper around established descriptive findings, conditional model propositions, and uncertainty-bounded policy implications.
8. Publish a calibration appendix, scenario protocol, robustness and reversal table, and machine-readable result bundle with model version and seed.

**Exit gate:** an independent reviewer can reproduce the main comparison from the protocol and machine-readable inputs.

### Phase 6 - Align the public application

1. Ensure indexes are never presented as observed percentages, prevalence rates, or rankings.
2. Show adoption level beside spread and disclose partial labour coverage.
3. Expose outcome definitions and evidence status at the point of interpretation.
4. Complete parameter-level evidence drill-down.
5. Add approved sensitivity controls based on registry ranges.
6. Add static summary export containing model and content version, scenario and resource assumptions, uncertainty notes, weak-evidence caveats, and the non-forecast statement.
7. Test whether users distinguish maturity indexes from prevalence, conditional comparisons from forecasts, and tradeoffs from recommendations.

**Exit gate:** public interpretation matches the research protocol and does not imply more precision, coverage, or causal authority than the model supports.

---

## 8. Verification programme

1. Build equations with `cd src/equations && make` and independently recalculate sector and tier weights.
2. Verify every displayed aggregate against the source table and mathematical definition.
3. Run `npm run test`, `npm run typecheck`, `npm run lint`, and `npm run build` after each implementation slice.
4. Add focused tests that fail if the productivity ceiling is bypassed when raw gain is selected, envelopes do not conserve resources, or scenario, content, and equation definitions diverge.
5. Run deterministic robustness fixtures with fixed seeds and publish ranges, draw count, convergence checks, reversal rates, and horizon sensitivity.
6. Have at least one independent economist or model reviewer reproduce the main comparison.
7. Conduct comprehension testing against the public-app success criteria.

---

## 9. Publication gates

Publication of comparative model findings requires all of the following:

- reconciled authoritative equations, content, documentation, code, and public labels
- a locked research protocol with a null, conditional hypotheses, and materiality criteria
- valid policy-cost mapping or explicit abstract-intensity labelling
- parameter-level provenance and plausible ranges for all active inputs
- completed parameter and structural robustness analysis
- transparent reversal and indeterminate-result reporting
- independent methods review
- passing model, content, type, lint, and build checks
- user testing showing that readers understand the outputs as conditional comparisons, not forecasts or recommendations

---

## 10. Scope boundaries

The following remain out of scope unless the narrowed research question demonstrates that they are necessary:

- firm-level agents
- regional modelling
- distributional microsimulation
- fiscal feedback
- international spillovers
- additional state variables
- adaptive policy optimisation
- a composite scenario score

The five-state, three-tier ordinary differential equation architecture remains the baseline. Evidence gaps should be handled by wider uncertainty and narrower claims, not invented precision.

---

## 11. Decisions

- Treat the 32%-87% provenance analysis as the lead contribution.
- Treat targeted-policy superiority as a conditional hypothesis, not a conclusion.
- Prioritise research validity over the current product backlog.
- Do not claim equal NZ-dollar budgets until policy instrument costs are calibrated.
- Use abstract intervention intensity where cost equivalence is unavailable.
- Do not rank scenarios with a composite score.
- Report multi-outcome tradeoffs, Pareto relationships, and the assumptions under which conclusions reverse.
- Preserve the locked state-variable structure during this implementation phase.

---

## 12. Immediate next implementation slice

1. Add the versioned research protocol referenced by this plan.
2. Align the headline research question and hypothesis in `README.md`, `SCOPE.md`, and `METHODS.md`.
3. Add protocol links from the core research documents.
4. Reconcile the scenario contract before changing engine behaviour.
5. Correct public construct labels before exposing additional model outputs.
