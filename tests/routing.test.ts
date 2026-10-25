import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  alternatePath,
  getLangFromUrl,
  localizePath,
  stripLangPrefix,
} from "../src/i18n/routing";

const url = (path: string) => new URL(path, "https://example.com");

describe("getLangFromUrl", () => {
  it("serves Spanish at the root and unprefixed paths", () => {
    expect(getLangFromUrl(url("/"))).toBe("es");
    expect(getLangFromUrl(url("/casos/refugioilon-booking"))).toBe("es");
  });

  it("detects the English prefix", () => {
    expect(getLangFromUrl(url("/en/"))).toBe("en");
    expect(getLangFromUrl(url("/en/cases/x"))).toBe("en");
  });
});

describe("stripLangPrefix", () => {
  it("drops the English prefix only", () => {
    expect(stripLangPrefix("/en/resume")).toBe("/resume");
    expect(stripLangPrefix("/resume")).toBe("/resume");
    expect(stripLangPrefix("/")).toBe("/");
  });
});

describe("localizePath", () => {
  it("keeps Spanish unprefixed", () => {
    expect(localizePath("/", "es")).toBe("/");
    expect(localizePath("/casos/x", "es")).toBe("/casos/x");
  });

  it("prefixes English and localizes the case segment", () => {
    expect(localizePath("/", "en")).toBe("/en/");
    expect(localizePath("/resume", "en")).toBe("/en/resume");
    expect(localizePath("/casos/x", "en")).toBe("/en/cases/x");
    expect(localizePath("/casos", "en")).toBe("/en/cases");
  });

  it("does not rewrite segments that merely start with casos", () => {
    expect(localizePath("/casosx", "en")).toBe("/en/casosx");
  });
});

describe("alternatePath", () => {
  it("maps Spanish pages to English", () => {
    expect(alternatePath(url("/"), "en")).toBe("/en/");
    expect(alternatePath(url("/casos/x"), "en")).toBe("/en/cases/x");
  });

  it("maps English pages to Spanish", () => {
    expect(alternatePath(url("/en/"), "es")).toBe("/");
    expect(alternatePath(url("/en/cases/x"), "es")).toBe("/casos/x");
  });
});

describe("legacy Refugio Ilón redirects", () => {
  const { redirects } = JSON.parse(readFileSync("vercel.json", "utf8"));
  const find = (source: string) =>
    redirects.find((r: { source: string }) => r.source === source);

  it("redirects the Spanish legacy URL permanently", () => {
    expect(find("/casos/refugioilon-bot")).toMatchObject({
      destination: "/casos/refugioilon-booking",
      statusCode: 301,
    });
  });

  it("redirects the English legacy URL permanently", () => {
    expect(find("/en/cases/refugioilon-bot")).toMatchObject({
      destination: "/en/cases/refugioilon-booking",
      statusCode: 301,
    });
  });

  it("targets match localized case URLs", () => {
    expect(localizePath("/casos/refugioilon-booking", "en")).toBe(
      "/en/cases/refugioilon-booking",
    );
  });
});
