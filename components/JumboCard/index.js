import styles from "./index.module.css";
import useTranslation from "next-translate/useTranslation";
import { ChevronIcon } from "@components/Icons";

export default function JumboCard({ project }) {
  const {
    theme,
    color,
    title,
    subtitle,
    image,
    jumboImage,
    mobileImage,
    repository,
    site,
    category,
  } = project;

  const { t } = useTranslation();

  return (
    <article
      data-theme={theme}
      style={{ background: color }}
      className={styles.jumboCard}
    >
      <a
        aria-label="main-link"
        className={styles.projectLink}
        href={site}
        target="_blank"
        rel="noopener noreferrer"
      >
        <header className={styles.cardHeader}>
          <h4 className={styles.helper}>{subtitle}</h4>
          <h3 className={styles.title}>{title}</h3>
        </header>
        <picture className={styles.cardPicture}>
          <source
            role="presentation"
            media="(max-width: 480px)"
            srcSet={mobileImage ?? image ?? jumboImage}
          />
          <img
            alt={`${title} preview`}
            loading="lazy"
            className={styles.cardImage}
            src={jumboImage ?? image}
          />
        </picture>
      </a>
      <footer className={styles.cardFooter}>
        <a
          aria-label="repository-link"
          className={styles.link}
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("common:cardRepositoryLink")}
          <ChevronIcon />
        </a>
        <a
          aria-label="action-link"
          href={site}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          {category === "web"
            ? t("common:cardSiteLink")
            : t("common:cardDownloadLink")}
        </a>
      </footer>
    </article>
  );
}
