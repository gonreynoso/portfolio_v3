import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const read = (path: string) => readFileSync(path, "utf8");

const listFiles = (dir: string): string[] =>
  readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? listFiles(full) : [full];
  });

const SITE = "https://gonreynoso.com";
const AGENCY = "https://kensiweb.com";

describe("robots.txt", () => {
  it("exists as a real file instead of falling through to the 404 page", () => {
    expect(existsSync("public/robots.txt")).toBe(true);
    expect(read("public/robots.txt")).toMatch(/^User-agent:\s*\*/m);
  });

  it("allows crawling and advertises this site's sitemap", () => {
    const robots = read("public/robots.txt");
    expect(robots).toMatch(/^Allow:\s*\/$/m);
    expect(robots).toContain(`Sitemap: ${SITE}/sitemap-index.xml`);
  });

  it("does not advertise the agency domain as this site's sitemap", () => {
    expect(read("public/robots.txt")).not.toMatch(
      new RegExp(`^Sitemap:\\s*${AGENCY}/`, "m"),
    );
  });
});

describe("site identity", () => {
  it("keeps the portfolio as the configured canonical site", () => {
    expect(read("astro.config.mjs")).toContain(`site: '${SITE}'`);
  });

  it("names the portfolio in og:site_name instead of the agency", () => {
    const head = read("src/components/BaseHead.astro");
    expect(head).toContain('property="og:site_name" content="Gonzalo Reynoso"');
    expect(head).not.toContain('property="og:site_name" content="Kensiweb"');
  });

  it("links the person to the agency entity through worksFor", () => {
    const head = read("src/components/BaseHead.astro");
    expect(head).toContain('"worksFor"');
    expect(head).toContain(`"url": "${AGENCY}"`);
  });

  it("stops claiming the agency brand as the person's own brand", () => {
    expect(read("src/components/BaseHead.astro")).not.toContain(
      '"@type": "Brand"',
    );
  });

  it("keeps the personal domain in the JSON-LD person url", () => {
    expect(read("src/components/BaseHead.astro")).toContain(`"url": "${SITE}"`);
  });
});

describe("no dead domain in shipped markup", () => {
  it("renders the .com brand in the navigation", () => {
    expect(read("src/components/v4/NavV4.astro")).toContain(
      '<b class="font-medium text-ac">gonreynoso</b>.com',
    );
  });

  it("mentions gonreynoso.dev nowhere under src/", () => {
    const offenders = listFiles("src").filter((file) =>
      /gonreynoso\.dev|gonreynoso<\/b>\.dev/.test(read(file)),
    );
    expect(offenders).toEqual([]);
  });
});

describe("web manifest", () => {
  it("does not use the agency name as the installed app name", () => {
    const manifest = JSON.parse(read("public/site.webmanifest"));
    expect(manifest.short_name).not.toBe("Kensiweb");
    expect(manifest.name).not.toBe("Kensiweb");
  });
});
