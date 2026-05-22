#!/usr/bin/env bash
set -euo pipefail

STRICT_MANUAL=0
STRICT_HASH=0

for arg in "$@"; do
  case "${arg}" in
    --strict-manual)
      STRICT_MANUAL=1
      ;;
    --strict-hash)
      STRICT_HASH=1
      ;;
  esac
done

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MANIFEST_PATH="${MANIFEST_PATH:-${REPO_ROOT}/data/MANIFEST.csv}"
RAW_DIR="${RAW_DIR:-${REPO_ROOT}/data/raw}"
CACHE_DIR="${CACHE_DIR:-${REPO_ROOT}/.data-cache}"

if [[ ! -f "${MANIFEST_PATH}" ]]; then
  echo "Manifest not found: ${MANIFEST_PATH}" >&2
  exit 1
fi

failures=0
checked=0
warnings=0

while IFS=$'\t' read -r filename classification sha256; do
  [[ -n "${filename}" ]] || continue

  case "${classification}" in
    redistributable)
      path="${RAW_DIR}/${filename}"
      ;;
    fetch-on-demand|manual)
      path="${CACHE_DIR}/${filename}"
      ;;
    *)
      echo "Unknown classification for ${filename}: ${classification}" >&2
      failures=$((failures + 1))
      continue
      ;;
  esac

  if [[ ! -f "${path}" ]]; then
    if [[ "${classification}" == "manual" && ${STRICT_MANUAL} -eq 0 ]]; then
      echo "! Manual source not present (skipped): ${filename}"
      warnings=$((warnings + 1))
      continue
    fi
    echo "Missing file: ${path}" >&2
    failures=$((failures + 1))
    continue
  fi

  if [[ -z "${sha256}" ]]; then
    if [[ ${STRICT_HASH} -eq 0 ]]; then
      echo "! Missing sha256 in manifest (skipped): ${filename}"
      warnings=$((warnings + 1))
      continue
    fi
    echo "Missing sha256 in manifest for ${filename}" >&2
    failures=$((failures + 1))
    continue
  fi

  actual_sha256="$(sha256sum "${path}" | awk '{print $1}')"
  if [[ "${actual_sha256}" != "${sha256}" ]]; then
    echo "Hash mismatch: ${filename}" >&2
    echo "  expected: ${sha256}" >&2
    echo "  actual:   ${actual_sha256}" >&2
    failures=$((failures + 1))
    continue
  fi

  echo "✓ Verified: ${filename}"
  checked=$((checked + 1))
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
            f"{(row.get('sha256') or '').strip()}"
        )
PY
)

echo "Verify summary - checked: ${checked}, warnings: ${warnings}, failures: ${failures}"

if [[ ${failures} -gt 0 ]]; then
  exit 1
fi
