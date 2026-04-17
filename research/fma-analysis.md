# FMA - AI in Financial Services: Key Insights

*Source: FMA Occasional Paper, "Understanding Artificial Intelligence in Financial Services" (July 2024)*
*PDF downloaded: `data/raw/fma-ai-financial-services-2024.pdf` (27 pages)*
*Analysis from CK's email, 2026-04-16*

---

## Methodology

- **Surveyed:** 30 regulated entities; **13 responded** (43% response rate)
- **Respondent composition:** deposit takers (6), insurers (3), financial advice/asset management (4)
- **Scope:** generative AI, machine learning, AI decision-making tools, chatbots relating to consumer outcomes
- **Excluded:** AI trading strategies

**⚠️ Sample size limitation:** 13 respondents is too small for robust sector-level estimates. Acknowledged in our data gaps.

---

## Current Adoption

- **9 of 13** respondents currently using AI
- **6 of 9** already realising tangible benefits; remainder expect benefits within 12 months
- One advanced firm: **90% of AI use cases focused on enhancing productivity**

### AI deployment areas (current)
| Area | Respondents |
|---|---|
| Fraud detection | 5 |
| Risk management | 4 |
| Decision-making / credit underwriting | 3 |
| Product development | 3 |
| Product management | 3 |

### Motivations for future AI adoption (all 13 planning expansion)
| Motivation | Respondents |
|---|---|
| Improved customer outcomes | 13 |
| Operational efficiency | 13 |
| Risk management | 10 |
| Improved data analytics | 10 |
| Accelerated decision-making | 9 |
| Fraud detection | 8 (lower because already widely deployed) |

## Tools in Active Use

- **Off-the-shelf GenAI** (CoPilot, GitHub Copilot): SDLC, research, coding reviews
- **ML platforms** (Darktrace, Databricks, HuggingFace): security, fraud detection, predictive modelling, pricing, personalisation
- **Web automation** (Miro, Zapier): customer behaviours, credit decisions, document scraping
- **Security/detection** (Darktrace, Egress, FRISS): self-learning cyber-threat detection, anomaly identification
- **Customer service chatbots:** summarising interactions, responding to queries, drafting documents

**Notable:** Initial interest in proprietary AI platforms has not materialised - firms pivoted to third-party solutions. One exception: a firm developing an internal web-based LLM to keep sensitive data off third-party platforms.

## Risk Landscape

| Risk | Respondents identifying |
|---|---|
| Staff training requirements | 12 |
| Cybersecurity concerns | 12 |
| Data privacy | 12 |
| Lack of transparency | 11 |
| Regulatory compliance challenges | 10 |
| Potential for discrimination | 9 |
| Bias and fairness | 9 |

### Confidence in managing AI risks
- Very confident: 4
- Somewhat confident: 7
- Neutral: 1
- Somewhat unconfident: 1

**11 of 13** confident in their risk management capability.

## Five Strategic Insights

1. **Caution-first posture is sector-wide.** Every respondent assessing and mitigating risks before deployment. Extending existing tech risk frameworks rather than building new AI-specific governance (though advanced firms creating AI subcommittees).

2. **Human oversight is the primary safeguard** against hallucination and bias. AI-drafted communications pass through traditional risk/compliance review. Some exploring "AI-auditing-AI" approach.

3. **Customer disclosure is a blind spot.** Most respondents have not started thinking about AI disclosures to customers. Clear gap vs IOSCO transparency emphasis.

4. **Compliance readiness is uneven.** Three mechanisms: (a) independent audit of AI models, (b) AI-specific governance/education frameworks, (c) updating ethics principles for GenAI-specific data impact assessments.

5. **FMA positioning as collaborative, technology-neutral regulator** - engagement over prescription. Industry roundtable proposed for late 2024. FMA also trialling GenAI internally.

## International Benchmarks FMA is Tracking

- IOSCO - GenAI risks and limitations framework
- MAS (Singapore) - FEAT Principles for AI in finance
- UK FCA - emerging regulatory approach
- Australian Parliament - Select Committee on Adopting AI

---

## Implications for Simulator

### For Financial Services archetype ("Regulatory throttle")
- Confirms **high adoption constrained by regulation, not skills or cost**
- Dual-regulator dynamic (FMA + RBNZ) is unique to NZ financial sector
- **Customer disclosure gap** = potential regulatory trigger that could slow adoption
- **Caution-first posture** means policy investment in financial services may yield slower returns than other sectors
- Validates the archetype: government simultaneously accelerates and constrains AI uptake

### Model variables populated
- **B8 (adoption rate):** 9/13 = ~69% currently using AI (but n=13 caveat)
- **B10 (types of AI):** fraud detection, risk management, GenAI coding tools, ML platforms, chatbots
- **B12 (barriers):** training, cybersecurity, data privacy, transparency, compliance
- **D23 (regulatory constraints):** FMA positioning as collaborative but tracking international frameworks
- **C21 (NZ case studies):** specific tool mentions (Darktrace, CoPilot, FRISS)
