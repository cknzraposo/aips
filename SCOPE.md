# NZ AI Policy Sandbox - Project Scope

*Working title: NZ AI Economy Simulator*  
*Date: 2026-04-17*  
*Status: Draft scope v1*

---

## 1. Focus statement

**A transparent NZ sector-calibrated policy sandbox for testing AI policy tradeoffs under uncertainty.**

This project will model the New Zealand economy as a tiered whole-economy structure, allowing policymakers, researchers, and collaborators to compare AI policy scenarios without pretending that one national adoption number can explain a heterogeneous economy.

---

## 2. Why this project exists

New Zealand's current AI policy discussion rests on an unstable baseline.

The most-cited **44%** figure is not a business adoption rate. It is a public trust measure. Meanwhile, actual adoption figures in circulation range from **32% to 87%**, depending on who was surveyed, what population was sampled, and how "adoption" was defined.

This creates a policy problem. Broad national claims about AI adoption are often made as if they describe a single coherent reality. They do not.

The economy is structurally heterogeneous:
- some sectors are bottlenecked by capability
- some by regulation
- some by capital cost
- some by fragmented firm structure
- some by equity, trust, or governance constraints
- some act as enablers for the rest of the economy

A whole-of-economy policy conversation needs a structure that reflects those differences.

---

## 3. Core research question

Does aggregate AI policy, designed around a single national average, systematically produce worse outcomes than sector-targeted policy in New Zealand?

### Working hypothesis
Yes. New Zealand's sector mix creates materially different adoption pathways, constraints, and returns. A broad aggregate approach will underperform when it ignores those structural differences.

---

## 4. Project objective

To build a transparent, evidence-based policy sandbox that:

1. **corrects the broken baseline** in NZ AI adoption discourse
2. **models the economy as a whole**, not just a selected subset
3. **compares alternative policy structures** under uncertainty
4. **shows where sector-specific constraints alter outcomes**
5. **provides a paper-grade framework** before any polished public tool is built

---

## 5. Project framing

### What this project is
- a policy sandbox
- a scenario comparison framework
- a structured synthesis of fragmented NZ evidence
- a tiered whole-economy model
- a transparent tool for exploring tradeoffs

### What this project is not
- a precise forecasting engine
- a claim to exact future GDP or employment outcomes
- a definitive single measure of NZ AI adoption
- a substitute for sector expertise or portfolio judgment
- a black-box consultancy model

---

## 6. Scope: whole economy, tiered structure

The model must cover the whole economy. The earlier 9-sector structure remains analytically useful, but it cannot stand alone as the denominator for an economy-wide policy comparison.

### Tier 1 - Full explanatory sectors (9)
These sectors carry the main analytical narrative and receive the richest modelling treatment.

1. Agriculture  
2. Manufacturing  
3. Professional Services  
4. Public Sector  
5. Technology  
6. Healthcare  
7. Construction  
8. Financial Services  
9. Retail and Wholesale

These are included because they represent distinct AI adoption archetypes and policy stories.

### Tier 2 - Simplified sectors (6)
These sectors matter for economy coverage and policy realism, but do not require full-depth treatment in the first model.

1. Education and Training  
2. Transport, Postal and Warehousing  
3. Accommodation and Food Services  
4. Administrative and Support Services  
5. Information Media and Telecommunications  
6. Utilities

These sectors will be represented with lighter parameterisation so they absorb their economic weight in aggregate scenarios and contribute to whole-economy outcomes.

### Tier 3 - Residual economy blocks (4)
These sectors close the denominator and preserve whole-economy honesty.

1. Mining  
2. Rental, Hiring and Real Estate Services  
3. Arts and Recreation Services  
4. Other Services

### Scope rule
The aggregate scenario must distribute investment or support across the whole economy, not just the 9 narrative sectors.

---

## 7. Policy scenarios in scope

### Scenario A - Aggregate policy
Broad economy-wide allocation, typically proportional to GDP share or another system-wide rule.

