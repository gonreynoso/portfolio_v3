#import "template.typ": cv, skills-grid

#show: doc => cv(
  name: "Gonzalo Reynoso",
  title: "Freelance Full-Stack Developer · Kensiweb",
  contact: (
    email: "gonzalo.reynoso9@gmail.com",
    phone: "+54 9 11 32579045",
    location: "Buenos Aires, Argentina",
    website: "gonreynoso.dev",
    linkedin: "linkedin.com/in/gonreynoso",
    github: "github.com/gonreynoso",
    brand: "kensiweb.com",
  ),
  summary: [
    Desarrollador full-stack con foco en sistemas web a medida e integraciones con
    IA. Trabajo como freelance bajo mi marca *Kensiweb*: construyo plataformas con
    Laravel, Livewire, Node y PostgreSQL, y me encargo del deploy y mantenimiento
    sobre infraestructura propia (DigitalOcean, Contabo, Ubuntu). Estudiante avanzado
    de Análisis de Sistemas (Da Vinci). Inglés C1.
  ],
  ui: ( profile: "Perfil profesional" ),
  sections: (
    (
      title: "Experiencia",
      entries: (
        (
          role: "Freelance Full-Stack Developer",
          company: "Kensiweb",
          period: "2024 — Presente",
          location: "Remoto · Buenos Aires, AR",
          summary: [Sistemas a medida, integraciones con IA e infraestructura
            propia para clientes de Argentina y Chile.],
          nested: (
            (
              name: "Refugio Ilón",
              project: "Bot de WhatsApp con IA + plataforma de reservas",
              period: "Jul 2025 — Presente",
              location: "Bariloche, AR",
              bullets: (
                [Bot conversacional en WhatsApp con *Claude* como backend, integrado con la WhatsApp Cloud API (verificación Meta Business).],
                [Plataforma web de reservas en PHP + WordPress, administración vía phpMyAdmin, flujo optimizado de booking.],
                [Diseñado para escalar como SaaS para otros refugios de montaña.],
              ),
            ),
            (
              name: "Estudio Froment & Asociados",
              project: "Rediseño completo del sitio institucional",
              period: "Sep 2025 — Oct 2025",
              location: "Buenos Aires, AR",
              bullets: (
                [Frontend a medida en SASS + Bootstrap 5; Swiper.js y Lenis para scroll suave y sliders.],
                [Modelado de datos para validación de miembros del estudio; deploy continuo en Vercel; DNS en NIC.ar.],
              ),
            ),
            (
              name: "Innevo",
              project: "Frontend Angular de aplicación web",
              period: "Oct 2024 — Feb 2025",
              location: "Santiago de Chile, CL (remoto)",
              bullets: (
                [Componentes modulares en Angular + Angular Material, consumo de REST APIs.],
                [TypeScript estricto, equipo distribuido Argentina–Chile.],
              ),
            ),
          ),
        ),
        (
          role: "Administrative & IT Analyst",
          company: "Medicina Diagnóstica",
          period: "Ago 2020 — Abr 2024",
          location: "CABA, AR",
          bullets: (
            [Automatización de liquidación de sueldos con Google Script y dashboards financieros en Power BI.],
            [Diseño y desarrollo del sitio institucional del laboratorio (WordPress + MySQL).],
            [Gestión documental, facturación y atención a pacientes y proveedores.],
          ),
        ),
        (
          role: "Pasantía · Front-end React Developer",
          company: "Informental",
          period: "Nov 2023 — Dic 2023",
          location: "Mendoza, AR",
          bullets: (
            [Migración de la aplicación de PHP a React, con formularios, tabs y gráficos.],
            [Optimización de tiempos de carga en ~15% usando React Server Components.],
          ),
        ),
      ),
    ),
    (
      title: "Formación",
      entries: (
        (
          role: "Analista de Sistemas",
          company: "Universidad Da Vinci",
          period: "Sep 2024 — Dic 2027",
          location: "CABA, AR",
          bullets: (
            [Diseño de bases de datos relacionales, modelado lógico y físico.],
            [SQL avanzado, administración y optimización con SQL Server y MySQL.],
            [Introducción a bases NoSQL y herramientas de administración.],
          ),
        ),
        (
          role: "Diplomatura en Bases de Datos",
          company: "UTN",
          period: "Jul 2025",
          location: "CABA, AR",
        ),
        (
          role: "Full Stack Developer (PERN)",
          company: "Henry Bootcamp",
          period: "Ene 2023 — Jul 2023",
          location: "CABA, AR",
        ),
        (
          role: "Curso avanzado de React / TypeScript",
          company: "Udemy",
          period: "Jul 2023 — Dic 2023",
        ),
      ),
    ),
    (
      title: "Certificaciones",
      entries: (
        (
          role: "Inglés C1 avanzado",
          company: "Efset",
          period: "cert.efset.org/es/iLxjy3",
        ),
        (
          role: "Diplomatura en Bases de Datos",
          company: "UTN — Centro de e-Learning",
          period: "2025",
        ),
        (
          role: "Full Stack Developer",
          company: "Henry Bootcamp",
          period: "2023",
        ),
        (
          role: "Web Developer · React.js · JavaScript",
          company: "CoderHouse",
          period: "",
        ),
      ),
    ),
    (
      title: "Skills",
      entries: (
        (
          role: "",
          period: "",
          summary: [
            *Backend:* Laravel · Livewire · PHP · Node.js · Express · Java \
            *Frontend:* Astro · React · Angular · Tailwind · SASS · Bootstrap · HTML / CSS \
            *Datos:* PostgreSQL · MySQL · SQL Server · Firestore · Firebase \
            *IA:* Claude API · OpenRouter · WhatsApp Cloud API \
            *Infra / DevOps:* DigitalOcean · Contabo · Ubuntu · SSH · Docker · Git · GitHub · GitLab \
            *Tooling:* Jira · Trello · Photoshop
          ],
        ),
      ),
    ),
  ),
)
