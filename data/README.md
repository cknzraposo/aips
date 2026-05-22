# Source data workflow

This directory separates calibration source documents by licence and redistribution status.

## Layout

```text
data/
├── MANIFEST.csv
└── raw/
    ├── stats-nz/   # redistributable files committed to git
    └── govt/       # redistributable NZ government files cleared for reuse
```

Non-redistributable or uncertain-licence files are kept in a local cache:

```text
.data-cache/
```

## Classifications

- `redistributable` - keep under `data/raw/` and commit.
- `fetch-on-demand` - downloaded by `./scripts/fetch-sources.sh` to `.data-cache/`.
- `manual` - contributors obtain manually (see `notes` in `data/MANIFEST.csv`).

## Reproducibility flow

1. Review `data/MANIFEST.csv`.
2. Run `./scripts/fetch-sources.sh` to download all `fetch-on-demand` sources.
3. Add any `manual` sources listed in the manifest to `.data-cache/`.
4. Run `./scripts/verify-sources.sh`.

For strict audits (including manual-file presence and checksum completeness), run:

```bash
./scripts/verify-sources.sh --strict-manual --strict-hash
```
