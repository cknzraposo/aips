# NZ AI Policy Sandbox

**A transparent NZ sector-calibrated policy sandbox for testing AI policy tradeoffs under uncertainty.**

---

## What this is

NZAIS is a whole-economy scenario model for comparing AI policy approaches in New Zealand.

It exists because New Zealand's current AI policy discussion rests on a fragmented baseline. Adoption figures in circulation range from 32% to 87%, depending on who was surveyed, what population was sampled, and how "adoption" was defined. No two sources measure the same thing. Policy built on any single number is standing on weak ground.

That means much of the public conversation around "NZ AI adoption" is flatter and more confident than the evidence supports.

This project replaces single-number thinking with a structured, sector-calibrated framework that compares different policy designs under uncertainty.

---

## Core research question

**Does aggregate AI policy, designed around a single national average, systematically produce worse outcomes than sector-targeted policy in New Zealand?**

A related question sits underneath it:

> When is it better to support direct adoption in sectors, and when is it better to invest in enabling capacity - technology, skills, procurement, infrastructure, and diffusion?

---

## What the model is and is not

### The model is
- a **policy sandbox** - for comparing scenarios, not forecasting GDP
- a **structured synthesis** of fragmented NZ evidence
- a **whole-economy model** with tiered sector coverage
- **transparent** - assumptions are labelled, not hidden

### The model is not
- a forecasting engine
- a claim to exact future outcomes
- a definitive adoption ranking
- a black box

---

## Why sector structure matters

The evidence shows clear sector differences:

| Sector | Archetype | Why it matters |
|---|---|---|
| Agriculture | Targeted-policy beneficiary | NZ's most distinctive sector. No published adoption rate. Long diffusion timeline. |
| Manufacturing | Productivity sweet spot | 58% adoption. Clearest productivity case. Investment Boost lowers barriers. |
| Professional Services | Diminishing returns test | Highest adoption. Further investment yields smaller marginal gains. |
| Public Sector | Employment story | Lowest adoption, fastest acceleration. Capability, culture, and scale are the barriers. |
| Technology | Supply-side enabler | Not just an adopter - it enables the other sectors. $24B GDP, $11.4B exports. |
| Healthcare | Equity-constrained high-potential | 62% adoption. Admin AI vs clinical AI. Equity and governance are binding constraints. |
| Construction | Worst case for aggregate policy | No published adoption rate. 95% of firms < 10 people. Lowest digital maturity. |
| Financial Services | Regulatory throttle | High adoption constrained by dual regulators (FMA + RBNZ). |
| Retail & Wholesale | Consumer-facing displacement | Largest sector by weight. Wholesale 64% adoption. Retail = displacement story. |

These differences are not cosmetic. They change how policy works.

---

## Whole-economy scope

The model uses a **tiered structure** covering all 19 ANZSIC Level 1 sectors:

### Tier 1 - Full explanatory sectors (9)
Agriculture, Manufacturing, Professional Services, Public Sector, Technology, Healthcare, Construction, Financial Services, Retail & Wholesale

### Tier 2 - Simplified sectors (6)
Education & Training, Transport & Warehousing, Accommodation & Food Services, Administrative & Support Services, Information Media & Telecommunications, Utilities

### Tier 3 - Residual sectors (4)
Mining, Rental/Hiring/Real Estate, Arts & Recreation, Other Services

**Why tiered?** Because a 9-sector-only model covers ~61% of GDP. That is not enough for an honest economy-wide aggregate-policy comparison. The whole economy must be represented.

---

## Policy scenarios

### Scenario A - Aggregate policy
Broad economy-wide allocation by GDP share or equivalent rule.

### Scenario B - Targeted demand-side policy
Support focused on sectors where adoption is lagging, bottlenecks are acute, or direct intervention unlocks productivity or public value.

### Scenario C - Targeted supply-side policy
Support focused on enabling capacity - technology, skills, infrastructure, procurement, and diffusion mechanisms that raise adoption capacity across the economy.

The central analytical tension is not only aggregate versus targeted. It is also:

> **direct adoption support versus enabling-system investment.**

---

## Evidence base

The project draws on 10 completed research analyses and 38 catalogued data sources:

