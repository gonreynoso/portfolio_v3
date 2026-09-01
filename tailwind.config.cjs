/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      // Portfolio v4 design tokens. The values live as oklch custom
      // properties in src/styles/v4.css; this only exposes them to Tailwind
      // so components never hardcode a color.
      colors: {
        ac: "var(--ac)",
        ac12: "var(--ac12)",
        ac06: "var(--ac06)",
        ac30: "var(--ac30)",
        bg: "var(--bg)",
        s1: "var(--s1)",
        s2: "var(--s2)",
        b1: "var(--b1)",
        b2: "var(--b2)",
        t1: "var(--t1)",
        t2: "var(--t2)",
        t3: "var(--t3)",
      },
      fontFamily: {
        mono: [
          "'JetBrains Mono Variable'",
          "'JetBrains Mono'",
          "ui-monospace",
          "monospace",
        ],
      },
      borderRadius: {
        v4: "4px",
      },
      transitionDuration: {
        v4: "220ms",
      },
      keyframes: {
        "v4-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "v4-spin": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "v4-blink": "v4-blink 1.1s step-end infinite",
        "v4-spin": "v4-spin 8s linear infinite",
        "v4-bob": "v4-bob 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
