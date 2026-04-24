import type { Lang } from "./types";

const es = {
  nav: {
    home: "Inicio",
    resume: "CV",
  },
  hero: {
    greeting: "Hola,",
    name: "soy Gonzalo Reynoso",
    role: "Freelance Developer · Kensiweb",
    tagline: "Sistemas web a medida e integraciones con IA.",
    bio: "Construyo plataformas a medida y automatizaciones con LLMs para PyMEs y proyectos independientes. Trabajo end-to-end: backend, frontend, infraestructura y deploy. Estudio Análisis de Sistemas en Da Vinci.",
    availableBadge: "Disponible para trabajar",
    ctaContact: "Contactame",
    resumeLabel: "CV",
    emailCopyAria: "Copiar email",
  },
  ui: {
    copied: "¡Copiado!",
    copy: "Copiar",
    close: "Cerrar",
  },
  contact: {
    title: "Hablemos",
    subtitle: "Elegí el canal que prefieras.",
    sendEmail: "Escribime un mail",
    copyEmail: "Copiar email",
    linkedin: "LinkedIn",
    close: "Cerrar",
  },
  contactCta: {
    title: "¿Tenés un proyecto en mente?",
    body: "Cotizaciones, consultas técnicas o un café virtual. Escribime y lo charlamos.",
    button: "Contactame",
  },
  footer: {
    developedBy: "Hecho por Gonzalo Reynoso",
    brandPrefix: "·",
    brandNote: "Trabajo freelance bajo",
  },
} as const;

type Dict = typeof es;

const en: Dict = {
  nav: {
    home: "Home",
    resume: "Resume",
  },
  hero: {
    greeting: "Hi,",
    name: "I'm Gonzalo Reynoso",
    role: "Freelance Developer · Kensiweb",
    tagline: "Custom web systems and AI integrations.",
    bio: "I build tailored platforms and LLM-powered automations for small businesses and independent teams. End-to-end work: backend, frontend, infrastructure and deployment. Currently studying Systems Analysis at Da Vinci.",
    availableBadge: "Available for work",
    ctaContact: "Get in touch",
    resumeLabel: "Resume",
    emailCopyAria: "Copy email",
  },
  ui: {
    copied: "Copied!",
    copy: "Copy",
    close: "Close",
  },
  contact: {
    title: "Let's talk",
    subtitle: "Pick whichever channel works for you.",
    sendEmail: "Send me an email",
    copyEmail: "Copy email",
    linkedin: "LinkedIn",
    close: "Close",
  },
  contactCta: {
    title: "Got a project in mind?",
    body: "Quotes, technical questions or a virtual coffee. Drop me a line and we'll take it from there.",
    button: "Get in touch",
  },
  footer: {
    developedBy: "Built by Gonzalo Reynoso",
    brandPrefix: "·",
    brandNote: "Freelance work under",
  },
};

export const dict: Record<Lang, Dict> = { es, en };
export type { Dict };
