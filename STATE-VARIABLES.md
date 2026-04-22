# NZ AI Policy Sandbox - State Variable Specification

*Date: 2026-04-18*  
*Status: Locked - consumed by equation versions v0.1 and v0.2*  
*Purpose: define the minimum state structure required for a defensible whole-economy policy sandbox*  
*Downstream: [Model Equations v0.2](src/equations/model-equations-v0.2.pdf) (all 19 sectors); [Model Equations v0.1](src/equations/model-equations-v0.1.pdf) (Tier 1, historical)*

---

## 1. Purpose of this document

This document defines the **state variables** for the NZ AI Policy Sandbox.

It sits between the methods note and the eventual model equations.

The goal is not to create a large state space for its own sake. The goal is to define the **smallest set of state variables** that can credibly answer the project's core question:

> Does aggregate AI policy, designed around a single national average, systematically produce worse outcomes than sector-targeted policy in New Zealand?

This specification is written to withstand critique from economists, policy analysts, and technically literate reviewers. That means it must be explicit about:
- what each variable means
- what each variable does **not** mean
- why each variable is needed
- why omitted variables are omitted
- how variables relate causally without double counting

---

## 2. Design principles

The state structure follows five rules.

### Rule 1 - One mechanism per layer
A mechanism should appear once, in one place. If capability constraints are represented in one variable, they should not be hidden again inside productivity or labour pressure.

### Rule 2 - Bounded variables where possible
State variables should remain in interpretable ranges, ideally \([0,1]\). This helps with stability, comparison across sectors, and critique.

### Rule 3 - Sector blocks, not firm microstates
Version 1 is a sector-level policy model, not a firm-level or worker-level simulation. The unit of analysis is a **sector block**.

### Rule 4 - Whole-economy honesty
The state structure must support a tiered whole-economy denominator: 9 Tier 1 sectors, 6 Tier 2 sectors, 4 Tier 3 sectors.

### Rule 5 - Comparative usefulness over predictive theatre
The model is a policy sandbox. The variables should support comparative reasoning under uncertainty, not false precision.

---

## 3. Index sets and scope

Let:

- \( s \in \mathcal{S}_1 \) denote Tier 1 sectors, with \(|\mathcal{S}_1| = 9\)
- \( s \in \mathcal{S}_2 \) denote Tier 2 sectors, with \(|\mathcal{S}_2| = 6\)
- \( s \in \mathcal{S}_3 \) denote Tier 3 sectors, with \(|\mathcal{S}_3| = 4\)
- \( \mathcal{S} = \mathcal{S}_1 \cup \mathcal{S}_2 \cup \mathcal{S}_3 \)

All sectors together span the whole economy denominator.

### Tier 1 sectors
Agriculture, Manufacturing, Professional Services, Public Sector, Technology, Healthcare, Construction, Financial Services, Retail and Wholesale.

### Tier 2 sectors
Education and Training, Transport and Warehousing, Accommodation and Food Services, Administrative and Support Services, Information Media and Telecommunications, Utilities.

### Tier 3 sectors
Mining, Rental and Real Estate, Arts and Recreation, Other Services.

---

## 4. Core state structure

The baseline model uses **five core state variables**.

### Sector-level states
For Tier 1 sectors, each sector \(s\) has four state variables:

1. **Adoption maturity**: \( A_s(t) \in [0,1] \)
2. **Absorptive capability**: \( K_s(t) \in [0,1] \)
3. **Realised productivity effect**: \( P_s(t) \in [0,1] \)
4. **Labour adjustment pressure**: \( L_s(t) \in [0,1] \)

### System-level state
For the economy as a whole, there is one enabling state:

5. **National enabling capacity**: \( E(t) \in [0,1] \)

This is the minimum state structure proposed for Version 1.

---

## 5. Variable definitions

## 5.1 Adoption maturity - \( A_s(t) \)

### Definition
\( A_s(t) \) represents the **maturity of AI deployment in sector \(s\)**.

It is not just the share of firms that have touched an AI tool. It is a broader maturity state capturing how far the sector has moved from non-use to meaningful operational deployment.

