# NZ AI Policy Sandbox - Scenario Specification

*Date: 2026-04-24*
*Status: Draft v0.1*
*Purpose: Define the policy archetypes the sandbox compares, expressed as concrete parameter perturbations against the locked state variables and equations.*
*Upstream: [Project scope](SCOPE.md), [Methods note](METHODS.md), [State variables](STATE-VARIABLES.md), [Model equations v0.2](src/equations/model-equations-v0.2.pdf)*
*Downstream: Simulation runs, sensitivity analysis, backtesting targets, paper comparison tables*

---

## 1. Purpose

The sandbox's core question is whether aggregate AI policy, designed around a single national average, systematically produces worse outcomes than sector-targeted policy in New Zealand.

Answering that question requires running the model under **comparable, concretely-specified policy archetypes**. Without a scenario specification, "aggregate vs targeted" is a slogan. With one, it is a reproducible experiment.

This document defines:
- the policy archetypes compared
- the levers each archetype pulls
- the parameter perturbations that operationalise each lever
- the comparison baseline (status quo)
- how outcomes are measured across archetypes

It does **not** define preferred policy. The sandbox is deliberately agnostic. The scenarios described here are archetypes for structural comparison, not recommendations.

---

## 2. Design principles

The scenario set follows five rules.

### Rule 1 - Archetypes, not real policies
Scenarios represent structural shapes of policy (who is targeted, what lever is used, how intensely), not specific NZ government initiatives. A real policy mix maps to a weighted combination of archetypes; it is not the archetype itself.

### Rule 2 - Same budget envelope
Scenarios compared head-to-head use the same aggregate fiscal cost envelope, scaled appropriately. A targeted scenario that spends five times more than the aggregate scenario is not a fair comparison; it is an argument for larger budgets.

**Budget 2026 calibration note (NZ):** where scenario design depends on public fiscal context, apply the same-envelope rule using both operating and capital envelopes rather than a single blended number. Budget 2026 confirms a tighter operating allowance (NZ$2.1B) and a looser capital allowance (NZ$5.7B net new / NZ$7B gross). Operating-side levers (programme spend, public-sector enabling support) should be compared within the operating envelope; capital-embedded digital levers should be compared within the capital envelope.

### Rule 3 - Levers map to state variables, not outputs
Policy levers act on inputs to the model: capability \(K_s\), adoption friction, enabling capacity \(E\), labour adjustment \(L_s\). They do not prescribe productivity \(P_s\) or labour pressure outcomes directly. Outcomes emerge from the dynamics.

### Rule 4 - Honest intensity
Each scenario specifies a baseline intensity (plausible for NZ) and a stress intensity (upper bound of what could be committed). Running both reveals whether the archetype's advantage is robust to size.

### Rule 5 - Time-bounded
All scenarios run over the same simulation horizon (default 10 years) and specify policy duration explicitly. A one-off pulse and a sustained programme produce different dynamics; the specification distinguishes them.

---

## 3. The baseline scenario: status quo

Every other scenario is compared against the **status quo baseline**: no new AI-specific policy lever applied, parameters held at their calibrated 2025 values, with natural dynamics evolving under existing economic conditions.

**Parameter settings:**
- No additional \(K_s\) uplift from capability investment
- No adoption friction reduction
- No additional enabling capacity \(E\) beyond baseline trend
- No targeted labour adjustment support
- Default sector growth rates, productivity drift, and labour turnover

**Purpose:** provides the counterfactual against which every policy archetype is measured. Not a forecast; a reference trajectory.

---

## 4. Policy archetypes

Three archetypes are defined for the initial comparison set. Additional archetypes may be added as the project matures, but these three are sufficient to answer the core question.

### Archetype A: Aggregate policy

**Shape:** A single policy intensity applied uniformly across all 19 sectors, designed around a national average assumption.

**What it represents:** "One-size-fits-all" policy - broad AI adoption subsidies, generic training programmes, economy-wide capability funding without sector differentiation.

**Levers:**
- Uniform \(K_s\) capability uplift applied equally to all sectors
- Uniform reduction in adoption friction across all sectors
- No sector-specific \(L_s\) support

**Parameter perturbations (baseline intensity):**

| Lever | State variable | Perturbation | Duration |
|---|---|---|---|
| A.1 | \(K_s\) | +\(\delta_K\) for all \(s \in \{1,...,19\}\), where \(\delta_K = 0.05\) per year | Years 1-5 |
| A.2 | Adoption friction | -\(\delta_f\) for all \(s\), where \(\delta_f = 0.10\) | Years 1-5 |
| A.3 | \(E\) | +\(\delta_E\) where \(\delta_E = 0.10\) | Years 1-5 |

**Parameter perturbations (stress intensity):** all perturbations × 2, duration extended to years 1-10.

