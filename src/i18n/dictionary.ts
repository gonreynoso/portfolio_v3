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
      role: "Desarrollador Frontend",
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
      title: "Especificaciones del proyecto",
      env: "Entorno de desarrollo",
      envValue: "Ubuntu Linux",
      frontend: "Frontend",
      libraries: "Librerías",
      deploy: "Deploy",
      cta: "Ver sitio en vivo",
      ctaUrl: "https://estudiofroment.kensiweb.com",
    },
  },
  cases: {
    refugioilonBot: {
      badge: "Caso de estudio",
      title: "Refugio Ilón · Bot de WhatsApp con IA",
      role: "Full-stack Developer · Kensiweb",
      summary:
        "Bot conversacional en WhatsApp con Claude como backend, integrado con la WhatsApp Cloud API para gestionar consultas y reservas del Refugio Ilón en Bariloche.",
      backToHome: "← Volver",
      sections: {
        challenge: {
          number: "01",
          title: "El desafío",
          body: "El Refugio Ilón, ubicado en Bariloche, recibía decenas de consultas diarias por WhatsApp sobre disponibilidad, precios y reservas. El volumen era imposible de manejar manualmente y la falta de respuestas rápidas hacía perder reservas constantemente. Necesitaban un bot conversacional que entendiera lenguaje natural, gestionara el ciclo completo de reserva y pasara la verificación de Meta Business para operar en producción.",
        },
        process: {
          number: "02",
          title: "Proceso creativo",
          steps: [
            {
              title: "A. Diseño conversacional",
              body: "Diseñé el flujo de conversación con manejo de contexto: el bot entiende consultas sobre disponibilidad, precios por noche, capacidad de habitaciones y fechas. Implementé estados conversacionales para mantener el hilo sin perder información entre mensajes.",
            },
            {
              title: "B. Integración con WhatsApp Cloud API",
              body: "Integré la WhatsApp Cloud API con webhooks para recibir y enviar mensajes en tiempo real. Configuré el sistema de templates para mensajes proactivos y pasé el proceso de verificación de Meta Business, requisito obligatorio para cuentas de producción.",
            },
            {
              title: "C. Backend con Claude API",
              body: "Claude funciona como el cerebro del bot: recibe el mensaje del usuario, lo procesa con el contexto de la conversación y el estado de la reserva, y genera respuestas naturales. Implementé system prompts que definen la personalidad del refugio y las reglas de negocio.",
            },
            {
              title: "D. Persistencia en PostgreSQL",
              body: "Cada conversación, reserva y estado se persiste en PostgreSQL. Esto permite retomar conversaciones interrumpidas, llevar un historial completo y generar reportes de consultas para el dueño del refugio.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Resultado final",
          body: "Bot funcional en producción con verificación Meta Business aprobada. El sistema gestiona consultas 24/7 de forma autónoma, liberando al personal del refugio para tareas operativas. La arquitectura está diseñada para escalar horizontalmente y adaptarse a otros refugios de montaña como producto SaaS.",
        },
      },
      specs: {
        title: "Especificaciones del proyecto",
        env: "Entorno de desarrollo",
        envValue: "Ubuntu Linux · Node.js",
        frontend: "APIs",
        libraries: "Servicios",
        deploy: "Infraestructura",
        // cta: "Ver demo",
        // ctaUrl: "#",
      },
    },
    refugioilonBooking: {
      badge: "Caso de estudio",
      title: "Refugio Ilón · Plataforma de Reservas",
      role: "Full-stack Developer · Kensiweb",
      summary:
        "Sistema de reservas web para el Refugio Ilón con backoffice administrativo, flujo de booking optimizado y gestión de disponibilidad en tiempo real.",
      backToHome: "← Volver",
      sections: {
        challenge: {
          number: "01",
          title: "El desafío",
          body: "El Refugio Ilón necesitaba un sistema de reservas online que reemplazara el proceso manual por WhatsApp. La plataforma debía permitir a los visitantes consultar disponibilidad en tiempo real, hacer reservas y recibir confirmación automática. Del lado administrativo, requería un backoffice para gestionar habitaciones, precios y disponibilidad sin conocimientos técnicos.",
        },
        process: {
          number: "02",
          title: "Proceso creativo",
          steps: [
            {
              title: "A. Modelado de datos",
              body: "Diseñé el esquema relacional completo: habitaciones, tipos de alojamiento, precios por temporada, reservas, huéspedes y estados. Modelé la lógica de disponibilidad para evitar overbooking y conflictos de fechas.",
            },
            {
              title: "B. Desarrollo backend",
              body: "Implementé el backend en PHP sobre WordPress, aprovechando su CMS para páginas institucionales y desarrollando la lógica de reservas como funcionalidad a medida. La base de datos MySQL con phpMyAdmin permite administración directa cuando es necesario.",
            },
            {
              title: "C. Dashboard administrativo",
              body: "Construí un backoffice completo: calendario de reservas, gestión de precios por temporada, panel de consultas recibidas y reportes de ocupación. Todo accesible desde el panel de WordPress sin necesidad de tocar código.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Resultado final",
          body: "Sistema de reservas operativo con flujo completo: el visitante consulta disponibilidad, selecciona fechas, completa sus datos y recibe confirmación. El backoffice permite al refugio gestionar todo desde un solo lugar. Arquitectura preparada para integrarse con el bot de WhatsApp.",
        },
      },
      specs: {
        title: "Especificaciones del proyecto",
        env: "Entorno de desarrollo",
        envValue: "WordPress · PHP",
        frontend: "Frontend",
        libraries: "Librerías",
        deploy: "Deploy",
        cta: "Ver sitio en vivo",
        ctaUrl: "https://refugioilon.com.ar",
      },
    },
    innevo: {
      badge: "Caso de estudio",
      title: "Innevo - Frontend Angular",
      role: "Frontend Developer (Angular) · Kensiweb",
      summary:
        "Desarrollo de frontend modular con Angular, Angular Material y TypeScript estricto para una aplicación web empresarial, integrado con REST APIs y trabajo en equipo distribuido.",
      backToHome: "← Volver",
      sections: {
        challenge: {
          number: "01",
          title: "El desafío",
          body: "Innevo necesitaba un frontend modular, mantenible y escalable para su aplicación web. El equipo trabajaba de forma distribuida entre Chile y Argentina, lo que exigía código limpio, componentes bien encapsulados y TypeScript estricto para atrapar errores en tiempo de compilación. La integración con múltiples REST APIs requería un manejo consistente de estados de carga, error y datos.",
        },
        process: {
          number: "02",
          title: "Proceso creativo",
          steps: [
            {
              title: "A. Setup de Angular",
              body: "Inicialicé el proyecto con Angular CLI, configurando el módulo principal, lazy loading para rutas y el sistema de servicios con inyección de dependencias. TypeScript en modo estricto desde el día uno para garantizar tipado seguro.",
            },
            {
              title: "B. Componentes modulares",
              body: "Diseñé una arquitectura de componentes reutilizables con Angular Material como base de UI. Cada componente tiene su propio módulo, servicio y testing, siguiendo el patrón container-presentational para separar lógica de presentación.",
            },
            {
              title: "C. Integración con APIs REST",
              body: "Implementé servicios Angular con HttpClient para consumir las APIs del backend. Manejo unificado de errores con interceptors HTTP, estados de carga con AsyncPipe y tipado completo de respuestas con interfaces TypeScript.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Resultado final",
          body: "Frontend completo con TypeScript estricto, componentes modulares y pruebas unitarias. El equipo pudo continuar el desarrollo con una base sólida y bien documentada. La arquitectura permitió agregar nuevas funcionalidades sin reescribir código existente.",
        },
      },
      specs: {
        title: "Especificaciones del proyecto",
        env: "Entorno de desarrollo",
        envValue: "Angular CLI · TypeScript",
        frontend: "Frontend",
        libraries: "Librerías",
        deploy: "Deploy",
        cta: "Ver proyecto",
        ctaUrl: "#",
      },
    },
    intimaOnline: {
      badge: "Caso de estudio",
      title: "Intima Online - Radio Online",
      role: "Frontend Developer (Astro) · Kensiweb",
      summary:
        "Plataforma de radio online construida con Astro y Tailwind CSS, con integración de APIs de streaming en vivo y componentes modulares optimizados para rendimiento.",
      backToHome: "← Volver",
      sections: {
        challenge: {
          number: "01",
          title: "El desafío",
          body: "Intima Online necesitaba una plataforma web moderna para su radio online que reemplazara un sitio anticuado. El proyecto requería integración con APIs de streaming en vivo, una experiencia de reproducción fluida y un diseño atractivo pero sobrio. Todo construido con tecnologías modernas que garantizaran rendimiento y facilidad de mantenimiento.",
        },
        process: {
          number: "02",
          title: "Proceso creativo",
          steps: [
            {
              title: "A. Componentes Astro",
              body: "Construí componentes modulares con Astro, aprovechando su arquitectura de islas para minimizar JavaScript del lado del cliente. Cada sección del sitio —reproductor, programación, noticias— es un componente independiente y fácil de mantener.",
            },
            {
              title: "B. Integración de APIs de radio en vivo",
              body: "Integré las APIs de streaming para reproducción en vivo del audio de la radio. Implementé controles de reproducción personalizados y manejo de estados (cargando, reproduciendo, pausado) con feedback visual para el usuario.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Resultado final",
          body: "Plataforma de radio funcional con reproducción en vivo, diseño responsive y navegación fluida. El uso de Astro permitió cargas rápidas y mínimo JavaScript, resultando en una experiencia óptima incluso en conexiones lentas.",
        },
      },
      specs: {
        title: "Especificaciones del proyecto",
        env: "Entorno de desarrollo",
        envValue: "Astro · Node.js",
        frontend: "Frontend",
        libraries: "Librerías",
        deploy: "Deploy",
        cta: "Ver sitio en vivo",
        ctaUrl: "https://intimaonline.com.ar",
      },
    },
    medicinaDiagnostica: {
      badge: "Caso de estudio",
      title: "Medicina Diagnóstica - Centro Médico",
      role: "Full-stack Developer · Kensiweb",
      summary:
        "Plataforma web institucional para centro médico con sistema de turnos online integrado, construida con Next.js, Tailwind CSS v4 y GSAP. +90% de turnos gestionados digitalmente y 96/100 en Lighthouse.",
      backToHome: "← Volver",
      sections: {
        challenge: {
          number: "01",
          title: "El desafío",
          body: "Medicina Diagnóstica necesitaba una plataforma web moderna que combinara su presencia institucional con un sistema de turnos online funcional. Los pacientes debían poder reservar turnos de forma autónoma sin llamar por teléfono, y el centro requería métricas claras de adopción. Además, al ser un centro de salud, la accesibilidad y el SEO médico eran prioridades absolutas.",
        },
        process: {
          number: "02",
          title: "Proceso creativo",
          steps: [
            {
              title: "A. Diagnóstico UX",
              body: "Analicé el flujo actual de atención: el paciente llamaba, esperaba en línea, la recepcionista buscaba disponibilidad y confirmaba. Mapeé cada punto de fricción para diseñar un flujo digital que eliminara esperas y errores humanos.",
            },
            {
              title: "B. Prototipado",
              body: "Diseñé prototipos interactivos del sistema de turnos: selección de especialidad, calendario con disponibilidad en tiempo real, carga de datos del paciente y confirmación automática. Cada paso fue validado con usuarios reales antes de desarrollarlo.",
            },
            {
              title: "C. Desarrollo con Next.js + Tailwind v4",
              body: "Implementé el frontend con Next.js aprovechando SSR para SEO médico y Tailwind CSS v4 para el sistema de diseño. GSAP se usó para animaciones sutiles de transición entre páginas, manteniendo una experiencia de navegación fluida y profesional.",
            },
            {
              title: "D. QA & Deploy",
              body: "Realicé pruebas de carga en el sistema de turnos, auditoría de accesibilidad y optimización de imágenes y recursos. El deploy se hizo con estrategia de caché para contenido estático y regeneración dinámica para disponibilidad de turnos.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Resultado final",
          body: "Plataforma completa con +90% de turnos gestionados digitalmente. Lighthouse score de 96/100 gracias a SSR, lazy loading y optimización de assets. SEO médico posicionado para búsquedas locales de servicios de diagnóstico por imágenes. El centro médico redujo drásticamente las llamadas telefónicas para reserva de turnos.",
        },
      },
      specs: {
        title: "Especificaciones del proyecto",
        env: "Entorno de desarrollo",
        envValue: "Next.js · TypeScript",
        frontend: "Frontend",
        libraries: "Librerías",
        deploy: "Deploy",
        cta: "Ver sitio en vivo",
        ctaUrl: "#",
      },
    },
    laCarlota: {
      badge: "Caso de estudio",
      title: "La Carlota del Monte - Tierra de Caballos",
      role: "Frontend Developer (Astro) · Kensiweb",
      summary:
        "Sitio institucional para un establecimiento ecuestre construido con Astro y Tailwind CSS, con formulario de contacto, integración de Google Maps y diseño que refleja la esencia del lugar.",
      backToHome: "← Volver",
      sections: {
        challenge: {
          number: "01",
          title: "El desafío",
          body: "La Carlota del Monte necesitaba un sitio web institucional que reflejara la calidez y la conexión con la naturaleza de su establecimiento ecuestre. El sitio debía transmitir la experiencia de estar en el campo, mostrar las instalaciones y servicios, y facilitar el contacto con potenciales visitantes. Todo con un diseño limpio y moderno, sin recargar la experiencia.",
        },
        process: {
          number: "02",
          title: "Proceso creativo",
          steps: [
            {
              title: "A. Diseño",
              body: "Trabajé en un diseño visual que capturara la esencia del establecimiento: colores tierra, tipografía serif para títulos que evocan tradición, y mucho espacio negativo para que las fotos del paisaje fueran las protagonistas.",
            },
            {
              title: "B. Desarrollo con Astro",
              body: "Construí el frontend con Astro, aprovechando su generación estática para obtener tiempos de carga ultrarrápidos. Tailwind CSS agilizó el desarrollo del sistema de diseño y la responsividad.",
            },
            {
              title: "C. Integraciones",
              body: "Integré un formulario de contacto funcional con validación del lado del cliente y del servidor, y Google Maps embed para mostrar la ubicación exacta del establecimiento en el mapa.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Resultado final",
          body: "Sitio web funcional y atractivo que representa fielmente la identidad de La Carlota del Monte. Formulario de contacto operativo, mapa interactivo y diseño responsive que funciona perfectamente en dispositivos móviles, donde los visitantes suelen buscar actividades al aire libre.",
        },
      },
      specs: {
        title: "Especificaciones del proyecto",
        env: "Entorno de desarrollo",
        envValue: "Astro · Node.js",
        frontend: "Frontend",
        libraries: "Librerías",
        deploy: "Deploy",
        cta: "Ver sitio en vivo",
        ctaUrl: "#",
      },
    },
    laboratorioSpotorno: {
      badge: "Caso de estudio",
      title: "Laboratorio Spotorno",
      role: "Frontend Developer · Kensiweb",
      summary:
        "Sitio web comercial para laboratorio de análisis clínicos en Rosario, con diseño claro y accesible, optimizado para rendimiento y visibilidad local en buscadores.",
      backToHome: "← Volver",
      sections: {
        challenge: {
          number: "01",
          title: "El desafío",
          body: "Laboratorio Spotorno necesitaba un sitio web informativo que comunicara claramente sus servicios de análisis clínicos a pacientes y médicos derivantes. El sitio debía ser accesible para todo público —incluyendo adultos mayores—, cargar rápido incluso en conexiones móviles y estar optimizado para búsquedas locales en Rosario.",
        },
        process: {
          number: "02",
          title: "Proceso creativo",
          steps: [
            {
              title: "A. Diseño",
              body: "Diseñé una interfaz clara y accesible con tipografía grande, alto contraste y navegación simplificada. La paleta de colores transmite profesionalismo y confianza, valores clave para un laboratorio clínico.",
            },
            {
              title: "B. Desarrollo con HTML + Tailwind",
              body: "Construí el sitio con HTML semántico y Tailwind CSS para un desarrollo rápido y consistente. Sin frameworks JS pesados: el sitio es estático, lo que garantiza carga instantánea y cero dependencias que mantener.",
            },
            {
              title: "C. SEO on-page",
              body: "Implementé optimización SEO completa: meta tags, structured data para negocio local, etiquetas de encabezado jerárquicas, alt text descriptivo en imágenes y optimización de velocidad de carga. El foco fue posicionar para búsquedas como 'laboratorio de análisis clínicos Rosario'.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Resultado final",
          body: "Sitio web informativo optimizado que carga de forma instantánea, con diseño accesible y posicionamiento SEO on-page completo para visibilidad local en Rosario. Sin frameworks pesados, cero mantenimiento de dependencias y facilidad absoluta de actualización.",
        },
      },
      specs: {
        title: "Especificaciones del proyecto",
        env: "Entorno de desarrollo",
        envValue: "HTML · Tailwind CSS",
        frontend: "Frontend",
        libraries: "Librerías",
        deploy: "Deploy",
        cta: "Ver sitio en vivo",
        ctaUrl: "#",
      },
    },
    legallyOnTheMove: {
      badge: "Caso de estudio",
      title: "Legally On The Move",
      role: "Full-stack Developer · Kensiweb",
      summary:
        "Web multilingüe para asesoría legal a migrantes, con Astro, Tailwind CSS y GSAP. Soporte en 3 idiomas, +75% de consultas respecto al sitio anterior y 0.9s de carga.",
      backToHome: "← Volver",
      sections: {
        challenge: {
          number: "01",
          title: "El desafío",
          body: "Legally On The Move brinda asesoría legal a migrantes en Estados Unidos. Su sitio anterior estaba desactualizado, no era mobile-friendly y solo estaba en inglés, cuando sus clientes hablan principalmente español. Necesitaban un rediseño completo: multilingüe (inglés, español y portugués), accesible, rápido y con un formulario de consulta simplificado que redujera la fricción para personas que ya están en una situación vulnerable.",
        },
        process: {
          number: "02",
          title: "Proceso creativo",
          steps: [
            {
              title: "A. Contexto y requisitos",
              body: "Entrevisté a la abogada fundadora para entender el perfil del cliente: personas migrando que necesitan respuestas claras, rápidas y en su idioma. La prioridad era eliminar barreras: de idioma, de carga lenta y de formularios complejos.",
            },
            {
              title: "B. Diseño inclusivo",
              body: "Diseñé una interfaz que prioriza la claridad: tipografía grande, iconografía universal, traducciones visibles desde el primer clic. Cada página fue diseñada pensando en usuarios con bajo nivel de alfabetización digital.",
            },
            {
              title: "C. Desarrollo con Astro + GSAP",
              body: "Astro permitió generar páginas estáticas ultrarrápidas con i18n integrado. GSAP se usó para animaciones suaves que guían la atención sin distraer. Tailwind CSS mantuvo el diseño consistente en los 3 idiomas.",
            },
            {
              title: "D. Validación y deploy",
              body: "Probé el formulario de consulta con usuarios reales para asegurar que fuera intuitivo. Configuré CDN global para servir contenido cerca de los usuarios en EE.UU. y Latinoamérica. Optimización de imágenes y recursos para lograr la menor latencia posible.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Resultado final",
          body: "El sitio nuevo generó un incremento del +75% en consultas respecto al anterior. La carga en 0.9 segundos y el soporte en 3 idiomas eliminaron las principales barreras de entrada. La abogada reportó que los clientes llegan con más información y preguntas más específicas, lo que hace las consultas iniciales más productivas.",
        },
      },
      specs: {
        title: "Especificaciones del proyecto",
        env: "Entorno de desarrollo",
        envValue: "Astro · TypeScript",
        frontend: "Frontend",
        libraries: "Librerías",
        deploy: "Deploy",
        cta: "Ver sitio en vivo",
        ctaUrl: "#",
      },
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
          name: "Intima Online",
          project: "Frontend Astro para plataforma de radio online",
          period: "Oct 2024 – Presente",
          location: "Paraná, Entre Ríos, AR (remoto)",
          bullets: [
            "Desarrollo de componentes modulares con Astro + Tailwind, integración con APIs de radio en vivo.",
          ],
        },
        {
          name: "Medicina Diagnóstica - Centro Médico",
          project: "Web institucional con sistema de turnos online",
          period: "2025",
          location: "CABA, AR (remoto)",
          bullets: [
            "Sitio web institucional con Next.js, Tailwind CSS v4 y GSAP para un centro médico.",
            "Sistema de turnos online integrado, resultando en +90% de turnos gestionados digitalmente.",
            "Optimización SEO médico con SSR, alcanzando 96/100 en Lighthouse.",
          ],
        },
        {
          name: "La Carlota del Monte - Tierra de Caballos",
          project: "Frontend Astro para sitio institucional",
          period: "Nov 2025 – Presente",
          location: "Buenos Aires, AR (remoto)",
          bullets: [
            "Desarrollo de frontend con Astro y Tailwind, integración con formulario de contacto y Google Maps.",
          ],
        },
        {
          name: "Laboratorio Spotorno",
          project: "Web comercial para laboratorio de análisis clínicos",
          period: "2026",
          location: "Rosario, Santa Fe, AR (remoto)",
          bullets: [
            "Sitio web informativo con HTML y Tailwind CSS, diseño claro y accesible.",
            "Optimización de rendimiento y SEO on-page para visibilidad local.",
          ],
        },
        {
          name: "Legally On The Move - Asesoría Legal para Migrantes",
          project: "Web institucional multilingüe con asesoría legal",
          period: "2025",
          location: "EE.UU. (remoto)",
          bullets: [
            "Sitio web con Astro, Tailwind CSS y GSAP, soporte multilingüe (3 idiomas) y accesibilidad priorizada.",
            "Formulario de consulta simplificado, secciones FAQ expandibles y CDN global para latencia mínima.",
            "+75% de consultas recibidas respecto al sitio anterior.",
          ],
        },
      ],
    },
    medicina: {
      role: "Analista Administrativo",
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
    title: "Experiencia",
    subtitle:
      "Últimos trabajos realizados en Kensiweb. Cada proyecto combina backend, frontend y la infraestructura que lo sostiene.",
    items: {
      ilonBot: {
        title: "Refugio Ilón · Bot de WhatsApp con IA",
        description:
          "Bot de WhatsApp con Claude como backend conversacional para gestionar consultas y reservas del Refugio Ilón, en Bariloche. Integración completa con la WhatsApp Cloud API (verificación Meta Business) y persistencia en PostgreSQL. Pensado para escalar a SaaS para otros refugios de montaña.",
        linkLabel: "Ver caso",
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
        linkLabel: "Ver caso",
      },
      innevo: {
        title: "Innevo - Frontend Angular",
        description:
          "Frontend modular con Angular, Angular Material y TypeScript estricto para una aplicación web empresarial. Integración con REST APIs y trabajo en equipo distribuido entre Chile y Argentina.",
        linkLabel: "Ver caso",
      },
      intimaOnline: {
        title: "Intima Online - Radio Online",
        description:
          "Plataforma de radio online con Astro y Tailwind CSS. Integración de APIs de streaming en vivo, componentes modulares y diseño responsive optimizado para rendimiento.",
        linkLabel: "Ver caso",
      },
      medicinaDiagnostica: {
        title: "Medicina Diagnóstica - Centro Médico",
        description:
          "Web institucional con sistema de turnos online para centro médico. Next.js, Tailwind CSS v4 y GSAP. +90% turnos digitales, 96/100 Lighthouse, SEO médico con SSR.",
        linkLabel: "Ver caso",
      },
      laCarlota: {
        title: "La Carlota del Monte - Tierra de Caballos",
        description:
          "Sitio institucional para establecimiento ecuestre con Astro y Tailwind CSS. Formulario de contacto, Google Maps y diseño que refleja la esencia del lugar.",
        linkLabel: "Ver caso",
      },
      laboratorioSpotorno: {
        title: "Laboratorio Spotorno",
        description:
          "Sitio web comercial para laboratorio de análisis clínicos. HTML semántico con Tailwind CSS, diseño accesible y SEO on-page optimizado para visibilidad local en Rosario.",
        linkLabel: "Ver caso",
      },
      legallyOnTheMove: {
        title: "Legally On The Move",
        description:
          "Web multilingüe para asesoría legal a migrantes con Astro, Tailwind y GSAP. 3 idiomas, +75% consultas, 0.9s de carga y diseño inclusivo priorizado.",
        linkLabel: "Ver caso",
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
  cases: {
    refugioilonBot: {
      badge: "Case study",
      title: "Refugio Ilón · AI WhatsApp Bot",
      role: "Full-stack Developer · Kensiweb",
      summary:
        "Conversational WhatsApp bot powered by the Claude API and integrated with the WhatsApp Cloud API to manage inquiries and bookings for Refugio Ilón in Bariloche.",
      backToHome: "← Back",
      sections: {
        challenge: {
          number: "01",
          title: "The challenge",
          body: "Refugio Ilón, a mountain shelter in Bariloche, received dozens of daily WhatsApp inquiries about availability, pricing and bookings. The volume was impossible to handle manually, and slow responses meant constant lost reservations. They needed a conversational bot that understood natural language, managed the full booking cycle, and passed Meta Business verification to operate in production.",
        },
        process: {
          number: "02",
          title: "Creative process",
          steps: [
            {
              title: "A. Conversational design",
              body: "I designed the conversation flow with context management: the bot understands inquiries about availability, nightly rates, room capacity and dates. I implemented conversational states to keep the thread going without losing information between messages.",
            },
            {
              title: "B. WhatsApp Cloud API integration",
              body: "I integrated the WhatsApp Cloud API with webhooks to send and receive messages in real time. I set up the template system for proactive messages and passed Meta Business verification — a mandatory requirement for production accounts.",
            },
            {
              title: "C. Claude API backend",
              body: "Claude acts as the bot's brain: it receives the user's message, processes it with conversation context and booking state, and generates natural responses. I implemented system prompts that define the shelter's personality and business rules.",
            },
            {
              title: "D. PostgreSQL persistence",
              body: "Every conversation, booking and state is persisted in PostgreSQL. This allows resuming interrupted conversations, keeping a full history, and generating inquiry reports for the shelter owner.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Final outcome",
          body: "Production-ready bot with Meta Business verification approved. The system handles inquiries 24/7 autonomously, freeing shelter staff for operational tasks. The architecture is designed to scale horizontally and adapt to other mountain shelters as a SaaS product.",
        },
      },
      specs: {
        title: "Project specs",
        env: "Development environment",
        envValue: "Ubuntu Linux · Node.js",
        frontend: "APIs",
        libraries: "Services",
        deploy: "Infrastructure",
        // cta: "View demo",
        // ctaUrl: "#",
      },
    },
    refugioilonBooking: {
      badge: "Case study",
      title: "Refugio Ilón · Booking Platform",
      role: "Full-stack Developer · Kensiweb",
      summary:
        "Web booking system for Refugio Ilón with an administrative backoffice, optimized reservation flow and real-time availability management.",
      backToHome: "← Back",
      sections: {
        challenge: {
          number: "01",
          title: "The challenge",
          body: "Refugio Ilón needed an online booking system to replace the manual WhatsApp process. The platform had to let visitors check real-time availability, make reservations and receive automatic confirmation. On the admin side, it required a backoffice to manage rooms, pricing and availability without technical knowledge.",
        },
        process: {
          number: "02",
          title: "Creative process",
          steps: [
            {
              title: "A. Data modeling",
              body: "I designed the full relational schema: rooms, accommodation types, seasonal pricing, bookings, guests and statuses. I modeled the availability logic to prevent overbooking and date conflicts.",
            },
            {
              title: "B. Backend development",
              body: "I built the backend in PHP on top of WordPress, leveraging its CMS for institutional pages while developing the booking logic as custom functionality. The MySQL database with phpMyAdmin allows direct administration when needed.",
            },
            {
              title: "C. Admin dashboard",
              body: "I built a complete backoffice: booking calendar, seasonal pricing management, inquiry panel and occupancy reports. Everything accessible from the WordPress panel without touching code.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Final outcome",
          body: "Operational booking system with a complete flow: visitors check availability, pick dates, fill in their details and receive confirmation. The backoffice lets the shelter manage everything from one place. Architecture ready to integrate with the WhatsApp bot.",
        },
      },
      specs: {
        title: "Project specs",
        env: "Development environment",
        envValue: "WordPress · PHP",
        frontend: "Frontend",
        libraries: "Libraries",
        deploy: "Deploy",
        cta: "View live site",
        ctaUrl: "https://refugioilon.com.ar",
      },
    },
    innevo: {
      badge: "Case study",
      title: "Innevo - Angular Frontend",
      role: "Frontend Developer (Angular) · Kensiweb",
      summary:
        "Modular frontend development with Angular, Angular Material and strict TypeScript for an enterprise web application, integrated with REST APIs in a distributed team.",
      backToHome: "← Back",
      sections: {
        challenge: {
          number: "01",
          title: "The challenge",
          body: "Innevo needed a modular, maintainable and scalable frontend for their web application. The team worked distributed across Chile and Argentina, which demanded clean code, well-encapsulated components and strict TypeScript to catch errors at compile time. Integration with multiple REST APIs required consistent handling of loading, error and data states.",
        },
        process: {
          number: "02",
          title: "Creative process",
          steps: [
            {
              title: "A. Angular setup",
              body: "I initialized the project with Angular CLI, setting up the main module, lazy loading for routes and the service system with dependency injection. Strict TypeScript mode from day one for type safety.",
            },
            {
              title: "B. Modular components",
              body: "I designed a reusable component architecture with Angular Material as the UI foundation. Each component has its own module, service and tests, following the container-presentational pattern to separate logic from presentation.",
            },
            {
              title: "C. REST API integration",
              body: "I implemented Angular services with HttpClient to consume the backend APIs. Unified error handling with HTTP interceptors, loading states with AsyncPipe, and fully typed responses with TypeScript interfaces.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Final outcome",
          body: "Complete frontend with strict TypeScript, modular components and unit tests. The team was able to continue development on a solid, well-documented foundation. The architecture allowed adding new features without rewriting existing code.",
        },
      },
      specs: {
        title: "Project specs",
        env: "Development environment",
        envValue: "Angular CLI · TypeScript",
        frontend: "Frontend",
        libraries: "Libraries",
        deploy: "Deploy",
        cta: "View project",
        ctaUrl: "#",
      },
    },
    intimaOnline: {
      badge: "Case study",
      title: "Intima Online - Online Radio",
      role: "Frontend Developer (Astro) · Kensiweb",
      summary:
        "Online radio platform built with Astro and Tailwind CSS, featuring live streaming API integration and modular components optimized for performance.",
      backToHome: "← Back",
      sections: {
        challenge: {
          number: "01",
          title: "The challenge",
          body: "Intima Online needed a modern web platform for their online radio station to replace an outdated site. The project required live streaming API integration, a smooth playback experience, and an attractive yet clean design. Everything built with modern technologies to guarantee performance and easy maintenance.",
        },
        process: {
          number: "02",
          title: "Creative process",
          steps: [
            {
              title: "A. Astro components",
              body: "I built modular components with Astro, leveraging its island architecture to minimize client-side JavaScript. Each section — player, schedule, news — is an independent, easy-to-maintain component.",
            },
            {
              title: "B. Live radio API integration",
              body: "I integrated the streaming APIs for live audio playback. I implemented custom playback controls and state management (loading, playing, paused) with visual feedback for the user.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Final outcome",
          body: "Functional radio platform with live streaming, responsive design and smooth navigation. Using Astro enabled fast loads and minimal JavaScript, resulting in an optimal experience even on slow connections.",
        },
      },
      specs: {
        title: "Project specs",
        env: "Development environment",
        envValue: "Astro · Node.js",
        frontend: "Frontend",
        libraries: "Libraries",
        deploy: "Deploy",
        cta: "View live site",
        ctaUrl: "https://intimaonline.com.ar",
      },
    },
    medicinaDiagnostica: {
      badge: "Case study",
      title: "Medicina Diagnóstica - Medical Center",
      role: "Full-stack Developer · Kensiweb",
      summary:
        "Institutional web platform for a medical center with an integrated online booking system, built with Next.js, Tailwind CSS v4 and GSAP. +90% digital bookings, 96/100 Lighthouse score.",
      backToHome: "← Back",
      sections: {
        challenge: {
          number: "01",
          title: "The challenge",
          body: "Medicina Diagnóstica needed a modern web platform that combined their institutional presence with a functional online booking system. Patients had to be able to book appointments autonomously without calling, and the center needed clear adoption metrics. As a healthcare facility, accessibility and medical SEO were top priorities.",
        },
        process: {
          number: "02",
          title: "Creative process",
          steps: [
            {
              title: "A. UX audit",
              body: "I analyzed the current appointment flow: patients called, waited on hold, the receptionist checked availability and confirmed. I mapped every friction point to design a digital flow that eliminated wait times and human errors.",
            },
            {
              title: "B. Prototyping",
              body: "I designed interactive prototypes of the booking system: specialty selection, real-time availability calendar, patient data entry and automatic confirmation. Each step was validated with real users before development.",
            },
            {
              title: "C. Development with Next.js + Tailwind v4",
              body: "I built the frontend with Next.js leveraging SSR for medical SEO and Tailwind CSS v4 for the design system. GSAP was used for subtle transition animations between pages, keeping the navigation smooth and professional.",
            },
            {
              title: "D. QA & Deploy",
              body: "I ran load testing on the booking system, accessibility audits, and image and resource optimization. Deployment used caching strategies for static content and dynamic regeneration for appointment availability.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Final outcome",
          body: "Complete platform with +90% of appointments managed digitally. Lighthouse score of 96/100 thanks to SSR, lazy loading and asset optimization. Medical SEO targeting local searches for diagnostic imaging services. The medical center drastically reduced phone calls for appointment booking.",
        },
      },
      specs: {
        title: "Project specs",
        env: "Development environment",
        envValue: "Next.js · TypeScript",
        frontend: "Frontend",
        libraries: "Libraries",
        deploy: "Deploy",
        cta: "View live site",
        ctaUrl: "#",
      },
    },
    laCarlota: {
      badge: "Case study",
      title: "La Carlota del Monte - Land of Horses",
      role: "Frontend Developer (Astro) · Kensiweb",
      summary:
        "Institutional website for an equestrian estate built with Astro and Tailwind CSS, featuring a contact form, Google Maps integration, and a design that reflects the essence of the place.",
      backToHome: "← Back",
      sections: {
        challenge: {
          number: "01",
          title: "The challenge",
          body: "La Carlota del Monte needed an institutional website that conveyed the warmth and connection with nature of their equestrian estate. The site had to communicate the experience of being in the countryside, showcase the facilities and services, and make it easy for potential visitors to get in touch — all with a clean, modern design without overwhelming the experience.",
        },
        process: {
          number: "02",
          title: "Creative process",
          steps: [
            {
              title: "A. Design",
              body: "I worked on a visual design that captured the estate's essence: earth tones, serif typography for headings evoking tradition, and plenty of negative space so landscape photos could take center stage.",
            },
            {
              title: "B. Development with Astro",
              body: "I built the frontend with Astro, taking advantage of its static generation for ultra-fast loading times. Tailwind CSS sped up the design system development and responsiveness.",
            },
            {
              title: "C. Integrations",
              body: "I integrated a functional contact form with client-side and server-side validation, and a Google Maps embed to show the estate's exact location on the map.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Final outcome",
          body: "A functional, attractive website that faithfully represents La Carlota del Monte's identity. Working contact form, interactive map and responsive design that works perfectly on mobile devices — where visitors typically search for outdoor activities.",
        },
      },
      specs: {
        title: "Project specs",
        env: "Development environment",
        envValue: "Astro · Node.js",
        frontend: "Frontend",
        libraries: "Libraries",
        deploy: "Deploy",
        cta: "View live site",
        ctaUrl: "#",
      },
    },
    laboratorioSpotorno: {
      badge: "Case study",
      title: "Laboratorio Spotorno",
      role: "Frontend Developer · Kensiweb",
      summary:
        "Commercial website for a clinical analysis laboratory in Rosario, with a clear and accessible design, optimized for performance and local search visibility.",
      backToHome: "← Back",
      sections: {
        challenge: {
          number: "01",
          title: "The challenge",
          body: "Laboratorio Spotorno needed an informational website that clearly communicated their clinical analysis services to patients and referring physicians. The site had to be accessible to all audiences — including older adults — load fast even on mobile connections, and be optimized for local searches in Rosario.",
        },
        process: {
          number: "02",
          title: "Creative process",
          steps: [
            {
              title: "A. Design",
              body: "I designed a clear and accessible interface with large typography, high contrast and simplified navigation. The color palette conveys professionalism and trust — key values for a clinical laboratory.",
            },
            {
              title: "B. Development with HTML + Tailwind",
              body: "I built the site with semantic HTML and Tailwind CSS for fast, consistent development. No heavy JS frameworks: the site is static, guaranteeing instant loading and zero dependencies to maintain.",
            },
            {
              title: "C. On-page SEO",
              body: "I implemented complete SEO optimization: meta tags, structured data for local business, hierarchical heading tags, descriptive alt text on images, and load-speed optimization. The focus was ranking for searches like 'clinical analysis laboratory Rosario'.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Final outcome",
          body: "An optimized informational website that loads instantly, with an accessible design and complete on-page SEO for local visibility in Rosario. No heavy frameworks, zero dependency maintenance, and absolute ease of updating.",
        },
      },
      specs: {
        title: "Project specs",
        env: "Development environment",
        envValue: "HTML · Tailwind CSS",
        frontend: "Frontend",
        libraries: "Libraries",
        deploy: "Deploy",
        cta: "View live site",
        ctaUrl: "#",
      },
    },
    legallyOnTheMove: {
      badge: "Case study",
      title: "Legally On The Move",
      role: "Full-stack Developer · Kensiweb",
      summary:
        "Multilingual website for migrant legal advice, built with Astro, Tailwind CSS and GSAP. 3 languages supported, +75% more inquiries than the previous site, 0.9s load time.",
      backToHome: "← Back",
      sections: {
        challenge: {
          number: "01",
          title: "The challenge",
          body: "Legally On The Move provides legal advice to migrants in the United States. Their previous site was outdated, not mobile-friendly, and only in English — even though most of their clients speak Spanish. They needed a complete redesign: multilingual (English, Spanish and Portuguese), accessible, fast, and with a simplified inquiry form that reduced friction for people already in a vulnerable situation.",
        },
        process: {
          number: "02",
          title: "Creative process",
          steps: [
            {
              title: "A. Context and requirements",
              body: "I interviewed the founding attorney to understand the client profile: migrating people who need clear, fast answers in their own language. The priority was removing barriers: language, slow loading and complex forms.",
            },
            {
              title: "B. Inclusive design",
              body: "I designed an interface prioritizing clarity: large typography, universal iconography, translations visible with one click. Every page was designed with users who have low digital literacy in mind.",
            },
            {
              title: "C. Development with Astro + GSAP",
              body: "Astro enabled generating ultra-fast static pages with built-in i18n. GSAP was used for smooth animations that guide attention without distracting. Tailwind CSS kept the design consistent across all 3 languages.",
            },
            {
              title: "D. Validation and deploy",
              body: "I tested the inquiry form with real users to ensure it was intuitive. I set up a global CDN to serve content close to users in the US and Latin America. Image and resource optimization for the lowest possible latency.",
            },
          ],
        },
        outcome: {
          number: "03",
          title: "Final outcome",
          body: "The new site generated a +75% increase in inquiries over the previous one. 0.9-second load time and 3-language support removed the main barriers to entry. The attorney reported that clients arrive with more information and more specific questions, making initial consultations more productive.",
        },
      },
      specs: {
        title: "Project specs",
        env: "Development environment",
        envValue: "Astro · TypeScript",
        frontend: "Frontend",
        libraries: "Libraries",
        deploy: "Deploy",
        cta: "View live site",
        ctaUrl: "#",
      },
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
        {
          name: "Intima Online",
          project: "Astro frontend for an online radio platform",
          period: "Oct 2024 – Present",
          location: "Paraná, Entre Ríos, AR (remote)",
          bullets: [
            "Modular components with Astro + Tailwind, live radio API integration.",
          ],
        },
        {
          name: "Medicina Diagnóstica - Centro Médico",
          project: "Institutional website with online booking system",
          period: "2025",
          location: "Buenos Aires, AR (remote)",
          bullets: [
            "Institutional website built with Next.js, Tailwind CSS v4, and GSAP for a medical center.",
            "Integrated online booking system, achieving +90% of appointments managed digitally.",
            "Medical SEO optimization with SSR, reaching 96/100 Lighthouse score.",
          ],
        },
        {
          name: "La Carlota del Monte - Tierra de Caballos",
          project: "Astro frontend for an institutional website",
          period: "Nov 2025 – Present",
          location: "Buenos Aires, AR (remote)",
          bullets: [
            "Frontend development with Astro and Tailwind, contact form and Google Maps integration.",
          ],
        },
        {
          name: "Laboratorio Spotorno",
          project: "Commercial website for a clinical analysis laboratory",
          period: "2026",
          location: "Rosario, Santa Fe, AR (remote)",
          bullets: [
            "Informational website built with HTML and Tailwind CSS, clean and accessible design.",
            "Performance optimization and SEO for local visibility.",
          ],
        },
        {
          name: "Legally On The Move - Legal Advice for Migrants",
          project: "Multilingual institutional website with legal advice",
          period: "2025",
          location: "USA (remote)",
          bullets: [
            "Website built with Astro, Tailwind CSS and GSAP, multilingual support (3 languages) with accessibility focus.",
            "Simplified inquiry form, expandable FAQ sections, and global CDN for minimal latency.",
            "+75% more inquiries compared to the previous site.",
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
        linkLabel: "View case",
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
        linkLabel: "View case",
      },
      innevo: {
        title: "Innevo - Angular Frontend",
        description:
          "Modular Angular frontend with Angular Material and strict TypeScript for an enterprise web application. REST API integration and distributed team across Chile and Argentina.",
        linkLabel: "View case",
      },
      intimaOnline: {
        title: "Intima Online - Online Radio",
        description:
          "Online radio platform built with Astro and Tailwind CSS. Live streaming API integration, modular components and responsive design optimized for performance.",
        linkLabel: "View case",
      },
      medicinaDiagnostica: {
        title: "Medicina Diagnóstica - Medical Center",
        description:
          "Institutional website with online booking system for a medical center. Next.js, Tailwind CSS v4 and GSAP. +90% digital bookings, 96/100 Lighthouse, medical SEO with SSR.",
        linkLabel: "View case",
      },
      laCarlota: {
        title: "La Carlota del Monte - Land of Horses",
        description:
          "Institutional website for an equestrian estate with Astro and Tailwind CSS. Contact form, Google Maps and a design that reflects the essence of the place.",
        linkLabel: "View case",
      },
      laboratorioSpotorno: {
        title: "Laboratorio Spotorno",
        description:
          "Commercial website for a clinical analysis laboratory. Semantic HTML with Tailwind CSS, accessible design and on-page SEO optimized for local visibility in Rosario.",
        linkLabel: "View case",
      },
      legallyOnTheMove: {
        title: "Legally On The Move",
        description:
          "Multilingual website for migrant legal advice with Astro, Tailwind and GSAP. 3 languages, +75% inquiries, 0.9s load time and inclusive design prioritized.",
        linkLabel: "View case",
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
