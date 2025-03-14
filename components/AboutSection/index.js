import styles from "./index.module.css";
import useTranslation from "next-translate/useTranslation";
import { ParagraphText } from "@components/Text";
import Story from "@components/Story";
import ProfessionalSkills from "@components/ProfessionalSkills";
import SoftSkills from "@components/SoftSkills";
import Recommendations from "@components/Recommendations";
import { H2, H3 } from "@components/Heading";

const AboutSection = ({ post }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <H2>{t("common:aboutSectionTitle")}</H2>
      <div className={styles.aboutInfoContainer}>
        <div>
          <div>
            <H3>{t("common:experienceTitle")}</H3>
            <ParagraphText>{t("common:experienceText")}</ParagraphText>
          </div>
          <div>
            <H3>{t("common:goalsTitle")}</H3>
            <div className={styles.goalsContainer}>
              <ParagraphText>{t("common:goals")}</ParagraphText>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
          <ProfessionalSkills />
          <SoftSkills />
        </div>
      </div>
      <Story post={post} />
      <Recommendations />
    </section>
  );
};

export default AboutSection;
