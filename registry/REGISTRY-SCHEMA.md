# Parameter Registry Schema

*Date: 2026-04-24*
*Status: Draft v0.1*
*Purpose: Define a structured parameter registry that makes every cell traceable to source, date, method, and confidence. Enables calibration, sensitivity analysis, and external review without CSV archaeology.*
*Upstream: [data/sector-parameter-table.csv](../data/sector-parameter-table.csv) (current flat form), [Sources catalogue](../docs/data-source-catalogue.md), [State variables](../STATE-VARIABLES.md)*
*Downstream: Simulation code (v0.3), sensitivity analysis, calibration log, paper Appendix C*

---

## 1. Problem this solves

The current parameter store is a single CSV with 348 rows. It works for an initial inventory but breaks down under the following uses:

1. **Traceability** - when a simulation output looks wrong, there is no structured path from the output to the parameter, to the source, to the method that produced the value.
2. **Uncertainty** - each cell has a single value. The model needs distributions (or at minimum ranges), not point estimates.
3. **Provenance chain** - sources are named as strings. There is no link from parameter to a structured source record, to a document or URL, to a date of access.
4. **Versioning** - updating a parameter loses the old value. There is no history of when and why a number changed.
5. **Derived parameters** - some parameters are derived from others (e.g. sector-weighted averages). The CSV does not record the derivation.
6. **Contributor workflow** - an external reviewer cannot propose a parameter change without rewriting the CSV cell.

A structured registry fixes these one by one.

---

## 2. Schema

Each parameter is a record. Records are stored as YAML (one file per sector, or one file per parameter group - see Section 6). The registry as a whole is the set of all records.

### 2.1 Record structure

```yaml
# Example record: sector S01 Agriculture, parameter K1 (absorptive capability baseline)
id: S01.K1
sector:
  id: S01
  name: Agriculture
  tier: 1
  anzsic_code: A
parameter:
  code: K1
  group: "Absorptive capability"
  state_variable: "K_s"
  name: "Absorptive capability baseline (t=0)"
  description: >
    Initial condition for sector absorptive capability K_s at simulation start (t=0).
    Dimensionless, bounded [0,1]. Represents sector's readiness to absorb AI capability
    given current skills, data, and management practices.
  unit: "dimensionless [0,1]"
  required_for_v1: true
value:
  current: 0.42
  range:
    low: 0.35
    high: 0.50
    type: "plausible_range"  # plausible_range | 90_ci | expert_bounds
  distribution:
    shape: "beta"
    params: {alpha: 4.2, beta: 5.8}
    notes: "Calibrated to midpoint 0.42, spread reflects cross-study variance in adoption readiness estimates"
status: filled                   # filled | partial | open | disputed
evidence_class: derived          # observed | derived | expert | placeholder
confidence: medium               # high | medium | low
method: >
  Weighted average of (1) Stats NZ Business Operations Survey AI readiness scores 2024,
  (2) AI Forum Business Productivity Report Sep 2024 sector rows for Agriculture,
  (3) OECD Productivity Indicators agri-technology adoption 2024.
  Weights: 0.5 / 0.3 / 0.2 reflecting sample representativeness.
sources:
  primary:
    id: src.statsnz.bos.2024
    citation: "Stats NZ Business Operations Survey 2024"
    url: "https://www.stats.govt.nz/..."
    accessed: "2026-04-10"
  secondary:
    - id: src.aiforum.productivity.2024-09
      citation: "AI Forum NZ Business Productivity Report, September 2024"
      url: "https://..."
      accessed: "2026-04-12"
    - id: src.oecd.productivity.2024
      citation: "OECD Productivity Indicators 2024, Agri-technology adoption"
      url: "https://..."
      accessed: "2026-04-11"
history:
  - date: "2026-04-10"
    value: 0.40
    note: "Initial placeholder from OECD only"
    author: "ck"
  - date: "2026-04-18"
    value: 0.42
    note: "Updated after Stats NZ BOS 2024 released, weighted average applied"
    author: "ck"
dependencies: []                  # list of other parameter IDs this value depends on
used_by:
  - equation: "eq.K.dynamics"
    role: "initial_condition"
notes: >
  Cross-check against upcoming AI Forum sector-level cuts expected Q2 2026.
  If that data confirms current value within ±0.05, upgrade confidence to high.
```

### 2.2 Required fields

