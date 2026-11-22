import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

const MAX_SNOWFLAKES = 50;
const MIN_WIDTH = 12;
const MAX_WIDTH = 24;
const MIDDLE_WIDTH = (MAX_WIDTH - MIN_WIDTH) / 2 + MIN_WIDTH;
// Distance travelled beyond the viewport, above and below (see the keyframes).
const OFFSCREEN_OFFSET = 40;
// A new flake starts this far above the viewport, so it takes a while to show up.
const MIN_START_OFFSET = 25;
const MAX_START_OFFSET = 1000;
// Flakes are added one after another when the snowfall starts.
const SPAWN_INTERVAL = 0.02;

const getMaxSnowflakes = () =>
  Math.min(MAX_SNOWFLAKES, Math.floor(window.innerWidth / 25));

const generateSnowflake = () => {
  const width =
    Math.floor(Math.random() * (MAX_WIDTH - MIN_WIDTH + 1)) + MIN_WIDTH;
  const isBig = width > MIDDLE_WIDTH;

  // Small flakes can fall faster than big ones. Speed in px per second.
  const speed = (Math.random() * (isBig ? 1.75 : 3.25) + 1) * 50;
  const distance = window.innerHeight + OFFSCREEN_OFFSET * 2;
  const startOffset =
    Math.random() * (MAX_START_OFFSET - MIN_START_OFFSET) + MIN_START_OFFSET;

  return {
    type: Math.floor(Math.random() * 4),
    width,
    left: Math.random() * 100,
    opacity: width < 18 ? 0.5 : 1,
    blur: isBig ? 0.7 : 1,
    rotate: Math.floor(Math.random() * 361),
    duration: distance / speed,
    delay: startOffset / speed,
  };
};

const getSnowflakeStyle = (flake, extraDelay = 0) => ({
  left: `min(calc(100vw - ${MAX_WIDTH * 2}px), ${flake.left.toFixed(2)}vw)`,
  width: `${flake.width}px`,
  opacity: flake.opacity,
  filter: `blur(${flake.blur}px)`,
  animationDuration: `${flake.duration.toFixed(2)}s`,
  animationDelay: `${(flake.delay + extraDelay).toFixed(2)}s`,
});

const getIconSrc = (flake) => `/snowflake${flake.type}.svg`;
const getIconTransform = (flake) => `rotate(${flake.rotate}deg)`;

// Each flake falls once, driven by a CSS animation. When it leaves the
// viewport it is replaced by a brand new one (size, speed, column, shape)
// by updating the same element, so React never re-renders while it snows.
export default function Snowfall({ stopSnowfall }) {
  const nextId = useRef(0);
  const createSnowflakes = (count) =>
    Array.from({ length: count }, () => ({
      id: nextId.current++,
      ...generateSnowflake(),
    }));

  const [snowflakes, setSnowflakes] = useState(() =>
    createSnowflakes(getMaxSnowflakes())
  );
  const [hidden, setHidden] = useState(false);

  // Keep the amount of flakes in line with the window width.
  useEffect(() => {
    const handleResize = () => {
      const count = getMaxSnowflakes();

      setSnowflakes((prev) => {
        if (prev.length === count) return prev;
        if (prev.length > count) return prev.slice(0, count);
        return [...prev, ...createSnowflakes(count - prev.length)];
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Starting again after a stop: a fresh snowfall, from the top.
  useEffect(() => {
    if (!stopSnowfall && hidden) {
      setSnowflakes(createSnowflakes(getMaxSnowflakes()));
      setHidden(false);
    }
  }, [stopSnowfall]);

  // Once faded out, stop rendering the flakes so nothing keeps animating.
  const handleTransitionEnd = (event) => {
    if (event.target === event.currentTarget && stopSnowfall) setHidden(true);
  };

  const handleAnimationEnd = (event) => {
    const element = event.target;
    const icon = element.firstElementChild;
    if (!icon) return;

    const flake = generateSnowflake();

    element.style.animationName = "none";
    Object.assign(element.style, getSnowflakeStyle(flake));
    icon.src = getIconSrc(flake);
    icon.style.transform = getIconTransform(flake);
    // Reading a layout property restarts the CSS animation.
    void element.offsetWidth;
    element.style.animationName = "";
  };

  return (
    <div
      aria-hidden="true"
      className={`${styles.container} ${stopSnowfall ? styles.stopped : ""}`}
      onTransitionEnd={handleTransitionEnd}
      onAnimationEnd={handleAnimationEnd}
    >
      {!hidden &&
        snowflakes.map((flake, index) => (
          <div
            key={flake.id}
            className={styles.snowflake}
            style={getSnowflakeStyle(flake, index * SPAWN_INTERVAL)}
          >
            <img
              style={{ transform: getIconTransform(flake) }}
              className={styles.icon}
              src={getIconSrc(flake)}
              alt=""
            />
          </div>
        ))}
    </div>
  );
}
