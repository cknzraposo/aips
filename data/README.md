# Source data reproducibility

This directory contains the reproducible source-data inventory for AIPS calibration.

## Layout

- `MANIFEST.csv` — canonical source inventory with SHA256, licence, and classification.
- `raw/stats-nz/` — committed redistributable files (Stats NZ; CC BY 4.0).
- `../.data-cache/` — local cache for `fetch-on-demand` files (gitignored).

## Classifications

- `redistributable`: committed under `data/raw/`.
- `fetch-on-demand`: downloaded by `scripts/fetch-sources.sh` into `.data-cache/`.
- `manual`: not redistributed; obtain directly from source organisation or CK archive if needed.

## Reproduce source set

```bash
./scripts/fetch-sources.sh
./scripts/verify-sources.sh
```

Verification checks SHA256 for all `redistributable` and `fetch-on-demand` entries in `MANIFEST.csv`.
Manual entries are recorded for auditability but intentionally skipped by the verifier.
