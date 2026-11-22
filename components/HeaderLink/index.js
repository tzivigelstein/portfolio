import { ChevronIcon } from "@components/Icons";
import styles from "./index.module.css";

// With an `icon` the link is a round button that shows only the icon;
// its text becomes the accessible name and the tooltip.
const HeaderLink = ({ text, link, icon, primary = false, newTab = true }) => {
  const className = [
    styles.headerLink,
    primary ? styles.primary : "",
    icon ? styles.iconOnly : "",
  ].join(" ");

  return (
    <a
      className={className}
      href={link}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(icon ? { "aria-label": text, title: text } : {})}
    >
      {icon || (
        <>
          {text}
          <ChevronIcon aria-hidden="true" />
        </>
      )}
    </a>
  );
};

export default HeaderLink;
