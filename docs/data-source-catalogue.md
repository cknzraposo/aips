# NZ AI Economy Simulator — Data Source Catalogue

*Comprehensive catalogue of all identified data sources*
*Compiled: 2026-04-14 | 38 sources*

---

## How to Read This Catalogue

Each source is rated on:
- **Relevance:** How directly it serves the simulator (Critical / High / Medium / Low)
- **Access:** Public / Request / Subscription / Partnership required
- **Quality:** ⭐ to ⭐⭐⭐⭐⭐
- **Status:** ✅ Obtained | 🔲 Not yet accessed | 📧 Outreach needed | 💰 Paid

---

## A. NZ Government & Official Statistics

### 1. Stats NZ — National Accounts (GDP by Industry)
- **What it provides:** GDP contribution by ANZSIC Level 1 sector (all 19), quarterly and annual
- **Covers:** Economic baseline (variable A1) for all sectors
- **URL:** https://infoshare.stats.govt.nz/ → National Accounts → GDP by Industry
- **Relevance:** Critical | **Access:** Public | **Quality:** ⭐⭐⭐⭐⭐ | **Status:** ✅ Downloaded
- **Notes:** Authoritative. Updated quarterly. The denominator for the entire model.
- **File:** `data/raw/gdp-by-industry-dec2025.xlsx`, `gdp-supplementary-dec2025.xlsx`, `gdp-dec2025-viz.csv`

### 2. Stats NZ — Household Labour Force Survey (HLFS)
- **What it provides:** Employment by industry (all 19 ANZSIC sectors), unemployment, underemployment
- **Covers:** Economic baseline (variable A2) for all sectors
- **URL:** https://infoshare.stats.govt.nz/ → Labour Market → HLFS
- **Relevance:** Critical | **Access:** Public | **Quality:** ⭐⭐⭐⭐⭐ | **Status:** ✅ Downloaded
- **Notes:** Quarterly. Nationally representative sample survey.
- **File:** `data/raw/hlfs-dec2025.xlsx`

### 3. Stats NZ — Business Demography Statistics
- **What it provides:** Number of enterprises by industry and employee size group (0, 1-5, 6-9, 10-19, 20-49, 50-99, 100+)
- **Covers:** Economic baseline (variables A3, A4) for all sectors
- **URL:** https://www.stats.govt.nz/information-releases/new-zealand-business-demography-statistics/
- **Relevance:** Critical | **Access:** Public | **Quality:** ⭐⭐⭐⭐⭐ | **Status:** ✅ Downloaded
- **Notes:** Annual. Essential for firm-size distribution parameters. 617,330 total enterprises.
- **File:** `data/raw/business-demography-feb2025.xlsx`, `business-demography-geo-units.zip`

### 4. Stats NZ — Business Operations Survey (BOS) 2024
- **What it provides:** Digital technology adoption by industry, ICT use, innovation activity
- **Covers:** AI adoption (variables B8-B12) — potentially sector-level
- **URL:** https://www.stats.govt.nz/information-releases/business-operations-survey-2024/
- **Relevance:** Critical | **Access:** Public (when released) | **Quality:** ⭐⭐⭐⭐ | **Status:** 🔲 Not yet published (404)
- **Notes:** BOS 2024 not yet released. BOS 2023 downloaded as fallback.
- **File:** `data/raw/bos-2023.xlsx`, `bos-2023-business-operations.csv`, `bos-2023-innovation.csv`

### 5. Stats NZ — Income Data / Earnings
- **What it provides:** Median/mean earnings by industry, wage distribution
- **Covers:** Economic baseline (variable A5) for all sectors
- **URL:** https://www.stats.govt.nz/ (various income releases)
- **Relevance:** High | **Access:** Public | **Quality:** ⭐⭐⭐⭐⭐ | **Status:** 🔲

### 6. Stats NZ — Trade Data (Goods & Services)
- **What it provides:** Export/import by industry, trade composition
- **Covers:** Economic baseline (variable A6) — especially Agriculture, Technology
- **URL:** https://infoshare.stats.govt.nz/ → Trade
- **Relevance:** High | **Access:** Public | **Quality:** ⭐⭐⭐⭐⭐ | **Status:** 🔲

### 7. Stats NZ — Longitudinal Business Database (LBD)
- **What it provides:** Firm-level longitudinal microdata — productivity, employment, investment over time
- **Covers:** Productivity validation, calibration against actual firm outcomes
- **URL:** https://www.stats.govt.nz/integrated-data/ (via IDI/LBD)
- **Relevance:** High | **Access:** Partnership required (university research agreement) | **Quality:** ⭐⭐⭐⭐⭐ | **Status:** 📧
- **Notes:** Gold standard for calibration. Requires approved research partnership (VUW or Motu).