### Interpretation
- \( A_s = 0 \): effectively no meaningful adoption
- \( A_s = 1 \): sector has reached its modelled adoption frontier under current technological and institutional conditions

### What it includes
- operational use, not just awareness
- degree of deployment, not just experimentation
- sector-level diffusion of AI into actual workflows

### What it excludes
- productivity gains themselves
- labour effects themselves
- capability constraints directly, except through the fact that they limit adoption growth

### Why it is needed
The project's main argument is about sectoral heterogeneity in adoption pathways. That requires a state variable representing adoption separately from productivity and labour outcomes.

### Why it is bounded
A bounded adoption maturity state is easier to calibrate than an unbounded volume measure, especially under fragmented evidence.

---

## 5.2 Absorptive capability - \( K_s(t) \)

### Definition
\( K_s(t) \) represents the **effective capacity of sector \(s\) to absorb AI into productive use**.

This is the sector's ability to turn access to AI into actual deployment.

### Interpretation
- \( K_s = 0 \): sector has effectively no absorptive capacity
- \( K_s = 1 \): sector has strong enabling conditions and can convert opportunity into adoption efficiently

### What it includes
- digital readiness
- data infrastructure quality
- management and process maturity
- workforce capability and training readiness
- procurement and implementation capability where relevant

### What it excludes
- realised adoption itself
- realised productivity itself
- national enabling conditions that operate economy-wide, which belong in \(E(t)\)

### Why it is needed
This variable is critical for NZ. In several sectors, the binding constraint is not interest in AI but the ability to use it well. Without \(K_s\), the model would overstate how quickly policy support turns into adoption.

### Why it is distinct from \(E(t)\)
\(E(t)\) captures economy-wide enabling conditions. \(K_s\) captures sector-specific ability to use those conditions.

---

## 5.3 Realised productivity effect - \( P_s(t) \)

### Definition
\( P_s(t) \) represents the **degree to which the potential productivity benefit of AI has been realised in sector \(s\)**.

This is a normalised realisation index, not a raw productivity level.

### Interpretation
- \( P_s = 0 \): no realised productivity effect yet
- \( P_s = 1 \): the sector has realised the modelled ceiling of AI-related productivity gains available under the current scenario assumptions

### What it includes
- realised operational efficiency gains
- realised process improvements
- realised output uplift attributable to AI adoption

### What it excludes
- adoption itself
- the baseline level of productivity in the sector
- spillovers to other sectors unless explicitly modelled elsewhere

### Why it is needed
Adoption is not productivity. The project must explicitly separate the two, because many sectors can adopt AI superficially without quickly realising measurable productivity gains.

### Why it is bounded
Using a normalised realisation index allows sector-specific ceilings to be applied later through parameters rather than bloating the state space.

---

## 5.4 Labour adjustment pressure - \( L_s(t) \)

### Definition
\( L_s(t) \) represents the **degree of labour market adjustment pressure in sector \(s\)** associated with AI adoption.

This is intentionally not a direct job-loss count.

### Interpretation
- \( L_s = 0 \): negligible labour adjustment pressure
- \( L_s = 1 \): severe labour adjustment pressure under the model's scaling

### What it includes
- displacement pressure
- redeployment pressure
- skills mismatch pressure
- hiring slowdown or role reconfiguration pressure

### What it excludes
- exact employment changes
- welfare analysis
- wage distribution by itself

### Why it is needed
The project is not only about productivity. In several sectors, labour adjustment is a central policy consideration. A bounded pressure index lets the model express labour stress without pretending to forecast exact job counts from weak evidence.

### Why it is separate from \(P_s\)
Productivity gain and labour pressure are related but not identical. Some sectors may realise productivity with low labour stress; others may generate high pressure before measurable output gains are realised.

---

## 5.5 National enabling capacity - \( E(t) \)

### Definition
\( E(t) \) represents the **economy-wide enabling environment for AI adoption**.

It captures national conditions that support multiple sectors simultaneously.

### Interpretation
- \( E = 0 \): weak national enabling environment
- \( E = 1 \): strong national enabling environment relative to the modelled frontier

### What it includes
- domestic technology capability
- AI-relevant skills pipeline
- infrastructure readiness
- diffusion support mechanisms
- national digital public infrastructure where relevant

