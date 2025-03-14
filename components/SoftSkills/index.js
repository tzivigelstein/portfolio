import { H3 } from "@components/Heading";
import useTranslation from "next-translate/useTranslation";
import styles from "./index.module.css";

export default function SoftSkills() {
  const { t } = useTranslation();

  return (
    <div>
      <H3>{t("common:softSkillsTitle")}</H3>
      <ul className={styles.goalsContainer}>
        <li className={styles.goal}>{t("common:softSkillsFirstTip")}</li>
        <li className={styles.goal}>{t("common:softSkillsSecondTip")}</li>
        <li className={styles.goal}>{t("common:softSkillsThirdTip")}</li>
        <li className={styles.goal}>{t("common:softSkillsFourthTip")}</li>
        <li className={styles.goal}>{t("common:softSkillsFifthTip")}</li>
      </ul>
    </div>
  );
}