### 8. MBIE — NZ AI Strategy (July 2025)
- **What it provides:** National AI policy framework, cited adoption figures, investment priorities, sector focus areas
- **Covers:** Policy context (variables D22-D28), adoption landscape, government investment figures
- **URL:** https://www.mbie.govt.nz/ (AI strategy section)
- **Relevance:** Critical | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅
- **Notes:** Cites Datacom 67% and NZIER/Spark 68%-not-adopting without reconciling. Source of $76-108B projected annual contribution by 2038. Flags agriculture as flagship sector.

### 9. MBIE — Science & Innovation indicators
- **What it provides:** R&D expenditure by sector, innovation metrics, government funding allocation
- **Covers:** Policy context (variable D22), investment data
- **URL:** https://www.mbie.govt.nz/science-and-technology/
- **Relevance:** Medium | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** 🔲

### 10. Government Chief Digital Officer (GCDO) — AI Use Case Census (2025)
- **What it provides:** 272 AI use cases across 70 government agencies, 55 fully operational (up from 15 in prior year, total up from 108)
- **Covers:** Public Sector adoption (variables B8-B11, B14) — the acceleration story
- **URL:** Via digital.govt.nz or GCDO publications
- **Relevance:** Critical (for Public Sector archetype) | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅ (cited in exec brief)
- **Notes:** Most granular NZ public sector AI data. Shows fastest acceleration of any sector.

### 11. Public Service AI Framework (January 2025)
- **What it provides:** Government policy framework for AI use in public services
- **Covers:** Policy context (variables D22, D23) for Public Sector
- **URL:** Via digital.govt.nz
- **Relevance:** High (for Public Sector archetype) | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅ (referenced)

### 12. Callaghan Innovation — Industry 4.0 Survey (2025)
- **What it provides:** 80% of NZ manufacturers aware of/implementing I4.0 technologies
- **Covers:** Manufacturing adoption (variables B8, B10), barriers, investment
- **URL:** https://www.callaghaninnovation.govt.nz/
- **Relevance:** Critical (for Manufacturing archetype) | **Access:** Public / Request | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅ (cited in exec brief)
- **Notes:** Also provides R&D grant data, startup funding, innovation ecosystem reports.

### 13. NZ Productivity Commission
- **What it provides:** Economic modelling, productivity measurement, "Technology & Future of Work" research
- **Covers:** Productivity estimates (variable C15), labour impact (C16-C18)
- **URL:** https://www.productivity.govt.nz/
- **Relevance:** High | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** 🔲

### 14. Treasury — NZ Investment Boost
- **What it provides:** 20% tax deduction for qualifying investments including AI/tech — directly lowers capital barriers for manufacturing
- **Covers:** Policy context (variable D22) for Manufacturing
- **Relevance:** High (for Manufacturing archetype) | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅ (cited)

---

## B. NZ Financial Regulators

### 15. FMA (Financial Markets Authority) — AI Research (September 2024)
- **What it provides:** Survey of 30 regulated entities on AI use in financial services
- **Covers:** Financial Services adoption (variables B8-B12), regulatory constraints (D23)
- **URL:** https://www.fma.govt.nz/
- **Relevance:** Critical (for Financial Services archetype) | **Access:** Public | **Quality:** ⭐⭐⭐ | **Status:** ✅ Downloaded + analysed
- **Notes:** Only 13 respondents — acknowledged as too small for robust estimates. Still the only NZ-specific financial sector AI data. 9/13 currently using AI. Caution-first posture sector-wide. Customer disclosure is a blind spot.
- **File:** `data/raw/fma-ai-financial-services-2024.pdf` (27 pages), analysis at `research/fma-analysis.md`

### 16. RBNZ — "Rise of the Machines" (May 2025)
- **What it provides:** AI-driven financial stability risk modelling, AI exposure analysis by occupation
- **Covers:** Financial Services regulatory context (D23), displacement risk (C17), occupational AI exposure
- **URL:** https://www.rbnz.govt.nz/
- **Relevance:** Critical (for Financial Services archetype) | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅ Downloaded + extracted + analysed
- **Notes:** Full text extracted via HYPNOS pdfplumber. 8 pages. Full critical review completed from CK's email. Identifies 2025-2028 regulatory vacuum, confirms banking outpacing insurance, flags market concentration risk. 12 analytical gaps identified vs BoE/FSB/BIS. Footnotes yielded two additional downloadable sources (NZ Treasury AN 24/06 + AI Forum Sep 2024 report).
- **File:** `data/raw/rbnz-rise-of-machines-2025.pdf`, extracted: `data/raw/rbnz-rise-of-machines-2025-extracted.md`, analysis: `research/rbnz-analysis.md`

