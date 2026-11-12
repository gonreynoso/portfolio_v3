// Site title and description are per-locale; they live in src/i18n/dictionary.ts.

// Google Tag Manager is the single tag loader on this site.
//
// GA4 used to be loaded here with gtag.js as well, which meant every page view
// was counted twice as soon as the container also carried a GA4 tag. Tags now
// live in the container; the property below is configured there, not in code.
// It is kept next to the container id so it stays obvious which GA4 property
// GTM-MHMBWJQT is expected to configure.
export const GTM_ID = "GTM-MHMBWJQT";
export const GOOGLE_ANALYTICS_ID = "G-JMD3GPE5NV";

export const TRANSITION_API = true;
