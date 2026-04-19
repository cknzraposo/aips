# Model Equations v0.1

This directory contains the mathematical specification for the NZ AI Policy Sandbox, Tier 1 sectors.

## Files

| File | Description |
|---|---|
| `model-equations-v0.1.tex` | LaTeX source |
| `model-equations-v0.1.pdf` | Compiled PDF |
| `Makefile` | Build script |

## What is inside

The document specifies the bounded gain-loss ODE system for nine Tier 1 sectors:

- Agriculture, Manufacturing, Professional Services, Public Sector, Technology, Healthcare, Construction, Financial Services, Retail and Wholesale

State variables per sector: absorptive capability ($K_s$), AI adoption maturity ($A_s$), realised productivity effect ($P_s$), labour adjustment pressure ($L_s$). One economy-wide enabling stock $E(t)$.

Covers: model structure, causal DAG, core dynamics, policy scenarios A/B/C, aggregation, boundedness proof, sign correctness table, calibration pointers, and known limits.

## Build

Requires a standard LaTeX installation with `pdflatex` (TeX Live 2020 or later).

```bash
cd src/equations
make
```

This runs `pdflatex` twice to resolve cross-references and produces `model-equations-v0.1.pdf`.

To remove auxiliary build files:

```bash
make clean
```

## Scope

v0.1 covers Tier 1 only (~61% of GDP). Tier 2 and Tier 3 are deferred to v0.2 and v0.3. Parameter calibration is also deferred to v0.2.
