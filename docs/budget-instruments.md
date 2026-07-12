# NZ Government Budget Instruments - mapping to AIPS

*Compiled: 2026-05-11. Updated post-Budget 2026: 2026-05-29.*
*Status: Reconciled against Budget 2026 (delivered Thu 28 May 2026, 14:00 NZST). Promoted from research workspace into this repo as `docs/budget-instruments.md`.*
*Upstream: `data-source-catalogue.md` #36, `SCENARIOS.md`, `STATE-VARIABLES.md`*
*Companion fact-pack (external research workspace; not mirrored in this repo): `~/.openclaw/workspace-aips/research/budget-2026-confirmed.md`, `~/.openclaw/workspace-aips/research/budget-2026-watch.md`, `~/.openclaw/workspace-aips/research/external-signals/2026-05-24-public-sector-cuts-and-ai-substitution.md`*

---

## 1. Why this note exists

AIPS compares aggregate AI policy against sector-targeted alternatives under a same-budget envelope rule (`SCENARIOS.md` Rule 2). That rule needs a real envelope. This note catalogues what the NZ government is actually spending or foregoing on AI-relevant policy and maps each instrument to the model's levers.

It is descriptive, not prescriptive. Nothing here is a recommendation. It is the fiscal context the sandbox needs to compare scenarios honestly.

---

## 2. Current fiscal frame (post-Budget 2026)

**Budget 2026, delivered Thursday 28 May 2026, 14:00 NZST**
- Finance Minister: Nicola Willis (National). Sixth National Government, third budget.
- Operating allowance: **NZ$2.1B** (down NZ$0.3B from the $2.4B ceiling signalled in BPS Dec 2025).
- Capital allowance: **NZ$5.7B net new / $7B gross** (up from $3.5B in BPS Dec 2025).
- Return to surplus brought forward to 2028/29 (OBEGALx $2.6B), one year ahead of BPS half-year forecast.
- Net core Crown debt peaks 46.1% of GDP in 2027/28.
- Public sector job reduction: **8,700 FTE over three years** for **$2.4B in savings** (~14% of the 63,000-strong public service).
- New revenue: bank/insurer levy (~$209M over four years from mid-2027, funds Reserve Bank prudential regulation).

**No standalone AI appropriation in headline coverage.** No mention of NZ Institute for Advanced Technology, Responsible AI Adopt, GCDO uplift, or AI-specific tax instruments in any post-Budget summary (RNZ at-a-glance, RNZ winners-and-losers, RNZ live blog, The Conversation, interest.co.nz, National Party release, Wikipedia Major Announcements). Vote-level Estimates PDFs were Cloudflare-gated and require a separate pull.

**Budget 2025 carry-over** - Investment Boost (20% deduction for new asset purchases) is not flagged as modified, scoped, or sunsetted. Treated as continuing at Budget 2025 settings.

---

## 3. Identified AI-relevant budget instruments (post-Budget 2026)

| Instrument | Amount (pre-Budget 2026) | Confirmed post-Budget 2026 | Vehicle | Source |
|---|---|---|---|---|
| NZ Institute for Advanced Technology | NZ$70M | **Not surfaced** in post-Budget coverage; assume baseline-continuing pending Vote MBIE Estimates pull | Standing institute funding | MBIE, Budget docs |
| Responsible AI Adopt programme | NZ$17M | **Not surfaced**; assume baseline-continuing pending Vote MBIE Estimates pull | MBIE programme | MBIE |
| R&D Tax Incentive (cumulative) | NZ$611M | **No scope/rate/cap change flagged**; treat as continuing pending tax expenditure statement | IRD tax credit | IRD, Treasury |
| Investment Boost (20% deduction) | Tax expenditure, not separately costed for AI | **Implicitly retained**, no headline modification | Tax policy | Budget 2025, Treasury |
| Vote Health "new IT system" | n/a | Mentioned without dollar figure inside ~$34.2B Vote Health (up ~10%) | Vote Health appropriation | RNZ 596615 |
| Defence autonomy / sensors | n/a | **~$228M explicit** inside $1.6B Defence capital: $70M for 3 UUVs; $158M military drones, ship maintenance, fleet replacement; +$25M Defence Force tech line | Vote Defence capital | Wikipedia 2026 NZ budget; RNZ 596643; National Party release |
| Ambulance "upgrading technology" | n/a | $35M over four years total (not separately costed) | Vote Health (ambulance) | Wikipedia 2026 NZ budget |
| Schools / rail / hospital builds (embedded digital) | n/a | Inside $7B gross capital; no separate digital line surfaced | Vote-specific capital | interest.co.nz 138737; The Conversation 282966 |
| Public sector AI as labour substitute | n/a | Framed inside $2.4B/8,700 FTE savings line as "increasing the use of artificial intelligence and other digital tools"; **savings-side, not funding-side** | Public service overhaul | Wikipedia 2026 NZ budget; RNZ 595655 (19 May pre-Budget) |
| Bank / insurer levy (new) | n/a | $209M over four years from mid-2027 to fund Reserve Bank prudential regulation; **structural analogue** for any future AI compliance levy | Tax/levy | The Conversation 282966; interest.co.nz 138737 |
| NZ AI Strategy (July 2025) | Framework only | Unchanged in Budget 2026 coverage | MBIE policy | MBIE |
| GCDO AI Use Case Census | Operational, not a funding line | Unchanged | digital.govt.nz | GCDO |

