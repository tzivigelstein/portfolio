import styles from "./index.module.css";
import TechIcon from "@components/TechIcon/TechIcon";
import technologies from "@data/technologies";
import useTranslation from "next-translate/useTranslation";
import { H4 } from "@components/Heading";

export default function ProfessionalSkills() {
  const { t } = useTranslation();

  return (
    <div>
      <H4>{t("common:professionalTitle")}</H4>
      <div className={styles.skillsContainer}>
        {technologies.map(({ id, Icon, name, link, styles }) => (
          <TechIcon key={id} name={name} link={link} styles={styles}>
            <Icon />
          </TechIcon>
        ))}
      </div>
    </div>
  );
}
