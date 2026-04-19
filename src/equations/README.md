# Model Equations

This directory contains the mathematical specification for the NZ AI Policy Sandbox.

## Files

| File | Description |
|---|---|
| `model-equations-v0.2.tex` | LaTeX source -- v0.2, all 19 sectors |
| `model-equations-v0.2.pdf` | Compiled PDF -- v0.2, all 19 sectors |
| `model-equations-v0.1.tex` | LaTeX source -- v0.1, Tier 1 only (historical) |
| `model-equations-v0.1.pdf` | Compiled PDF -- v0.1, Tier 1 only (historical) |
| `Makefile` | Build script |

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

## What v0.2 is not

v0.2 is a structural extension. It specifies equation forms for all 19 sectors. It does not calibrate parameter values -- that is v0.3 work.

## Deferred to v0.3

- Numerical parameter values for all sectors and tiers ($\rho$ rates, initial conditions, sector-specific bounds, GDP share weights $\omega_s$)
- Sector-specific $\beta_s$, $\gamma_s$, $\psi_s$, $\phi_s$ values for Tier 2 and Tier 3
- Aggregate uncertainty weighting (confidence-adjusted $\bar{P}(t)$)

## Build

Requires a standard LaTeX installation with `pdflatex` (TeX Live 2020 or later).

```bash
cd src/equations
make
```

This builds `model-equations-v0.2.pdf` by default (three `pdflatex` passes to resolve cross-references).

To build the v0.1 document:

```bash
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
| v0.2 | 19 (all tiers) | 100% | Current |
| v0.3 | 19 (all tiers) | 100% | Deferred - parameter calibration |

