import { useState } from "react";
import MusicPlayer from "@components/MusicPlayer";
import Snowfall from "@components/Snowfall";
import songs from "@data/songs";

// Everything seasonal lives behind this component so it can be loaded
// on demand (see pages/index.js) and stays out of the home bundle
// for the rest of the year.
export default function ChristmasSeason() {
  const [stopSnowfall, setStopSnowfall] = useState(false);

  return (
    <>
      <MusicPlayer
        songs={songs}
        stopSnowfall={stopSnowfall}
        setStopSnowfall={setStopSnowfall}
      />
      <Snowfall stopSnowfall={stopSnowfall} />
    </>
  );
}
