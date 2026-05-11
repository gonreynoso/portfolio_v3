import type { Lang } from "./types";

const es = {
  nav: {
    home: "Inicio",
    resume: "CV",
  },
  hero: {
    greeting: "Hola,",
    name: "Soy Gonzalo Reynoso",
    role: "Desarrollador Freelance · Kensiweb",
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
  resume: {
    profileTitle: "Perfil",
    profileBody:
      "Desarrollador full-stack con experiencia en aplicaciones web completas. Trabajo como freelance bajo mi marca Kensiweb, con foco en sistemas a medida e integraciones con IA. Manejo backend (Laravel, Node/Express, PHP, Java), frontend (Astro, React, Angular, Tailwind), bases relacionales (PostgreSQL, MySQL) y el deploy sobre mi propia infraestructura (DigitalOcean, Contabo, Ubuntu + SSH). Control de versiones con Git; trabajo con metodologías Scrum y Kanban. Inglés C1.",
    experienceTitle: "Experiencia",
    internshipsTitle: "Pasantías",
    internship: {
      role: "Front-end React Developer",
      company: "Informental",
      period: "Nov 2023 – Dic 2023",
      location: "Mendoza, AR",
      bullets: [
        "Migración de la aplicación de PHP a React.",
        "Desarrollo de la versión web: tabs, formularios y gráficos.",
        "Optimización de tiempos de carga ~15% con React Server Components.",
      ],
    },
    educationTitle: "Formación",
    education: [
      {
        title: "Analista de Sistemas",
        where: "Universidad Da Vinci",
        period: "Sep 2024 – Dic 2027",
        location: "CABA, AR",
        bullets: [
          "Diseño y modelado de bases de datos relacionales.",
          "SQL avanzado, administración y optimización con SQL Server y MySQL.",
          "Introducción a bases NoSQL.",
        ],
      },
      {
        title: "Diplomatura en Bases de Datos",
        where: "UTN",
        period: "Jul 2025",
        location: "CABA, AR",
        bullets: [
          "Diseño, administración y optimización de bases relacionales.",
          "SQL avanzado y herramientas sobre SQL Server, MySQL y Oracle.",
        ],
      },
      {
        title: "Full Stack Developer (PERN)",
        where: "Henry Bootcamp",
        period: "Ene 2023 – Jul 2023",
        location: "CABA, AR",
        bullets: [
          "Stack PERN (PostgreSQL, Express, React, Node.js).",
          "Proyectos grupales bajo metodología ágil.",
        ],
      },
      {
        title: "Curso avanzado de React / TypeScript",
        where: "Udemy",
        period: "Jul 2023 – Dic 2023",
        location: "",
        bullets: [
          "Componentes, promesas y manejo asincrónico.",
          "Hooks, context, patrones de diseño y ruteo.",
          "Integración con Firebase y Firestore.",
        ],
      },
    ],
    certificationsTitle: "Certificaciones",
    certifications: [
      {
        label: "Advanced C1 English Certificate",
        issuer: "Efset",
        href: "https://cert.efset.org/es/iLxjy3",
      },
      {
        label: "Diplomatura en Bases de Datos",
        issuer: "UTN",
        href: "https://validator.centrodeelearning.com/validator/290f3090-cb4f-43b0-b522-caffe89207d6",
      },
      {
        label: "Full Stack Developer",
        issuer: "Henry Bootcamp",
        href: "https://drive.google.com/file/d/1AW4chaaRdrU2cZTXnBT-DB0HuOwSS4MI/view?usp=sharing",
      },
      {
        label: "Web Developer",
        issuer: "CoderHouse",
        href: "https://drive.google.com/file/d/1UUvrZTnVCAjwyV06SHwauSJBmAIyk2TD/view?usp=sharing",
      },
    ],
    skillsTitle: "Skills",
    skillsGroups: {
      backend: ["Laravel", "Livewire", "PHP", "Node.js", "Express", "Java"],
      frontend: [
        "Astro",
        "React",
        "Angular",
        "Tailwind",
        "SASS",
        "Bootstrap",
        "HTML",
        "CSS",
      ],
      data: ["PostgreSQL", "MySQL", "SQL Server", "Firebase", "Firestore"],
      ai: ["Claude API", "OpenRouter", "WhatsApp Cloud API"],
      infra: ["DigitalOcean", "Contabo", "Ubuntu", "SSH", "Docker", "Git"],
    },
    skillsGroupLabels: {
      backend: "Backend",
      frontend: "Frontend",
      data: "Datos",
      ai: "IA",
      infra: "Infra / DevOps",
    },
    downloadPdf: "Descargar en PDF",
  },
  caseFroment: {
    badge: "Caso de estudio",
    title: "Estudio Froment & Asociados",
    role: "Full-stack Developer & UI Designer · Kensiweb",
    summary:
      'Transformación digital para un estudio jurídico con 40 años de trayectoria. Estética "premium editorial", cero deuda técnica y deploy continuo.',
    backToHome: "← Volver",
    sections: {
      challenge: {
        number: "01",
        title: "El desafío",
        body: "Un estudio jurídico con cuatro décadas de trayectoria necesitaba una identidad digital que reflejara autoridad académica y sobriedad corporativa. El reto fue migrar credenciales legales complejas a una interfaz de alto rendimiento sin el peso de page builders tradicionales, manteniendo una sensación editorial premium.",
      },
      process: {
        number: "02",
        title: "Proceso creativo",
        steps: [
          {
            title: "A. Arquitectura de información",
            body: "Estructuré 40+ años de experiencia legal en un layout jerárquico, priorizando credibilidad y publicaciones académicas.",
          },
          {
            title: "B. Desarrollo en entorno Ubuntu",
            body: 'Armé una arquitectura SASS a medida para gestionar el sistema de diseño "The Froment Gold" en todas las páginas. Usé Bootstrap 5 solo como grid, reemplazando las utilities por SCSS semántico para mejor mantenibilidad.',
          },
          {
            title: "C. Interacciones dinámicas",
            body: 'Integré Swiper.js para el carrusel del equipo legal y Lenis para scroll suave, logrando una experiencia fluida de "nivel agencia".',
          },
        ],
      },
      outcome: {
        number: "03",
        title: "Resultado final",
        body: "Solución técnica sin deuda, con tiempos de carga optimizados y precisión responsive al 100%.",
      },
    },
    specs: {
      title: "Project Specs",
      env: "Entorno de desarrollo",
      envValue: "Ubuntu Linux",
      frontend: "Frontend",
      libraries: "Librerías",
      deploy: "Deploy",
      cta: "Ver sitio en vivo",
      ctaUrl: "https://estudiofroment.kensiweb.com",
    },
  },
  about: {
    title: "Sobre mí",
    p1: "Soy Gonzalo Reynoso, desarrollador full-stack radicado en Buenos Aires. Trabajo como freelance bajo mi propia marca, **Kensiweb**, construyendo sistemas web a medida para PyMEs y proyectos independientes.",
    p2: "Hoy mi foco está en **sistemas con IA integrada**: bots de WhatsApp con Claude como backend conversacional, plataformas de reservas con automatizaciones y gateways que orquestan múltiples LLMs. Me encargo de todo el ciclo: del modelado de datos al deploy en mi propia infraestructura (DigitalOcean, Contabo, Ubuntu).",
    p3: "Paralelamente estudio **Análisis de Sistemas** en Da Vinci, lo que me permite abordar los proyectos desde el relevamiento hasta la solución técnica. Me interesan especialmente los problemas donde el software y el negocio se cruzan y hace falta alguien que entienda ambos.",
  },
  experience: {
    title: "Experiencia",
    clientLabel: "Cliente:",
    projectLabel: "Proyecto:",
    kensiweb: {
      role: "Freelance Full-Stack Developer",
      company: "Kensiweb",
      period: "2024 – Presente",
      location: "Remoto · Buenos Aires, AR",
      summary:
        "Trabajo como freelance bajo mi marca Kensiweb, diseñando e implementando sistemas a medida para PyMEs y proyectos independientes, con foco en integraciones con IA e infraestructura propia.",
      clientsLabel: "Clientes recientes",
      clients: [
        {
          name: "Refugio Ilón",
          project: "Bot de WhatsApp con IA + plataforma de reservas",
          period: "Jul 2025 – Presente",
          location: "Bariloche, AR",
          bullets: [
            "Bot conversacional en WhatsApp con Claude como backend, integrado con la WhatsApp Cloud API (verificación Meta Business).",
            "Plataforma web de reservas en PHP + WordPress, con phpMyAdmin para administración y flujo de booking optimizado.",
          ],
        },
        {
          name: "Estudio Froment & Asociados",
          project: "Sitio institucional · Rediseño completo",
          period: "Sep 2025 – Oct 2025",
          location: "Buenos Aires, AR",
          bullets: [
            "Frontend a medida con SASS + Bootstrap 5, integraciones de scroll y slider con Swiper.js y Lenis.",
            "Modelado de datos para validación de miembros del estudio, deploy continuo en Vercel y gestión de DNS en NIC.ar.",
          ],
        },
        {
          name: "Innevo",
          project: "Frontend Angular para aplicación web",
          period: "Oct 2024 – Feb 2025",
          location: "Santiago de Chile, CL (remoto)",
          bullets: [
            "Desarrollo de componentes modulares con Angular + Angular Material, integración con REST APIs.",
            "TypeScript estricto, trabajo en un equipo distribuido entre Chile y Argentina.",
          ],
        },
      ],
    },
    medicina: {
      role: "Administrative & IT Analyst",
      company: "Medicina Diagnóstica",
      period: "Ago 2020 – Abr 2024",
      location: "CABA, AR",
      bullets: [
        "Optimización de procesos internos mediante soluciones tecnológicas, automatización de tareas y gestión de datos.",
        "Desde la digitalización de documentación hasta atención a clientes internos y externos.",
      ],
    },
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
          'Rediseño web para un estudio jurídico con 40 años de trayectoria, con estética "premium editorial" y cero deuda técnica. Frontend a medida en SASS + Bootstrap 5, integraciones con Swiper.js y Lenis para scroll suave, deploy continuo en Vercel y gestión de DNS con NIC.ar.',
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
};

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
  resume: {
    profileTitle: "Profile",
    profileBody:
      "Full-stack developer with hands-on experience across full web applications. I work as a freelancer under my own brand, Kensiweb, focused on custom systems and AI integrations. I handle backend (Laravel, Node/Express, PHP, Java), frontend (Astro, React, Angular, Tailwind), relational databases (PostgreSQL, MySQL) and deployment on self-owned infrastructure (DigitalOcean, Contabo, Ubuntu + SSH). Version control with Git; comfortable working with Scrum and Kanban. C1 English.",
    experienceTitle: "Experience",
    internshipsTitle: "Internships",
    internship: {
      role: "Front-end React Developer",
      company: "Informental",
      period: "Nov 2023 – Dec 2023",
      location: "Mendoza, AR",
      bullets: [
        "Migrated the application from PHP to React.",
        "Built the web version: tabs, forms and charts.",
        "~15% load-time reduction using React Server Components.",
      ],
    },
    educationTitle: "Education",
    education: [
      {
        title: "Systems Analyst",
        where: "Da Vinci University",
        period: "Sep 2024 – Dec 2027",
        location: "Buenos Aires, AR",
        bullets: [
          "Relational database design and modeling.",
          "Advanced SQL, administration and optimization with SQL Server and MySQL.",
          "Introduction to NoSQL databases.",
        ],
      },
      {
        title: "Diploma in Databases",
        where: "UTN",
        period: "Jul 2025",
        location: "Buenos Aires, AR",
        bullets: [
          "Design, administration and optimization of relational databases.",
          "Advanced SQL tooling on SQL Server, MySQL and Oracle.",
        ],
      },
      {
        title: "Full Stack Developer (PERN)",
        where: "Henry Bootcamp",
        period: "Jan 2023 – Jul 2023",
        location: "Buenos Aires, AR",
        bullets: [
          "PERN stack (PostgreSQL, Express, React, Node.js).",
          "Agile teamwork on group projects.",
        ],
      },
      {
        title: "Advanced React / TypeScript course",
        where: "Udemy",
        period: "Jul 2023 – Dec 2023",
        location: "",
        bullets: [
          "Components, promises and async handling.",
          "Hooks, context, design patterns and routing.",
          "Firebase and Firestore integration.",
        ],
      },
    ],
    certificationsTitle: "Certifications",
    certifications: [
      {
        label: "Advanced C1 English Certificate",
        issuer: "Efset",
        href: "https://cert.efset.org/es/iLxjy3",
      },
      {
        label: "Diploma in Databases",
        issuer: "UTN",
        href: "https://validator.centrodeelearning.com/validator/290f3090-cb4f-43b0-b522-caffe89207d6",
      },
      {
        label: "Full Stack Developer",
        issuer: "Henry Bootcamp",
        href: "https://drive.google.com/file/d/1AW4chaaRdrU2cZTXnBT-DB0HuOwSS4MI/view?usp=sharing",
      },
      {
        label: "Web Developer",
        issuer: "CoderHouse",
        href: "https://drive.google.com/file/d/1UUvrZTnVCAjwyV06SHwauSJBmAIyk2TD/view?usp=sharing",
      },
    ],
    skillsTitle: "Skills",
    skillsGroups: {
      backend: ["Laravel", "Livewire", "PHP", "Node.js", "Express", "Java"],
      frontend: [
        "Astro",
        "React",
        "Angular",
        "Tailwind",
        "SASS",
        "Bootstrap",
        "HTML",
        "CSS",
      ],
      data: ["PostgreSQL", "MySQL", "SQL Server", "Firebase", "Firestore"],
      ai: ["Claude API", "OpenRouter", "WhatsApp Cloud API"],
      infra: ["DigitalOcean", "Contabo", "Ubuntu", "SSH", "Docker", "Git"],
    },
    skillsGroupLabels: {
      backend: "Backend",
      frontend: "Frontend",
      data: "Data",
      ai: "AI",
      infra: "Infra / DevOps",
    },
    downloadPdf: "Download PDF",
  },
  caseFroment: {
    badge: "Case study",
    title: "Estudio Froment & Asociados",
    role: "Full-stack Developer & UI Designer · Kensiweb",
    summary:
      "Digital transformation for a 40-year-old law firm. Premium editorial aesthetic, zero technical debt, continuous deployment.",
    backToHome: "← Back",
    sections: {
      challenge: {
        number: "01",
        title: "The challenge",
        body: "A law firm with four decades of legacy needed a digital identity that reflected academic authority and corporate sobriety. The challenge: migrate complex legal credentials into a high-performance interface without the bloat of traditional page builders, preserving a premium editorial feel.",
      },
      process: {
        number: "02",
        title: "Creative process",
        steps: [
          {
            title: "A. Information architecture",
            body: "Structured 40+ years of legal experience into a hierarchical layout, prioritizing credibility and academic publications.",
          },
          {
            title: "B. Development in a Ubuntu environment",
            body: 'Built a custom SASS architecture to manage the "The Froment Gold" design system across all pages. Used Bootstrap 5 just for the grid, replacing utility classes with semantic SCSS for better maintainability.',
          },
          {
            title: "C. Dynamic interactions",
            body: 'Integrated Swiper.js for the legal-team carousel and Lenis for smooth scrolling, reaching a fluid "agency-grade" experience.',
          },
        ],
      },
      outcome: {
        number: "03",
        title: "Final outcome",
        body: "A zero-debt technical solution with optimized loading speeds and 100% responsive accuracy.",
      },
    },
    specs: {
      title: "Project specs",
      env: "Development environment",
      envValue: "Ubuntu Linux",
      frontend: "Frontend",
      libraries: "Libraries",
      deploy: "Deploy",
      cta: "View live site",
      ctaUrl: "https://estudiofroment.kensiweb.com",
    },
  },
  about: {
    title: "About Me",
    p1: "I'm Gonzalo Reynoso, a full-stack developer based in Buenos Aires. I work as a freelancer under my own brand, **Kensiweb**, building custom web systems for small businesses and independent teams.",
    p2: "These days my focus is on **AI-integrated systems**: WhatsApp bots with Claude as the conversational backend, reservation platforms with automations, and gateways that route traffic across multiple LLMs. I own the full cycle — from data modeling to deploying on my own infrastructure (DigitalOcean, Contabo, Ubuntu).",
    p3: "In parallel, I'm studying **Systems Analysis** at Da Vinci, which lets me approach projects from the initial discovery down to the technical solution. I particularly enjoy problems that sit at the intersection of software and business and need someone fluent in both.",
  },
  experience: {
    title: "Experience",
    clientLabel: "Client:",
    projectLabel: "Project:",
    kensiweb: {
      role: "Freelance Full-Stack Developer",
      company: "Kensiweb",
      period: "2024 – Present",
      location: "Remote · Buenos Aires, AR",
      summary:
        "I work as a freelancer under my own brand, Kensiweb, designing and building custom systems for small businesses and independent teams — with a focus on AI integrations and owning the infrastructure end-to-end.",
      clientsLabel: "Recent clients",
      clients: [
        {
          name: "Refugio Ilón",
          project: "AI WhatsApp bot + booking platform",
          period: "Jul 2025 – Present",
          location: "Bariloche, AR",
          bullets: [
            "Conversational WhatsApp bot with Claude as the backend, integrated with the WhatsApp Cloud API (Meta Business verification).",
            "Web booking platform in PHP + WordPress, with phpMyAdmin administration and an optimized reservation flow.",
          ],
        },
        {
          name: "Estudio Froment & Asociados",
          project: "Institutional site · Full redesign",
          period: "Sep 2025 – Oct 2025",
          location: "Buenos Aires, AR",
          bullets: [
            "Custom frontend in SASS + Bootstrap 5; scroll and slider integrations with Swiper.js and Lenis.",
            "Data modeling for member validation, continuous deployment on Vercel and DNS management through NIC.ar.",
          ],
        },
        {
          name: "Innevo",
          project: "Angular frontend for a web application",
          period: "Oct 2024 – Feb 2025",
          location: "Santiago de Chile, CL (remote)",
          bullets: [
            "Modular components with Angular + Angular Material, REST API integration.",
            "Strict TypeScript, working in a distributed team across Chile and Argentina.",
          ],
        },
      ],
    },
    medicina: {
      role: "Administrative & IT Analyst",
      company: "Medicina Diagnóstica",
      period: "Aug 2020 – Apr 2024",
      location: "CABA, AR",
      bullets: [
        "Optimized internal processes through technology: in-house tooling, task automation and data management.",
        "From document digitization to customer-facing support for both internal and external stakeholders.",
      ],
    },
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
          'Digital redesign for a law firm with a 40-year legacy, aiming for a "premium editorial" aesthetic and zero technical debt. Custom frontend in SASS + Bootstrap 5, Swiper.js and Lenis for smooth scrolling, continuous deployment on Vercel and DNS management through NIC.ar.',
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
