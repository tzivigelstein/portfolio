import { useEffect, useState } from "react";
import styles from "./index.module.css";

const MAX_SNOWFLAKES = 50;
const MIN_WIDTH = 12;
const MAX_WIDTH = 24;
const MIDDLE_WIDTH = (MAX_WIDTH - MIN_WIDTH) / 2 + MIN_WIDTH;
// Distance travelled beyond the viewport, above and below (see the keyframes).
const OFFSCREEN_OFFSET = 40;

const randomLeft = () =>
  `min(calc(100vw - ${MAX_WIDTH * 2}px), ${(Math.random() * 100).toFixed(2)}vw)`;

const generateSnowflake = (id) => {
  const width =
    Math.floor(Math.random() * (MAX_WIDTH - MIN_WIDTH + 1)) + MIN_WIDTH;
  const isBig = width > MIDDLE_WIDTH;

  // Small flakes can fall faster than big ones. Speed in px per second.
  const speed = (Math.random() * (isBig ? 1.75 : 3.25) + 1) * 50;
  const distance = window.innerHeight + OFFSCREEN_OFFSET * 2;

  return {
    id,
    type: Math.floor(Math.random() * 4),
    width,
    left: randomLeft(),
    opacity: width < 18 ? 0.5 : 1,
    blur: isBig ? 0.7 : 1,
    rotate: Math.floor(Math.random() * 361),
    duration: distance / speed,
    // Staggered start so the snow builds up from the top.
    delay: Math.random() * 8,
  };
};

const generateSnowflakes = () => {
  const count = Math.min(MAX_SNOWFLAKES, Math.floor(window.innerWidth / 25));
  return Array.from({ length: count }, (_, index) => generateSnowflake(index));
};

// The flakes are created once and animated by CSS only: no state updates,
// timers or layout work per frame.
export default function Snowfall({ stopSnowfall }) {
  const [snowflakes] = useState(generateSnowflakes);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (!stopSnowfall) setHidden(false);
  }, [stopSnowfall]);

  // Once faded out, remove the flakes from rendering so nothing keeps animating.
  const handleTransitionEnd = (event) => {
    if (event.target === event.currentTarget && stopSnowfall) setHidden(true);
  };

  // Each time a flake starts a new fall, move it to another column.
  const handleAnimationIteration = (event) => {
    event.target.style.left = randomLeft();
  };

  return (
    <div
      aria-hidden="true"
      className={`${styles.container} ${stopSnowfall ? styles.stopped : ""} ${
        hidden ? styles.hidden : ""
      }`}
      onTransitionEnd={handleTransitionEnd}
      onAnimationIteration={handleAnimationIteration}
    >
      {snowflakes.map(
        ({ id, type, width, left, opacity, blur, rotate, duration, delay }) => (
          <div
            key={id}
            className={styles.snowflake}
            style={{
              left,
              width: `${width}px`,
              opacity,
              filter: `blur(${blur}px)`,
              animationDuration: `${duration.toFixed(2)}s`,
              animationDelay: `${delay.toFixed(2)}s`,
            }}
          >
            <img
              style={{ transform: `rotate(${rotate}deg)` }}
              className={styles.icon}
              src={`/snowflake${type}.svg`}
              alt=""
            />
          </div>
        )
      )}
    </div>
  );
}
