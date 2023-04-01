import {
  DockerIcon,
  GitIcon,
  Linux,
  MongoIcon,
  PostgreSQL,
  ReactIcon,
  TypeScript,
} from "@components/Icons";

const technologies = [
  {
    id: "la",
    link: "https://reactjs.org/",
    styles: { backgroundColor: "#61DAFB" },
    name: "ReactJS",
    Icon: () => <ReactIcon fill="#eee" width={27} height={27} />,
  },
  {
    id: "rh",
    link: "https://www.mongodb.com/",
    styles: { backgroundColor: "#13AA52" },
    name: "MongoDB",
    Icon: () => <MongoIcon fill="#eee" width={27} height={27} />,
  },
  {
    id: "GY",
    link: "https://www.docker.com/",
    styles: { backgroundColor: "#fff" },
    name: "Docker",
    Icon: () => <DockerIcon width={27} height={27} />,
  },
  {
    id: "XI",
    link: "https://www.postgresql.org/",
    styles: { backgroundColor: "#fff" },
    name: "PostgreSQL",
    Icon: () => <PostgreSQL width={27} height={27} />,
  },
  {
    id: "Zl",
    link: "https://git-scm.com/",
    styles: { backgroundColor: "#F14E32" },
    name: "Git",
    Icon: () => <GitIcon fill="#eee" width={27} height={27} />,
  },
  {
    id: "0V",
    link: "https://www.linux.org/",
    styles: { backgroundColor: "#fff" },
    name: "Linux",
    Icon: () => <Linux width={27} />,
  },
  {
    id: "XZ",
    link: "https://www.typescriptlang.org/",
    styles: { backgroundColor: "#007ACC" },
    name: "TypeScript",
    Icon: () => <TypeScript width={27} height={27} />,
  },
];

export default technologies;
