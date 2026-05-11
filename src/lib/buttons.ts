// Shared button class sets so CTAs don't drift across components.
// Two sizes, two visual rolls. All rounded-full.

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 max-w-fit";

export const primaryCta = [
  base,
  "px-5 py-2 text-base font-semibold bg-[#54da7a] text-black hover:bg-[#3fc165] dark:bg-[#54da7a] dark:text-black dark:hover:bg-[#3fc165]",
].join(" ");

export const secondaryCta = [
  base,
  "px-4 py-2 text-base text-gray-800 border border-gray-400 bg-gray-100 hover:bg-gray-200 dark:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
].join(" ");

// Tighter secondary, for small buttons inside card footers (Projects).
export const cardLinkCta = [
  base,
  "px-4 py-2 text-sm text-gray-800 border border-gray-400 bg-gray-100 hover:bg-gray-200 dark:text-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
].join(" ");
