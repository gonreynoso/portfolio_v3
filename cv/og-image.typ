// Open Graph social card for gonreynoso.dev.
// Renders 1200×630 (the standard Open Graph size). Output is PNG;
// the build script converts it to WebP with sharp.

#set page(
  width: 1200pt / 1.3333,  // 1200px in pt at 96dpi
  height: 630pt / 1.3333,
  margin: 0pt,
)
#set text(font: ("Inter", "Helvetica", "Arial"))

#let accent = rgb("#54da7a")

#block(
  width: 100%,
  height: 100%,
  fill: rgb("#0b141a"),
  inset: (x: 48pt, y: 44pt),
)[
  // subtle gradient glow
  #place(top + right, dx: 120pt, dy: -120pt)[
    #circle(radius: 220pt, fill: rgb("#54da7a").transparentize(88%))
  ]

  // Brand line
  #text(size: 14pt, fill: accent, weight: "semibold", tracking: 3pt)[
    KENSIWEB · FREELANCE DEVELOPER
  ]

  #v(32pt)

  // Name
  #text(size: 56pt, weight: "bold", fill: rgb("#ffffff"))[
    Gonzalo Reynoso
  ]

  #v(12pt)

  // Tagline — what I actually sell
  #text(size: 28pt, fill: rgb("#e5e7eb"), weight: "regular")[
    Sistemas web a medida \
    e integraciones con IA.
  ]

  #v(1fr)

  // Bottom row: URL + pills
  #grid(
    columns: (1fr, auto),
    align: (left + bottom, right + bottom),
    text(size: 16pt, fill: rgb("#9ca3af"))[gonreynoso.dev],
    stack(dir: ltr, spacing: 10pt,
      box(
        inset: (x: 12pt, y: 6pt),
        radius: 999pt,
        stroke: 1pt + rgb("#374151"),
        fill: rgb("#1f2937"),
        text(size: 12pt, fill: rgb("#e5e7eb"))[Laravel + Livewire]
      ),
      box(
        inset: (x: 12pt, y: 6pt),
        radius: 999pt,
        stroke: 1pt + rgb("#374151"),
        fill: rgb("#1f2937"),
        text(size: 12pt, fill: rgb("#e5e7eb"))[Claude API]
      ),
      box(
        inset: (x: 12pt, y: 6pt),
        radius: 999pt,
        stroke: 1pt + rgb("#374151"),
        fill: rgb("#1f2937"),
        text(size: 12pt, fill: rgb("#e5e7eb"))[PostgreSQL]
      ),
    ),
  )
]
