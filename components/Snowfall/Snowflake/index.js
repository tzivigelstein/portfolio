import styles from './index.module.css'

const Snowflake = ({ style }) => {
  const { type, top, left, blur, width, height, rotate, opacity, transition } = style;

  return (
    <div
      className={styles.snowflake}
      style={{
        top,
        left,
        width: `${width}px`,
        height: `${height}px`,
        opacity,
        transition,
        filter: `blur(${blur}px)`
      }}
    >
      <img style={{
        transform: `rotate(${rotate}deg)`,
      }} className={styles.icon} src={`/snowflake${type}.svg`} alt="Snowflake" />
    </div>
  );
};

export default Snowflake;