### Scenario B - Targeted demand-side policy
Support concentrated on sectors where adoption is lagging, bottlenecks are acute, or direct intervention is likely to unlock productivity or public value.

### Scenario C - Targeted supply-side policy
Support concentrated on enabling capacity such as the domestic technology sector, skills, infrastructure, data capability, and diffusion mechanisms that raise adoption capacity across the economy.

### Analytical tension
The project is not only comparing aggregate versus targeted policy. It is also comparing:
- direct adoption support
- versus enabling-system investment

That tension is central to the paper.

---

## 8. Model logic

Each sector or sector block must, at minimum, have structured parameters across four areas:

### A. Economic baseline
- GDP / value-added
- employment
- enterprise structure / fragmentation
- wage or productivity baseline where available

### B. Adoption state
- current maturity or adoption estimate
- likely adoption path
- major barriers or bottlenecks
- evidence confidence level

### C. Policy responsiveness
- sensitivity to skills, capital, regulation, procurement, infrastructure, or governance
- expected lag between intervention and realised gains

### D. Outcome channels
- productivity impact range
- labour pressure / displacement risk
- spillovers to other sectors
- social, equity, or public-interest constraints

---

## 9. Evidence standards

The project must distinguish clearly between:
- **observed** values - directly supported by NZ data
- **derived** values - inferred from multiple sources or international benchmarks
- **assumed** values - explicit placeholders used for scenario structure

### Key principle
Transparency matters more than completeness theatre.

If evidence is weak, it should be labelled weak. If a parameter is inferred, it should be declared inferred.

---

## 10. Deliverables in scope

### Core written deliverables
1. Executive summary  
2. Methods note  
3. Formal paper outline  
4. Collaborator brief  
5. Comprehensive FAQ  
6. Critical analysis  
7. Paper-grade draft

### Model deliverables
8. Tiered sector specification  
9. Architecture decision note  
10. Version 1 scenario model  
11. Sensitivity analysis memo

### Later public deliverables
12. Public explainer  
13. Interactive scenario interface  
14. Presentation-ready charts and narrative summaries

---

## 11. Order of work

1. Lock scope and framing  
2. Finalise methods note  
3. Confirm tiered sector structure  
4. Choose model architecture  
5. Build Version 1 scenario model  
6. Write paper draft  
7. Get collaborator and expert review  
8. Build public-facing layer only after the core holds

---

## 12. Primary audience

### First audience
- policymakers
- economists
- serious policy readers
- collaborators and expert reviewers

### Second audience
- AI for Good NZ network
- media and public-interest readers
- broader public audiences via an interactive tool

The first version must satisfy the first audience before it is translated for the second.

---

## 13. Value proposition

The project's value is not that it produces a magic number.

Its value is that it helps New Zealand move from confused headline metrics to a structured sector-level view of AI policy tradeoffs.

### High-value use cases
- correcting the adoption baseline
- comparing policy structures transparently
- revealing sector-specific bottlenecks
- clarifying where broad policy is likely to misallocate effort

### Low-value positioning to avoid
- claiming precise forecasts
- pretending all sectors are equally well measured
- overselling technical sophistication before the methods are stable

---

## 14. Non-negotiable guardrails

1. **Whole-economy honesty** - no aggregate claim without whole-economy denominator coverage  
2. **No false precision** - outputs should favour ranges and scenario comparisons  
3. **Paper logic before product polish**  
4. **Explainable assumptions** - no black box logic where transparency can be preserved  
5. **Architecture serves the question** - not the other way around

---

## 15. Success criteria

The project succeeds if it can credibly say:

1. we corrected the broken baseline in NZ AI discourse
2. we modelled the economy with whole-economy denominator honesty
3. we showed why sector structure changes policy outcomes
4. we compared aggregate, demand-targeted, and supply-targeted policies transparently
5. we made the model's assumptions and limits legible to serious readers

---

## 16. One-line description

**A transparent NZ sector-calibrated policy sandbox for testing AI policy tradeoffs under uncertainty, using a tiered whole-economy structure rather than a misleading single national average.**
