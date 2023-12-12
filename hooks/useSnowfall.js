import { useEffect, useState } from "react";

const DEFAULT_MAX_SNOW_FLAKES = 50;

const useSnowfall = (stopSnowfallFlag = false) => {
  const windowExists = typeof window !== "undefined";
  const max_snowflakes_by_window = windowExists ? Math.floor(window.innerWidth / 25) : DEFAULT_MAX_SNOW_FLAKES

  const maxSnowflakes = max_snowflakes_by_window > DEFAULT_MAX_SNOW_FLAKES ? DEFAULT_MAX_SNOW_FLAKES : max_snowflakes_by_window

  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const generateSnowflake = () => {
      const maxWidth = 24;
      const minWidth = 12;

      const differenceMiddle = (maxWidth - minWidth) / 2 + minWidth

      const width =
        Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;

      const aspectRatio = 0.873535156;
      const height = width / aspectRatio;

      const maxLeft = window.innerWidth - maxWidth * 2;
      const left = Math.min(maxLeft, Math.random() * window.innerWidth);

      const initialOpacity = width < 18 ? 0.5 : 1;

      const MAX_OFFSET_TOP = -1000
      const MIN_OFFSET_TOP = -25

      const MIN_FALL_SPEED_RATE = 1.75
      const MAX_FALL_SPEED_RATE = 3.25

      const fallSpeedRate = width > differenceMiddle ? MIN_FALL_SPEED_RATE : MAX_FALL_SPEED_RATE
      const blur = width > differenceMiddle ? .7 : 1

      return {
        type: Math.floor(Math.random() * (4)),
        top: Math.floor(Math.random() * (MAX_OFFSET_TOP - MIN_OFFSET_TOP + 1)) + MIN_OFFSET_TOP,
        left,
        fallSpeed: Math.random() * fallSpeedRate + 1,
        width,
        height,
        opacity: initialOpacity,
        rotate: Math.floor(Math.random() * (360 + 1)),
        blur
      };
    };

    const updateSnowflakes = () => {
      setSnowflakes((prevSnowflakes) => {
        if (prevSnowflakes.length < maxSnowflakes) {
          return [...updateSnowflake(prevSnowflakes), generateSnowflake()];
        }

        return updateSnowflake(prevSnowflakes);
      });
    };

    const updateSnowflake = (prevSnowflakes) => {
      return prevSnowflakes.map((flake) => {
        return {
          ...flake,
          top: flake.top + flake.fallSpeed,
        };
      })
    }

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
    }, 20);

    // Cleanup function to clear the interval when the component unmounts or when the flag is set to true
    return () => {
      setSnowflakes((prevSnowflakes) => {
        return prevSnowflakes.map((flake) => {
          return {
            ...flake,
            transition: "opacity 1.5s ease",
          };
        });
      });


      setTimeout(() => {
        setSnowflakes((prevSnowflakes) => {
          return prevSnowflakes.map((flake) => {
            return {
              ...flake,
              top: flake.top + flake.fallSpeed,
              opacity: 0,
            };
          });
        });
      }, 200)

      setTimeout(() => {
        setSnowflakes([]);
        clearInterval(updateInterval);
      }, 1900);
    };
  }, [maxSnowflakes, stopSnowfallFlag]);

  return snowflakes;
};

export default useSnowfall;
