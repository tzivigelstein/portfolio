import styles from "./index.module.css";

import Snowflake from "./Snowflake";
import useSnowfall from "../../hooks/useSnowfall";

export default function Snowfall({ stopSnowfall }) {
  const snowflakes = useSnowfall(stopSnowfall);

  return (
    <div className={styles.container}>
      {snowflakes.map((flake, index) => (
        <Snowflake key={index} style={flake} />
      ))}
    </div>
  );
}
