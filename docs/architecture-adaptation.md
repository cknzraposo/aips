# NZ AI Policy Sandbox - Architecture Adaptation Brief

*Adapting the Strauss reference repo to the NZ whole-economy policy sandbox*  
*Date: 2026-04-17*  
*Status: Draft v1*

---

## 1. Purpose

This brief explains how the selected primary reference repo - **`IlanStrauss/ai-web-economy-simulator`** - should be adapted for the NZ AI Policy Sandbox.

The goal is **not** to copy the Strauss model literally.
The goal is to borrow the right things from it:
- math-first discipline
- one-mechanism-per-layer design
- bounded state variables
- named policy scenarios
- transparent, auditable assumptions

And then reshape that logic for a different problem:

> a tiered, whole-economy NZ policy sandbox comparing AI policy tradeoffs under uncertainty.

---

## 2. What should be kept from Strauss

## 2.1 Keep the modelling philosophy

The Strauss repo is valuable less because of its specific variables, and more because of its discipline.

### Keep these principles
1. **One mechanism per layer**  
   Do not let the same effect appear twice in the model under different names.

2. **Bounded state variables**  
   Use state variables that stay inside interpretable ranges, ideally [0,1] where possible.

3. **Math spec before build**  
   Write the structure clearly enough that an economist can critique it before code exists.

4. **Named scenarios**  
   Policy readers understand scenario names better than raw parameter matrices.

5. **Traceable causal chain**  
   Every major effect should be explainable as a specific path, not a blob.

---

## 3. What must change

The Strauss repo models a two-population ecosystem:
- AI platforms
- web content creators

The NZ project is different.
It needs to model:
- **19 sector blocks** in a tiered structure
- policy interventions across those blocks
- adoption, productivity, labour pressure, and enabling capacity
- sector-to-sector spillovers
- aggregate vs targeted allocation rules

So the adaptation is structural, not cosmetic.

---

## 4. Recommended modelling unit

## 4.1 Use sector blocks, not firms or workers, in Version 1

Each sector should be treated as a **sector block** with a small number of interpretable state variables.

### Recommended structure
- Tier 1 sectors: full state representation
- Tier 2 sectors: simplified state representation
- Tier 3 sectors: minimal residual representation

This keeps the denominator honest without overbuilding weakly measured sectors.

---

## 5. Recommended state variables

The current project question does not need a giant state vector. It needs a small set of state variables that map cleanly to policy questions.

## 5.1 Core candidate sector-level state variables

For Tier 1 sectors, each sector *s* can begin with four core states:

### 1. Adoption state: \( A_s(t) \)
Represents the maturity / penetration of AI in sector *s*.
- bounded in [0,1]
- increases with policy support, enabling capacity, and sector readiness
- slowed by barriers, regulation, fragmentation, or trust constraints

### 2. Effective capability / absorptive capacity: \( K_s(t) \)
Represents whether the sector can actually turn AI availability into meaningful deployment.
This bundles things like:
- skills
- digital readiness
- data infrastructure
- management capability
- procurement capacity where relevant

This is critical because many sectors are not bottlenecked by interest alone.

### 3. Productivity / output effect index: \( P_s(t) \)
Represents realised productivity or output uplift from AI adoption in sector *s*.
This should not move one-for-one with adoption. That lag is part of the point.

### 4. Labour pressure / adjustment index: \( L_s(t) \)
Represents labour disruption pressure in the sector.
Not a claim about exact job losses, but a bounded representation of labour adjustment stress.

---

## 5.2 Optional system-wide state variables

In addition to sector states, the model may need 2-3 national enabling states:

### 5. National enabling capacity: \( E(t) \)
Captures economy-wide enablers such as:
- domestic technology supply
- skills pipeline
- infrastructure
- diffusion support

This is especially important for the supply-side scenario.

### 6. Public trust / social licence context: \( T(t) \)
Optional. Could matter for public sector, healthcare, and consumer-facing sectors.
Use only if it earns its place and is not double-counted through sector barriers.

### 7. Policy allocation vector: \( G_s(t) \)
This is not really a state variable in the same sense, but a policy input showing how support is allocated by scenario.

---

## 6. Recommended causal chain

A good first-pass causal chain could be:

\[
G_s \rightarrow K_s \rightarrow A_s \rightarrow P_s
\]

with labour pressure emerging as a partially separate consequence:

