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
  projects: {
    title: "Proyectos",
    subtitle:
      "Una selección reciente de trabajos bajo Kensiweb. Cada proyecto combina backend, frontend y la infraestructura que lo sostiene.",
    items: {
      ilonBot: {
        title: "Refugio Ilón · Bot de WhatsApp con IA",
        description:
          "Bot de WhatsApp con Claude como backend conversacional para gestionar consultas y reservas del Refugio Ilón, en Bariloche. Integración completa con la WhatsApp Cloud API (verificación Meta Business) y persistencia en PostgreSQL. Pensado para escalar a SaaS para otros refugios de montaña.",
        linkLabel: "Demo",
      },
      froment: {
        title: "Estudio Froment & Asociados",
        description:
          "Rediseño web para un estudio jurídico con 40 años de trayectoria, con estética \"premium editorial\" y cero deuda técnica. Frontend a medida en SASS + Bootstrap 5, integraciones con Swiper.js y Lenis para scroll suave, deploy continuo en Vercel y gestión de DNS con NIC.ar.",
        linkLabel: "Ver caso",
      },
      ilonBooking: {
        title: "Refugio Ilón · Plataforma de Reservas",
        description:
          "Sistema de reservas web para el Refugio Ilón cerca de la Laguna Ilón. Aplicación basada en PHP y WordPress con administración vía phpMyAdmin, flujo de reserva optimizado para visitantes y backoffice para gestionar disponibilidad.",
        linkLabel: "Ver sitio",
      },
    },
    viewCase: "Ver caso",
    viewSite: "Ver sitio",
  },
  waMockup: {
    header: "Refugio Ilón",
    headerStatus: "en línea",
    timestamp: "10:42",
    chat: [
      {
        from: "user",
        text: "¡Hola! ¿Tienen lugar el fin de semana del 15 de julio?",
      },
      {
        from: "bot",
        text: "¡Hola! Gracias por escribir a Refugio Ilón. Para esa fecha tengo disponibilidad en la habitación compartida para 4 personas, $25.000 por noche. ¿Cuántos son?",
      },
      { from: "user", text: "Somos dos." },
      {
        from: "bot",
        text: "Perfecto. Te reservo las dos plazas para el sábado 15 y domingo 16. Total: $50.000. Te paso el CBU y con la transferencia confirmo.",
      },
    ],
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
  projects: {
    title: "Projects",
    subtitle:
      "A recent selection of work delivered under Kensiweb. Each project pairs backend, frontend and the infrastructure that keeps it running.",
    items: {
      ilonBot: {
        title: "Refugio Ilón · AI WhatsApp Bot",
        description:
          "WhatsApp bot with Claude as the conversational backend, handling inquiries and bookings for Refugio Ilón in Bariloche, Argentina. Full WhatsApp Cloud API integration with Meta Business verification, conversational state stored in PostgreSQL. Designed to scale into a SaaS for other mountain shelters.",
        linkLabel: "Demo",
      },
      froment: {
        title: "Estudio Froment & Asociados",
        description:
          "Digital redesign for a law firm with a 40-year legacy, aiming for a \"premium editorial\" aesthetic and zero technical debt. Custom frontend in SASS + Bootstrap 5, Swiper.js and Lenis for smooth scrolling, continuous deployment on Vercel and DNS management through NIC.ar.",
        linkLabel: "View case",
      },
      ilonBooking: {
        title: "Refugio Ilón · Booking Platform",
        description:
          "Web booking system for Refugio Ilón, near Laguna Ilón. PHP + WordPress stack with phpMyAdmin-based administration, a streamlined reservation flow for visitors and a back-office for managing availability.",
        linkLabel: "View site",
      },
    },
    viewCase: "View case",
    viewSite: "View site",
  },
  waMockup: {
    header: "Refugio Ilón",
    headerStatus: "online",
    timestamp: "10:42",
    chat: [
      {
        from: "user",
        text: "Hi! Is there any availability for the weekend of July 15th?",
      },
      {
        from: "bot",
        text: "Hi! Thanks for reaching Refugio Ilón. For those dates I have spots in the 4-person shared room, ARS $25,000 per night. How many of you are there?",
      },
      { from: "user", text: "Two of us." },
      {
        from: "bot",
        text: "Got it. I'll reserve both spots for Saturday the 15th and Sunday the 16th. Total: ARS $50,000. I'll send the bank details here; once I see the transfer I confirm the booking.",
      },
    ],
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
