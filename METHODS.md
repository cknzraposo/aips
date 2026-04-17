# NZ AI Policy Sandbox - Methods Note

*Working title: NZ AI Economy Simulator*  
*Date: 2026-04-17*  
*Status: Draft v1*

---

## 1. Purpose

This project exists because New Zealand's current AI policy discussion rests on a weak baseline.

The most-cited AI adoption figures in New Zealand range from **32% to 87%**, reflecting different populations, definitions, and methods. Some widely-cited figures are not adoption measures at all. Meanwhile, actual AI adoption figures in circulation vary depending on who was surveyed, how adoption was defined, and what kind of use was counted.

That means the standard habit of talking about "NZ AI adoption" as a single national number is methodologically unsound.

The purpose of this project is therefore **not** to predict the future with precision. It is to build a **sector-calibrated policy sandbox** that allows policymakers, researchers, and serious readers to compare alternative AI policy approaches under uncertainty.

---

## 2. Research question

### Core question
Does aggregate AI policy, designed around a single national average, systematically produce worse outcomes than sector-targeted policy in New Zealand?

### Working hypothesis
Yes. New Zealand's sector structure creates materially different AI adoption pathways, constraints, and returns. A policy built to a single average will misread those differences and misallocate effort.

---

## 3. What the model is and is not

### The model is
- a **scenario model**
- a **policy comparison tool**
- a **structured synthesis of heterogeneous sector evidence**
- a way to test how different policy designs perform under different assumptions

### The model is not
- a forecasting engine
- a claim to exact future GDP or employment outcomes
- a definitive measure of "true" national AI adoption
- a substitute for sector-specific policy judgment

The model is designed to support comparative reasoning, not produce false certainty.

---

## 4. Why a sector-calibrated approach is necessary

The evidence gathered so far shows clear sector differences:

- **Healthcare:** back-office AI is much easier to deploy than clinical AI; equity, governance, and interoperability are binding constraints
- **Public sector:** capability, culture, and scale are the main barriers; early risk-heavy guidance created a chilling effect
- **Financial services:** adoption is shaped by regulation and financial stability concerns, not just cost or capability
- **Manufacturing:** clearer productivity case, stronger investment logic
- **Construction:** fragmented, low-maturity, weak digital foundations
- **Technology:** not merely an adopter, but an enabling sector for the rest of the economy

These differences are not cosmetic. They change how policy works.

---

## 5. Policy scenarios to compare

The project compares three policy structures.

### Scenario A - Aggregate policy
Investment or support is distributed broadly across the economy, typically by GDP share or another economy-wide rule.

### Scenario B - Targeted demand-side policy
Policy support is directed toward sectors where adoption is lagging, where bottlenecks are most acute, or where productivity gains are likely to be unlocked by direct intervention.

### Scenario C - Targeted supply-side policy
Policy support is concentrated on enabling capacity, especially the domestic technology sector, skills pipeline, and enabling infrastructure, on the theory that this creates spillover effects across other sectors.

The central analytical comparison is not just aggregate versus targeted. It is also:

> direct sector support versus enabling-system support.

---

## 6. Unit of analysis

The model should represent the whole economy, but with different levels of detail.

### Tier 1 - archetype sectors
These are the explanatory sectors where the policy stories are richest and the modelling detail is highest.

Current Tier 1 candidates:
- Agriculture
- Manufacturing
- Professional Services
- Public Sector
- Technology
- Healthcare
- Construction
- Financial Services
- Retail/Wholesale

### Tier 2 - simplified sectors
Sectors that matter for economy coverage and policy completeness, but do not require full-depth modelling.

Likely examples:
- Education and Training
- Transport and Warehousing
- Accommodation and Food Services
- Administrative and Support Services
- Information Media and Telecommunications
- Utilities

### Tier 3 - residual sectors
A small number of residual blocks used to close the denominator and preserve whole-economy honesty.

This structure is necessary because a 9-sector-only model covers about **61% of GDP** and **70% of employment**, which is not enough for an honest aggregate-policy comparison.

---

## 7. Core modelling logic

At a minimum, each sector or sector block needs parameters for:

1. **Economic baseline**
   - GDP or value-added
   - employment
   - firm structure or fragmentation
   - wage/productivity baseline where available