---

## 4. Mapping to AIPS levers (post-Budget 2026)

| Instrument | Lever | Sectors most affected | Calibration note |
|---|---|---|---|
| Investment Boost (Budget 2025, retained) | Adoption friction ↓ (capital cost channel) | Manufacturing, Agriculture, Construction, Wholesale | Canonical *aggregate* policy. Anchors aggregate baseline scenario. Unchanged. |
| NZ Institute for Advanced Technology (NZ$70M, pending confirmation) | Enabling capacity $E$ ↑ | Technology (direct), Professional Services / Public Sector spillover | Treat as baseline-continuing. Flag for verification. |
| Responsible AI Adopt (NZ$17M, pending confirmation) | Capability $K_s$ ↑, adoption friction ↓ | Cross-sector, SME-skewed | Baseline-continuing. Useful targeted-diffusion archetype calibration point. |
| R&D Tax Incentive (NZ$611M cumulative) | Capability $K_s$ ↑ via private R&D | All sectors, skews Tech, Manufacturing, Professional Services | Background. Sub-allocate AI share once tax expenditure statement available. |
| **Budget 2026 operating envelope (NZ$2.1B)** | Constrains $E$ in Public Sector | Public Sector, Health, Education | Tighter than 2025. Named priorities (health, education, defence, law and order) consume most of it. Reinforces conservative Public Sector $E$ growth. |
| **Budget 2026 capital envelope (NZ$5.7B net / $7B gross)** | Capital-embedded digital uplift channel | Health, Education, Transport, Defence | **New channel** to isolate. Defence at $1.6B and KiwiRail at $1B together exceed the BPS-to-Budget $2.2B capital delta. Health infrastructure $730M. Embedded digital not separately costed; treat as $E$ sub-component. |
| **Public sector AI substitution lever (Budget 2026)** | Labour adjustment $L_s$ ↓ via AI substitution | Public Administration | Real-world test of the aggregate-policy archetype on the Public Sector. NZ$2.4B savings envelope, 8,700 FTE reduction over 3.5 years, AI named as the assumed substitute. See `~/.openclaw/workspace-aips/research/external-signals/2026-05-24-public-sector-cuts-and-ai-substitution.md`. |
| **Defence autonomy capital (~$228M)** | Capability $K_s$ ↑ in defence-industrial supply chain | Defence sub-sector of Manufacturing | Only Budget 2026 line where AI-adjacent capital is named in dollars. Concrete Defence sub-sector calibration point. |
| **Bank/insurer levy ($209M, new)** | Not an AI instrument | Financial Services | Structural template for a future AI-specific compliance instrument: sector-targeted, regulator-funding, ring-fenced. Flag in instruments catalogue. |
| GCDO Use Case Census (272 cases, 55 operational) | Calibrates Public Sector $K_s$ acceleration | Public Sector | Observational. Now feeds the live $2.4B/8,700 FTE stress test. |

---

## 5. Implications for AIPS scenario design (post-Budget 2026)

1. **Aggregate-vs-targeted comparison anchor is now layered.** Investment Boost (Budget 2025) remains the canonical aggregate tax policy. Budget 2026 adds an **aggregate operating-substitution policy** in the form of the $2.4B/8,700 FTE public sector cuts with AI as the assumed substitute. That is the strongest real-world expression of the aggregate-policy archetype applied to one sector.

2. **Same-budget envelope (`SCENARIOS.md` Rule 2) needs two envelopes, not one.** Operating envelope tightened to $2.1B; capital envelope loosened to $5.7B. A scenario calibrated against only one will misrepresent its relative position. Operating-side levers (programme spend, Public Sector $E$) face a harder envelope; capital-side levers (Institute, infrastructure-embedded digital, energy grid) face a looser one.

3. **Public Sector archetype now has a stated displacement target and an explicit AI substitution assumption.** That makes it the most directly stress-testable archetype in the framework. See scenario draft in §6.