### What it excludes
- sector-specific ability to absorb AI, which belongs in \(K_s\)
- direct sector adoption, which belongs in \(A_s\)

### Why it is needed
The project explicitly compares demand-side and supply-side policy. Without a national enabling state, supply-side investment has nowhere to enter the model cleanly.

---

## 6. Variables deliberately excluded from the baseline state set

To withstand critique, it is just as important to say what is **not** in the baseline state set.

## 6.1 Public trust / social licence
A national trust state was considered and rejected for the baseline model.

### Why excluded
- trust effects are already partially represented through sector barriers and institutional constraints
- evidence is currently too weak to justify a separate dynamic trust state
- adding a trust state risks double counting, especially in healthcare and public sector sectors

### When it may return
As a later extension scenario if a trust-specific policy question becomes central.

---

## 6.2 Policy allocation as a state
Policy allocation is **not** a state variable.

### Why excluded
Policy allocation is a control input or scenario input, not a system state. Treating it as a state would blur the line between intervention and response.

---

## 6.3 Firm counts and wages as dynamic states
These remain baseline parameters or outputs rather than Version 1 states.

### Why excluded
They matter, but elevating them into the dynamic state set would expand complexity before the core adoption-capability-productivity-labour logic is tested.

---

## 6.4 Sector output as a direct state
Sector output is not modelled directly as a state variable.

### Why excluded
Sector output can be computed from baseline levels and realised productivity effects. Making it a state in Version 1 would add complexity without improving causal clarity.

---

## 7. Tier handling

## 7.1 Tier 1
Tier 1 sectors carry the full state set:

\[
(A_s, K_s, P_s, L_s)
\]

These are the sectors where policy narratives are richest and where labour pressure needs explicit representation.

## 7.2 Tier 2
Tier 2 sectors use a reduced state set:

\[
(A_s, K_s, P_s)
\]

Labour pressure is treated as a derived indicator rather than a full independent state.

### Why
Tier 2 sectors need to absorb economic weight honestly but do not yet justify full state complexity.

## 7.3 Tier 3
Tier 3 sectors use minimal representation.

In Version 1, Tier 3 sectors may be implemented using baseline values plus reduced-form response mappings rather than full dynamic state evolution.

### Why
Tier 3 exists to close the denominator honestly, not to perform narrative heavy lifting.

---

## 8. Causal structure

The baseline causal chain is:

\[
G_s, E \rightarrow K_s \rightarrow A_s \rightarrow P_s
\]

with labour adjustment pressure emerging as:

\[
A_s, P_s, \text{sector structure} \rightarrow L_s
\]

and supply-side support entering through:

\[
G_E \rightarrow E \rightarrow K_s
\]

where:
- \(G_s\) denotes sector-specific policy support
- \(G_E\) denotes national enabling investment

### Interpretation
- policy does not create productivity directly
- capability mediates adoption
- adoption precedes realised productivity
- labour pressure emerges from adoption interacting with sector structure

This preserves one mechanism per layer.

---

## 9. Structural parameters required

The state variables alone are not enough. The model also needs sector-specific parameters.

Examples include:
- \( \bar{p}_s \): sector productivity ceiling
- \( \alpha_s \): adoption responsiveness to capability
- \( \kappa_s \): capability responsiveness to support
- \( \lambda_s \): labour sensitivity to adoption pace
- \( \mu_s \): friction or decay parameter
- \( \phi_s \): exposure to national enabling capacity

These are **parameters**, not states.

This distinction matters. States change over time. Parameters describe sector characteristics.

---

## 10. Measurement mapping

To stand critique, each state needs a rough mapping to observable evidence.

## 10.1 Adoption maturity \(A_s\)
Mapped from:
- adoption rates where available
- pilot vs scaled deployment evidence
- sector case evidence
- maturity judgements where direct data is weak

## 10.2 Absorptive capability \(K_s\)
Mapped from:
- digital maturity signals
- skills pipeline relevance
- firm fragmentation
- data infrastructure quality
- management and procurement readiness

## 10.3 Productivity effect \(P_s\)
Mapped from:
- sector productivity ranges from OECD and sector studies
- NZ case studies where available
- realised gain evidence where available

