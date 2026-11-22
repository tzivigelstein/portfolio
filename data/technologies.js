// Skill groups, ordered by what is used today. Items can be a plain string
// or a { en, es } object keyed by locale (see lib/localize).
const technologies = [
  {
    id: "main",
    title: "common:skillsGroupMain",
    items: [
      "Python",
      "Go",
      "PostgreSQL",
      "TypeScript",
      "Flask",
      "FastAPI",
      "Docker",
    ],
  },
  {
    id: "data",
    title: "common:skillsGroupData",
    items: [
      "Microsoft Azure",
      "Amazon Web Services",
      "MongoDB",
      { en: "Vector search", es: "Búsqueda vectorial" },
    ],
  },
  {
    id: "practices",
    title: "common:skillsGroupPractices",
    items: ["Clean Architecture", "Testing", "CI/CD", "Git", "Linux", "Bash"],
  },
  {
    id: "frontend",
    title: "common:skillsGroupFrontend",
    items: ["React", "JavaScript", "CSS"],
  },
];

export default technologies;
