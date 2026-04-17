# NZ AI Policy Sandbox - Required Data Catalogue

*Working title: NZ AI Economy Simulator*  
*Date: 2026-04-17*  
*Status: Draft v1 aligned to tiered whole-economy scope*

---

## 1. Purpose of this catalogue

This document defines **all data required** to build the NZ AI Policy Sandbox as a **whole-economy, tiered policy model**.

It replaces the practical logic of the earlier 9-sector-only requirements with a structure that fits the current scope:
- **Tier 1:** 9 full explanatory sectors
- **Tier 2:** 6 simplified sectors
- **Tier 3:** 4 residual sectors

The goal is not to pretend every sector is equally well measured. The goal is to know exactly what data is required, which data already exists, which data is partial, and where assumptions or outreach will be needed.

---

## 2. Evidence classes

Every data item should be tagged as one of:

- **Observed** - directly supported by NZ data
- **Derived** - estimated from multiple sources or international benchmarks
- **Assumed** - placeholder used for scenario structure, explicitly declared

Every item should also carry a **status** tag:
- **Available**
- **Partial**
- **Gap**

---

## 3. Whole-economy sector structure

### Tier 1 - full explanatory sectors (9)
1. Agriculture  
2. Manufacturing  
3. Professional Services  
4. Public Sector  
5. Technology  
6. Healthcare  
7. Construction  
8. Financial Services  
9. Retail and Wholesale

### Tier 2 - simplified sectors (6)
10. Education and Training  
11. Transport, Postal and Warehousing  
12. Accommodation and Food Services  
13. Administrative and Support Services  
14. Information Media and Telecommunications  
15. Utilities

### Tier 3 - residual sectors (4)
16. Mining  
17. Rental, Hiring and Real Estate Services  
18. Arts and Recreation Services  
19. Other Services

---

# 4. Data required for all 19 sectors

These are the minimum fields required across the whole economy so the denominator is honest.

## A. Whole-economy baseline fields (required for all 19 sectors)

| Code | Data field | Why it is required | Likely source | Evidence class | Current status |
|---|---|---|---|---|---|
| A1 | GDP / value added | Core denominator for aggregate policy allocation | Stats NZ National Accounts | Observed | Available |
| A2 | Employment | Whole-economy labour denominator | Stats NZ HLFS | Observed | Available |
| A3 | Enterprise count | Sector structure and weighting | Stats NZ Business Demography | Observed | Available |
| A4 | Firm size distribution | Fragmentation / scaling logic | Stats NZ Business Demography | Observed | Available |
| A5 | Wage / earnings baseline | Labour impact / pressure context | Stats NZ income data | Observed | Partial |
| A6 | Labour productivity baseline | Relative sector productivity | Stats NZ / OECD | Observed / Derived | Partial |
| A7 | Trade / export exposure | Exposure to external competitiveness effects | Stats NZ trade data | Observed | Partial |

These seven fields are the base requirement for every sector, including Tier 3 residuals.

---

# 5. Tier 1 required data (full explanatory sectors)

Tier 1 sectors need the richest treatment because they carry the policy narrative and the main scenario differentiation.

## Tier 1 full field set (28 fields per sector)

### A. Economic baseline (7)
- A1 GDP / value added
- A2 Employment
- A3 Enterprise count
- A4 Firm size distribution
- A5 Wage / earnings baseline
- A6 Labour productivity baseline
- A7 Trade / export exposure

### B. Adoption state (7)
- B1 Current AI adoption estimate
- B2 Adoption by firm size
- B3 AI type mix (automation / analytics / generative / domain AI)
- B4 Adoption stage (not started / pilot / scaled)
- B5 Primary barriers to adoption
- B6 AI-related investment level
- B7 Adoption trajectory / acceleration state

### C. Productivity and labour channels (7)
- C1 Estimated productivity gain range
- C2 Task automation exposure
- C3 Labour displacement pressure
- C4 New role / job creation potential
- C5 Time-to-realise gains
- C6 Capital cost of adoption
- C7 NZ case studies / anchor evidence