**Fiscal envelope:** calibrated to match a plausible NZ aggregate AI readiness programme budget (order of magnitude to be set during calibration).

---

### Archetype B: Targeted demand-side policy

**Shape:** Policy intensity concentrated on sectors where the evidence suggests adoption is the binding constraint, not capability. Demand-side means the lever acts on adoption friction, not capability investment.

**What it represents:** Sector-targeted AI diffusion initiatives - adoption subsidies, procurement preferences, sector-specific integration support for sectors already capable but under-adopting.

**Levers:**
- No uniform capability investment
- Adoption friction reduction concentrated in "demand-limited" sectors
- \(L_s\) support in sectors with high labour adjustment pressure

**Parameter perturbations (baseline intensity):**

| Lever | State variable | Perturbation | Duration | Targeted sectors |
|---|---|---|---|---|
| B.1 | Adoption friction | -\(\delta_f^B\) where \(\delta_f^B = 0.25\) | Years 1-5 | Demand-limited sectors (identified during calibration from \(A_s/K_s\) ratio below threshold) |
| B.2 | \(L_s\) support | +\(\delta_L\) where \(\delta_L = 0.15\) | Years 1-5 | Sectors with top-quartile labour adjustment pressure |
| B.3 | \(E\) | +\(\delta_E\) where \(\delta_E = 0.05\) | Years 1-5 | Sector-specific, weighted by GDP share |

**Parameter perturbations (stress intensity):** intensities × 2, duration years 1-10.

**Fiscal envelope:** matched to Archetype A total cost, distributed unevenly.

**Sector selection criterion:** a sector is "demand-limited" if its adoption-to-capability ratio \(A_s / K_s < \tau_D\), where \(\tau_D\) is a threshold calibrated during parameter fitting. This definition must be documented in the calibration log when the scenario is run.

---

### Archetype C: Targeted supply-side policy

**Shape:** Policy intensity concentrated on sectors where the evidence suggests capability is the binding constraint, not adoption. Supply-side means the lever acts on capability investment and enabling capacity, not adoption friction.

**What it represents:** Sector-targeted AI capability building - skills investment, R&D support, enabling infrastructure (data, compute, standards) for sectors under-capable relative to their adoption potential.

**Levers:**
- Capability investment concentrated in "capability-limited" sectors
- Enabling capacity \(E\) uplift weighted toward supporting those sectors
- No direct adoption friction reduction

**Parameter perturbations (baseline intensity):**

| Lever | State variable | Perturbation | Duration | Targeted sectors |
|---|---|---|---|---|
| C.1 | \(K_s\) | +\(\delta_K^C\) where \(\delta_K^C = 0.12\) per year | Years 1-5 | Capability-limited sectors (identified during calibration from \(A_s/K_s\) ratio above threshold) |
| C.2 | \(E\) | +\(\delta_E^C\) where \(\delta_E^C = 0.20\) | Years 1-5 | Economy-wide but biased toward capability-limited sectors |
| C.3 | \(L_s\) support | +\(\delta_L\) where \(\delta_L = 0.10\) | Years 1-5 | Sectors with active capability transitions |

**Parameter perturbations (stress intensity):** intensities × 2, duration years 1-10.

**Fiscal envelope:** matched to Archetype A total cost.

**Sector selection criterion:** a sector is "capability-limited" if \(A_s / K_s > \tau_C\), where \(\tau_C\) is a threshold calibrated during parameter fitting.

---

## 5. Outcome measures

Each scenario produces a trajectory for every state variable in every sector over the simulation horizon. For comparison purposes, the following aggregate outcome measures are computed:

### Primary outcomes

| Outcome | Definition | Why it matters |
|---|---|---|
| Whole-economy productivity gain | \(\sum_s w_s \cdot \Delta P_s(T)\), where \(w_s\) is sector GDP weight and \(T\) is horizon end | Primary economic outcome. Weighted by sector size so whole-economy effect is honest. |
| Adoption spread | Variance of \(A_s(T)\) across sectors | Reveals whether the policy left some sectors behind. Lower variance is not automatically better; uniformity at a low level is bad. Interpretation depends on level. |
| Labour adjustment cost | \(\sum_s \int_0^T L_s(t) \, dt\) | Cumulative labour pressure, integrated over time. Proxy for social disruption cost. |
| Enabling capacity drawdown | \(1 - E(T) / E(0)\) | Whether the policy overstretched the shared enabling layer. Positive values indicate constraint. |

### Secondary outcomes

- Per-sector productivity gain at horizon end (19 values)
- Time to median adoption (year at which \(A_s = 0.5\) first achieved per sector)
- Capability-adoption gap evolution (\(A_s - K_s\) over time)
- Dispersion in outcomes across sectors (Gini of \(P_s(T)\))

### Honest outcome framing

