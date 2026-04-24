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
  services: {
    title: "Servicios",
    subtitle:
      "Lo que ofrezco cuando un cliente me contrata bajo Kensiweb: desarrollo full-stack, integraciones con IA y el deploy que sostiene todo en producción.",
    items: {
      custom: {
        title: "Sistemas web a medida",
        desc: "Plataformas de reservas, paneles administrativos y SaaS. Laravel + Livewire + Tailwind, con el dominio del negocio modelado en PostgreSQL.",
      },
      ai: {
        title: "Integraciones con IA",
        desc: "Bots de WhatsApp con Claude API, gateways a múltiples LLMs vía OpenRouter, automatizaciones que conectan la IA a tus flujos internos.",
      },
      infra: {
        title: "Infraestructura y deploy",
        desc: "VPS en DigitalOcean o Contabo, Ubuntu + SSH, dominios y DNS, CI/CD con Git y mantenimiento continuo. Me ocupo de que quede en producción.",
      },
      consulting: {
        title: "Análisis y consultoría",
        desc: "Relevamiento de procesos, modelado de datos y definición técnica antes de tirar una línea de código. Formación en Análisis de Sistemas (Da Vinci).",
      },
    },
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
  services: {
    title: "Services",
    subtitle:
      "What I deliver when a client engages Kensiweb: full-stack development, AI integrations and the infrastructure that keeps it all running.",
    items: {
      custom: {
        title: "Custom web systems",
        desc: "Booking platforms, admin dashboards and SaaS. Laravel + Livewire + Tailwind, with the business domain modeled in PostgreSQL.",
      },
      ai: {
        title: "AI integrations",
        desc: "WhatsApp bots powered by the Claude API, multi-LLM gateways via OpenRouter, automations that plug AI into your internal workflows.",
      },
      infra: {
        title: "Infrastructure & deploy",
        desc: "VPS on DigitalOcean or Contabo, Ubuntu + SSH, domains and DNS, Git-based CI/CD and ongoing maintenance. I take it to production.",
      },
      consulting: {
        title: "Analysis & consulting",
        desc: "Process discovery, data modeling and technical scoping before the first line of code. Formal training in Systems Analysis (Da Vinci).",
      },
    },
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