4. **What Budget 2026 does NOT contain about AI is itself a signal.** No flagship AI commitment, no Digitising Government uplift, no AI-specific tax instrument. The Government's revealed preference is to treat AI as (a) a labour substitute that contributes to public sector savings, and (b) embedded capability inside Defence, Health, and Transport capital. Direct AI capability funding is conspicuous by its absence in public coverage.

5. **Defence sub-sector becomes a concrete calibration point.** $70M UUVs + $158M drones/maintenance + $25M Defence Force tech = ~$253M of explicitly AI-adjacent capital. Defence is a thin slice in AIPS but this gives it real numbers.

6. **A future AI compliance/regulation instrument has a structural template in the bank levy.** $209M / four years / regulator-funded / ring-fenced. Worth noting in instruments catalogue as the closest 2026 analogue.

---

## 6. Stress-test scenario (draft for `SCENARIOS.md`)

**Scenario name:** Aggregate-policy with Public Administration FTE reduction (Budget 2026 live test)

**Premise.** Government announces $2.4B savings envelope, 8,700 FTE reduction in Public Administration over 3.5 years (Dec 2025 → Jul 2029), with "increased use of AI and other digital tools" as the assumed substitute. Frontline (teachers, doctors, nurses, Health NZ, police, defence) carved out; cuts concentrate in policy-focused ministries (MBIE 5,827, Justice 4,742, IRD 4,610, Education policy 3,939, DIA 2,575, MFAT 1,181, MfE 769, Treasury 569). MCERT amalgamation (1 July 2026) consolidates four agencies.

**Inputs.**
- Public Administration FTE step shock: -8,700 over t=0 to t=3.5 (linear or front-loaded).
- $E$ uplift assumption: variable across the three productivity sub-scenarios below.
- Same-budget envelope: $2.4B operating savings reinvested per Government plan (health, education, defence, police, infrastructure).

**Three productivity sub-scenarios.**

| Variant | AI productivity gain per remaining FTE per year | Source posture |
|---|---|---|
| Singapore-class (optimistic) | +3% to +5% | Government's implicit assumption (Willis cited Singapore + Malaysia exemplars) |
| Middling | +1% to +2% | OECD median public-sector AI productivity gain |
| Hipkins-class (sceptical) | 0% to +0.5% | Counter-claim that "you cannot reduce that many people without reducing frontline services" |

**Outputs to compare.**
- Service delivery proxy (workload absorbed / workload baseline) at t=3.5, t=7, t=10.
- Public Administration $K_s$ trajectory vs counterfactual no-cut baseline.
- Whether the AI productivity assumption needed to absorb the workload reduction without service degradation is consistent with the model's $E$ growth-rate assumption for the sector.

**Comparison runs.**
- Targeted Public Sector enabling-capacity uplift (same $2.4B envelope, spent on $E$ instead of pocketed as savings).
- Aggregate Investment Boost extension (same envelope as tax expenditure).
- Hybrid (50/50 split).

**Why this scenario matters.** First live, measurable, four-year experiment in the AIPS Public Sector / aggregate-policy archetype. Allows backtesting once GCDO publishes AI Use Case Census telemetry through the cut period.

---

## 7. Gaps still open (post-Budget 2026)

- **Vote MBIE Estimates PDF** - confirm Institute for Advanced Technology and Responsible AI Adopt baselines (Cloudflare-gated this session).
- **Vote Digitising Government Estimates** - confirm GCDO line, search for any new public-sector AI uplift.
- **Tax expenditure statement annex** of Budget Economic and Fiscal Update - R&D Tax Incentive, Investment Boost, any new AI-adjacent provision.
- **Vote Defence factsheet PDF** - confirm the autonomy / sensors breakdown.
- **Treasury Summary of Initiatives PDF** - sanity check on the BPS-to-Budget $2.2B capital delta (three named items already total $3.3B+, so material reprioritisation is happening).
- **GCDO AI Use Case Census** - publish telemetry through the FTE reduction period for backtesting.
- **MCERT structural detail** - how four merging agencies' FTE consolidate.
- **Willis productivity assumption** - per-FTE-per-year gain assumed in the $2.4B savings number. Without it, the 8,700 target is a budget target, not a productivity target.

---

## 8. Sources

- Pre-Budget: see `~/.openclaw/workspace-aips/research/budget-2026-watch.md` §6.
- Post-Budget: see `~/.openclaw/workspace-aips/research/budget-2026-confirmed.md` §6 (full URL list to RNZ, The Conversation, interest.co.nz, National Party release, Wikipedia 2026 NZ budget summary).
- External signal: `~/.openclaw/workspace-aips/research/external-signals/2026-05-24-public-sector-cuts-and-ai-substitution.md`.
- 2025 carry-over: 2025 New Zealand budget (Wikipedia, Budget at a Glance, RNZ 19-22 May 2025), MBIE NZ Strategy for AI (July 2025), `research/data-source-catalogue.md` #14 / #36.

