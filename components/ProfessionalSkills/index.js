import styles from "./index.module.css";
import technologies from "@data/technologies";
import useTranslation from "next-translate/useTranslation";
import { H3 } from "@components/Heading";
import localize from "../../lib/localize";

export default function ProfessionalSkills() {
  const { t, lang } = useTranslation();

  return (
    <div>
      <H3>{t("common:professionalTitle")}</H3>
      <div className={styles.groups}>
        {technologies.map(({ id, title, items }) => (
          <div key={id}>
            <h4 className={styles.groupTitle}>{t(title)}</h4>
            <ul className={styles.skillList}>
              {items.map((item) => {
                const name = localize(item, lang);
                return (
                  <li key={name} className={styles.skill}>
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
