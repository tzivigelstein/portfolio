import styles from "./index.module.css";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  WhatsAppIcon,
  TelegramIcon,
} from "@components/Icons";
import useTranslation from "next-translate/useTranslation";
import ThemeSwitcher from "@components/ThemeSwitcher";
import LanguageSwitcher from "@components/LanguageSwitcher";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h4 className={styles.labelTitle}>
            {t("common:footerFirstSubtitle")}
          </h4>
          <ul className={styles.socialList}>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/tzivigelstein/"
                className={styles.socialLink}
              >
                <LinkedinIcon className={styles.icon} width={16} height={16} />
                Linkedin
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/tzivigelstein"
                className={styles.socialLink}
              >
                <GithubIcon className={styles.icon} width={16} height={16} />
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/tzivigelstein"
                className={styles.socialLink}
              >
                <XIcon className={styles.icon} width={16} height={16} />
                X (Formerly Twitter)
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.infoContainer}>
          <h4 className={styles.labelTitle}>
            {t("common:footerSecondSubtitle")}
          </h4>
          <ul className={styles.socialList}>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="./resume/Tzivi_Gelstein_CV_EN.pdf"
                className={styles.socialLink}
              >
                {t("common:footerResumeEnglishLink")}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="./resume/Tzivi_Gelstein_CV_ES.pdf"
                className={styles.socialLink}
              >
                {t("common:footerResumeSpanishLink")}
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
