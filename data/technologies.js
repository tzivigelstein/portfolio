// Skill groups, ordered by what is used today. Items can be a plain string
// or a { en, es } object keyed by locale (see lib/localize).
const technologies = [
  {
    id: "main",
    title: "common:skillsGroupMain",
    items: [
      "Python",
      "Go",
      "TypeScript",
      "PostgreSQL",
      "Flask",
      "FastAPI",
      "Docker",
      "Git",
      "Linux",
    ],
  },
  {
    id: "data",
    title: "common:skillsGroupData",
    items: [
      "Azure (Service Bus, Cosmos DB, AI Search)",
      "AWS (Lambda, S3)",
      "MongoDB",
      { en: "Vector search", es: "Búsqueda vectorial" },
    ],
  },
  {
    id: "practices",
    title: "common:skillsGroupPractices",
    items: ["Clean Architecture", "Testing", "CI/CD"],
  },
  {
    id: "frontend",
    title: "common:skillsGroupFrontend",
    items: ["React", "CSS"],
  },
];

export default technologies;
