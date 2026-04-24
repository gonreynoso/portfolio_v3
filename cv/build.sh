#!/usr/bin/env bash
# Compiles the bilingual CVs with Typst and drops the PDFs into public/.
# Usage:  bash cv/build.sh
set -euo pipefail

cd "$(dirname "$0")"

TYPST=${TYPST:-typst}
if ! command -v "$TYPST" >/dev/null 2>&1; then
  if [ -x "$HOME/.local/bin/typst" ]; then
    TYPST="$HOME/.local/bin/typst"
  else
    echo "typst not found. Install from https://github.com/typst/typst/releases or set TYPST=/path/to/typst." >&2
    exit 1
  fi
fi

"$TYPST" compile content-es.typ ../public/Resume_Gonzalo_Reynoso_ES.pdf
"$TYPST" compile content-en.typ ../public/Resume_Gonzalo_Reynoso_EN.pdf

echo "✔ Wrote:"
echo "    public/Resume_Gonzalo_Reynoso_ES.pdf"
echo "    public/Resume_Gonzalo_Reynoso_EN.pdf"
