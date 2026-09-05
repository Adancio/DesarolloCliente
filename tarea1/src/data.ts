import type {
  NavSection,
  Project,
  SkillGroup,
  ExperienceItem,
  EducationItem,
  Hobby,
} from "./types";

export const NAV_SECTIONS: NavSection[] = [
  { id: "inicio", label: "Inicio", major: true, mark: 0 },
  { id: "acerca", label: "Acerca de", major: false },
  { id: "proyectos", label: "Proyectos", major: true, mark: 15 },
  { id: "experiencia", label: "Experiencia", major: true, mark: 30 },
  { id: "educacion", label: "Educación", major: true, mark: 45 },
  { id: "hobbies", label: "Hobbies", major: false },
  { id: "contacto", label: "Contacto", major: true, mark: 60 },
];

export const PROJECTS: Project[] = [
  {
    id: "pipiolo",
    name: "Pipiolo Reports",
    period: "2025 — en curso",
    role: "Desarrollador full-stack (freelance, InnovaLabs)",
    description:
      "Sistema web de reportes diarios para Carnes Asadas Pipiolo, una cadena de 12 sucursales en Guadalajara. Incluye login con JWT, dashboard administrativo con métricas y gráficas, exportación a Excel, y un formulario de captura para gerentes con bloqueo posterior al envío.",
    stack: ["FastAPI", "PostgreSQL", "Docker", "SQLAlchemy", "Alembic", "Chart.js"],
    status: "En desarrollo",
  },
  {
    id: "ricoquiz",
    name: "RicoQuiz+",
    period: "2026",
    role: "Desarrollador backend (proyecto final, equipo de 2)",
    description:
      "Aplicación de trivia multijugador en tiempo real, proyecto final del curso de Desarrollo Server-Side. Responsable de las entidades User y Quiz (modelos, validaciones, CRUD) e integración con la API de Gemini para generar cuestionarios a partir de un tema.",
    stack: ["Node.js", "Express", "TypeScript", "MongoDB", "Jest", "Gemini API"],
    status: "En desarrollo",
  },
  {
    id: "edurent",
    name: "EduRent",
    period: "2025",
    role: "Desarrollador full-stack",
    description:
      "Plataforma de renta de vivienda estudiantil. Encargado de la integración frontend-backend, servicios de AWS (SES para correo, CloudWatch para métricas, SQS para tareas en segundo plano) y las vistas de perfil y gestión para arrendadores.",
    stack: ["Nuxt 3", "FastAPI", "PostgreSQL", "Docker", "AWS"],
    status: "Completado",
  },
  {
    id: "fintrack",
    name: "FinTrack",
    period: "2025",
    role: "Desarrollador backend",
    description:
      "Aplicación de finanzas personales sobre una arquitectura NoSQL políglota, combinando MongoDB, Cassandra, DGraph y ChromaDB a través de FastAPI, con GPT-2 apoyando la búsqueda semántica de resultados.",
    stack: ["FastAPI", "MongoDB", "Cassandra", "DGraph", "ChromaDB"],
    status: "Completado",
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["React", "Vite", "TypeScript", "Nuxt 3", "HTML/CSS", "Chart.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "MongoDB", "PostgreSQL", "DGraph", "Cassandra"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "AWS EC2 / ECR", "AWS Lambda", "S3", "CloudWatch", "GitHub Actions"],
  },
  {
    category: "IA aplicada",
    skills: ["Gemini API", "ChromaDB", "GPT-2", "Claude", "ChatGPT", "Perplexity"],
  },
  {
    category: "Testing y control de versiones",
    skills: ["Jest", "Supertest", "Postman", "Git / GitHub", "Flujo de ramas por feature"],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "innovalabs",
    role: "Fundador y desarrollador",
    org: "InnovaLabs (freelance)",
    period: "2025 — actualidad",
    bullets: [
      "Desarrollo software a la medida para negocios locales en Guadalajara, desde la propuesta hasta el despliegue.",
      "Diseñé un proceso de prospección con Google Maps, contacto por WhatsApp y páginas de demostración.",
      "Di de alta el RFC del negocio y preparé la facturación bajo RESICO (CFDIs vía Facturapi).",
      "Trazé una hoja de ruta de cinco fases para crecer de operación individual a una agencia con equipo.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "iteso",
    institution: "ITESO — Universidad Jesuita de Guadalajara",
    program: "Ingeniería en Sistemas Computacionales",
    period: "En curso",
    details: [
      "Cursos relevantes: Arquitectura de Software, Desarrollo Server-Side, Bases de Datos NoSQL.",
      "AWS Academy: Cloud Foundations y Cloud Developing.",
      "Formación complementaria en Fe y Cultura, con un proyecto propio sobre filosofía práctica.",
    ],
  },
];

export const HOBBIES: Hobby[] = [
  {
    id: "running",
    title: "Running y triatlón",
    description:
      "Corredor de resistencia con fondo en multisport. Entrené para un maratón en la Ciudad de México siguiendo un plan estructurado de gym, running, ciclismo y natación, con seguimiento en Garmin. Mi mejor tiempo en medio maratón (Zapopan) es 1:45:22.",
  },
  {
    id: "finanzas",
    title: "Finanzas personales",
    description:
      "Me interesa entender instrumentos de inversión en el contexto mexicano —CETES, ETFs— con la meta de generar ingresos que den flexibilidad, no de especular.",
  },
  {
    id: "competitive",
    title: "Programación competitiva",
    description:
      "De vez en cuando resuelvo problemas algorítmicos en Python, más por mantener el músculo de resolver problemas que por competir formalmente.",
  },
];