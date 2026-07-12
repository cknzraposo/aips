# NZ AI Policy Sandbox Research Protocol

*Protocol version: 0.1.0*  
*Date: 2026-07-12*  
*Status: Draft for economist and sector-expert review*  
*Applies to: Comparative model findings produced after protocol approval*

---

## 1. Purpose

This protocol defines how the NZ AI Policy Sandbox will test comparative claims about broad and targeted AI policy under uncertainty.

It separates the project's established descriptive finding from the propositions explored through the model. It also fixes the comparison rules before final scenario results are produced, reducing the risk that scenario definitions, thresholds, or reporting choices are adjusted to favour a preferred result.

The protocol governs research claims. It does not convert the sandbox into a forecasting engine, cost-benefit model, or policy recommendation system.

The findings motivating this protocol and the implementation sequence are recorded in [research-hypothesis-review-and-plan.md](research-hypothesis-review-and-plan.md).

---

## 2. Claims and evidential status

### 2.1 Established descriptive finding

Reported New Zealand AI-adoption figures are not directly comparable because they use different definitions, populations, survey frames, and selection mechanisms. The evidence for this finding is synthesised in [provenance-analysis.md](provenance-analysis.md).

The model is not used to test this finding.

### 2.2 Structural proposition

New Zealand sectors differ in adoption maturity, absorptive capability, productivity pathways, labour-adjustment exposure, and access to national enabling capacity.

The model represents this proposition through sector-specific parameters. External sector review and sensitivity analysis are required because many of those parameters are assumed or derived rather than directly observed.

### 2.3 Comparative proposition

Targeted and broad policy-allocation rules may produce materially different tradeoffs when sectors are heterogeneous.

This is a conditional model proposition, not an established empirical result. The analysis must identify the assumptions, allocation rules, horizons, and evidence ranges under which differences are robust, fragile, or indeterminate.

---

## 3. Research question and hypotheses

### 3.1 Primary research question

> Under which combinations of sector heterogeneity, policy instrument, resource-allocation rule, and parameter uncertainty do targeted AI policies produce materially different productivity, adoption, labour-adjustment, and enabling-capacity tradeoffs from broad aggregate policies in New Zealand?

### 3.2 Null hypothesis

After applying common resource constraints and propagating plausible parameter and structural uncertainty, targeted allocation does not produce a robust material improvement over defensible aggregate allocation rules on the nominated outcome or Pareto criteria.

### 3.3 Conditional hypotheses

**H1 - Sector bottlenecks:** Targeted direct support produces a material improvement in at least one nominated outcome when sector-specific adoption or capability bottlenecks are sufficiently heterogeneous, without producing an unacceptable reversal in the other reported outcomes.

**H2 - Enabling capacity:** Enabling-system investment produces a material improvement when shared national capacity is the binding constraint across enough GDP-weighted sector activity.

**H3 - Allocation dependence:** The direction and scale of targeted-versus-aggregate differences depend on the aggregate allocation rule. A conclusion observed against equal-per-sector allocation may not hold against GDP-proportional allocation.

**H4 - Evidence dependence:** Conclusions become less certain when low-confidence Tier 2 and Tier 3 parameters, assumed global rates, and sector productivity ceilings are varied across their plausible ranges.

**H5 - Horizon dependence:** Scenario differences may reverse or attenuate across 5-, 10-, 15-, and 20-year horizons because direct and enabling interventions have different onset and persistence.

No hypothesis presumes that one scenario is best across all outcomes.

---

## 4. Unit of analysis and scope

- The unit of analysis is a sector block, not a firm, worker, region, or occupation.
- Whole-economy comparisons include all 19 model sectors through the locked Tier 1, Tier 2, and Tier 3 structure.
- The five-state modelling posture remains adoption maturity, absorptive capability, realised productivity effect, labour-adjustment pressure, and national enabling capacity.
- Tier reductions remain explicit modelling choices, not empirical findings.
- Public trust, firm-level emergence, regional variation, fiscal feedback, international spillovers, and distributional microsimulation remain outside the baseline protocol.

---

## 5. Comparison families

The final executable names and equations must be reconciled before this protocol is approved. At minimum, the analysis will include the following families.

### 5.1 Reference

**Status quo:** no additional AI-specific policy intervention. Existing baseline dynamics continue. This is a model reference trajectory, not a forecast of policy inactivity.

### 5.2 Broad aggregate rules

**Equal-per-sector aggregate:** distribute the common direct-support resource equally across all 19 sectors.

**GDP-proportional aggregate:** distribute the common direct-support resource in proportion to each sector's reviewed GDP weight.

An additional broad rule may be added only when it represents a documented policy mechanism and is registered before final analysis.

### 5.3 Targeted direct-support rules