---

## C. NZ Industry Bodies & Surveys

### 17. Datacom — State of AI in New Zealand (2023 & 2024)
- **What it provides:** Business AI adoption rates, by sector headline, sentiment
- **Covers:** AI adoption (variables B8-B12) — Manufacturing 58%, Healthcare 62%, Wholesale 64%
- **URL:** https://datacom.com/ai-insights
- **Relevance:** Critical | **Access:** Public | **Quality:** ⭐⭐⭐ | **Status:** ✅
- **Notes:** 200 senior leaders (convenience sample). Not nationally representative. But provides the only NZ sector-specific adoption figures. 2023: 48% overall. 2024: 67% overall. Year-on-year jump raises methodology questions.

### 18. AI Forum NZ — AI Productivity Reports & Pulse Surveys
- **What it provides:** Adoption rates, barriers, impact estimates. Pulse surveys: Sep 2024 (~67%), Mar 2025 (82%), Aug 2025 (87%)
- **Covers:** AI adoption (variables B8-B12, B14), barriers (B12)
- **URL:** https://aiforum.org.nz/reports/
- **Relevance:** Critical | **Access:** Public (reports) / Request (raw data) | **Quality:** ⭐⭐⭐ | **Status:** ✅ (reports) / 📧 (sector breakdown)
- **Notes:** Self-selected network — not nationally representative. Rising figures (67%→82%→87%) likely reflect expanding AI-engaged respondent pool, not actual adoption growth. Sector breakdown requested but not yet received.

### 19. NZIER / Spark — QSBO (Quarterly Survey of Business Opinion, 2024)
- **What it provides:** 32% of SMEs with any plans to evaluate/invest in AI
- **Covers:** AI adoption (variable B8) — nationally representative SME panel
- **URL:** https://www.nzier.org.nz/
- **Relevance:** Critical | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅
- **Notes:** Most methodologically robust NZ adoption figure (nationally representative panel). The 32% is the conservative anchor.

### 20. KPMG / University of Melbourne — "Trust, Attitudes and Use of AI" (2025)
- **What it provides:** 44% of NZers believe benefits outweigh risks; 69% of workers using AI regularly. 48,000+ respondents across 47 countries.
- **Covers:** Provenance analysis — the "44%" is NOT adoption. NZ ranked lowest of 47 countries on trust.
- **URL:** KPMG reports / University of Melbourne
- **Relevance:** Critical (for provenance analysis) | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅
- **Notes:** Public sentiment metric, not business adoption. Essential for the paper's reframing argument.

### 21. Tech NZ (NZTech) — Annual Tech Sector Report
- **What it provides:** Tech sector GDP ($23.8B, 8%), employment (119,000), exports ($11.4B)
- **Covers:** Technology sector baseline (variables A1-A7)
- **URL:** https://technewzealand.org.nz/
- **Relevance:** Critical (for Technology archetype) | **Access:** Public | **Quality:** ⭐⭐⭐⭐⭐ | **Status:** ✅

### 22. TIN200 Report
- **What it provides:** Top 200 NZ tech companies — collective revenue hit $20B (+9.9%)
- **Covers:** Technology sector depth (investment, growth, export composition)
- **URL:** https://tin100.com/
- **Relevance:** High (for Technology archetype) | **Access:** Public / Paid | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅ (headline cited)

### 23. Thomson Reuters — AI in Professional Services (2025)
- **What it provides:** GenAI active use doubled from 12% to 22% in 12 months among professional services firms
- **Covers:** Professional Services adoption (variables B8, B14) — the acceleration curve
- **Relevance:** Critical (for Professional Services archetype) | **Access:** Public/report | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅ (cited)

### 24. BDO — Construction Survey (2025)
- **What it provides:** AI entered top-5 concerns for NZ construction firms for the first time
- **Covers:** Construction awareness/adoption trajectory (variable B14), barriers (B12)
- **Relevance:** High (for Construction archetype) | **Access:** Public | **Quality:** ⭐⭐⭐ | **Status:** ✅ (cited)

### 25. PM's Chief Science Advisor — AI in Healthcare Report (December 2023)
- **What it provides:** 45-page dedicated report on AI in NZ healthcare — clinical vs administrative, equity, governance
- **Covers:** Healthcare adoption (B8-B12), regulatory context (D23), equity considerations
- **URL:** https://www.pmcsa.ac.nz/
- **Relevance:** Critical (for Healthcare archetype) | **Access:** Public | **Quality:** ⭐⭐⭐⭐⭐ | **Status:** ✅ (referenced)
- **Notes:** May distinguish back-office vs clinical AI — a confirmed data gap.

