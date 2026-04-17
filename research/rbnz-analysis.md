# RBNZ - "Rise of the Machines: How Could AI Impact Financial Stability?"

*Source: RBNZ Financial Stability Report, May 2025, Special Topic (Matthew Hankin)*
*PDF: `data/raw/rbnz-rise-of-machines-2025.pdf` (8 pages, 385KB)*
*Full text extracted via HYPNOS pdfplumber: `data/raw/rbnz-rise-of-machines-2025-extracted.md`*
*Critical review from CK's email analysis, 2026-04-16*

---

## Four Headline Findings

1. **AI adoption is accelerating** - models and tools increasingly sophisticated; widespread use across financial services
2. **AI can benefit financial stability** - enhanced model accuracy, risk assessment and cyber resilience
3. **AI may pose risks to financial stability** - errors, data-privacy breaches, market distortions, cyber attacks could amplify systemic risk
4. **Market concentration poses risks** - heavy reliance on handful of critical third-party providers creates correlated systemic vulnerabilities

## Key Metrics

| Metric | Value | Source |
|---|---|---|
| Training compute growth | Doubling ~every 2 months (was every 2 years pre-2010s) | Industry data |
| ChatGPT adoption speed | 1M users in 5 days (2022) | OpenAI |
| NZ AI job displacement | Only 8% of surveyed orgs experienced any displacement | AI Forum Sep 2024 |
| NZ financial services adoption | Most FMA respondents already using AI, all expect future use | FMA Sep 2024 |
| Adoption asymmetry | Banking outpaces insurance; insurers prefer "tried-and-tested" | RBNZ liaison |

## Benefits to Financial Stability

- **Productivity:** LLMs referencing lending policies; ML-optimised risk selection and pricing; agentic AI as personalised financial advisors
- **Operational/cyber risk reduction:** Pattern recognition for money-laundering and fraud; frees resources for dedicated risk management
- **Model accuracy:** More sophisticated ML risk models improve credit-default prediction and capital/liquidity planning

## Risks to Financial Stability

| Risk Category | Description |
|---|---|
| Model inaccuracy & bias | Shared AI underwriting models inherit historical bias; mass under-pricing; biased loan origination |
| Misalignment | AI agents exploit loopholes for short-term profit (unfair claim rejection, anti-competitive conduct) |
| Cyber & operational | Training-data poisoning; prompt injection; GenAI-enhanced phishing |
| Disinformation & fraud | Deepfakes; convincing phishing; fake customer-support |
| Market risk / herding | Concentrated AI providers drive correlated trading/lending/pricing; algorithmic tacit collusion |
| Opacity | GenAI "black box" models; undisclosed training data and methodology |
| "Silent cover" | Existing insurance policies may unintentionally cover AI-related harms - unpriced risk |

## Macroeconomic Channels

- **Neutral interest rates:** If AI-driven productivity gains raise return on capital, RBNZ may need to revise neutral-rate estimates. NZ constraints: low intangible-capital investment, limited tech-skilled workforce.
- **Labour-market disruption:** Structural unemployment shocks could increase credit/mortgage defaults, though AI-complementary job creation may partially offset.
- **Migration to non-bank lending:** AI adoption may accelerate activity shifting to less-regulated NBFIs, limiting regulators' holistic view.

## NZ Regulatory Landscape

| Standard | Status | Relevance |
|---|---|---|
| Risk Management Standard (RMS) | From 2028 | Principles-based requirements for deposit takers |
| Operational Resilience Standard (ORS) | From 2028 | ICT operational-risk requirements |
| CoFI Act 2022 | In force | Fair treatment of consumers - AI conduct risk |
| RBNZ Cyber Resilience Guidance (2021) | In force | Supports cyber resilience of regulated entities |

**⚠️ 2025-2028 regulatory vacuum:** RMS and ORS don't take effect until 2028. Three-year window during which AI adoption will accelerate under standards not designed for it.

## Critical Review (CK's analysis)

### What's Missing vs International Peers

Benchmarked against BoE FPC (April 2025), FSB (November 2024), and BIS (June 2024), significant gaps:

1. **No micro/macro prudential distinction** - Lists risks as flat catalogue without explaining how well-managed firm-level deployments can generate emergent macroprudential risk
2. **No monitoring framework** - "We will continue to monitor" vs BoE's specific AI Survey, AI Consortium, targeted supervisory intelligence
3. **Zero quantification** - No scenario analysis, no loss estimates, no stress testing (BoE constructs hypothetical scenarios)
4. **Agentic AI treated as a definition, not a risk** - Never seriously analyses autonomous goal-directed agents at machine speed
5. **Missing: liability and legal risk** - Who bears liability for discriminatory AI lending decisions at scale? (CoFI Act context)
6. **Missing: RBNZ's own AI capability** - No mention of regulator's own AI readiness
7. **Thin NZ-specific evidence** - Only two NZ data points (FMA survey, AI Forum 8% displacement)
8. **NBFI migration flagged but not analysed** - No quantification of current NBFI footprint
9. **Missing: cross-border data sovereignty** - NZ depends on offshore AI providers subject to foreign law
10. **Missing: energy/infrastructure dependency** - NZ's constrained electricity market
11. **Missing: inflation and price-setting dynamics** - AI-altered firm pricing behaviour
12. **Open-source model concentration** - Common model components = correlated vulnerabilities without vendor accountability

---

## Additional References Found in Paper

- **NZ Treasury Analytical Note AN 24/06 (July 2024)** - "The Impact of Artificial Intelligence – an economic analysis"
  - URL: https://www.treasury.govt.nz/sites/default/files/2024-07/an24-06.pdf
  - Referenced by RBNZ as source for NZ-specific AI productivity estimates
  - **Should download and analyse** - NZ-specific companion to the OECD paper

- **AI Forum NZ Business Productivity Report (September 2024)**
  - URL: https://aiforum.org.nz/wp-content/uploads/2024/09/AI-Business-Productivity-Report_September-2024_final.pdf
  - Source of the 8% displacement figure
  - **Should download** - direct link from RBNZ footnotes

- **BoE AI in UK Financial Services Survey (2024)**
  - URL: https://www.bankofengland.co.uk/report/2024/artificial-intelligence-in-uk-financial-services-2024
  - Cybersecurity = greatest perceived systemic risk

---

## Implications for Simulator

### For Financial Services archetype ("Regulatory throttle")
- Confirms **dual-regulator dynamic** (FMA + RBNZ) unique to NZ
- **2025-2028 regulatory vacuum** is a time-bounded policy variable the simulation can model
- **Market concentration risk** from third-party AI providers - relevant for supply-side scenario
- RBNZ confirms **highest AI exposure for professional/managerial occupations** - supports Professional Services archetype too
- **Migration to NBFIs** could be a modelled spillover effect

### Model variables populated
- **B8 (adoption rate):** Most FMA respondents already using AI; all expect future use. Banking outpacing insurance.
- **B14 (adoption trajectory):** Accelerating overall. Banks driven by fintech competition + digital expectations. Insurers cautious.
- **C16 (displacement risk):** Only 8% of orgs experienced displacement (AI Forum Sep 2024)
- **C15 (productivity):** RBNZ notes potential neutral rate revision from AI-driven productivity. NZ constrained by low intangible capital + limited tech-skilled workforce.
- **D23 (regulatory constraints):** RMS/ORS from 2028, CoFI in force, cyber guidance 2021. 2025-2028 = regulatory vacuum.
- **C21 (NZ evidence):** Banking using ML for risk modelling + GenAI for efficiency. Reluctant on customer-facing GenAI. Talent attraction cited as difficulty.

### Use Cases from Paper (Figure 2.10)
| Sector | AI Use Case | Outcome |
|---|---|---|
| Banking | LLMs referencing internal lending policies | Faster client servicing, improved accuracy |
| Insurance | ML for risk selection and pricing optimisation | Greater profitability, risk-based pricing |
| NBFI | Agentic AI as personalised financial advisor | Automatic trade execution, personalised budgeting |
