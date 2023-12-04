import { useEffect, useState } from "react";

const DEFAULT_MAX_SNOW_FLAKES = 50;

const useSnowfall = (stopSnowfallFlag = false) => {
  const windowExists = typeof window !== "undefined";
  const maxSnowflakes = windowExists
    ? Math.floor(window.innerWidth / 25)
    : DEFAULT_MAX_SNOW_FLAKES;

  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const generateSnowflake = () => {
      const maxWidth = 24;
      const minWidth = 12;

      const width =
        Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;

      const aspectRatio = 0.873535156;
      const height = width / aspectRatio;

      const maxLeft = window.innerWidth - maxWidth * 2;
      const left = Math.min(maxLeft, Math.random() * window.innerWidth);

      const initialOpacity = width < 18 ? 0.5 : 1;

      return {
        top: Math.floor(Math.random() * (-1000 - -25 + 1)) + -25,
        left,
        fallSpeed: Math.random() * 2 + 1,
        width,
        height,
        zIndex: Math.floor(Math.random() * (10 - -1 + 1)) + -1,
        opacity: initialOpacity,
        rotate: Math.floor(Math.random() * (360 + 1)),
      };
    };

    const updateSnowflakes = () => {
      setSnowflakes((prevSnowflakes) => {
        // Check if the number of snowflakes is less than the maximum allowed
        if (prevSnowflakes.length < maxSnowflakes) {
          // If so, generate a new snowflake and add it to the array
          return [...prevSnowflakes, generateSnowflake()];
        }

        // If the maximum allowed number is reached, just update the existing snowflakes
        return prevSnowflakes.map((flake) => {
          return {
            ...flake,
            top: flake.top + flake.fallSpeed,
          };
        });
      });
    };

    const removeOutOfBoundsSnowflakes = () => {
      setSnowflakes((prevSnowflakes) =>
        prevSnowflakes.filter((flake) => flake.top <= window.innerHeight)
      );
    };

    const updateAndRemoveSnowflakes = () => {
      updateSnowflakes();
      removeOutOfBoundsSnowflakes();
    };

    const updateInterval = setInterval(() => {
      if (!stopSnowfallFlag) {
        updateAndRemoveSnowflakes();
      } else if (stopSnowfallFlag && snowflakes.length === 0) {
        clearInterval(updateInterval);
      }
    }, 30);

    // Cleanup function to clear the interval when the component unmounts or when the flag is set to true
    return () => {
      setSnowflakes((prevSnowflakes) => {
        return prevSnowflakes.map((flake) => {
          return {
            ...flake,
            top: flake.top + flake.fallSpeed,
            opacity: 0,
          };
        });
      });

      setTimeout(() => {
        setSnowflakes([]);
        clearInterval(updateInterval);
      }, 1700);
    };
  }, [maxSnowflakes, stopSnowfallFlag]);

  return snowflakes;
};

export default useSnowfall;
