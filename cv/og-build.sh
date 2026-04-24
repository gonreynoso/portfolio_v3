#!/usr/bin/env bash
# Build the Open Graph card: Typst → PNG → WebP (via Pillow).
# Output: public/og-image.webp (1200x630, Open Graph standard).
# Usage: bash cv/og-build.sh
set -euo pipefail

cd "$(dirname "$0")/.."

TYPST=${TYPST:-typst}
if ! command -v "$TYPST" >/dev/null 2>&1; then
  if [ -x "$HOME/.local/bin/typst" ]; then
    TYPST="$HOME/.local/bin/typst"
  else
    echo "typst not found. Install from https://github.com/typst/typst/releases or set TYPST=/path/to/typst." >&2
    exit 1
  fi
fi

TMP="$(mktemp -d)"
trap "rm -rf $TMP" EXIT

"$TYPST" compile cv/og-image.typ --ppi 192 "$TMP/og.png"

python3 - "$TMP/og.png" public/og-image.webp <<'PY'
import sys
from PIL import Image
src, dst = sys.argv[1], sys.argv[2]
img = Image.open(src).convert("RGB").resize((1200, 630), Image.LANCZOS)
img.save(dst, "webp", quality=85, method=6)
print(f"wrote {dst}")
PY
