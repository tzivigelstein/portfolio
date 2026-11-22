import styles from "./index.module.css";
import useTranslation from "next-translate/useTranslation";
import { ParagraphText } from "@components/Text";
import ProfessionalSkills from "@components/ProfessionalSkills";
import Section from "@components/Section";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("common:aboutSectionTitle")}>
      <div className={styles.text}>
        {t("common:experienceText")
          .split("\n\n")
          .map((paragraph, index) => (
            <ParagraphText key={index}>{paragraph}</ParagraphText>
          ))}
      </div>
      <div className={styles.skills}>
        <ProfessionalSkills />
      </div>
    </Section>
  );
};

export default AboutSection;