2. **Adoption state**
   - current maturity or adoption estimate
   - likely adoption curve
   - major bottlenecks
   - level of uncertainty in the estimate

3. **Policy responsiveness**
   - whether adoption is more sensitive to capability, capital, regulation, procurement, infrastructure, or skills
   - expected lag between intervention and realised gains

4. **Outcome channels**
   - productivity improvement potential
   - labour pressure or displacement risk
   - spillovers to other sectors
   - social, equity, or governance constraints

The model should prioritise **interpretability over sophistication**.

---

## 8. Data philosophy

This project does not start from a clean dataset. It starts from a fragmented evidence base.

That means the model must explicitly distinguish between:

- **observed values** - directly supported by NZ data
- **derived values** - inferred from multiple sources or international benchmarks
- **assumed values** - placeholders used for scenario structure, always labelled as such

The model should show confidence levels, not hide them.

### Current evidence quality
- **High confidence:** economic baselines, some sector baselines, provenance correction, policy context
- **Moderate confidence:** broad adoption direction, comparative productivity logic, sector barriers
- **Low confidence:** many sector-level adoption rates, precise productivity multipliers, exact labour-market effects

That is enough for scenario comparison, but not for precision forecasting.

---

## 9. Methodological principles

### Principle 1 - Transparency over false precision
If a variable is estimated, say so. If a result is range-bound, present it as a range.

### Principle 2 - Whole-economy honesty
If the project claims to compare economy-wide policy structures, the aggregate scenario must cover the whole economy.

### Principle 3 - One mechanism at a time where possible
The model should separate mechanisms rather than bundling everything into one opaque parameter.

### Principle 4 - Policy relevance before technical flourish
The right model is the simplest one that can answer the question credibly.

### Principle 5 - Comparative usefulness over predictive theatre
The model succeeds if it helps compare policy choices better, not if it creates an illusion of certainty.

---

## 10. Model outputs

The first version should focus on outputs that support policy comparison:

- sector adoption trajectories
- sector productivity or output ranges
- labour pressure indicators
- relative scenario performance
- uncertainty bounds
- identification of bottlenecks and leverage points

The first version should avoid overclaiming on:

- exact GDP forecasts
- exact job losses or gains by year
- exact sector rankings where evidence is thin

---

## 11. Architecture decision

The modelling architecture has been decided.

**Selected approach:** Sector-level system model using bounded ordinary differential equations, adapted from `IlanStrauss/ai-web-economy-simulator`.

**Why it fits:**
- transparent mechanism comparison and equilibrium logic
- bounded state variables keep results interpretable
- one mechanism per layer prevents double counting
- named scenarios map directly to policy communication
- sector heterogeneity is expressed through per-sector parameters, not firm-level agents

**What is deferred:** An agent-based extension may be added later if firm-level emergence becomes genuinely necessary, but the foundation is the ODE system model.

See `docs/repo-selection.md` for the full rationale and `STATE-VARIABLES.md` for the state-variable specification.

If a simpler structure answers the policy question, prefer it.

---

## 12. Validation approach

The project should validate in layers:

1. **Conceptual validation**
   - Do sector experts recognise the sector archetypes and bottlenecks?

2. **Structural validation**
   - Do the scenario mechanics behave in plausible ways?

3. **Sensitivity validation**
   - Do the conclusions hold under reasonable parameter variation?

4. **Policy validation**
   - Do the outputs help answer real policy questions better than the status quo discussion?

The model does not need to perfectly predict history to be useful, but it must be internally coherent and externally recognisable.

---

## 13. Expected contribution

The contribution of this project is not a magic number.

It is a structured framework that does three things:

1. **corrects the broken baseline**
2. **shows why sector differences matter for AI policy**
3. **compares broad policy approaches transparently**

That is a valuable contribution for New Zealand because the current discourse often collapses trust, usage, experimentation, and deployment into a single misleading headline.

---

## 14. Immediate next steps

1. Finalise tiered sector scope
2. Define parameter table by evidence class: observed / derived / assumed
3. Choose architecture after methods review
4. Build Version 1 scenario model
5. Circulate for economist and sector-expert critique before any polished public layer

---

## 15. Working one-line description

**A NZ sector-calibrated policy sandbox for testing AI policy choices under uncertainty, built to replace misleading single-number thinking.**