## 10.4 Labour pressure \(L_s\)
Mapped from:
- automation exposure logic
- sector structure
- wage and skill profile context
- survey signals on labour substitution and efficiency gain

## 10.5 National enabling capacity \(E\)
Mapped from:
- technology sector strength
- skills pipeline indicators
- visa / talent flow signals
- digital infrastructure and policy settings

These mappings are imperfect. That is acceptable if evidence classes are explicit.

---

## 11. Critique tests this specification must pass

A good state-variable design should survive attack. These are the tests it must pass.

## Test 1 - Non-redundancy
Each state must do distinct work.

### Challenge
Could \(A_s\) and \(K_s\) be collapsed into one variable?

### Response
No. In NZ sectors, capability is often the bottleneck between policy support and actual adoption. Collapsing them would hide the central mechanism the paper wants to test.

---

## Test 2 - No double counting
No effect should appear twice.

### Challenge
Does productivity appear both in \(A_s\) and \(P_s\)?

### Response
No. \(A_s\) is maturity of deployment. \(P_s\) is realised effect of that deployment. They are deliberately separated.

---

## Test 3 - Policy relevance
Each state must map to a policy question.

### Challenge
Why include \(L_s\) if the paper is about productivity?

### Response
Because the project is explicitly about tradeoffs, not just output. In NZ, policy choices in healthcare, public sector, retail, and construction cannot be evaluated on productivity alone.

---

## Test 4 - Denominator honesty
The state structure must support whole-economy coverage.

### Challenge
Does the structure work only for the 9 narrative sectors?

### Response
No. The tiered state design allows reduced complexity for Tier 2 and Tier 3 while preserving whole-economy denominator honesty.

---

## Test 5 - Boundedness and interpretability
States should remain interpretable.

### Challenge
Why normalise to \([0,1]\) instead of using raw levels?

### Response
Because the model is comparative, not forecast-first. Normalisation improves stability, comparability, and critique-readiness under fragmented evidence.

---

## Test 6 - Distinguishing sector from system effects
The model must separate sector-specific and economy-wide enabling logic.

### Challenge
Why have both \(K_s\) and \(E\)?

### Response
Because a sector can face low absorptive capability even in a stronger national environment, and national enabling investment should not be forced to act as direct sector adoption.

---

## Test 7 - Parsimony
The state set should be small enough to reason about.

### Challenge
Is five core states still too many?

### Response
Not for this question. Removing any one of \(A_s\), \(K_s\), \(P_s\), or \(E\) would collapse distinctions that are central to the paper's hypothesis. \(L_s\) is the most contestable state, but still justified by the project's policy framing.

---

## 12. Known limitations of the state design

This design is defensible, but not perfect.

### Limitation 1
Some variables rely on partial or weak observables, especially for lower-data sectors.

### Limitation 2
Tier 3 sectors are represented more coarsely than Tier 1 sectors.

### Limitation 3
Labour pressure is a reduced-form index, not a labour market model.

### Limitation 4
The baseline model does not yet include explicit inter-sector network spillovers beyond the national enabling layer.

These are acceptable limitations for Version 1, provided they are stated openly.

---

## 13. Proposed baseline state set for Version 1

### Tier 1 sectors
\[
(A_s, K_s, P_s, L_s)
\]

### Tier 2 sectors
\[
(A_s, K_s, P_s)
\]

### Tier 3 sectors
Minimal reduced-form response representation

### National state
\[
E(t)
\]

This is the recommended baseline state set.

---

## 14. Next document required

The next logical artefact is the **equation draft**.

That document should:
1. define the bounded dynamics for \(K_s, A_s, P_s, L_s, E\)
2. encode scenario inputs \(G_s\) and \(G_E\)
3. specify sector parameters
4. show how aggregate outputs are constructed
5. state what is calibrated versus assumed

---

## 15. Bottom line

The project should begin with a **small, transparent, sector-level state structure** rather than a large simulation state space.

The recommended baseline is:
- sector adoption maturity
- sector absorptive capability
- sector realised productivity effect
- sector labour adjustment pressure
- national enabling capacity

That is enough structure to express the project's main claim without collapsing into either hand-waving or theatre.
