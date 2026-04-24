#import "template.typ": cv, skills-grid

#show: doc => cv(
  name: "Gonzalo Reynoso",
  title: "Freelance Full-Stack Developer · Kensiweb",
  contact: (
    email: "gonzalo.reynoso9@gmail.com",
    phone: "+54 9 11 — —",
    location: "Buenos Aires, Argentina",
    website: "gonreynoso.dev",
    linkedin: "linkedin.com/in/gonreynoso",
    github: "github.com/gonreynoso",
    brand: "kensiweb.com",
  ),
  summary: [
    Full-stack developer focused on custom web systems and AI integrations.
    I work as a freelancer under my brand *Kensiweb*: I build platforms with
    Laravel, Livewire, Node and PostgreSQL, and own deployment and maintenance
    on my own infrastructure (DigitalOcean, Contabo, Ubuntu). Advanced student
    of Systems Analysis (Da Vinci). C1 English.
  ],
  ui: ( profile: "Profile" ),
  sections: (
    (
      title: "Experience",
      entries: (
        (
          role: "Freelance Full-Stack Developer",
          company: "Kensiweb",
          period: "2024 — Present",
          location: "Remote · Buenos Aires, AR",
          summary: [Custom systems, AI integrations and self-owned infrastructure
            for clients in Argentina and Chile.],
          nested: (
            (
              name: "Refugio Ilón",
              project: "AI WhatsApp bot + booking platform",
              period: "Jul 2025 — Present",
              location: "Bariloche, AR",
              bullets: (
                [Conversational WhatsApp bot with *Claude* as the backend, integrated with the WhatsApp Cloud API (Meta Business verification).],
                [Web booking platform in PHP + WordPress, phpMyAdmin-based administration, streamlined booking flow.],
                [Designed to scale into a SaaS for other mountain shelters.],
              ),
            ),
            (
              name: "Estudio Froment & Asociados",
              project: "Full institutional site redesign",
              period: "Sep 2025 — Oct 2025",
              location: "Buenos Aires, AR",
              bullets: (
                [Custom frontend in SASS + Bootstrap 5; Swiper.js and Lenis for smooth scroll and sliders.],
                [Data modeling for member validation; continuous deployment on Vercel; DNS management through NIC.ar.],
              ),
            ),
            (
              name: "Innevo",
              project: "Angular frontend for a web application",
              period: "Oct 2024 — Feb 2025",
              location: "Santiago de Chile, CL (remote)",
              bullets: (
                [Modular components with Angular + Angular Material, REST API integration.],
                [Strict TypeScript, distributed Argentina–Chile team.],
              ),
            ),
          ),
        ),
        (
          role: "Administrative & IT Analyst",
          company: "Medicina Diagnóstica",
          period: "Aug 2020 — Apr 2024",
          location: "CABA, AR",
          bullets: (
            [Automated payroll with Google Script and built financial dashboards in Power BI.],
            [Designed and developed the lab's institutional site (WordPress + MySQL).],
            [Document management, invoicing and support for patients and providers.],
          ),
        ),
        (
          role: "Internship · Front-end React Developer",
          company: "Informental",
          period: "Nov 2023 — Dec 2023",
          location: "Mendoza, AR",
          bullets: (
            [Migration of the application from PHP to React, with forms, tabs and charts.],
            [~15% reduction in load times using React Server Components.],
          ),
        ),
      ),
    ),
    (
      title: "Education",
      entries: (
        (
          role: "Systems Analyst",
          company: "Da Vinci University",
          period: "Sep 2024 — Dec 2027",
          location: "Buenos Aires, AR",
          bullets: (
            [Relational database design, logical and physical modeling.],
            [Advanced SQL, administration and optimization with SQL Server and MySQL.],
            [Introduction to NoSQL databases and administration tools.],
          ),
        ),
        (
          role: "Diploma in Databases",
          company: "UTN (National Technological University)",
          period: "Jul 2025",
          location: "Buenos Aires, AR",
        ),
        (
          role: "Full Stack Developer (PERN)",
          company: "Henry Bootcamp",
          period: "Jan 2023 — Jul 2023",
          location: "Buenos Aires, AR",
        ),
        (
          role: "Advanced course in React / TypeScript",
          company: "Udemy",
          period: "Jul 2023 — Dec 2023",
        ),
      ),
    ),
    (
      title: "Certifications",
      entries: (
        (
          role: "C1 Advanced English",
          company: "Efset",
          period: "cert.efset.org/es/iLxjy3",
        ),
        (
          role: "Diploma in Databases",
          company: "UTN — e-Learning Center",
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
            *Data:* PostgreSQL · MySQL · SQL Server · Firestore · Firebase \
            *AI:* Claude API · OpenRouter · WhatsApp Cloud API \
            *Infra / DevOps:* DigitalOcean · Contabo · Ubuntu · SSH · Docker · Git · GitHub · GitLab \
            *Tooling:* Jira · Trello · Photoshop
          ],
        ),
      ),
    ),
  ),
)