### 26. Te Whatu Ora — NAIAEAG (National AI & Algorithm Expert Advisory Group)
- **What it provides:** AI governance framework for NZ health system — most formally governed sector
- **Covers:** Healthcare regulatory context (D23, D28)
- **Relevance:** High (for Healthcare archetype) | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅ (referenced)

### 27. Health Digital Investment Plan 2025
- **What it provides:** First national 10-year digital health plan; 85% of systems don't support data sharing
- **Covers:** Healthcare infrastructure barriers (B12), policy context (D22)
- **Relevance:** High | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅ (cited)

### 28. Halter (NZ agtech company)
- **What it provides:** $1.55B valuation, 1,000+ farmers using AI for livestock management
- **Covers:** Agriculture case study (variable C21) — leading NZ commercial AI in agriculture
- **URL:** https://www.halterhq.com/
- **Relevance:** High (for Agriculture archetype) | **Access:** Public (news/press) | **Quality:** ⭐⭐⭐ | **Status:** ✅ (cited)

### 29. NZ SaaS Sector Data
- **What it provides:** $3.6B revenue, 743 firms, 15% CAGR
- **Covers:** Technology sector depth — SaaS as AI delivery vehicle
- **Relevance:** Medium | **Access:** Public (TIN/NZTech) | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅ (cited)

---

## D. International & OECD Sources

### 30. OECD — "Miracle or Myth? Assessing the Macroeconomic Productivity Gains from AI" (November 2024)
- **What it provides:** Aggregate annual TFP growth from AI of 0.25-0.6 percentage points over 10 years
- **Covers:** Productivity estimates (variable C15) — the calibration anchor for productivity scenarios
- **URL:** https://www.oecd.org/ (working paper)
- **Relevance:** Critical | **Access:** Public | **Quality:** ⭐⭐⭐⭐⭐ | **Status:** ✅ Analysed (PDF blocked by OECD iLibrary)
- **Notes:** Full analysis completed from CK's email. NZ-specific estimate: 0.2-0.5pp annual labour productivity gain (lower half of OECD range). Baumol drag = mathematical basis for why sector-targeted beats aggregate. Robotics integration is the breakthrough pathway for NZ primary industries. Additional ref: NZ Treasury AN 24/06 (July 2024).
- **File:** PDF not downloadable (Cloudflare), analysis at `research/oecd-analysis.md`

### 31. OECD AI Policy Observatory — NZ Country Profile
- **What it provides:** NZ AI adoption data, policy tracker, international comparisons
- **Covers:** Benchmarking (all categories), policy context
- **URL:** https://oecd.ai/en/dashboards/countries/NewZealand
- **Relevance:** High | **Access:** Public | **Quality:** ⭐⭐⭐⭐⭐ | **Status:** 🔲

### 32. OECD — Digital Economy Outlook
- **What it provides:** Digital economy indicators by country, ICT sector metrics
- **Covers:** Benchmarking, technology sector comparatives
- **URL:** https://www.oecd.org/digital/
- **Relevance:** Medium | **Access:** Public | **Quality:** ⭐⭐⭐⭐⭐ | **Status:** 🔲

### 33. OECD — PIAAC (Programme for International Assessment of Adult Competencies)
- **What it provides:** Task-level automation exposure methodology applicable to NZ occupations
- **Covers:** Displacement risk (variables C16-C17) — which tasks are automatable by occupation
- **Relevance:** High | **Access:** Public | **Quality:** ⭐⭐⭐⭐⭐ | **Status:** 🔲
- **Notes:** Apply OECD methodology to NZ occupational data from Stats NZ.

### 34. McKinsey Global Institute — AI Impact Studies
- **What it provides:** Global productivity projections (10-15% GDP uplift by 2030), sector-level estimates
- **Covers:** Productivity estimates (variable C15) — optimistic calibration bound
- **URL:** https://www.mckinsey.com/mgi
- **Relevance:** Medium | **Access:** Public | **Quality:** ⭐⭐⭐ | **Status:** ✅
- **Notes:** US/global calibration. Use as upper bound, not NZ-specific estimate.

### 35. OECD — SME & Entrepreneurship Outlook
- **What it provides:** SME digital adoption cross-country data
- **Covers:** Firm-size adoption differentials
- **URL:** https://www.oecd.org/industry/smes/
- **Relevance:** Medium | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** 🔲

