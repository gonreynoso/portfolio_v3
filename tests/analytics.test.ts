import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFileSync(path, "utf8");

const listFiles = (dir: string): string[] =>
  readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? listFiles(full) : [full];
  });

const GTZ = "src/components/Analytics/Gtm.astro";
const GTZ_NOSCRIPT = "src/components/Analytics/GtmNoScript.astro";

describe("Google Tag Manager loader", () => {
  it("loads the container from a dedicated head component", () => {
    expect(existsSync(GTZ)).toBe(true);
    const gtm = read(GTZ);
    expect(gtm).toContain("https://www.googletagmanager.com/gtm.js?id=");
    expect(gtm).toContain("GTM_ID");
  });

  it("pushes gtm.start into dataLayer before the container boots", () => {
    const gtm = read(GTZ);
    expect(gtm).toMatch(/["']gtm\.start["']/);
    expect(gtm).toMatch(/event:\s*["']gtm\.js["']/);
    // The event has to be queued before the loader script is requested.
    expect(gtm.indexOf("gtm.start")).toBeLessThan(gtm.indexOf("gtm.js?id="));
  });

  it("is inlined so the bundler does not wrap the snippet", () => {
    expect(read(GTZ)).toContain("is:inline");
  });

  it("does not mix the gtag.js API into the container", () => {
    expect(read(GTZ)).not.toMatch(/function\s+gtag\s*\(/);
    expect(read(GTZ)).not.toMatch(/gtag\(\s*["']config["']/);
  });

  it("only runs in production builds", () => {
    expect(read(GTZ)).toContain("import.meta.env.PROD");
  });
});

describe("noscript fallback", () => {
  it("renders the container iframe with the configured id", () => {
    expect(existsSync(GTZ_NOSCRIPT)).toBe(true);
    const fallback = read(GTZ_NOSCRIPT);
    expect(fallback).toContain("https://www.googletagmanager.com/ns.html?id=");
    expect(fallback).toContain("GTM_ID");
    expect(fallback).toContain("<noscript>");
  });

  it("is wired into the layout after <body> and the loader before </head>", () => {
    const layout = read("src/layouts/V4Layout.astro");
    expect(layout.indexOf("<Gtm />")).toBeGreaterThan(-1);
    expect(layout.indexOf("<Gtm />")).toBeLessThan(layout.indexOf("</head>"));
    expect(layout.indexOf("<GtmNoScript />")).toBeGreaterThan(
      layout.indexOf("<body>"),
    );
    expect(layout.indexOf("<GtmNoScript />")).toBeLessThan(
      layout.indexOf("</body>"),
    );
  });
});

describe("single source of truth for tags", () => {
  it("declares the container id in config", () => {
    expect(read("src/config.ts")).toContain('GTM_ID = "GTM-MHMBWJQT"');
  });

  it("keeps the GA4 property documented so the container can configure it", () => {
    expect(read("src/config.ts")).toContain("G-JMD3GPE5NV");
  });

  it("removes the direct gtag.js loader", () => {
    expect(read("src/components/Analytics/Analytics.astro")).not.toMatch(
      /googletagmanager\.com\/gtag\/js/,
    );
  });

  it("removes the direct GA4 configuration call", () => {
    const analytics = read("src/components/Analytics/Analytics.astro");
    expect(analytics).not.toMatch(/function\s+gtag\s*\(/);
    expect(analytics).not.toMatch(/gtag\(\s*["']config["']/);
  });

  it("keeps Vercel Analytics running", () => {
    expect(read("src/components/Analytics/Analytics.astro")).toContain(
      "@vercel/analytics",
    );
  });

  it("leaves no gtag.js loader anywhere under src/", () => {
    const offenders = listFiles("src").filter((file) =>
      /googletagmanager\.com\/gtag\/js/.test(read(file)),
    );
    expect(offenders).toEqual([]);
  });
});