**Initial adoption-gap targeting:** distribute direct support using a rule based only on reviewed initial adoption-maturity values.

**Diagnosed-bottleneck targeting:** distribute direct support using an ex ante, documented classification of sector bottlenecks. The classification must not use the final scenario outcomes it is intended to explain.

**Marginal-benefit-per-cost targeting:** deferred until policy instrument costs and marginal model responses have defensible calibration. It must not be included in the first protocol run if those conditions are unmet.

### 5.4 Enabling-system rule

**National enabling investment:** direct the common resource to the national enabling-capacity mechanism rather than direct sector support.

### 5.5 Mixed rule

**Mixed direct and enabling support:** split the common resource between a registered targeted direct-support rule and national enabling investment. The split must be declared before a run and applied consistently across uncertainty draws.

---

## 6. Resource comparability

### 6.1 Current limitation

The current mapping from a public NZ-dollar budget to dimensionless model intensity does not establish equal fiscal cost across direct support and enabling investment.

### 6.2 Protocol rule

Until instrument-specific cost mappings are calibrated, comparisons must be described as **equal-intensity model experiments**, not equal-budget policy comparisons. Public and research outputs must not attach an NZ-dollar interpretation to the intensity control.

### 6.3 Future cost-equivalent analysis

A cost-equivalent analysis requires:

- a defined policy instrument for every intervention channel
- the units purchased by one NZ dollar for each instrument
- implementation and administration costs where material
- timing of operating and capital expenditure
- a mapping from purchased units to the relevant model control
- tests showing that each scenario conserves the declared resource envelope

Cost-equivalent findings are outside Protocol 0.1 unless these requirements are met and reviewed.

---

## 7. Outcome definitions

All four core outcomes must be reported. No composite score will be calculated.

### 7.1 Productivity

Two measures must be distinguished:

1. **Normalised productivity realisation:** GDP-weighted sector realisation states.
2. **Potential-adjusted productivity effect:** GDP-weighted sector realisation multiplied by the reviewed sector productivity ceiling or reduced-form equivalent.

The second measure is the preferred policy outcome if the productivity ceilings are retained in the calibrated model. The first remains a diagnostic measure. Labels must not imply GDP percentage points or dollar output.

### 7.2 Adoption

Report both:

- GDP-weighted mean adoption maturity at the horizon
- cross-sector adoption dispersion at the horizon

Adoption maturity is a normalised operational-maturity index. It is not the percentage of firms, workers, activity, or expenditure using AI.

The protocol must state whether dispersion is sector-equal or economically weighted. The primary analysis will report both if they produce materially different interpretations.

### 7.3 Labour adjustment

Report the cumulative modelled labour-adjustment-pressure indicator over the horizon.

The label and notes must state that:

- Tier 1 is dynamic
- Tier 2 is a reduced-form reporting proxy
- Tier 3 has no labour contribution
- the indicator is not a forecast of jobs lost, jobs created, wages, or unemployment

### 7.4 National enabling capacity

Report the enabling-capacity state at the horizon and, where useful, its change from the reference trajectory.

The state is an assumed composite index, not an observed international ranking.

---

## 8. Materiality and result classification

The thresholds below are provisional analytical conventions for Protocol 0.1. They require economist review before the protocol is approved.

### 8.1 Material difference

A scenario difference is provisionally **material** when its absolute change is at least 5% of the corresponding reference outcome scale and exceeds numerical integration tolerance.

Because near-zero reference values make relative changes unstable, every result table must also report raw index differences. Outcome-specific thresholds may replace the 5% convention only through a documented protocol revision before final analysis.

### 8.2 Robustness rate

For a registered comparison and outcome, the robustness rate is the share of admissible parameter draws and structural variants in which the material difference has the same direction.

Provisional classifications:

| Classification | Rule |
| --- | --- |
| Robust | Same material direction in at least 80% of admissible runs, with no critical structural case reversing the conclusion |
| Fragile | Same material direction in 50%-79% of admissible runs, or at least one critical structural case reverses it |
| Indeterminate | No material difference in most runs, or neither direction reaches 50% |
| Reversed | The opposite material direction occurs in at least 50% of admissible runs |

These categories describe model robustness, not empirical confidence intervals or probabilities that a policy will succeed.

### 8.3 Pareto reporting

A scenario is Pareto-dominant only if it is no worse on all four registered outcomes and materially better on at least one, under the stated orientation and coverage limits.

If outcomes trade off, report the tradeoff. Do not apply hidden weights to select a winner.

---

## 9. Parameter uncertainty

### 9.1 Registry requirements

Every active parameter must have:

- evidence class
- source or explicit assumption rationale
- derivation method
- confidence
- access date where a source exists
- selection-bias or transferability note where relevant
- plausible range
- change history

