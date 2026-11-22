import styles from "./index.module.css";
import useTranslation from "next-translate/useTranslation";
import { ParagraphText } from "@components/Text";
import ProfessionalSkills from "@components/ProfessionalSkills";
import Section from "@components/Section";
import { H3 } from "@components/Heading";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <Section title={t("common:aboutSectionTitle")}>
      <H3>{t("common:experienceTitle")}</H3>
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
