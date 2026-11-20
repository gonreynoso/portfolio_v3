import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { CASE_ACCENTS } from "../src/lib/accents";
import { dict } from "../src/i18n/dictionary";

const read = (path: string) => readFileSync(path, "utf8");

// The copy checks below read the data sources directly (the project's
// established test style): the data files pull WebP assets through Astro,
// which vitest cannot resolve, but the dictionary and accents modules are
// plain TypeScript.

describe("Riserva case wiring", () => {
  it("has a dedicated accent pair in both themes", () => {
    expect(CASE_ACCENTS.riserva).toBeDefined();
    // The brand lime from riserva.com.ar (bg-brand-lime in riserva-front),
    // replacing the original coral — the lime is the CTA color on the site.
    expect(CASE_ACCENTS.riserva.dark).toBe("#c6ff3d");
    // Same hue/chroma, lightness dropped until 4.5:1 against the light --bg
    // (oklch 97% 0.004 240): #4e7b00 measures 4.60:1.
    expect(CASE_ACCENTS.riserva.light).toBe("#4e7b00");
    // Labels on lime-filled buttons use the site's brand ink in both themes:
    // the light theme's default --on-ac (white) is only 1.18:1 on lime.
    expect(CASE_ACCENTS.riserva.on).toBe("#18243b");
    expect(CASE_ACCENTS.riserva).not.toEqual(CASE_ACCENTS["baiardi-reservas"]);
  });

  it("registers the case configuration with the riserva slug", () => {
    const cases = read("src/data/cases.ts");
    expect(cases).toContain('slug: "riserva"');
    expect(cases).toContain('key: "riserva"');
    expect(cases).toContain('accentKey: "riserva"');
    expect(cases).toContain("riservaImg");
    expect(cases).toContain('"Angular 22"');
    expect(cases).toContain('"Google Calendar"');
    expect(cases).toContain('"Laravel 13"');
    expect(cases).toContain('"DigitalOcean"');
  });

  it("lists riserva as the first project before froment", () => {
    const projects = read("src/data/projects.ts");
    const riserva = projects.indexOf('key: "riserva"');
    const froment = projects.indexOf('key: "froment"');
    expect(riserva).toBeGreaterThanOrEqual(0);
    expect(froment).toBeGreaterThan(riserva);
  });

  it("registers the project entry as featured with the riserva slug href", () => {
    const projects = read("src/data/projects.ts");
    expect(projects).toContain('key: "riserva"');
    expect(projects).toContain('href: "/casos/riserva"');
    expect(projects).toContain("riservaImg");
    expect(projects).toContain("TAG.ANGULAR");
  });

  it("exports the Riserva image from the projects module", () => {
    const projects = read("src/data/projects.ts");
    expect(projects).toContain(
      'import riservaImg from "../assets/projects/riserva.webp"',
    );
    expect(projects).toContain("riservaImg,");
  });

  it("has Spanish and English project cards", () => {
    for (const lang of ["es", "en"] as const) {
      const item = dict[lang].projects.items.riserva;
      expect(item.title).toContain("Riserva");
      expect(item.description.length).toBeGreaterThan(40);
      expect(item.linkLabel.length).toBeGreaterThan(0);
    }
  });

  it("keeps internal implementation details out of the riserva copy", () => {
    const forbidden = ["tenant_id", "BelongsToTenant", "middleware", "Sanctum", "2FA"];
    const casesSource = read("src/data/cases.ts");
    for (const lang of ["es", "en"] as const) {
      const cs = JSON.stringify(dict[lang].cases.riserva);
      const item = JSON.stringify(dict[lang].projects.items.riserva);
      for (const term of forbidden) {
        expect(cs).not.toContain(term);
        expect(item).not.toContain(term);
        expect(casesSource).not.toContain(term);
      }
    }
  });

  it("has complete case copy for both locales", () => {
    for (const lang of ["es", "en"] as const) {
      const cs = dict[lang].cases.riserva;
      expect(cs.badge.length).toBeGreaterThan(0);
      expect(cs.title).toContain("Riserva");
      expect(cs.summary.length).toBeGreaterThan(40);
      expect(cs.backToHome.length).toBeGreaterThan(0);
      expect(cs.sections.challenge.body.length).toBeGreaterThan(100);
      expect(cs.sections.process.steps).toHaveLength(4);
      for (const step of cs.sections.process.steps) {
        expect(step.title.length).toBeGreaterThan(0);
        expect(step.body.length).toBeGreaterThan(40);
      }
      expect(cs.sections.outcome.body.length).toBeGreaterThan(60);
      expect(cs.specs.envValue).toBe("Laravel 13 · Angular 22");
      expect(cs.specs.ctaUrl).toBe("https://riserva.com.ar");
    }
    expect(dict.es.cases.riserva.role).toBe(
      "Fundador y Full-stack Developer",
    );
    expect(dict.en.cases.riserva.role).toBe("Founder & Full-stack Developer");
  });
});
