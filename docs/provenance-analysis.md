# The 44% Figure - Provenance Analysis

*Why this project exists*
*Compiled: 2026-04-14*

---

## Summary

A figure of "44% AI adoption" circulates widely in NZ policy discussion. Our provenance analysis reveals it is not an adoption rate at all.

The 44% comes from the **KPMG / University of Melbourne "Trust, Attitudes and Use of AI" global survey (2025)** - 48,000+ respondents across 47 countries. The NZ finding: "Only 44% of New Zealanders believe the benefits of AI outweigh the risks."

This is a **public sentiment metric**, not a business adoption rate. NZ ranked lowest of all 47 countries surveyed.

---

## The Adoption Figures in Circulation

| Source | Year | Figure | What It Actually Measures | Population | Methodology |
|---|---|---|---|---|---|
| NZIER / Spark QSBO | 2024 | **32%** | SMEs with any plans to evaluate/invest in AI | Nationally representative panel | Structured survey |
| Datacom State of AI | 2023 | **48%** | Larger businesses "using some form of AI" | 200 senior leaders | Convenience sample |
| KPMG / UoM | 2025 | **44%** | Public trust - believe benefits outweigh risks | 48,000+ individuals (global) | Global survey, NZ subset |
| Datacom State of AI | 2024 | **67%** | Same as 2023, one year later | 200 senior leaders | Convenience sample |
| KPMG / UoM | 2025 | **69%** | Individual workers using AI regularly | Same global survey | Global survey, NZ subset |
| AI Forum | Sep 2024 | **~67%** | Respondents using AI in organisations | Self-selected network | Opt-in survey |
| AI Forum | Mar 2025 | **82%** | Same methodology | Self-selected network | Opt-in survey |
| AI Forum | Aug 2025 | **87%** | Same methodology | Self-selected network | Opt-in survey |

---

## The Incoherence

The 2.7x gap between NZIER/Spark (32%) and AI Forum (87%) reflects:
- **Different populations:** nationally representative SME panel vs self-selected AI-interested network
- **Different definitions:** "plans to evaluate" vs "using in organisation"
- **Different selection bias:** representative vs convenience/opt-in

Neither produces a national adoption rate.

**MBIE's NZ AI Strategy (July 2025)** cites both Datacom's 67% and NZIER/Spark's 68%-not-adopting figure in the same document without reconciling them.

---

## What This Means for the Simulator

This reframes the paper's contribution:

**From:** "Aggregate policy based on 44% is suboptimal"
**To:** "The baseline itself is methodologically incoherent, and our simulation provides the first sector-calibrated framework for NZ AI policy design."

The simulator doesn't assume any single adoption figure. It calibrates per-sector adoption from the best available data for each sector, documents the source and confidence level, and tests policy scenarios against the range of plausible baselines.

---

## Sources

- KPMG & University of Melbourne, "Trust, Attitudes and Use of AI: A Global Study," 2025
- NZIER / Spark, Quarterly Survey of Business Opinion, 2024
- Datacom, "State of AI in New Zealand," 2023 and 2024
- AI Forum NZ, AI adoption pulse surveys, Sep 2024 / Mar 2025 / Aug 2025
- MBIE, "Artificial Intelligence in New Zealand - National Strategy," July 2025
