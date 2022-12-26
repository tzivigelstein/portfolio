import styles from "./index.module.css";
import useTranslation from "next-translate/useTranslation";
import { ParagraphText } from "@components/Text";
import Story from "@components/Story";
import ProfessionalSkills from "@components/ProfessionalSkills";
import SoftSkills from "@components/SoftSkills";
import Recommendations from "@components/Recommendations";
import { H2, H4 } from "@components/Heading";

const AboutSection = ({ post }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <H2>{t("common:aboutSectionTitle")}</H2>
      <div className={styles.aboutInfoContainer}>
        <div>
          <div>
            <H4>{t("common:experienceTitle")}</H4>
            <ParagraphText>{t("common:experienceText")}</ParagraphText>
          </div>
          <div>
            <H4>{t("common:goalsTitle")}</H4>
            <div className={styles.goalsContainer}>
              <span className={styles.goal}>{t("common:goalsFirstTip")}</span>
              <span className={styles.goal}>{t("common:goalsSecondTip")}</span>
            </div>
          </div>
        </div>
        <div>
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