---

## E. Government AI Investment Data

### 36. NZ Government AI Investment (aggregated from multiple sources)
- **NZ Institute for Advanced Technology:** $70M
- **Responsible AI Adopt programme:** $17M
- **R&D Tax Incentive (cumulative):** $611M (not AI-specific but includes AI)
- **Investment Boost:** 20% tax deduction for qualifying investments
- **Covers:** Policy context (variable D22) — total government AI-related investment
- **Sources:** Budget documents, MBIE, IRD
- **Relevance:** High | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** ✅ (cited in exec brief)

---

## F. Labour Market & Skills

### 37. Immigration NZ — Skills Visa Data
- **What it provides:** AI/ML roles on shortage lists, visa approvals by occupation
- **Covers:** Skills pipeline (variable D24-D25)
- **URL:** https://www.immigration.govt.nz/
- **Relevance:** High | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** 🔲

### 38. Tertiary Education Commission (TEC)
- **What it provides:** Graduate numbers by programme, university funding
- **Covers:** Skills pipeline (variable D24)
- **URL:** https://www.tec.govt.nz/
- **Relevance:** High | **Access:** Public | **Quality:** ⭐⭐⭐⭐ | **Status:** 🔲

---

## G. Reference Implementations (Code/Methodology)

### R1. Ilan Strauss — ai-web-economy-simulator
- **What it provides:** ODE / mechanism design reference implementation, LaTeX math spec
- **Covers:** Architecture decision — Strauss approach
- **URL:** https://github.com/IlanStrauss/ai-web-economy-simulator
- **Papers:** https://ai-disclosures.org/research
- **Notes:** Not a data source — a methodology reference.

### R2. kthom-pi — ai_adoption_simulator
- **What it provides:** Mesa-based ABM, 350 agents, in-browser interactive model
- **Covers:** Architecture decision — ABM approach
- **URL:** https://github.com/kthom-pi/ai_adoption_simulator
- **Notes:** Not a data source — a methodology reference.

---

## Summary by Status

| Status | Count | Sources |
|---|---|---|
| ✅ Obtained/cited/downloaded | 28 | Stats NZ (×7 downloaded), MBIE, Datacom, NZIER/Spark, KPMG/UoM, AI Forum, GCDO, Callaghan, RBNZ, FMA, Tech NZ, TIN200, Thomson Reuters, BDO, PM CSA, Te Whatu Ora, HDIP, Halter, SaaS data, OECD M&M, McKinsey, Govt investment, Public Service AI Framework, AES |
| 🔲 Not yet accessed | 6 | OECD (×3 — blocked), BOS 2024 (not published), Immigration NZ, TEC |
| 📧 Outreach needed | 2 | AI Forum NZ (sector breakdown), Stats NZ LBD (partnership) |
| 💰 Paid/subscription | 0 | (TIN200 full report is paid but headline data cited) |

---

## Priority Access Sequence

### Immediate (this week)
1. **Stats NZ Infoshare** — GDP, employment, business demography for all 19 sectors (sources 1-3, 5-6)
2. **Stats NZ BOS 2024** — check release status, download if available (source 4)
3. **OECD AI Observatory NZ profile** — download country data (source 31)

### Short-term (next 2 weeks)
4. **AI Forum NZ sector breakdown** — follow up on data request (source 18)
5. **OECD PIAAC** — apply task automation methodology to NZ occupations (source 33)
6. **Immigration NZ** — AI/ML skills visa data (source 37)
7. **TEC** — graduate numbers by programme (source 38)

### Medium-term (Phase 2-3)
8. **Stats NZ LBD** — requires research partnership agreement (source 7)
9. **Full OECD reports** — Digital Economy Outlook, SME Outlook (sources 32, 35)

---

## Contact Points

| Organisation | Contact | Purpose |
|---|---|---|
| AI Forum NZ | contact@aiforum.org.nz | Sector-level adoption data from 2024 survey |
| Stats NZ | info@stats.govt.nz | BOS 2024 status, LBD partnership |
| Tech NZ | info@technewzealand.org.nz | Detailed tech sector data |
| Callaghan Innovation | info@callaghaninnovation.govt.nz | I4.0 survey details, R&D data |
| FMA | Via website | AI research underlying data |
| TEC | Via website | Graduate data by programme |
| Immigration NZ | Via website | Skills visa AI/ML data |

---

*38 sources catalogued. 22 already obtained/cited. 12 public but not yet downloaded. 2 require outreach.*
*This catalogue replaces the earlier `research/data-sources.md` (26 sources, less structured).*
