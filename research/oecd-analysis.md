# OECD — "Miracle or Myth? Assessing the Macroeconomic Productivity Gains from AI"

*Source: OECD AI Paper No. 29, November 2024 (Filippucci, Gal and Schief)*
*PDF not downloaded (OECD iLibrary Cloudflare blocked)*
*Analysis from CK's email, 2026-04-16*

---

## The Core Question

Micro-level studies show stunning task-level AI gains:
- +14% for customer service agents
- ~40% for business consultants
- 50%+ for software programmers

**The paper asks:** do those impressive individual gains actually translate into comparable macroeconomic productivity growth?

**The answer:** nuanced. Three structural drags prevent micro gains from scaling up directly.

---

## Headline Estimates (10-year horizon, US baseline)

| Metric | Estimated Annual Gain |
|---|---|
| **Total Factor Productivity (TFP)** | **0.25 - 0.6 pp** |
| **Labour Productivity** | **0.4 - 0.9 pp** |

**Context:** US annual TFP growth has averaged ~1% and labour productivity ~1.5% over the past two decades. AI would be a significant but not transformational addition — unlike the ICT boom of 1995-2004, which contributed 1-1.5pp to annual US TFP growth.

### Precise Scenario Results (Table 2 from paper)

| | Scenario 1: Low Adoption (23%) | Scenario 2: High Adoption + Expanded Capabilities (40%) | Scenario 3: Scenario 2 + Frictions + Uneven Gains |
|---|---|---|---|
| Micro-level gains | 30% | 30% | 30% |
| AI adoption rate | 23% | 40% | Uneven across sectors (avg 40%) |
| Factor allocation | Mobile / fully flexible | Mobile / fully flexible | **Restricted** |
| Demand | Standard | Standard | **Inelastic** |
| **Direct effect (TFP pp)** | 0.14 | 0.37 | 0.38 |
| **Input-output multiplier** | 0.09 | 0.25 | 0.24 |
| **Baumol effect** | 0.00 | 0.00 | **-0.08** |
| **Total TFP (pp/year)** | **0.24** | **0.62** | **0.53** |
| **Total Labour Productivity (pp/year)** | **0.36** | **0.93** | **0.80** |

**Critical finding:** In Scenario 3 (most realistic — uneven adoption + frictions), the Baumol effect drags aggregate TFP down by 0.08pp. This is the mathematical mechanism that makes sector-targeted policy superior to aggregate policy. When gains concentrate in a few sectors, demand saturation and reallocation frictions erode aggregate growth.

---

## Why Micro Gains Don't Simply Scale Up — Three Structural Drags

### 1. Limited exposure
AI primarily boosts cognitive, knowledge-intensive tasks (ICT, finance, professional services). Physical and manual tasks remain largely unaffected.

### 2. Low adoption rates
Official statistics show firm-level AI adoption at roughly **5% in the US (2024)** and **8% in the EU (2023)**. The future adoption trajectory is the single largest source of uncertainty.

### 3. General equilibrium effects and Baumol's growth disease
When AI gains concentrate in a few sectors, demand saturation and factor reallocation frictions erode aggregate growth. Under historically realistic sectoral dispersion, **the drag can slash aggregate gains by nearly a third**.

---

## Scenario Architecture

| Scenario | Annual TFP Gain | Description |
|---|---|---|
| **Baseline** (current GenAI, moderate adoption) | ~0.25 pp | Current trajectory |
| **Expanded digital tools** (complementary software) | ~0.4-0.6 pp | Software widens AI reach |
| **Robotics integration** (AI extends to physical tasks) | **~1 pp** | The breakthrough case |
| **High concentration + frictions** | Gains cut by ~1/3 | Baumol drag fully operative |

**The robotics integration scenario is the breakthrough case** — when physical tasks are also exposed, gains spread across all sectors, eliminating the Baumol reallocation drag entirely.

---

## Cross-Country Variation (G7 only)

| Country | Notes |
|---|---|
| US, Germany, Canada | Gains of comparable magnitude |
| UK | Similar or slightly higher (strong knowledge-intensive services) |
| France, Italy | Expected gains about half of US |
| Germany, Japan | In friction-heavy scenarios, input-output structure further depresses gains |

