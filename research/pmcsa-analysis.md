# PM's Chief Science Advisor — AI in Healthcare (Long Report)

*Source: "Tiro Atamai — Using AI for Health in Aotearoa New Zealand", December 2023*
*Authors: Co-chaired by Professor Ian Town (Manatū Hauora) and Professor Julian Voisey, with expert panel*
*PDF: `data/raw/pmcsa-ai-healthcare-2023.pdf` (153 pages, 3.7MB)*
*Full text extracted via HYPNOS pdfplumber: `data/raw/pmcsa-ai-healthcare-extracted.md` (7,106 lines)*

---

## What This Report Is

The most comprehensive NZ-specific analysis of AI in healthcare. 153 pages, 22 recommendations across 8 themes, commissioned by the PM's Chief Science Advisor. This is the document that distinguishes back-office vs clinical AI — a confirmed data gap in our project.

---

## Key Findings for Simulator

### Back-Office vs Clinical AI — The Distinction We Needed

The report explicitly separates:
- **Administrative/back-office AI:** scheduling, clinical notes, routine communications, document processing. Described as "low-hanging fruit" — immediate productivity gains, lower risk.
- **Clinical AI:** diagnostic imaging, precision medicine, treatment recommendations, clinical decision support. Higher potential impact but requires robust evaluation, regulation, and equity safeguards.

**This resolves our confirmed data gap:** The 62% Datacom adoption figure for healthcare likely captures predominantly back-office/administrative AI. Clinical AI deployment is far less advanced and faces specific governance barriers (NAIAEAG review process, equity requirements, Te Tiriti obligations).

### NAIAEAG — Most Formally Governed AI Sector in NZ

Te Whatu Ora operates the **National AI & Algorithm Expert Advisory Group (NAIAEAG)**, responsible for reviewing proposals to develop or deploy AI in health settings. The advisory group includes experts in AI, ethics, clinical, research, Māori health, data, digital, privacy, legal, and innovation. Proposals assessed against a formal framework.

**This is the most structured AI governance framework in any NZ sector** — confirms the "equity-constrained high-potential" archetype.

### 22 Recommendations Across 8 Themes

1. **Mapping the landscape** — understand needs, capabilities, legislative settings, research capacity
2. **Maintaining human element** — distinguish AI types (assist/augment/replace); identify tasks where AI safely frees up professional time
3. **Enabling adoption** — policy settings, education, funding for effective AI adoption
4. **Establishing confidence and trust** — public engagement, workforce engagement, R&D engagement
5. **Tackling inequity** — AI must improve equity, not reinforce existing disparities. Priority groups: Māori, Pacific people, people with disabilities, rural people, women
6. **Te ao Māori** — Māori data sovereignty, tikanga, Te Tiriti obligations, AI as potential tool for cultural preservation (te reo Māori)
7. **Data and systems** — infrastructure, interoperability (85% of systems don't support data sharing)
8. **Exploring future opportunities** — horizon scanning, NZ-specific research needs

### AI and Equity — Unique to Healthcare Archetype

The report makes a strong case that healthcare AI **must be evaluated for equity impact**, not just productivity:
- AI could **reduce** inequity: lower barriers to knowledge, reduce human bias, enhance access, increase productivity of professionals
- AI could **increase** inequity: algorithmic bias, data gaps for underrepresented populations, digital divide
- **Priority populations:** Māori, Pacific, disabled, rural, women
- **Te Tiriti obligations** require Crown to actively protect Māori rights and interests — AI deployment must account for this

### Infrastructure Barriers
- **85% of health systems don't support data sharing** (Health Digital Investment Plan 2025)
- Fragmented IT landscape across health system
- Need for national data infrastructure to enable AI at scale

### Workforce
- Healthcare workforce needs AI literacy at all levels
- Distinction between AI users (clinicians) and AI builders (tech workforce)
- Need for trained staff to evaluate and regulate AI-enabled technologies

---

## Specific Data Points for Simulator Variables

| Variable | Data Point | Source (within report) |
|---|---|---|
| B10 (types of AI) | Administrative: scheduling, notes, comms. Clinical: imaging, diagnostics, precision medicine | Themes 1-2 |
| B12 (barriers) | Data interoperability (85% can't share), governance requirements, equity safeguards, Te Tiriti | Themes 5-7 |
| C15 (productivity) | Back-office efficiency = immediate gains; clinical AI = longer timeline, requires evaluation | Theme 1 |
| C17 (displacement risk) | Low for clinical roles (augmentation not replacement); moderate for admin tasks | Theme 2 |
| D22 (government support) | NAIAEAG established; Health Digital Investment Plan 2025 | Themes 1, 7 |
| D23 (regulatory constraints) | Most formally governed NZ sector — NAIAEAG review process for all AI proposals | Theme 1 |
| D28 (procurement requirements) | Therapeutic Products Act 2023 — regulatory body for AI health tech | Theme 1 |

---

## Implications for Healthcare Archetype ("Equity-Constrained High-Potential")

This report is the authoritative source for the Healthcare archetype. Key modelling implications:

1. **The 62% adoption figure overstates clinical AI deployment** — most adoption is back-office/admin. Clinical AI faces a formal governance pipeline (NAIAEAG) that no other NZ sector has.

2. **Equity is a binding constraint on adoption speed** — unlike other sectors where the constraint is skills or cost, in healthcare the constraint is ensuring AI doesn't worsen existing disparities. The simulation should model an "equity brake" on healthcare AI deployment.

3. **Data infrastructure is the bottleneck** — 85% of systems can't share data. Until national data infrastructure is built, AI at scale in healthcare is limited.

4. **Productivity gains are real but split** — immediate gains from admin AI; delayed gains from clinical AI. The simulation should model these as separate adoption curves within the healthcare sector.

5. **Te Tiriti obligations are unique to NZ** — no international benchmark captures this dimension. It's a NZ-specific policy variable that affects adoption speed and acceptable use cases.

---

## Additional References
- Health Digital Investment Plan 2025 — first national 10-year digital health plan
- Therapeutic Products Act 2023 — new regulatory framework for health technologies
- Pae Ora | Healthy Futures Strategies 2023 — health equity strategy
