import { useTheme } from "next-themes";
import styles from "./index.module.css";

const THEME_OPTIONS = [
  {
    id: 0,
    value: "light",
    title: "Light",
  },
  {
    id: 1,
    value: "dark",
    title: "Dark",
  },
  {
    id: 2,
    value: "system",
    title: "Auto",
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  function handleChange({ target }) {
    setTheme(target.value);
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
              name="option-theme"
              autoComplete="off"
              onChange={handleChange}
              checked={value === theme}
            />
            <div className={styles.text}>{title}</div>
          </label>
        ))}
      </div>
    </div>
  );
}