| Field | Required | Notes |
|---|---|---|
| `id` | yes | Format: `{sector_id}.{param_code}` (e.g. `S01.K1`). Globally unique. |
| `sector` | yes | Nested object: id, name, tier, anzsic_code |
| `parameter` | yes | Nested object: code, group, state_variable, name, description, unit, required_for_v1 |
| `value.current` | yes (unless status=open) | Point estimate for simulation. |
| `value.range` | yes when status=filled | Plausible range for sensitivity analysis. |
| `value.distribution` | optional | Required before full Monte Carlo runs. Shape + params. |
| `status` | yes | filled / partial / open / disputed |
| `evidence_class` | yes | observed / derived / expert / placeholder |
| `confidence` | yes | high / medium / low |
| `method` | yes (unless status=open) | How the value was produced. |
| `sources.primary` | yes when evidence_class in {observed, derived} | Structured source reference. |
| `sources.secondary` | optional | List of structured source references. |
| `history` | yes | List of {date, value, note, author}. At least one entry. |
| `dependencies` | optional | List of parameter IDs. |
| `used_by` | optional | List of {equation, role} pairs documenting where in the model this parameter enters. |
| `notes` | optional | Free text. |

### 2.3 Enumerated values

**status:**
- `filled` - current value set, range defined, method documented, suitable for simulation.
- `partial` - current value set but range or method incomplete. Usable with caveats.
- `open` - no current value yet. Calibration pending.
- `disputed` - sources conflict materially. Notes must explain the dispute.

**evidence_class:**
- `observed` - directly measured in a source (e.g. GDP from Stats NZ).
- `derived` - computed from observed values using a documented method.
- `expert` - not observable in available data, assigned based on analyst judgement from literature.
- `placeholder` - assigned for model stability but not calibrated. Sensitivity analysis must flag these.

**confidence:**
- `high` - primary source is authoritative, current, and sector-specific. Range is narrow.
- `medium` - sources are credible but not directly sector-specific, or range is wide.
- `low` - sources are thin, proxies used, or method requires significant assumption. Must appear in sensitivity screening.

---

## 3. Source records

Sources are first-class objects referenced by ID. Defined once in `registry/sources.yaml`, referenced from parameter records. Prevents string-matching on citation fields and makes source updates propagate.

```yaml
# registry/sources.yaml
sources:
  - id: src.statsnz.bos.2024
    citation: "Stats NZ Business Operations Survey 2024"
    publisher: "Stats NZ"
    date: "2024-12-01"
    type: "survey"
    url: "https://www.stats.govt.nz/information-releases/business-operations-survey-2024"
    accessed: "2026-04-10"
    selection_bias: "nationally-representative, stratified sample, weighted"
    methodology_notes: >
      N=7,500, annual, sector-weighted. AI-specific module added 2024.
    tags: ["adoption", "capability", "nz-official"]
  - id: src.aiforum.productivity.2024-09
    citation: "AI Forum NZ Business Productivity Report, September 2024"
    publisher: "AI Forum NZ"
    date: "2024-09-01"
    type: "industry-report"
    url: "https://aiforum.org.nz/..."
    accessed: "2026-04-12"
    selection_bias: "self-selected, opt-in, AI-interested network"
    methodology_notes: >
      N~400, online survey of AI Forum members and extended network.
    tags: ["adoption", "productivity", "barriers", "industry"]
```

Tagging source records enables queries like "show all parameters derived from nz-official sources" - useful for the paper's evidence base section.

---

## 4. Directory layout

```
aips/
  registry/
    sources.yaml                  # all source records
    parameters/
      S01-agriculture.yaml        # all parameters for sector S01
      S02-mining.yaml
      S03-manufacturing.yaml
      ...
      S19-other-services.yaml
    system/
      E.yaml                      # system-level parameters (shared enabling capacity)
      global.yaml                 # simulation-wide constants
    schema/
      parameter.schema.json       # JSON Schema for record validation
      source.schema.json
  scripts/
    registry_load.py              # load all YAML into unified in-memory model
    registry_validate.py          # schema + cross-reference validation
    registry_export_csv.py        # export to flat CSV for external review
    registry_import_csv.py        # one-time migration from current CSV
```

Splitting parameters by sector keeps individual files under ~500 lines and aligns with how calibration actually happens (one sector at a time).

---

## 5. Loader interface

Simulation code consumes the registry through a single loader:

```python
from aips.registry import Registry

reg = Registry.load("registry/")

# Point estimate for simulation run
k_s01_0 = reg.parameter("S01.K1").value

# Range for sensitivity analysis
k_s01_range = reg.parameter("S01.K1").range  # (low, high)

# Distribution sample for Monte Carlo
sample = reg.parameter("S01.K1").sample(n=1000, seed=42)

# All parameters for a sector
ag_params = reg.sector("S01").all()

# All parameters entering a specific equation
k_eq_params = reg.used_by("eq.K.dynamics")

# Filter by status/confidence
low_conf_filled = reg.filter(status="filled", confidence="low")
```

The loader validates against the JSON Schema on load. Any broken record halts simulation with a clear error pointing to the file and line.

---

## 6. Migration from the current CSV

The existing `data/sector-parameter-table.csv` has 348 rows. Migration is a one-time conversion, not an ongoing dual-maintenance problem.

### Steps

1. **Schema lock.** Finalise `parameter.schema.json` and `source.schema.json`. Review with one external reader if possible.
2. **Source extraction.** Walk the CSV's `primary_source` and `secondary_source` columns. Deduplicate. Write `registry/sources.yaml`. Assign source IDs.
3. **Parameter migration.** For each CSV row, construct a YAML record using the column mapping below. Initial `history` entry is `{date: 2026-04-24, value: <csv value>, note: "Migrated from sector-parameter-table.csv", author: "ck"}`.
4. **Range inference.** For rows with no explicit range, assign `value.range` using a default rule (±20% for `observed`, ±40% for `derived`, ±60% for `expert`, ±80% for `placeholder`). Record the inference method in notes. These are starting ranges only; sensitivity analysis will refine.
5. **Validation.** Run `registry_validate.py` - must pass before CSV is considered retired.
6. **CSV retirement.** Move current CSV to `data/archive/sector-parameter-table-20260424.csv`. Replace with auto-generated export from the registry (one-way, for external reviewers who want a flat view).

### Column mapping (CSV → YAML)

| CSV column | YAML path |
|---|---|
| `sector_id` | `sector.id` |
| `sector_name` | `sector.name` |
| `tier` | `sector.tier` (integer) |
| `param_code` | `parameter.code` |
| `param_group` | `parameter.group` |
| `param_name` | `parameter.name` |
| `unit` | `parameter.unit` |
| `required_for_v1` | `parameter.required_for_v1` (boolean) |
| `value` | `value.current` (parse numeric where possible; text preserved in `notes`) |
| `status` | `status` |
| `evidence_class` | `evidence_class` |
| `confidence` | `confidence` |
| `primary_source` | `sources.primary` via source-table lookup |
| `secondary_source` | `sources.secondary` via source-table lookup |
| `notes` | `notes` |

---

## 7. Contributor workflow

External contributors proposing a parameter change do the following:

1. Edit the relevant `registry/parameters/SXX-*.yaml` file.
2. Update `value.current` (and `range` / `distribution` if applicable).
3. Append a new entry to `history` with date, old→new value, rationale, author.
4. Update `method`, `sources`, `confidence` as needed.
5. Open a PR. The validator runs on PR CI.
6. The AIPS lead reviews the change against the evidence and merges (or requests revision).

This makes "a Stats NZ analyst can propose a calibration update without reading any Python" a reachable goal.

---

## 8. What this schema does not cover yet

- **Equation parameters as first-class records.** Currently the registry covers sector-indexed parameters and system-level parameters. Model coefficients (damping rates, coupling strengths in the ODEs) are not yet in the schema. They should be, before v0.3 calibration begins.
- **Scenario lever parameters.** The perturbation sizes in [SCENARIOS.md](../SCENARIOS.md) are currently prose. They should be defined as parameter records with the same schema.
- **Calibration provenance for derived values.** When a value is updated by an automated calibration run, the `history` entry should capture the calibration target, the optimiser used, and the fit metric. The schema supports free-text notes; a structured subfield for calibration runs would be cleaner.

These are v0.2 schema extensions. Current v0.1 is sufficient to migrate the CSV and begin v0.3 calibration.

---

## 9. Revisions

### 2026-04-24 - Initial draft (v0.1)
- YAML-based, one file per sector, one file per system-level parameter
- Source records as first-class objects in `sources.yaml`
- Required fields specified, enumerated values defined
- Loader interface sketched
- Migration plan for current CSV documented
- Awaiting schema lock and first migration run

---

*See also: [data/sector-parameter-table.csv](../data/sector-parameter-table.csv) for current flat store; [STATE-VARIABLES.md](../STATE-VARIABLES.md) for the variable definitions parameters attach to; [SCENARIOS.md](../SCENARIOS.md) for how scenario perturbations will slot into the registry once schema v0.2 is in.*
