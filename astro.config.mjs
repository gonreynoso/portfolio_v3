import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://gonreynoso.dev',
  integrations: [
    // No `i18n` option here: it assumes every locale carries a URL prefix,
    // and Spanish deliberately does not, which collapsed the sitemap to a
    // single entry. The hreflang alternates BaseHead emits in <head> are a
    // complete signal on their own.
    sitemap(),
    tailwind(),
  ],
  vite: {
    ssr: {
      // sharp ships native bindings; Vite must not try to process it.
      external: ['sharp'],
    },
  },
});
