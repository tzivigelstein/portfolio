import { H3, H4 } from "@components/Heading";
import styles from "./index.module.css";

export default function ActionDeclaration({ action }) {
  const { title, text, icon, slug } = action;
  const sharedStyles = { textAlign: "center", margin: 0, color: "inherit" };

  return (
    <li className={styles.listItem}>
      <H4
        className={styles.customTitle}
        style={{
          ...sharedStyles,
          fontFamily: "Caveat",
          fontWeight: 500,
          fontSize: 32,
          lineHeight: 1,
        }}
      >
        {title}
      </H4>
      <H3
        style={{
          ...sharedStyles,
          marginBottom: 28,
          lineHeight: 1,
          fontWeight: 500,
        }}
      >
        {text}
      </H3>
      {icon && (
        <div className={styles.icon} id={slug}>
          <img src={icon} alt={slug} />
        </div>
      )}
    </li>
  );
}
