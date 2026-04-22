# Model Equations

This directory contains the mathematical specification for the NZ AI Policy Sandbox.

## Files

| File | Description |
|---|---|
| `model-equations-v0.3.tex` | LaTeX source -- v0.3, all 19 sectors, calibrated parameters |
| `model-equations-v0.3.pdf` | Compiled PDF -- v0.3, all 19 sectors, calibrated parameters |
| `model-equations-v0.2.tex` | LaTeX source -- v0.2, all 19 sectors (historical) |
| `model-equations-v0.2.pdf` | Compiled PDF -- v0.2, all 19 sectors (historical) |
| `model-equations-v0.1.tex` | LaTeX source -- v0.1, Tier 1 only (historical) |
| `model-equations-v0.1.pdf` | Compiled PDF -- v0.1, Tier 1 only (historical) |
| `Makefile` | Build script |

## What is in v0.3

v0.3 extends v0.2 from structural specification to calibrated specification. Every parameter introduced in v0.1 and v0.2 now carries a numerical value, an evidence class (observed, derived, or assumed), a primary source, and a confidence level.

### New in v0.3 (over v0.2)

- Section: v0.3 Calibration Approach and Evidence Classes
- Section: GDP Share Weights -- all 19 sectors, $\omega_s$ summing exactly to 1, sourced from Stats NZ GDP by Industry (Dec 2025)
- Section: Economy-Wide Enabling Stock -- $E(0)$, $\rho_E$, $\delta_E$, $G_E^{\text{base}}$ with calibration notes
- Section: Tier 1 Calibration -- per-sector parameter tables for all 9 Tier 1 sectors, including $K_s(0)$, $A_s(0)$, $P_s(0)$, $L_s(0)$, $\alpha_s$, $\kappa_s$, $\lambda_s$, $\phi_s$, $\eta_s$, $\mu_s$, $\bar{p}_s$
- Section: Tier 2 Calibration -- per-sector tables for all 6 Tier 2 sectors, with calibration notes on $\beta_s$ (absorptive multiplier) choices
- Section: Tier 3 Calibration -- per-sector tables for all 4 Tier 3 sectors, with calibration notes on $\psi_s$ (productivity coefficient) choices
- Section: Confidence-Adjusted Aggregate -- formal definition of $\bar{P}^c(t)$ weighting Tier 1/2/3 by modelling confidence (1.00/0.70/0.40)
- Updated Known Limits section for v0.3

### What v0.3 is not

v0.3 is a calibrated specification. It does not build or simulate the model. Equation forms are unchanged from v0.2. The output is a mathematical specification suitable for implementation.

## What is in v0.2

v0.2 extends v0.1 from nine Tier 1 sectors (approximately 61% of GDP) to all 19 ANZSIC Level 1 sectors (100% of GDP). This produces an honest whole-economy productivity aggregate.

### Tier 1 sectors (9) - unchanged from v0.1
Agriculture, Manufacturing, Professional Services, Public Sector, Technology, Healthcare, Construction, Financial Services, Retail and Wholesale.

State variables per sector: absorptive capability ($K_s$), AI adoption maturity ($A_s$), realised productivity effect ($P_s$), labour adjustment pressure ($L_s$). One economy-wide enabling stock $E(t)$.

### Tier 2 sectors (6) - new in v0.2
Education and Training, Transport and Warehousing, Accommodation and Food Services, Administrative and Support Services, Information Media and Telecommunications, Utilities.

Reduced state $(A_s, P_s)$ per sector. Absorptive capability replaced by a fixed multiplier $\beta_s$. Labour adjustment reported ex-post as $L_s^{T2} = \phi_s A_s$ only.

### Tier 3 sectors (4) - new in v0.2
Mining, Rental/Hiring/Real Estate, Arts and Recreation, Other Services.

Minimal state $A_s$ only. Productivity reported ex-post as $P_s^{T3} = \psi_s A_s$. No labour reporting. Included for denominator honesty.

## What v0.2 adds over v0.1

- Section: Tier Structure and State Reduction (rationale for tiering)
- Section: Tier 2 Dynamics (six sectors, reduced state)
- Section: Tier 3 Dynamics (four sectors, minimal state)
- Updated Section: Aggregation (honest whole-economy aggregate, $\sum_s \omega_s = 1$)
- Updated Section: Policy Scenarios A/B/C (defined across all 19 sectors)
- New Proposition: Boundedness holds across all tiers
- Updated Section: Known Limits of v0.2

## Deferred to v0.4

- Simulation and code implementation
- Historical time-series validation of calibrated parameters
- Tech stack decision

## Build

Requires a standard LaTeX installation with `pdflatex` (TeX Live 2020 or later).

```bash
cd src/equations
make
```

This builds `model-equations-v0.3.pdf` by default (three `pdflatex` passes to resolve cross-references).

To build earlier versions:

```bash
make v02
make v01
```

To remove auxiliary build files:

```bash
make clean
```

## Scope summary

| Version | Sectors | GDP coverage | Status |
|---|---|---|---|
| v0.1 | 9 (Tier 1) | approximately 61% | Locked |
| v0.2 | 19 (all tiers) | 100% | Locked |
| v0.3 | 19 (all tiers) | 100% | Current -- calibrated parameters |
| v0.4 | 19 (all tiers) | 100% | Deferred -- simulation build |

