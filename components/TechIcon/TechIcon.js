import styles from "./techicon.module.css";

const TechIcon = ({ children, name, link, styles: iconStyles }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconLink}
    >
      <div
        style={
          iconStyles.backgroundColor === "#fff"
            ? {
                ...iconStyles,
                borderColor: "#d2d2d7",
              }
            : iconStyles
        }
        className={styles.skill}
      >
        {children}
      </div>
    </a>
  );
};

export default TechIcon;