### D. Policy and institutional context (7)
- D1 Existing government support / incentives
- D2 Regulatory or governance constraints
- D3 Skills pipeline relevance
- D4 Immigration / external talent pathway relevance
- D5 Industry body AI initiatives
- D6 International comparators / alignment
- D7 Government procurement / institutional adoption settings

### Tier 1 total
- **9 sectors × 28 fields = 252 fields**

---

## 6. Tier 1 - current status by sector

| Sector | Economic baseline | Adoption state | Productivity / labour | Policy / regulation | Overall |
|---|---|---|---|---|---|
| Agriculture | Strong | Weak | Partial | Partial | Partial |
| Manufacturing | Strong | Strong | Partial | Strong | Strong-Partial |
| Professional Services | Strong | Partial-Strong | Partial | Partial | Partial |
| Public Sector | Strong | Strong | Partial | Strong | Strong-Partial |
| Technology | Strong | Partial | Partial | Partial | Partial |
| Healthcare | Strong | Partial | Partial | Strong | Partial |
| Construction | Strong | Weak | Partial | Partial | Partial-Weak |
| Financial Services | Strong | Partial-Weak | Partial | Strong | Partial |
| Retail & Wholesale | Strong | Partial | Partial | Partial | Partial |

### Notes on Tier 1 gaps
- **Agriculture:** no clean NZ adoption baseline
- **Construction:** no clean NZ adoption baseline
- **Healthcare:** current adoption figures blur admin AI and clinical AI
- **Financial Services:** NZ-specific adoption evidence is thin and sample-limited
- **Retail vs Wholesale:** data often combined despite different dynamics

---

# 7. Tier 2 required data (simplified sectors)

Tier 2 sectors must be modelled well enough to absorb their economic weight and respond plausibly to policy, but do not need full Tier 1 depth in Version 1.

## Tier 2 simplified field set (12 fields per sector)

### A. Baseline (5)
- T2-A1 GDP / value added
- T2-A2 Employment
- T2-A3 Enterprise count
- T2-A4 Firm size distribution
- T2-A5 Wage / productivity baseline

### B. Adoption (3)
- T2-B1 Current maturity estimate
- T2-B2 Main adoption barriers
- T2-B3 Adoption trajectory

### C. Policy responsiveness (2)
- T2-C1 Main policy sensitivity (skills / capital / regulation / infrastructure / procurement)
- T2-C2 Time lag for gains

### D. Outcome channels (2)
- T2-D1 Productivity impact range
- T2-D2 Labour pressure indicator

### Tier 2 total
- **6 sectors × 12 fields = 72 fields**

---

## 8. Tier 2 - required sectors and likely evidence strength

| Sector | Baseline | Adoption | Policy responsiveness | Outcome channels | Overall |
|---|---|---|---|---|---|
| Education and Training | Strong | Weak-Partial | Partial | Partial | Partial |
| Transport / Warehousing | Strong | Weak-Partial | Partial | Partial | Partial |
| Accommodation / Food | Strong | Weak | Partial | Partial | Weak-Partial |
| Admin / Support | Strong | Weak-Partial | Partial | Partial | Partial |
| Info Media / Telecomms | Strong | Partial | Partial | Partial | Partial |
| Utilities | Strong | Weak-Partial | Partial | Partial | Partial |

### Tier 2 modelling rule
If NZ-specific evidence is thin, use:
1. Stats NZ baseline data  
2. NZ policy or industry context where available  
3. OECD or international benchmarks as **derived** inputs  
4. Explicit confidence tags

---

# 9. Tier 3 required data (residual sectors)

Tier 3 sectors are included to close the denominator honestly. They do not need rich behavioural depth in Version 1.

## Tier 3 minimal field set (6 fields per sector)
- T3-1 GDP / value added
- T3-2 Employment
- T3-3 Enterprise count
- T3-4 Broad maturity estimate
- T3-5 Broad productivity impact range
- T3-6 Broad labour pressure indicator

### Tier 3 total
- **4 sectors × 6 fields = 24 fields**

These sectors can later be expanded if one becomes analytically important.

---

# 10. Cross-cutting national datasets required

These are not sector-specific fields but are required to parameterise policy scenarios consistently.

