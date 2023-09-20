import { H3, H4 } from "@components/Heading";
import styles from "./index.module.css";

export default function ActionDeclaration({ action }) {
  const { title, text, icon, slug } = action;
  const sharedStyles = { textAlign: "center", margin: 0, color: "inherit" };

  return (
    <li className={styles.listItem}>
      <H4 style={{ ...sharedStyles, textTransform: "uppercase" }}>{title}</H4>
      <H3 style={{ ...sharedStyles, marginBottom: 32 }}>{text}</H3>
      {icon && (
        <div className={styles.icon} id={slug}>
          <img src={icon} alt={slug} />
        </div>
      )}
    </li>
  );
}