\[
A_s, P_s, \text{sector structure} \rightarrow L_s
\]

and supply-side spillovers entering through the national enabling layer:

\[
G_{supply} \rightarrow E \rightarrow K_s \rightarrow A_s
\]

### Why this works
It prevents a common modelling mistake: treating adoption as though it automatically creates productivity.

In many NZ sectors the binding issue is not AI availability. It is capability and absorption.

---

## 7. One-mechanism-per-layer translation for NZ

Here is how the Strauss principle should be translated.

### Policy allocation should affect sectors through one clear path
Do not let the same policy money simultaneously:
- raise adoption directly
- raise capability directly
- raise productivity directly
without an explicit reason.

### Recommended discipline
- **Direct sector support** primarily affects \( K_s \) and secondarily \( A_s \)
- **Enabling investment** primarily affects \( E \), which then affects \( K_s \)
- **Adoption** affects **productivity realisation** through a lagged path
- **Labour pressure** should emerge from adoption interacting with sector structure, not be assigned as a duplicate policy effect

---

## 8. Scenario encoding

The Strauss repo's named scenarios are worth copying almost exactly as a communication pattern.

### Recommended scenario library
1. **Aggregate Allocation**  
   Broad economy-wide allocation by GDP share or similar rule.

2. **Targeted Demand-Side Support**  
   Direct support focused on bottlenecked or high-leverage sectors.

3. **Targeted Supply-Side Support**  
   Investment concentrated in technology, skills, infrastructure, procurement, and diffusion.

### Optional later scenarios
4. **Public-Value / Equity Constraint Scenario**  
   Especially relevant for healthcare and public sector.

5. **Low-Trust / Slow Diffusion Scenario**  
   If trust or institutional hesitation proves structurally important.

---

## 9. Tier handling

## 9.1 Tier 1
Use full state logic:
- \( A_s, K_s, P_s, L_s \)
- richer sector-specific barrier and responsiveness parameters

## 9.2 Tier 2
Use simplified logic:
- \( A_s, K_s, P_s \) only
- labour handled as a lighter indicator or derived metric

## 9.3 Tier 3
Use minimal representation:
- broad maturity estimate
- broad productivity response
- broad labour pressure indicator

This keeps the model honest without giving fake granularity to weakly measured sectors.

---

## 10. What not to import from Strauss

Do **not** import literally:
- the two-population platform/creator structure
- traffic diversion logic
- mechanism design constraints tied to licensing and web-content economics

The NZ project needs a different object model.
The Strauss repo is a reference for discipline, not a template for direct translation.

---

## 11. What not to import from kthom-pi into the core model

The current core model should not be built around:
- neighbourhood contagion on a grid
- worker-level state transitions as the primary representation
- robot tax / UBI logic as foundational structure
- spatial movement mechanics

Those may become useful later in a specialised labour-market extension, but they are not the right foundation for the first paper-grade model.

---

## 12. Practical build recommendation

## Stage 1 - paper-grade system model
Build a compact sector-level model with:
- 19 tiered sector blocks
- 4 core states for Tier 1
- simplified Tier 2/Tier 3 logic
- three named policy scenarios
- transparent parameters and sensitivity analysis

## Stage 2 - calibrated prototype
Implement the model in code only after the state logic and parameter table are agreed.

## Stage 3 - optional extensions
Only after the core model survives criticism:
- richer spillover structure
- more detailed labour sub-model
- public interactive UI
- optional ABM extension if genuinely needed

---

## 13. Recommended next artefacts

To make this adaptation real, the next documents should be:

1. **state-variable spec**  
   Define \( A_s, K_s, P_s, L_s, E \) clearly.

2. **parameter mapping sheet**  
   Map current data fields into model parameters.

3. **scenario encoding note**  
   Show how Aggregate / Targeted Demand / Targeted Supply enter the model.

4. **minimal equation draft**  
   First-pass bounded equations for sector adoption, capability, productivity, and labour pressure.

---

## 14. Bottom line

The right adaptation is:

- **Strauss for modelling discipline**
- **NZ-specific sector blocks for content**
- **tiered whole-economy structure for scope honesty**

That means the first NZ model should look like a **sector-level transparent system model**, not a worker-grid automation sim.

If we stay disciplined about that, the model has a chance of being useful.
If we start importing complexity for its own sake, it will collapse under its own theatre.
