import type { ImageMetadata } from "astro";

import type { AccentKey } from "../lib/accents";
import type { Lang } from "../i18n/types";
import { dict } from "../i18n/dictionary";
import {
  ADMIN_SCREENSHOTS,
  baiardiReservasImg,
  intimaOnlineImg,
  laCarlotaImg,
  laboratorioSpotornoImg,
  legallyOnTheMoveImg,
  medicinaDiagnosticaImg,
  refugioIlonImg,
  viveroTakumiImg,
} from "./projects";

/**
 * Everything that used to live in nine near-identical page files under
 * `src/pages/casos/`. With two locales those would have become eighteen, so
 * the pages are generated from this list instead.
 */

type Localized = Record<Lang, string>;

export type CaseConfig = {
  /** Final URL segment, shared by both locales. */
  slug: string;
  /** Entry in `dict[lang].cases`. */
  key: keyof typeof dict.es.cases;
  accentKey?: AccentKey;
  image: ImageMetadata;
  cardAlt: Localized;
  cardCaption?: Localized;
  secondaryImage?: ImageMetadata;
  secondaryAlt?: Localized;
  secondaryCaption?: Localized;
  frontendBadges: string[];
  libraryBadges: string[];
  deployBadges: string[];
};

export const CASES: CaseConfig[] = [
  {
    slug: "refugioilon-booking",
    key: "refugioilonBooking",
    accentKey: "refugioilon-booking",
    image: refugioIlonImg,
    cardAlt: {
      es: "Refugio Ilón · plataforma de reservas",
      en: "Refugio Ilón · booking platform",
    },
    frontendBadges: ["Livewire 3", "Tailwind CSS 4", "Blade"],
    libraryBadges: ["Mercado Pago", "Resend"],
    deployBadges: ["Laravel 12", "MySQL", "Apache"],
  },
  {
    slug: "baiardi-reservas",
    key: "baiardiReservas",
    accentKey: "baiardi-reservas",
    image: baiardiReservasImg,
    cardAlt: {
      es: "Baiardi Aventura — sitio público de reservas",
      en: "Baiardi Aventura — public booking site",
    },
    cardCaption: {
      es: "Sitio público — landing y reservas de actividades.",
      en: "Public site — landing and activity bookings.",
    },
    secondaryImage: ADMIN_SCREENSHOTS.baiardiReservas,
    secondaryAlt: {
      es: "Baiardi Aventura — panel de administración",
      en: "Baiardi Aventura — admin dashboard",
    },
    secondaryCaption: {
      es: "Panel de administración — gestión de reservas y salidas.",
      en: "Admin dashboard — booking and trip management.",
    },
    frontendBadges: ["Livewire 3", "Tailwind CSS 4", "Alpine.js"],
    libraryBadges: ["Mercado Pago", "Resend"],
    deployBadges: ["Laravel 12", "MySQL", "DigitalOcean"],
  },
  {
    slug: "vivero-takumi",
    key: "viveroTakumi",
    accentKey: "vivero-takumi",
    image: viveroTakumiImg,
    cardAlt: {
      es: "Vivero Takumi — tienda online de plantas",
      en: "Vivero Takumi — online plant store",
    },
    cardCaption: {
      es: "Tienda pública — catálogo, carrito y checkout.",
      en: "Public store — catalog, cart and checkout.",
    },
    secondaryImage: ADMIN_SCREENSHOTS.viveroTakumi,
    secondaryAlt: {
      es: "Vivero Takumi — panel de administración",
      en: "Vivero Takumi — admin dashboard",
    },
    secondaryCaption: {
      es: "Panel de administración — métricas, plantas y pedidos.",
      en: "Admin dashboard — metrics, plants and orders.",
    },
    frontendBadges: ["React 19", "Tailwind CSS 3", "React Router 7"],
    libraryBadges: ["Supabase", "Motion", "Recharts", "Resend"],
    deployBadges: ["Netlify", "Netlify Functions"],
  },
  {
    slug: "intima-online",
    key: "intimaOnline",
    image: intimaOnlineImg,
    cardAlt: {
      es: "Intima Online — radio online",
      en: "Intima Online — online radio",
    },
    frontendBadges: ["Astro", "Tailwind CSS", "TypeScript"],
    libraryBadges: [],
    deployBadges: [],
  },
  {
    slug: "medicina-diagnostica",
    key: "medicinaDiagnostica",
    accentKey: "medicina-diagnostica",
    image: medicinaDiagnosticaImg,
    cardAlt: {
      es: "Medicina Diagnóstica — centro médico",
      en: "Medicina Diagnóstica — medical centre",
    },
    frontendBadges: ["Next.js", "Tailwind CSS v4", "TypeScript"],
    libraryBadges: ["GSAP"],
    deployBadges: [],
  },
  {
    slug: "la-carlota",
    key: "laCarlota",
    accentKey: "la-carlota",
    image: laCarlotaImg,
    cardAlt: {
      es: "La Carlota del Monte — establecimiento ecuestre",
      en: "La Carlota del Monte — equestrian estate",
    },
    frontendBadges: ["Astro", "Tailwind CSS"],
    libraryBadges: [],
    deployBadges: [],
  },
  {
    slug: "laboratorio-spotorno",
    key: "laboratorioSpotorno",
    accentKey: "laboratorio-spotorno",
    image: laboratorioSpotornoImg,
    cardAlt: {
      es: "Laboratorio Spotorno — análisis clínicos",
      en: "Laboratorio Spotorno — clinical analysis lab",
    },
    frontendBadges: ["HTML", "Tailwind CSS"],
    libraryBadges: [],
    deployBadges: [],
  },
  {
    slug: "legally-on-the-move",
    key: "legallyOnTheMove",
    accentKey: "legally-on-the-move",
    image: legallyOnTheMoveImg,
    cardAlt: {
      es: "Legally On The Move — consultoría legal en movilidad",
      en: "Legally On The Move — legal mobility consultancy",
    },
    frontendBadges: ["Astro", "Tailwind CSS", "TypeScript"],
    libraryBadges: ["GSAP"],
    deployBadges: [],
  },
];
