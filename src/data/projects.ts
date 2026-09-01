import type { ImageMetadata } from "astro";

import { dict } from "../i18n";
import { PROJECT_TAGS } from "../lib/projectTags";

import baiardiReservasAdmin from "../assets/projects/baiardireservas-admin.webp";
import baiardiReservasImg from "../assets/projects/baiardireservas.webp";
import estudioFromentImg from "../assets/projects/estudiofroment.webp";
import intimaOnlineImg from "../assets/projects/intimaonline.webp";
import laCarlotaImg from "../assets/projects/lacarlota.webp";
import laboratorioSpotornoImg from "../assets/projects/laboratoriospotorno.webp";
import legallyOnTheMoveImg from "../assets/projects/legallyonthemove.webp";
import medicinaDiagnosticaImg from "../assets/projects/medicinadiagnostica.webp";
import refugioIlonImg from "../assets/projects/refugioilonweb.webp";
import viveroTakumiAdmin from "../assets/projects/viverotakumi-admin.webp";
import viveroTakumiImg from "../assets/projects/viverotakumi.webp";

const TAG = PROJECT_TAGS;

export type ProjectKey = keyof typeof dict.es.projects.items;

export type Project = {
  key: ProjectKey;
  href: string;
  image: ImageMetadata;
  /** Display names. The first one is rendered as the headline technology. */
  tags: string[];
  /** Featured projects get the large alternating layout; the rest are mini cards. */
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    key: "froment",
    href: "/estudiofroment",
    image: estudioFromentImg,
    tags: [TAG.ASTR, TAG.TAILWIND, TAG.GSAP, TAG.VERCEL],
    featured: true,
  },
  {
    key: "ilonBooking",
    href: "/casos/refugioilon-booking",
    image: refugioIlonImg,
    tags: [
      TAG.LARAVEL,
      TAG.LIVEWIRE,
      TAG.TAILWIND,
      TAG.MYSQL,
      TAG.MERCADOPAGO,
    ],
    featured: true,
  },
  {
    key: "baiardiReservas",
    href: "/casos/baiardi-reservas",
    image: baiardiReservasImg,
    tags: [
      TAG.LARAVEL,
      TAG.LIVEWIRE,
      TAG.TAILWIND,
      TAG.MERCADOPAGO,
      TAG.DO,
    ],
    featured: true,
  },
  {
    key: "viveroTakumi",
    href: "/casos/vivero-takumi",
    image: viveroTakumiImg,
    tags: [
      TAG.REACT,
      TAG.VITE,
      TAG.TAILWIND,
      TAG.SUPABASE,
      TAG.NETLIFY,
    ],
    featured: false,
  },
  {
    key: "intimaOnline",
    href: "/casos/intima-online",
    image: intimaOnlineImg,
    tags: [TAG.ASTR, TAG.TAILWIND, TAG.TYPESCRIPT],
    featured: false,
  },
  {
    key: "medicinaDiagnostica",
    href: "/casos/medicina-diagnostica",
    image: medicinaDiagnosticaImg,
    tags: [
      TAG.NEXTJS,
      TAG.TYPESCRIPT,
      TAG.TAILWIND,
      TAG.GSAP,
    ],
    featured: false,
  },
  {
    key: "laCarlota",
    href: "/casos/la-carlota",
    image: laCarlotaImg,
    tags: [TAG.ASTR, TAG.TAILWIND],
    featured: false,
  },
  {
    key: "laboratorioSpotorno",
    href: "/casos/laboratorio-spotorno",
    image: laboratorioSpotornoImg,
    tags: [TAG.HTML, TAG.TAILWIND],
    featured: false,
  },
  {
    key: "legallyOnTheMove",
    href: "/casos/legally-on-the-move",
    image: legallyOnTheMoveImg,
    tags: [TAG.HTML, TAG.TAILWIND, TAG.GSAP],
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const SECONDARY_PROJECTS = PROJECTS.filter((p) => !p.featured);

/** Secondary screenshots, used by the case-study pages only. */
export const ADMIN_SCREENSHOTS = {
  baiardiReservas: baiardiReservasAdmin,
  viveroTakumi: viveroTakumiAdmin,
} satisfies Record<string, ImageMetadata>;

export {
  baiardiReservasImg,
  estudioFromentImg,
  intimaOnlineImg,
  laCarlotaImg,
  laboratorioSpotornoImg,
  legallyOnTheMoveImg,
  medicinaDiagnosticaImg,
  refugioIlonImg,
  viveroTakumiImg,
};