No scenario is declared "best" on a single metric. The point of the sandbox is to reveal tradeoffs. A scenario with higher whole-economy productivity but larger labour adjustment cost is a different policy from one with lower productivity but smoother labour dynamics. The paper reports all outcomes; it does not collapse them into a single index.

---

## 6. Scenario runs

The initial comparison set runs nine configurations:

| Run | Archetype | Intensity | Duration |
|---|---|---|---|
| 1 | Baseline (status quo) | - | 10 years |
| 2 | A - Aggregate | Baseline | Years 1-5 |
| 3 | A - Aggregate | Stress | Years 1-10 |
| 4 | B - Targeted demand-side | Baseline | Years 1-5 |
| 5 | B - Targeted demand-side | Stress | Years 1-10 |
| 6 | C - Targeted supply-side | Baseline | Years 1-5 |
| 7 | C - Targeted supply-side | Stress | Years 1-10 |
| 8 | Mixed B+C | Baseline | Years 1-5 |
| 9 | Mixed B+C | Stress | Years 1-10 |

Runs 8 and 9 combine demand-side and supply-side targeting at half-intensity each, under the same total fiscal envelope. This tests whether hybrid targeting outperforms pure targeting.

Every run is repeated across the Monte Carlo parameter ensemble defined in the uncertainty quantification plan (to be drafted).

### 6.1 Budget 2026 live stress-test add-on (issue #10 follow-up)

**Scenario name:** Aggregate-policy with Public Administration FTE reduction (Budget 2026 live test)

**Premise.** Government announces a NZ$2.4B savings envelope with an 8,700 FTE reduction in Public Administration over ~3.5 years (Dec 2025 to Jul 2029), with increased use of AI and other digital tools as the assumed substitute. This can be modelled as a real-world stress test of Archetype A under Rule 2's same-envelope discipline.

**Inputs.**
- Public Administration FTE step shock: -8,700 over t=0 to t=3.5 (linear or front-loaded schedule).
- Public-sector enabling-capacity uplift assumption (E) varied by sub-scenario.
- Same-budget envelope: NZ$2.4B operating savings/reallocation envelope.

**Three productivity sub-scenarios.**

| Variant | AI productivity gain per remaining FTE per year | Source posture |
|---|---|---|
| Singapore-class (optimistic) | +3% to +5% | Government's implicit framing (Singapore/Malaysia exemplars cited) |
| Middling | +1% to +2% | OECD-style median public-sector AI gain assumption |
| Hipkins-class (sceptical) | 0% to +0.5% | Counter-claim that cuts of this scale cannot avoid service pressure |

**Outputs to compare.**
- Service delivery proxy (workload absorbed / workload baseline) at t=3.5, t=7, t=10.
- Public Administration \(K_s\) trajectory versus no-cut counterfactual.
- Consistency check between required productivity assumptions and sector \(E\) growth assumptions.

**Comparison runs (same envelope, Rule 2).**
- Targeted Public Sector enabling-capacity uplift (same NZ$2.4B envelope, allocated to \(E\)).
- Aggregate Investment Boost extension (same-envelope comparator in aggregate mode).
- Hybrid split (50/50).

**Provenance notes.**
- `~/.openclaw/workspace-aips/research/external-signals/2026-05-24-public-sector-cuts-and-ai-substitution.md`
- `~/.openclaw/workspace-aips/research/external-signals/2026-05-29-budget-2026-reconciliation.md`
- Ongoing quarterly reconciliation protocol and assumptions log: `docs/budget-instruments.md` §9 (kept linked to issue #10 until Vote-level pull/reconciliation debt is cleared).

---

## 7. What this specification does not cover

- **Distributional effects within sectors.** The sandbox operates at sector level; intra-sector distribution (e.g. large firms vs SMEs within Manufacturing) is out of scope for v1.
- **Regional variation.** Sectors are national; regional differences are not modelled.
- **Transition pathways.** Scenarios specify end-state lever settings, not the political or implementation pathway that would deliver them.
- **Second-order fiscal feedback.** Tax revenue changes from productivity gains are not fed back into the enabling capacity budget.
- **International spillovers.** NZ is modelled as a closed system for v1.

These limitations are explicit by design. The sandbox's value is structural comparison under bounded assumptions, not comprehensive economic forecasting.

---

## 8. Revisions

### 2026-04-24 - Initial draft (v0.1)
- Three archetypes defined: A (aggregate), B (targeted demand-side), C (targeted supply-side)
- Baseline and stress intensities specified
- Nine-run initial comparison set
- Outcome measures defined
- Awaiting validation against equations v0.2 during first simulation build

---

*See also: [PAPER-OUTLINE.md](PAPER-OUTLINE.md) for how scenario comparison feeds the paper's findings section; [METHODS.md](METHODS.md) for the methodological posture behind scenario framing.*