Point estimates without a reviewed plausible range are not eligible for the final robustness run.

### 9.2 Sampling

The first global analysis will use deterministic pseudo-random sampling with a published seed and draw count. Distribution shapes must be evidence-informed. Where only bounds exist, the use of uniform or triangular distributions must be labelled as an assumed analytical choice.

Parameters sharing a source or derivation must not automatically be sampled as independent. Correlated groups must be identified during registry review.

### 9.3 Priority uncertainty groups

1. shared global rate constants
2. Tier 1 response and feedback coefficients
3. sector productivity ceilings
4. Agriculture and Construction baselines
5. Financial Services adoption and regulatory-response assumptions
6. Healthcare admin versus clinical adoption assumptions
7. labour-pressure coefficients
8. Tier 2 and Tier 3 reduced-form coefficients

---

## 10. Structural sensitivity cases

The following cases are mandatory:

- equal-per-sector versus GDP-proportional aggregate allocation
- adoption-gap versus diagnosed-bottleneck targeting
- adoption-to-capability feedback at calibrated value and zero
- baseline tier reductions versus a conservative low-fidelity-sector treatment
- canonical aggregate versus confidence-adjusted or low-confidence-excluded diagnostic aggregate
- 5-, 10-, 15-, and 20-year horizons
- policy duration variants registered before execution
- numerical integration step-size convergence

Additional cases require a protocol amendment or must be labelled exploratory.

---

## 11. Numerical verification

Before substantive analysis:

1. all dynamic states must remain within their declared bounds
2. identical inputs must reproduce identical trajectories
3. zero additional intervention must reproduce the registered reference mechanics
4. every scenario must conserve its declared resource envelope in the units used by the protocol
5. equation, content, and executable scenario definitions must pass contract tests
6. productivity aggregation must use the registered normalised or potential-adjusted definition
7. integration results must be stable under a smaller time step within a declared tolerance
8. all 19 sectors must appear in whole-economy outcomes

Scenario ordering will not be asserted as a software invariant unless it follows analytically from the scenario construction.

---

## 12. External validation

### 12.1 Conceptual review

An economist or model reviewer will assess:

- identification of the comparative claim
- resource comparability
- outcome interpretation
- materiality and robustness conventions
- structural sensitivity coverage

### 12.2 Sector review

Sector reviewers will assess:

- direction of key bottlenecks
- sign and plausible range of sector parameters
- omitted constraints that could invalidate the registered scenario mechanism
- transferability of international evidence to New Zealand

### 12.3 Policy-user review

Policy users will assess whether the outputs support comparison without implying forecasts, recommendations, or exact economic effects.

Disagreements will be recorded. They will not be averaged into consensus parameters without a documented method.

---

## 13. Reporting rules

Every reported comparison must include:

- protocol version
- model and content version
- source revision
- registered scenarios and allocation rules
- resource interpretation: equal intensity or cost-equivalent
- horizon and policy duration
- outcome definitions
- parameter ranges, sampling method, draw count, and seed
- structural cases included
- median and interval summaries for each outcome
- material-direction share and robustness classification
- reversal conditions
- evidence and coverage caveats
- non-forecast statement

The report must distinguish:

- established descriptive evidence
- conditional model results
- policy implications that depend on value judgements or evidence not represented in the model

Exact GDP forecasts, exact employment counts, and definitive policy rankings are prohibited.

---

## 14. Exclusions and deviations

A run is inadmissible for the registered primary analysis when:

- required parameters lack reviewed ranges
- a scenario violates the registered resource rule
- sector coverage is incomplete
- model, content, and equation versions are inconsistent
- numerical convergence fails
- a result cannot be reproduced from the recorded seed and inputs

Deviations must be reported with a reason. Exploratory analyses may be retained, but must be separated from registered findings.

---

## 15. Approval checklist

Protocol 0.1 is ready to lock when:

- [ ] an economist or model reviewer has reviewed the null and materiality rules
- [ ] the scenario contract is reconciled across prose, equations, content, and code
- [ ] the budget control is relabelled as intensity or backed by reviewed cost mappings
- [ ] productivity, adoption, labour, and enabling outcomes are reconciled with their constructs
- [ ] parameter-level ranges exist for all active inputs
- [ ] mandatory structural cases are executable
- [ ] numerical and contract tests pass
- [ ] the reporting template is implemented

Until these items are complete, model results remain exploratory.

---

## 16. Change control

Changes to hypotheses, scenario rules, primary outcomes, materiality thresholds, robustness thresholds, exclusions, or mandatory structural cases require:

1. a protocol version change
2. a dated rationale
3. identification of whether any results were observed before the change
4. rerunning all registered comparisons under the revised protocol

Calibration updates that remain within the approved protocol require a new content version and provenance history, but not necessarily a protocol version change.
