#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MANIFEST="$ROOT_DIR/data/MANIFEST.csv"

if [[ ! -f "$MANIFEST" ]]; then
  echo "Missing manifest: $MANIFEST" >&2
  exit 1
fi

tmp_manifest=$(mktemp)
trap 'rm -f "$tmp_manifest"' EXIT
sed 's/\r$//' "$MANIFEST" | sed '1s/^\xEF\xBB\xBF//' > "$tmp_manifest"

ok=0
missing=0
failed=0
manual=0

while IFS=',' read -r filename classification source_url retrieval_date sha256 licence notes; do
  [[ "$filename" == "filename" ]] && continue

  case "$classification" in
    redistributable)
      path="$ROOT_DIR/data/raw/$filename"
      ;;
    fetch-on-demand)
      path="$ROOT_DIR/.data-cache/$filename"
      ;;
    manual)
      echo "SKIP (manual): $filename"
      manual=$((manual+1))
      continue
      ;;
    *)
      echo "Unknown classification '$classification' for $filename" >&2
      failed=$((failed+1))
      continue
      ;;
  esac

  if [[ ! -f "$path" ]]; then
    echo "MISSING: $filename ($path)"
    missing=$((missing+1))
    continue
  fi

  got_sha="$(sha256sum "$path" | awk '{print $1}')"
  if [[ "$got_sha" == "$sha256" ]]; then
    echo "OK: $filename"
    ok=$((ok+1))
  else
    echo "FAIL: $filename"
    echo "  expected: $sha256"
    echo "  got:      $got_sha"
    failed=$((failed+1))
  fi
done < "$tmp_manifest"

echo "Summary: ok=$ok missing=$missing failed=$failed manual_skipped=$manual"

if [[ "$missing" -gt 0 || "$failed" -gt 0 ]]; then
  exit 1
fi