| Code | Dataset | Why it matters | Likely source | Status |
|---|---|---|---|---|
| N1 | National AI policy settings | Defines aggregate and targeted policy structures | MBIE AI Strategy, Cabinet / GCDO materials | Available / Partial |
| N2 | Government AI-related funding / incentives | Scenario calibration | Budget docs, MBIE, IRD, Callaghan | Partial |
| N3 | Skills pipeline data | Supply-side scenario | TEC, universities | Gap / Partial |
| N4 | Immigration and AI talent pathways | Supply-side scenario | Immigration NZ | Gap / Partial |
| N5 | Public sector procurement / digital policy | Public adoption and diffusion channels | GCDO, DIA | Partial |
| N6 | OECD / international benchmark set | Derived parameter support | OECD, McKinsey, international sector studies | Partial-Strong |
| N7 | Labour task-exposure benchmark | Labour pressure and automation exposure | OECD PIAAC + NZ occupation mapping | Gap / Partial |
| N8 | Longitudinal productivity validation source | Future validation layer | Stats NZ LBD via partnership | Gap |

---

# 11. Required data by build stage

## Build stage 1 - enough to build Version 1
This is the minimum viable evidence set.

### Must-have before modelling
- GDP by sector (all 19)
- Employment by sector (all 19)
- Enterprise count and firm size distribution (all 19)
- Tier 1 sector adoption direction and barriers
- Policy scenario definitions
- At least indicative productivity ranges for Tier 1 sectors
- Tier 2 and Tier 3 simplified placeholders with explicit confidence tags

## Build stage 2 - enough to improve the model materially
- Better sector-specific adoption baselines
- Skills pipeline and immigration data
- Better capital cost estimates
- Better NZ case evidence by sector
- Better labour pressure calibration

## Build stage 3 - enough for stronger publication-grade calibration
- LBD or equivalent longitudinal validation
- Better firm-level productivity evidence
- Raw or more detailed survey breakdowns from AI Forum / Datacom / sector bodies

---

# 12. Priority data gaps to close first

## Highest priority gaps

### Gap 1 - sector-level adoption starting points for weakly measured sectors
Especially:
- Agriculture
- Construction
- Education
- Transport / Warehousing
- Accommodation / Food
- Admin / Support

### Gap 2 - better distinction between types of AI use
Especially where current figures blur:
- admin vs core-domain AI
- pilot vs scaled deployment
- generative AI usage vs actual operational integration

### Gap 3 - NZ-specific productivity and labour calibration
The current evidence is good enough for ranges, but weak for precision.

### Gap 4 - supply-side capability inputs
- graduates
- migration / skills inflow
- sector access to AI capability
- enabling infrastructure

---

# 13. Priority source map

## Already strong / available
- Stats NZ National Accounts
- Stats NZ HLFS
- Stats NZ Business Demography
- MBIE AI Strategy
- Datacom State of AI
- NZIER / Spark QSBO
- AI Forum reports
- OECD “Miracle or Myth?”
- GCDO public sector material
- FMA and RBNZ material
- PMCSA healthcare report
- Tech NZ / TIN200

## Need follow-up or outreach
- AI Forum raw or more detailed sector splits
- Stats NZ BOS 2024 if released
- TEC skills pipeline data pull
- Immigration NZ skills pathway data
- Longitudinal Business Database access via collaborator

---

# 14. Required field count summary

| Tier | Sectors | Fields per sector | Total fields |
|---|---:|---:|---:|
| Tier 1 | 9 | 28 | 252 |
| Tier 2 | 6 | 12 | 72 |
| Tier 3 | 4 | 6 | 24 |
| **Sector total** | **19** | - | **348** |
| Cross-cutting national datasets | - | - | **8 major datasets** |

This is the current whole-economy data requirement footprint for Version 1.

---

# 15. Practical conclusion

We do **not** need perfect data across all 19 sectors to begin.

We do need:
1. honest denominator coverage  
2. strong Tier 1 evidence  
3. plausible Tier 2 and Tier 3 placeholders  
4. explicit evidence classes  
5. a model that shows where certainty ends and assumption begins

That is enough to build a defensible first policy sandbox.
