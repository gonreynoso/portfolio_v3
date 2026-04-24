// Shared layout for the Gonzalo Reynoso / Kensiweb bilingual CV.
// Each language loads this template and feeds it content blocks.

#let accent = rgb("#54da7a")
#let body-color = rgb("#1f2937")
#let muted = rgb("#6b7280")

#let cv(
  name: "",
  title: "",
  brand-note: "",
  contact: (:),
  summary: "",
  sections: (),
  ui: (:),
) = {
  set document(title: name + " — " + title, author: name)
  set page(
    paper: "a4",
    margin: (top: 1.5cm, bottom: 1.5cm, left: 1.6cm, right: 1.6cm),
  )
  set text(font: ("Inter", "Helvetica", "Arial"), size: 9.5pt, fill: body-color)
  set par(justify: true, leading: 0.55em)

  // ────────────── Header ──────────────
  block[
    #text(size: 22pt, weight: "bold")[#name]
    #v(2pt)
    #text(size: 11pt, fill: accent, weight: "semibold")[#title]
    #h(1fr)
    #box(align(right)[
      #text(size: 8.5pt, fill: muted)[
        #contact.email \
        #contact.phone \
        #contact.location
      ]
    ])
  ]

  v(-2pt)
  line(length: 100%, stroke: 0.8pt + accent)
  v(6pt)

  // Links row
  text(size: 8.5pt, fill: muted)[
    #contact.website
    #sym.space.en #sym.bullet #sym.space.en
    #contact.linkedin
    #sym.space.en #sym.bullet #sym.space.en
    #contact.github
    #sym.space.en #sym.bullet #sym.space.en
    #contact.brand
  ]

  v(10pt)

  // ────────────── Summary ──────────────
  if summary != "" {
    block[
      #text(size: 10.5pt, weight: "bold", fill: accent)[#ui.profile]
      #v(3pt)
      #summary
    ]
    v(8pt)
  }

  // ────────────── Sections ──────────────
  for sec in sections {
    block[
      #text(size: 10.5pt, weight: "bold", fill: accent)[#sec.title]
      #v(2pt)
      #line(length: 100%, stroke: 0.4pt + muted)
      #v(4pt)
    ]
    for entry in sec.entries {
      block(breakable: false)[
        // role — company  ··  period · location
        #grid(
          columns: (1fr, auto),
          align: (left, right),
          [
            #text(weight: "bold")[#entry.role]
            #if "company" in entry { text(fill: muted)[ — #entry.company] }
          ],
          text(size: 8.5pt, fill: muted)[#entry.period],
        )
        #if "location" in entry and entry.location != "" {
          text(size: 8.5pt, fill: muted)[#entry.location]
        }
        #if "summary" in entry and entry.summary != "" {
          v(2pt)
          text[#entry.summary]
        }
        #if "bullets" in entry and entry.bullets.len() > 0 {
          v(2pt)
          for b in entry.bullets [
            #text(fill: accent)[•] #h(4pt) #b \
          ]
        }
        #if "nested" in entry {
          v(3pt)
          for sub in entry.nested {
            block(inset: (left: 10pt))[
              #grid(
                columns: (1fr, auto),
                align: (left, right),
                [
                  #text(weight: "semibold")[#sub.name]
                  #if "project" in sub { text(fill: muted)[ — #sub.project] }
                ],
                text(size: 8pt, fill: muted)[#sub.period],
              )
              #if "location" in sub and sub.location != "" {
                text(size: 8pt, fill: muted)[#sub.location]
              }
              #if "bullets" in sub {
                v(1pt)
                for b in sub.bullets [
                  #text(fill: accent)[•] #h(4pt) #b \
                ]
              }
            ]
            v(3pt)
          }
        }
      ]
      v(6pt)
    }
    v(2pt)
  }
}

// Helper: render a skills block (grouped) — called from content files
// inside a section's `entries` via a raw content block.
#let skills-grid(groups) = {
  for (label, items) in groups {
    block[
      #text(weight: "semibold")[#label:] #h(4pt)
      #items.join(" · ")
    ]
    v(2pt)
  }
}
