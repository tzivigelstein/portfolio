import { DoubleArrow, PauseIcon, PlayIcon } from "@components/Icons";
import styles from "./index.module.css";

import { useState } from "react";
import ReactPlayer from "react-player";
import useTranslation from "next-translate/useTranslation";

const MusicPlayer = ({ songs, stopSnowfall, setStopSnowfall }) => {
  const { t } = useTranslation("christmas");
  const [currentSongIndex, setCurrentSongIndex] = useState(
    Math.floor(Math.random() * songs.length)
  );
  const [playing, setPlaying] = useState(false);

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ReactPlayer
          url={songs[currentSongIndex].url}
          onEnded={playNextSong}
          playing={playing}
          volume={0.5}
          style={{ display: "none" }}
          onPause={() => setPlaying(false)}
          onPlay={() => setPlaying(true)}
        />

        <div className={styles.info}>
          <img
            src={songs[currentSongIndex].previewImage}
            alt="Song Preview"
            className={styles.preview}
          />
          <p className={styles.title}>{songs[currentSongIndex].title}</p>
        </div>
        <div className={styles.controls}>
          <button onClick={togglePlaying} className={styles.togglePlaying}>
            {playing ? (
              <PauseIcon style={{ transform: "scale(1.5, 1.5)" }} />
            ) : (
              <PlayIcon style={{ transform: "scale(2, 2.4)" }} />
            )}
          </button>
          <button onClick={playNextSong} className={styles.nextSong}>
            <DoubleArrow width={22} height={22} />
          </button>
        </div>
      </div>
      <div className={styles.stopSnowfallContainer}>
        <button
          onClick={() => setStopSnowfall((prev) => !prev)}
          className={styles.stopSnowfallButton}
        >
          {stopSnowfall ? t("startSnowfallButton") : t("stopSnowfallButton")}{" "}
          {t("textShowfallButton")}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