| Source | Key contribution |
|---|---|
| OECD "Miracle or Myth?" (2024) | Productivity calibration: 0.25–0.6pp TFP growth from AI over 10 years |
| NZ Treasury AN 24/06 | NZ structural barriers and diffusion lag |
| AI Forum NZ (Sep 2024) | Adoption data, methodology critique, NZ case studies |
| Datacom State of AI (2024) | 66% adoption (100+ employee firms), governance gaps |
| PM's Chief Science Advisor (2023) | Healthcare: admin vs clinical AI, equity constraints |
| Public sector documents (4) | Cabinet approach, GCDO framework, "chilling effect", barriers |
| RBNZ "Rise of the Machines" (2025) | Financial stability risks, regulatory vacuum |
| FMA AI Research (2024) | Financial services adoption (13 respondents) |
| NZTech Manifesto (2026) | Tech sector: $24B GDP, 119,520 jobs, $11.4B exports |
| Stats NZ (multiple) | GDP, employment, business demography - all 19 sectors |

The source comparison - showing that adoption figures range from 32% to 87% with no consistent definition - is a foundational contribution of this project.

---

## Modelling approach

The primary reference architecture is adapted from [Strauss (ai-web-economy-simulator)](https://github.com/IlanStrauss/ai-web-economy-simulator) - a mechanism-design ODE model with:

- bounded state variables
- one-mechanism-per-layer causal structure
- named policy scenarios
- mathematical specification before code

The adaptation replaces the two-population platform/creator model with a **19-sector tiered economy** where each sector block has interpretable state variables for adoption, absorptive capacity, productivity effect, and labour pressure.

Tech stack is not yet decided. The methods and scope come first.

---

## Current status

- [x] Project scope locked
- [x] Whole-economy tiered structure defined
- [x] Formal paper outline written
- [x] Methods note drafted
- [x] 10 research analyses completed
- [x] 38 data sources catalogued
- [x] 348-cell parameter table created
- [x] 122/348 cells pre-populated (35%)
- [x] Primary reference repo selected (Strauss)
- [x] Architecture adaptation brief written
- [x] State-variable specification drafted
- [ ] First-pass equations
- [ ] Tech stack decision
- [ ] Version 1 model build
- [ ] Paper draft
- [ ] External review
- [ ] Public-facing interactive layer

---

## Project structure

```
nzais/
├── README.md              # This file
├── SCOPE.md               # Formal project scope
├── PAPER-OUTLINE.md       # Paper structure
├── METHODS.md             # Methods note
├── STATE-VARIABLES.md     # Critique-ready state variable specification
├── FAQ.md                 # Comprehensive FAQ
├── CONTRIBUTING.md        # Collaborator brief
├── docs/
│   ├── critical-analysis.md
│   ├── repo-selection.md
│   ├── architecture-adaptation.md
│   ├── provenance-analysis.md
│   └── data-source-catalogue.md
├── data/
│   ├── sector-parameter-table.csv    # 348-cell parameter table
│   └── raw/                          # Source data files
├── research/
│   └── *.md                          # Per-source analysis notes
└── src/                              # Model code (TBD)
```

---

## Contributing

This project is currently private and in foundation phase.

If you are interested in contributing - as an economist, sector expert, policy analyst, or technically literate critic - the most useful next step is a short conversation focused on:

- what the project is missing
- what it is overclaiming
- what evidence or structure would make it genuinely more useful

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution modes and the collaborator brief.

> **Style rule:** All content in this repository must use **NZ English** spelling and **no em-dashes** (` - `) - use spaced hyphens (` - `) instead. See [.github/CONTRIBUTING-STYLE.md](.github/CONTRIBUTING-STYLE.md).

---

## An AI for Good NZ initiative

This project is developed under [AI for Good New Zealand](https://www.aiforgood.org.nz) - a community dedicated to ensuring AI benefits all New Zealanders.

---

## Authors

- **CK** - co-author, domain expert. Three decades of enterprise technology adoption. Founder, AI for Good NZ. [Blog](https://hello.chandima.net) · [Substack](https://chandima.substack.com)

---

## Licence

MIT - see [LICENSE](LICENSE).
