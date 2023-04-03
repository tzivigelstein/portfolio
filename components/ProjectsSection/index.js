import styles from "./index.module.css";
import projects from "@data/projects";
import Card from "@components/Card";
import JumboCard from "@components/JumboCard";
import useTranslation from "next-translate/useTranslation";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const webs = projects.filter(
    ({ category, active }) => category === "web" && active
  );
  const jumbo = webs.shift();
  const apps = projects.filter(
    ({ category, active }) => category === "app" && active
  );

  return (
    <section className={styles.container}>
      <section className={styles.secondarySection}>
        <h2 className={styles.sectionTitle}>
          {t("common:projectsSectionWebTitle")}
        </h2>
        <JumboCard project={jumbo} />
        <ul className={styles.projectList}>
          {webs.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </ul>
      </section>
      <section className={styles.secondarySection}>
        <h2 className={styles.sectionTitle}>
          {t("common:projectsSectionAppTitle")}
        </h2>
        {apps.length === 1 ? (
          <JumboCard project={apps[0]} />
        ) : (
          <ul className={styles.projectList}>
            {apps.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </ul>
        )}
      </section>
    </section>
  );
};

export default ProjectsSection;
