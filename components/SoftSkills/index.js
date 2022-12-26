import { H4 } from "@components/Heading";
import useTranslation from "next-translate/useTranslation";
import styles from "./index.module.css";

export default function SoftSkills() {
  const { t } = useTranslation();

  return (
    <div>
      <H4>{t("common:softSkillsTitle")}</H4>
      <div className={styles.goalsContainer}>
        <span className={styles.goal}>{t("common:softSkillsFirstTip")}</span>
        <span className={styles.goal}>{t("common:softSkillsSecondTip")}</span>
        <span className={styles.goal}>{t("common:softSkillsThirdTip")}</span>
        <span className={styles.goal}>{t("common:softSkillsFourthTip")}</span>
        <span className={styles.goal}>{t("common:softSkillsFifthTip")}</span>
      </div>
    </div>
  );
}
