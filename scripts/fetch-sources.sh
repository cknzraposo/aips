#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MANIFEST_PATH="${MANIFEST_PATH:-${REPO_ROOT}/data/MANIFEST.csv}"
CACHE_DIR="${CACHE_DIR:-${REPO_ROOT}/.data-cache}"
STRICT_HASH=0

if [[ "${1:-}" == "--strict-hash" ]]; then
  STRICT_HASH=1
fi

if [[ ! -f "${MANIFEST_PATH}" ]]; then
  echo "Manifest not found: ${MANIFEST_PATH}" >&2
  exit 1
fi

if command -v curl >/dev/null 2>&1; then
  DOWNLOADER=(curl --fail --location --silent --show-error --retry 3 --connect-timeout 20 -o)
elif command -v wget >/dev/null 2>&1; then
  DOWNLOADER=(wget -qO)
else
  echo "Neither curl nor wget is installed." >&2
  exit 1
fi

mkdir -p "${CACHE_DIR}"

failures=0
fetched=0
skipped=0
warnings=0

while IFS=$'\t' read -r filename classification source_url sha256; do
  [[ "${classification}" == "fetch-on-demand" ]] || continue

  if [[ -z "${filename}" || -z "${source_url}" ]]; then
    echo "Invalid fetch-on-demand row (missing filename/source_url): ${filename}" >&2
    failures=$((failures + 1))
    continue
  fi

  has_hash=1
  if [[ -z "${sha256}" ]]; then
    has_hash=0
    if [[ ${STRICT_HASH} -eq 1 ]]; then
      echo "Missing sha256 for fetch-on-demand source: ${filename}" >&2
      failures=$((failures + 1))
      continue
    fi
  fi

  target="${CACHE_DIR}/${filename}"
  mkdir -p "$(dirname "${target}")"

  if [[ -f "${target}" ]]; then
    if [[ ${has_hash} -eq 0 ]]; then
      echo "! Missing sha256 (using existing cached file): ${filename}"
      warnings=$((warnings + 1))
      skipped=$((skipped + 1))
      continue
    fi

    actual_sha256="$(sha256sum "${target}" | awk '{print $1}')"
    if [[ "${actual_sha256}" == "${sha256}" ]]; then
      echo "✓ Already present and verified: ${filename}"
      skipped=$((skipped + 1))
      continue
    fi
    echo "↻ Re-downloading due to hash mismatch: ${filename}"
  else
    echo "↓ Downloading: ${filename}"
  fi

  "${DOWNLOADER[@]}" "${target}" "${source_url}"
  if [[ ${has_hash} -eq 0 ]]; then
    echo "! Downloaded without checksum verification: ${filename}"
    warnings=$((warnings + 1))
    fetched=$((fetched + 1))
    continue
  fi

  actual_sha256="$(sha256sum "${target}" | awk '{print $1}')"
  if [[ "${actual_sha256}" != "${sha256}" ]]; then
    echo "Hash mismatch for ${filename}" >&2
    echo "  expected: ${sha256}" >&2
    echo "  actual:   ${actual_sha256}" >&2
    failures=$((failures + 1))
    continue
  fi

  echo "✓ Downloaded and verified: ${filename}"
  fetched=$((fetched + 1))
done < <(
  python - "${MANIFEST_PATH}" <<'PY'
import csv
import sys

with open(sys.argv[1], newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(
            f"{(row.get('filename') or '').strip()}\t"
            f"{(row.get('classification') or '').strip()}\t"
            f"{(row.get('source_url') or '').strip()}\t"
            f"{(row.get('sha256') or '').strip()}"
        )
PY
)

echo "Fetch summary - downloaded: ${fetched}, cached: ${skipped}, warnings: ${warnings}, failures: ${failures}"

if [[ ${failures} -gt 0 ]]; then
  exit 1
fi
