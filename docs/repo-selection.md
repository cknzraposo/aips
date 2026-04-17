# NZ AI Policy Sandbox - Reference Repo Selection

*Date: 2026-04-17*  
*Decision status: **DECIDED***

---

## Decision

**Primary reference repo: `IlanStrauss/ai-web-economy-simulator`**

**Secondary reference only: `kthom-pi/ai_adoption_simulator`**

If we need a single prior repo to anchor the next phase, Strauss is the right one.

---

## Short answer

The NZ AI Policy Sandbox is fundamentally a **policy reasoning** project, not a labour-market toy model.

It needs:
- transparent assumptions
- scenario comparison
- explainable mechanisms
- whole-economy sector blocks
- outputs that serious policy readers can interrogate

That matches the Strauss repo far better than kthom-pi.

---

## What the two repos actually are

### 1. IlanStrauss / ai-web-economy-simulator
A mechanism-driven system model with:
- explicit state variables
- bounded gain-loss equations
- one-mechanism-per-layer structure
- formal mathematical specification in LaTeX
- equilibrium analysis
- named scenario library
- a design philosophy oriented toward policy explanation

The raw `model-equations-v3.tex` is the strongest signal here. It is not just code. It is a model with an argument.

### 2. kthom-pi / ai_adoption_simulator
A Mesa-based agent model with:
- workers, augmented workers, robots, displaced workers, UBI recipients
- neighbourhood contagion logic on a toroidal grid
- robot tax and redistribution dynamics
- movement rules and local state transitions
- an interactive slider-heavy UI

The raw `model.py` and `agent.py` show clearly that this repo is built around labour-state transitions, local contagion, and redistribution mechanics.

That is interesting, but it is the wrong shape for the current NZ project.

---

## Why Strauss is the better fit

## 1. The project's strongest contribution is conceptual, not agent-level

The NZ project is strongest when it says:
- the national baseline is incoherent
- sectors differ structurally
- policy designs should be compared at the sector/system level

That is much closer to Strauss-style system modelling than to a worker-grid ABM.

## 2. Strauss fits the whole-economy tiered structure better

Our model now needs:
- 9 full explanatory sectors
- 6 simplified sectors
- 4 residual sectors
- economy-wide denominator honesty

That is naturally expressible as a sector/system model with transparent state variables and response channels.

The kthom-pi repo would need a near-total conceptual rewrite to get there. It has no built-in sector structure. It is a grid of local agents in labour states.

## 3. Strauss is better for policy communication

The intended audience is:
- policymakers
- economists
- policy-literate collaborators
- serious reviewers

Those readers need:
- named scenarios
- clearly stated assumptions
- traceable mechanisms
- interpretable outputs

Strauss is explicitly designed that way. kthom-pi is more suited to exploratory simulation demos and public-facing interaction.

## 4. Strauss is more defensible under weak data conditions

Because NZ evidence is fragmented, the first model must emphasise:
- clarity of mechanism
- explicit assumptions
- bounded behaviour
- scenario comparison rather than emergent surprise

Strauss's "one-mechanism-per-layer" discipline is exactly the right guardrail for that.

## 5. kthom-pi bakes in the wrong problem

The kthom-pi model is centred on:
- human -> augmented -> automated -> displaced transitions
- UBI recipient states
- robot taxation
- neighbourhood contagion
- capital consolidation on a grid

Those are not the core questions in the NZ policy sandbox.

They may become useful later for a sub-model of labour-market dynamics, but they are not the right starting architecture for the main project.

---

## Why kthom-pi is not the primary reference

It is not that kthom-pi is bad. It is that it is mismatched.

### Main mismatch points

| Criterion | Strauss | kthom-pi |
|---|---|---|
| Whole-economy sector structure | Natural fit | Major rewrite required |
| Policy scenario comparison | Native | Possible but awkward |
| Formal methods note alignment | Strong | Weak |
| Traceable mechanism design | Strong | Medium/weak |
| Labour-market microdynamics | Weak | Strong |
| Public interactive demo energy | Medium | Strong |
| Fit for current project stage | Strong | Weak |

### Blunt version
If we start from kthom-pi, we will spend a lot of time fighting the repo's assumptions.

If we start from Strauss, we can adapt the modelling logic to the actual paper question.

---

## What to borrow from each repo

### Borrow from Strauss
- math-first discipline
- one-mechanism-per-layer logic
- bounded state variables
- named scenarios
- explicit mechanism chain
- formal paper/spec before build

### Borrow from kthom-pi later, if useful
- ideas for eventual interactive controls
- visual intuition for public-facing experimentation
- optional later labour-market or diffusion sub-models

But kthom-pi should be treated as a **secondary inspiration**, not the core reference implementation.

---

## Recommended architecture implication

This repo selection does **not** force the final implementation to be a pure copy of Strauss.

But it strongly suggests the next phase should begin with:
- a **sector-level system model**
- transparent state variables
- policy scenarios encoded at sector and system level
- sensitivity analysis on uncertain inputs

If later we discover a genuine need for firm-level emergence, we can add an ABM extension. But that should be a second step, not the foundation.

---

## Recommendation

### Select now
Use **`IlanStrauss/ai-web-economy-simulator`** as the primary reference repo.

### Defer
Treat **`kthom-pi/ai_adoption_simulator`** as optional secondary inspiration for later UI or sub-model ideas.

### Why
Because the NZ AI Policy Sandbox is trying to answer a **sector-level policy design question under uncertainty**, not simulate local worker contagion and UBI dynamics on a grid.

---

## Final judgement

If the question is:

> Which prior repo is the best fit for the current NZ AI Policy Sandbox?

The answer is:

**Strauss. Clearly.**

Not because it is more sophisticated in the abstract, but because it matches the actual problem we are trying to solve.