**Primary driver** of cross-country variation: adoption rates, followed by sectoral exposure to AI.

---

## Policy Levers Identified

1. **Accelerate adoption and diffusion** — skills policy, digital infrastructure, liberalised digital trade
2. **Maintain competitive markets** — prevent incumbency advantages from discouraging laggard adoption
3. **Invest in complementary capabilities** — digital tools and robotics integration to widen AI's sectoral reach
4. **Manage reallocation** — facilitate labour mobility across sectors to minimise Baumol drag

---

## New Zealand Implications (mapped from OECD framework + NZ Treasury AN 24/06)

### Where NZ sits relative to G7 range

| Factor | NZ Position | Effect |
|---|---|---|
| Technology diffusion speed | Historically slow | Pushes toward lower end |
| Intangible capital investment | Persistently low | Constrains complementary investments |
| Sectoral composition | Heavy primary industries, thinner knowledge-intensive | Reduces overall AI exposure |
| Workforce skill profile | High-skill, advanced economy | Paradoxically increases exposure for cognitive tasks |
| Firm size | Dominated by SMEs | Higher per-firm adoption costs, disproportionate upside if barriers lowered |
| Regulatory posture | No AI-specific legislation | Alignment with trading partners critical |

### NZ Productivity Estimate

**Rough NZ range: 0.2-0.5pp annual labour productivity gain over 10 years** — toward the lower half of the OECD range, unless deliberate policy action accelerates adoption.

### The NZ-Specific Upside Case

The **robotics integration pathway is disproportionately important for NZ**. Comparative advantages in agriculture, horticulture, aquaculture, and logistics are domains where AI-robotics convergence could deliver outsized returns — precisely because these sectors are currently NOT exposed to pure GenAI productivity gains.

If NZ positions itself as an early mover in AI-robotics integration within primary industries, the productivity calculus shifts materially.

---

## Key Takeaway for NZ Policy Framing

The paper's central message — that macro gains are conditional, not automatic — carries particular weight for New Zealand. The structural headwinds (slow diffusion, low intangible investment, primary-sector weighting) mean **NZ cannot passively import the productivity dividend**. It requires active intervention on adoption, skills, digital infrastructure, and especially AI-robotics convergence in the sectors where NZ actually competes.

---

## Implications for Simulator

### Critical for all sectors — productivity calibration anchor

- **C15 (productivity estimates):** Use 0.25-0.6pp TFP as the calibration range for aggregate scenarios
- **NZ-specific adjustment:** 0.2-0.5pp labour productivity (lower half of OECD range)
- **Baumol drag:** Must be modelled — when gains concentrate in few sectors, aggregate gains are cut by ~1/3. This is the mathematical basis for why sector-targeted policy beats aggregate policy.
- **Robotics scenario:** The breakthrough pathway for Agriculture archetype specifically — AI-robotics convergence in primary industries

### For sector archetypes specifically
| Archetype | OECD Implication |
|---|---|
| Agriculture (targeted-policy beneficiary) | Robotics integration is the upside case; pure GenAI exposure is low |
| Manufacturing (productivity sweet spot) | Directly in the "expanded digital tools" scenario range |
| Professional Services (diminishing returns) | Already high exposure — Baumol saturation applies |
| Construction (worst case for aggregate) | Physical/manual tasks = low GenAI exposure = needs robotics pathway |
| Technology (supply-side enabler) | The complementary capability that widens AI reach for other sectors |

### For policy scenarios
- **Aggregate scenario:** OECD shows this produces Baumol drag — validates our hypothesis
- **Demand-targeted scenario:** Concentrating on low-adoption sectors reduces reallocation frictions
- **Supply-targeted scenario:** Investing in tech/digital tools = the "expanded digital tools" scenario that lifts gains from 0.25 to 0.4-0.6pp

### Additional reference
- **NZ Treasury Analytical Note AN 24/06 (July 2024)** — companion NZ-specific analysis. Worth finding and adding to the source catalogue.
