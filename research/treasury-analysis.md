# NZ Treasury AN 24/06 - "The Impact of Artificial Intelligence: An Economic Analysis"

*Source: NZ Treasury Analytical Note 24/06, July 2024 (Harry Nicholls & Udayan Mukherjee)*
*PDF: `data/raw/nz-treasury-ai-analytical-note-2024.pdf` (20 pages, 507KB)*
*Full text extracted via HYPNOS pdfplumber: `data/raw/nz-treasury-ai-2024-extracted.md`*

---

## What This Paper Is

A Treasury "conversation starter" applying international AI economic frameworks to NZ. Not a modelling paper - it's a qualitative policy analysis that maps global AI evidence onto NZ's structural characteristics. Referenced by both the RBNZ ("Rise of the Machines") and the OECD (as a companion NZ-specific analysis).

---

## Three Key Themes

### 1. AI and Productivity/Investment
- International estimates: AI could boost annual labour productivity growth by **0.3 to 2.9 pp over 10 years** (central estimate ~1.5pp from Goldman Sachs/Briggs & Kodnani 2023)
- More conservative OECD range: **0.1 to 0.6 pp annually** (2023-2040)
- Micro-level evidence: customer service agents +14%, business consultants ~40%, programmers 50%+
- **NZ-specific concern:** Implementation lags mean gains may take years to appear in aggregate data. Previous GPTs suggest **20-30 year full diffusion timeline**

### 2. NZ's Structural Barriers to Realising AI Gains

**NZ could lag behind its peers despite being an advanced economy.** Four barriers identified:

| Barrier | Evidence |
|---|---|
| **Low intangible capital investment** | NZ R&D at 0.8% of GDP vs OECD average 1.8% |
| **Slow technology diffusion** | NZ is an outlier in uptake of advanced digital technologies (Yashiro et al. 2022) |
| **Poor international connections** | Low FDI, limited participation in global value chains |
| **Weak tech & managerial skills** | NZ ICT skills shortage higher than OECD average; managerial skills long identified as a weakness |

**Critical finding for simulator:** "Technology transfer within NZ works reasonably effectively between our most productive and less productive firms but transfer to NZ from the rest of the world is slow" (Zheng, Di & Pacheco 2021).

### 3. Employment and Labour Market
- AI has **outsized impact on higher-skilled tasks** - unlike previous automation waves that primarily affected low/middle-skilled routine work
- Advanced economies like NZ are **paradoxically more exposed** - higher proportion of knowledge-intensive jobs
- **Displacement vs reinstatement** remains the key uncertainty
- Net effect likely **modest in short term** - Briggs & Kodnani estimate ~7% of US workers fully displaced over a decade, most finding new employment
- **NZ-specific twist:** If AI diffusion is slower here, the adjustment period is extended - less acute disruption but also slower reinstatement and new task creation

---

## NZ Regulatory Landscape (Treasury's View)

- NZ has **no AI-specific legislation** - relies on existing regulatory frameworks
- World Economic Forum estimates current NZ laws cover ~80% of AI-related issues
- **Algorithm Charter for Aotearoa NZ** (StatsNZ 2021): signed by 21+ government agencies
- Treasury recommends **technology-neutral, use-focused regulation** (UK model) rather than comprehensive legislation (EU model)
- Rationale: NZ is an adopter not an innovator - regulating development (EU approach) would impose higher costs on a slow-diffusion economy
- **International regulatory alignment** flagged as critical for small, open economy - same point made by Australia

---

## NZ Policy Recommendations (Treasury's Next Steps)

1. Deeper exploration of **policy levers to accelerate AI diffusion** - reducing NZ's technology lag
2. **Sector-specific impact analysis** - particularly for SMEs given their significance to NZ economy
3. **Labour market implications** - skills, immigration, and workforce transition policies
4. **Economic security** - concentration of AI development in few multinational companies
5. **Public sector productivity** - AI to maintain/enhance service levels with aging population pressures

---

## Implications for Simulator

### This is a critical NZ-specific calibration document

**For productivity scenarios:**
- NZ's structural barriers (low intangible investment, slow diffusion, weak tech skills) justify placing NZ at **the lower end of the OECD productivity range** - consistent with the 0.2-0.5pp estimate derived from the OECD paper
- The **20-30 year GPT diffusion timeline** means our 10-year simulation window captures the early phase - gains will be uneven and concentrated
- **Implementation lags + intangible investment requirements** = the simulation should model a delay between policy investment and productivity realisation

**For sector archetypes:**
| Archetype | Treasury Insight |
|---|---|
| Agriculture | Not discussed - confirms no NZ-specific AI adoption evidence for primary industries |
| Manufacturing | Not discussed individually - but general finding that physical tasks less exposed |
| Professional Services | **Most exposed** - "white-collar occupations are the most exposed to AI" (OECD 2021). Higher-skilled NZ workforce = paradoxically higher exposure |
| Public Sector | Explicitly flagged - "considering how AI could lift the productivity of NZ's public sector" |
| Technology | Not distinguished as supply-side - treated as part of knowledge economy |
| Construction | Physical/manual tasks = less exposed (consistent with OECD framework) |
| Financial Services | Covered by FMA/RBNZ reports rather than Treasury |

**For policy scenarios:**
- Treasury's "accelerate diffusion" recommendation = direct argument for **demand-targeted policy** (Scenario 2)
- "SME significance" finding = firm-size dimension matters - SME adoption barriers are real in NZ
- "International regulatory alignment" = NZ's regulatory posture is a modellable policy variable
- "Economic security / concentration risk" = relevant for supply-side scenario (Scenario 3)

### Model variables populated
- **C19 (time to realise gains):** 20-30 year full diffusion for GPTs; simulation's 10-year window captures early phase
- **D24 (skills pipeline):** NZ ICT skills shortage > OECD average; managerial skills weakness
- **D22 (government support):** R&D Tax Incentive noted; Algorithm Charter for 21+ agencies
- **D27 (international regulatory alignment):** flagged as critical for small, open economy

### Additional reference found
- **NZ Productivity Commission (2021)** - frontier firms, R&D, diffusion barriers. Worth consulting for sector-level diffusion data.
