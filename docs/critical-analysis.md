# NZ AI Economy Simulator - Critical Analysis

*Based on current project state and eight completed research analyses*  
*Date: 2026-04-17*

---

## Bottom line

The original NZ AI Economy Simulator is built around a **real and important problem**, but the first framing overreached in ways that would weaken it with economists, policymakers, and reviewers.

The strongest part of the project is **not** the simulator itself. It is the diagnosis that New Zealand's AI policy baseline is methodologically incoherent:

- adoption figures in NZ range from **32% to 87%** depending on source, population, and definition
- no two sources measure the same thing, and some widely-cited figures are not adoption measures at all
- sector behaviour is clearly heterogeneous
- current policy discussion often speaks as if a single national average is meaningful

That is a legitimate research contribution.

The weaker part is the original project promise: a 9-sector NZ-calibrated simulation plus peer-reviewed paper plus interactive web tool, all from fragmented data and before the core modelling architecture was chosen.

The project is worth doing, but it needs a sharper claim, tighter scope, and a more honest value proposition.

---

# 1. What the project gets right

## 1.1 The problem is real

The project starts from a genuine failure in the current NZ AI discussion: people are mixing together:

- public trust
- worker usage
- business experimentation
- enterprise deployment
- sector-level maturity
- policy ambition

as though they were the same thing.

They are not.

That makes a sector-calibrated policy framework valuable. The project is strongest when it says:

> New Zealand does not have a coherent baseline for AI adoption, so economy-wide policy built on a single national average is structurally weak.

That claim is now well-supported by the provenance work and the survey review.

## 1.2 The sector lens is the right lens

The research completed so far supports the core intuition that sectors are not interchangeable:

- **Healthcare** splits between lower-risk admin AI and slower, tightly governed clinical AI
- **Public sector** is blocked by capability, culture, and scale, with a documented chilling effect from overly risk-heavy guidance
- **Financial services** is constrained by dual regulators and prudential oversight
- **Manufacturing** looks like a more straightforward productivity case
- **Construction** remains low-maturity and highly fragmented
- **Technology** is not just an adopter but an enabling sector for other sectors

That means policy designed to a single average is likely to misallocate effort.

## 1.3 The OECD work gives the project theoretical spine

The OECD productivity work matters because it gives the project something stronger than "sector differences probably matter".

It suggests the mechanism by which aggregate policy can underperform: gains concentrate in already-productive sectors while slower, labour-intensive sectors create drag. That makes the project more than a dashboard. It becomes a test of a real policy mechanism.

## 1.4 The project has a credible public-good angle

If done well, this could become one of three things NZ currently lacks:

1. a clear explanation of why the current AI baseline is broken
2. a structured sector-by-sector policy lens
3. a transparent scenario tool for discussing tradeoffs

That is useful even if the final model is modest.

---

# 2. What the original version gets wrong

## 2.1 It put the simulator ahead of the argument

The original framing risks saying:

> We are building a sophisticated simulator, therefore the conclusions will matter.

That is backwards.

The simulator only matters if the argument is already clear:

1. the baseline is incoherent
2. sector structure matters
3. different policy designs produce meaningfully different outcomes
4. the model can show that without pretending to forecast the future

Right now the project's strongest asset is the argument, not the machinery.

## 2.2 The 9-sector model weakens the aggregate claim

This is the most serious design issue.

If the model compares:

- **aggregate policy** across only 9 sectors
- **targeted policy** across those same 9 sectors

then the aggregate scenario is not really aggregate. It excludes 39% of GDP and roughly 30% of employment.

That is not a small limitation. It directly affects the honesty of the central comparison.

The earlier critique in `why-all-sectors.md` is right: if the claim is whole-of-economy policy design, the denominator must be the whole economy.

## 2.3 The project still risks false precision

The current evidence base is strong enough for structured scenario work, but not strong enough for precise quantitative claims across every sector.

