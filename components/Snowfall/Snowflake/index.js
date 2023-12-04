import React from "react";

const Snowflake = ({ style }) => {
  const { top, left, width, height, opacity, rotate } = style;

  return (
    <div
      style={{
        position: "fixed",
        top,
        left,
        zIndex: 1,
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: "url(snowflake.png)",
        backgroundSize: "cover",
        opacity,
        pointerEvents: "none",
        transition: "opacity 1.5s ease",
        transform: `rotate(${rotate}deg)`,
      }}
    />
  );
};

export default Snowflake;
