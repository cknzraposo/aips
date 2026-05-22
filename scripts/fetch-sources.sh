#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MANIFEST="$ROOT_DIR/data/MANIFEST.csv"
CACHE_DIR="$ROOT_DIR/.data-cache"

mkdir -p "$CACHE_DIR"

if [[ ! -f "$MANIFEST" ]]; then
  echo "Missing manifest: $MANIFEST" >&2
  exit 1
fi

tmp_manifest=$(mktemp)
trap 'rm -f "$tmp_manifest"' EXIT

# Normalize line endings and drop BOM for robust CSV parsing.
sed 's/\r$//' "$MANIFEST" | sed '1s/^\xEF\xBB\xBF//' > "$tmp_manifest"

fetch_count=0
skip_count=0
while IFS=',' read -r filename classification source_url retrieval_date sha256 licence notes; do
  [[ "$filename" == "filename" ]] && continue
  [[ "$classification" == "fetch-on-demand" ]] || continue

  dest="$CACHE_DIR/$filename"
  mkdir -p "$(dirname "$dest")"

  if [[ -f "$dest" ]]; then
    existing_sha="$(sha256sum "$dest" | awk '{print $1}')"
    if [[ "$existing_sha" == "$sha256" ]]; then
      echo "OK (cached): $filename"
      skip_count=$((skip_count+1))
      continue
    fi
    echo "Stale cache, re-downloading: $filename"
  fi

  if [[ -z "$source_url" ]]; then
    echo "Missing source_url for fetch-on-demand file: $filename" >&2
    exit 1
  fi

  echo "Fetching: $filename"
  tmp_file="$(mktemp)"
  if ! curl -L --fail --silent --show-error -o "$tmp_file" "$source_url"; then
    rm -f "$tmp_file"
    echo "Failed to download: $source_url" >&2
    exit 1
  fi

  got_sha="$(sha256sum "$tmp_file" | awk '{print $1}')"
  if [[ "$got_sha" != "$sha256" ]]; then
    rm -f "$tmp_file"
    echo "SHA256 mismatch for $filename" >&2
    echo "Expected: $sha256" >&2
    echo "Got:      $got_sha" >&2
    exit 1
  fi

  mv "$tmp_file" "$dest"
  echo "OK: $filename"
  fetch_count=$((fetch_count+1))
done < "$tmp_manifest"

echo "Done. fetched=$fetch_count, already_cached=$skip_count"
