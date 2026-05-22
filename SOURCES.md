# AIPS Source Documents

Primary source provenance for calibration is now managed in:

- `data/MANIFEST.csv` (authoritative inventory: URL, SHA256, licence, classification)
- `scripts/fetch-sources.sh` (downloads `fetch-on-demand` sources to `.data-cache/`)
- `scripts/verify-sources.sh` (verifies SHA256 against manifest)

## Quick start (new contributors)

```bash
./scripts/fetch-sources.sh
./scripts/verify-sources.sh
```

## Source policy summary

- **Committed in git (`data/raw/stats-nz/`)**: Stats NZ source files (CC BY 4.0).
- **Not committed (`.data-cache/`)**: third-party/commercial or licence-unclear documents, fetched on demand when direct URL + hash are available.
- **Manual only**: sources that require gated access, licence confirmation, or direct rights-holder distribution.

Use `data/MANIFEST.csv` instead of ad-hoc “Sourced document: …” references.