Known issues include:

- no clean sector-level NZ adoption baseline across the economy
- no NZ-specific sector productivity multipliers
- weak financial-services sample sizes
- unclear split between back-office and domain-core AI in several sectors
- no settled method yet for translating adoption into output, wages, or employment over time

If the output looks too exact, the project will invite the wrong criticism.

## 2.4 "Peer-reviewed paper + interactive web tool" is too much too early

These are different products for different standards.

- A **paper** needs a tight claim, transparent assumptions, and defensible methodology
- A **tool** needs stable assumptions, UX clarity, and resilient communication

Trying to build both in parallel before the architecture and scope are locked is classic overreach.

## 2.5 The project's audience has not been disciplined enough

At different points the project has looked like it is for:

- Treasury / MBIE
- AI for Good NZ
- academics
- the media
- collaborators
- the general public

That is too many audiences for an early-stage project.

The first version needs a primary audience. My view: **policy and economics-literate readers first**. Everyone else comes after.

---

# 3. What the evidence now supports

## 3.1 The project should be framed as a policy sandbox, not a forecast engine

The safest and strongest description is:

> a sector-calibrated policy sandbox for comparing AI policy scenarios under uncertainty

Not:

> a forecast of NZ's AI-driven GDP trajectory

This matters because the evidence supports comparative scenario testing better than it supports prediction.

## 3.2 The real contribution is conceptual + structural

The most defensible contribution now is a combination of three things:

### A. Baseline correction
Establish the baseline incoherence and show why current adoption discourse is unreliable for policy.

### B. Sector typology
Show that sectors differ materially in adoption logic, constraints, and policy responsiveness.

### C. Scenario comparison
Compare broad policy approaches:
- aggregate allocation
- targeted demand-side support
- targeted supply-side support

The contribution is not that the model predicts 2034 GDP to the decimal place. It is that it reveals **where broad-brush policy logic breaks down**.

## 3.3 The 9 archetype sectors are analytically useful, but not sufficient alone

The nine chosen sectors are useful because they carry distinct stories. But analytically they should be treated as:

- the **main explanatory sectors**
- not the entire economy

The project should adopt a tiered structure:

- **Tier 1:** 9 archetype sectors, fully modelled
- **Tier 2:** simplified sectors with lighter parameterisation
- **Tier 3:** residual sectors to close the denominator

That preserves narrative clarity while fixing the policy-economy mismatch.

## 3.4 The simulator should probably come after a paper-grade methods note

The sequence should be:

1. argument
2. methods note
3. scenario prototype
4. tool

Not the other way around.

---

# 4. Why this project should exist

## The short version

Because New Zealand is already making AI policy, investment, capability, procurement, education, and regulatory decisions without a coherent sector-level frame.

That produces two predictable failures:

1. **single-average thinking** - treating AI adoption as a national number rather than a structural pattern
2. **policy misallocation** - funding what is visible or fashionable rather than what is bottlenecked or high-leverage

This project is useful if it helps decision-makers ask better questions:

- Which sectors are constrained by capability versus regulation versus fragmentation?
- Where does direct adoption support outperform supply-side investment?
- Where are the social or equity constraints more important than pure GDP gain?
- What happens when policy is broad but the economy is heterogeneous?

## The deeper why

There is a gap between NZ AI rhetoric and NZ AI policy design.

The rhetoric is increasingly national and aggregate. The reality is sectoral, uneven, path-dependent, and institutionally constrained.

A good project here does not need to solve AI policy. It needs to make that mismatch visible and decision-useful.

---

# 5. Objective assessment of the value proposition

## Strong value, if positioned correctly

### The project has high value as:
- a **policy framing tool**
- a **research synthesis**
- a **scenario comparison device**
- a **public explanation of why "one adoption number" is misleading**

### The project has moderate value as:
- a **simulation model for directional insight**
- a **conversation tool for sector experts and policymakers**

