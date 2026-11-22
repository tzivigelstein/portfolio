import { ChevronIcon } from "@components/Icons";
import styles from "./index.module.css";

const HeaderLink = ({ text, link, primary = false }) => {
  return (
    <a
      className={`${styles.headerLink} ${primary ? styles.primary : ""}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <ChevronIcon aria-hidden="true" />
    </a>
  );
};

export default HeaderLink;
