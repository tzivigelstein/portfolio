import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const THEME_OPTIONS = [
  {
    id: 0,
    value: "en",
    title: "EN",
  },
  {
    id: 1,
    value: "es",
    title: "ES",
  },
];

export default function LanguageSwitcher() {
  const { lang } = useTranslation();
  const router = useRouter();

  function handleChange() {
    router.replace("/", undefined, { locale: lang === "en" ? "es" : "en" });
  }

  return (
    <div className={styles.content}>
      <div
        className={styles.colorSchemeToggle}
        role="radiogroup"
        tabIndex="0"
        aria-label="Select a color scheme preference"
      >
        {THEME_OPTIONS.map(({ id, value, title }) => (
          <label key={id}>
            <input
              className={styles.input}
              type="radio"
              value={value}
              name="option-language"
              autoComplete="off"
              onChange={handleChange}
              checked={value === lang}
            />
            <div className={styles.text}>{title}</div>
          </label>
        ))}
      </div>
    </div>
  );
}