### The project has low value, if sold as:
- a precise forecasting engine
- a definitive quantitative ranking of all sectors
- a polished product before the methods are defensible

## The real value proposition

The best objective statement is:

> This project helps NZ policymakers and serious readers move from confused headline metrics to a structured sector-level view of AI policy tradeoffs.

That is valuable.

A weaker and less defensible statement would be:

> This project will tell NZ exactly where to invest for maximum AI GDP uplift.

That overclaims.

## Where it is differentiated

The project is differentiated by the combination of:

- NZ-specific framing
- source comparison of NZ AI adoption figures
- cross-sector synthesis
- comparison of demand-side vs supply-side policy
- potential for an explainable, transparent model rather than black-box consultancy output

## Where it is not yet differentiated enough

It is not yet differentiated on modelling sophistication alone. Right now the model architecture is still undecided, and the data remains too fragmented to claim technical superiority.

The differentiation should come from **clarity, honesty, and structure**, not from pretending the model is already more robust than it is.

---

# 6. Critical risks

## Risk 1: Building a simulator that answers the wrong question
If the question remains too broad, the tool becomes impressive but strategically vague.

## Risk 2: False precision
If the outputs look exact, critics will attack the weakest inputs.

## Risk 3: Scope inflation
Paper + collaborators + full simulator + tool + outreach is too much without staged delivery.

## Risk 4: Denominator failure
If the aggregate scenario excludes too much of the economy, the central result will be challenged.

## Risk 5: Audience drift
If the project tries to satisfy everyone, it will sound mushy to all of them.

## Risk 6: Architecture-first thinking
~~If the project gets seduced by ODE vs ABM before the methods note is clear, the technical structure will drive the argument instead of serving it.~~

*Update (2026-04-18): Architecture decision now made. Strauss ODE selected as primary reference. See `docs/repo-selection.md`. This risk is retired but the principle remains valid.*

---

# 7. Recommended repositioning

## New core framing

The project should be repositioned from:

> NZ AI Economy Simulator

to:

> NZ AI Policy Sandbox
> *A sector-calibrated scenario model for testing AI policy choices under uncertainty*

You can still keep "simulator" in working language, but externally the sandbox framing is more honest and more useful.

## New primary claim

> New Zealand's current AI baseline is too incoherent for single-average policy design. A sector-calibrated scenario model reveals why targeted policy can outperform broad aggregate approaches, and where it may not.

## New success test

The project succeeds if a serious reader comes away with:

1. a corrected understanding of the baseline
2. a clear map of sector differences
3. a better way to compare policy choices
4. confidence in the assumptions and limits of the tool

Not if they simply think the charts look sophisticated.

---

# 8. Recommendation

## Proceed, but change the order and tighten the promise

### Keep
- the provenance correction work
- the sector-based framing
- the demand-side vs supply-side comparison
- the interactive ambition as a later phase

### Change
- move from 9 sectors only to a tiered whole-economy structure
- write a methods note before building the model
- treat the first deliverable as a paper-grade policy framework, not a finished simulator
- frame outputs as scenario comparisons under uncertainty
- narrow the primary audience to policy/economics readers first

### Drop
- any implication that the first version will be a forecast engine
- any unnecessary precision in early quantitative outputs
- parallel work on polished product layers before the methods are stable

---

# Final judgement

This project is worth doing.

But the original version was strongest as a **research question** and weakest as a **product promise**.

The evidence gathered so far does not kill the project. It improves it. It says:

- yes, the baseline problem is real
- yes, sector differences matter
- yes, policy comparison is a worthwhile use case
- no, the project should not pretend to know more than the data can support
- no, 9 sectors alone are not enough for an honest aggregate claim
- no, the simulator should not outrun the methodology

If you treat it as a transparent policy sandbox built on a corrected baseline, it has real value.
If you treat it as an all-singing forecast machine, it will get torn apart.