---

## 9. Budget 2026 public-sector AI substitution tracking protocol

**Status.** This stream remains linked to `cknzraposo/aips#10` until Vote-level pull and reconciliation debt is cleared.

### 9.1 Quarterly reconciliation cadence (through Jul 2029)

Update once per quarter (or nearest publication window) across all three series:

1. **GCDO AI Use Case Census telemetry**
   - Total use cases and fully operational use cases.
   - Any definitional changes in what counts as "operational".
2. **Public Service Commission FTE snapshots** (or nearest published equivalent)
   - Public-service and Public Administration FTE level.
   - Coverage changes (agency consolidation/reclassification) including MCERT effects.
3. **BEFU / Budget update deltas** relevant to the substitution envelope
   - Any revision to the NZ$2.4B savings envelope, timing, or reinvestment profile.
   - Any newly surfaced operating/capital line that materially changes the substitution interpretation.

### 9.2 Anchor-path consistency check (Dec 2025 → Jul 2029)

Budget anchor: **-8,700 FTE over 3.5 years**. Use a simple linear checkpoint unless an official schedule is published.
Linear checkpoint formula: `anchor_reduction(q) = -8,700 * (months_elapsed_since_Dec_2025 / 42)`, rounded to nearest FTE (`42` months = 3.5 years, Dec 2025 to Jul 2029).

| Checkpoint | Months elapsed since Dec 2025 | Anchor cumulative reduction (FTE) | Observed cumulative reduction (FTE) | Gap vs anchor | Trajectory call |
|---|---:|---:|---:|---:|---|
| 2025-Q4 (Dec, anchor start) | 0 | 0 | 0 | 0 | baseline |
| 2026-Q3 (Sep) | 9 | -1,864 | TBD | TBD | TBD |
| 2026-Q4 (Dec) | 12 | -2,486 | TBD | TBD | TBD |
| 2027-Q1 (Mar) | 15 | -3,107 | TBD | TBD | TBD |
| 2027-Q2 (Jun) | 18 | -3,729 | TBD | TBD | TBD |
| 2027-Q3 (Sep) | 21 | -4,350 | TBD | TBD | TBD |
| 2027-Q4 (Dec) | 24 | -4,971 | TBD | TBD | TBD |
| 2028-Q1 (Mar) | 27 | -5,593 | TBD | TBD | TBD |
| 2028-Q2 (Jun) | 30 | -6,214 | TBD | TBD | TBD |
| 2028-Q3 (Sep) | 33 | -6,836 | TBD | TBD | TBD |
| 2028-Q4 (Dec) | 36 | -7,457 | TBD | TBD | TBD |
| 2029-Q1 (Mar) | 39 | -8,079 | TBD | TBD | TBD |
| 2029-Q2 (Jun, nearest to Jul 2029) | 42 | -8,700 | TBD | TBD | TBD |

Trajectory call convention:
- **On-track**: observed within ±5% of anchor reduction.
- **Ahead**: observed reduction >5% beyond anchor.
- **Behind**: observed reduction >5% short of anchor.

### 9.3 Backtest readiness log (maintain through Jul 2029)

#### A) Quarterly reconciliation log

| Quarter | GCDO census state (cases / operational) | PSC FTE snapshot state | BEFU/Budget delta | Anchor-path call | Notes |
|---|---|---|---|---|---|
| 2026-Q2 (initial setup) | 272 / 55 (2025 baseline) | 8,700 reduction target announced; initial PSC baseline level TBD, quarterly realised tracking starts with first post-Budget snapshot | NZ$2.4B savings envelope stated in Budget 2026 | Baseline established | Start live reconciliation series |

#### B) Productivity-per-FTE assumptions log (scenario runs)

| Assumption set | Productivity gain per remaining FTE per year | Source posture | First used | Last reviewed | Notes |
|---|---|---|---|---|---|
| Singapore-class (optimistic) | +3% to +5% | Government implicit framing (Singapore/Malaysia exemplars) | 2026-05-29 | 2026-05-29 | Traces to `SCENARIOS.md` §6.1 ("Three productivity sub-scenarios") |
| Middling | +1% to +2% | OECD-style median public-sector AI gain assumption | 2026-05-29 | 2026-05-29 | Traces to `SCENARIOS.md` §6.1 ("Three productivity sub-scenarios") |
| Hipkins-class (sceptical) | 0% to +0.5% | Counter-claim that cuts of this scale risk service pressure | 2026-05-29 | 2026-05-29 | Traces to `SCENARIOS.md` §6.1 ("Three productivity sub-scenarios") |
