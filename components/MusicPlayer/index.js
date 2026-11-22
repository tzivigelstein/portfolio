import { DoubleArrow, PauseIcon, PlayIcon } from "@components/Icons";
import styles from "./index.module.css";

import { useEffect, useRef, useState } from "react";
import useTranslation from "next-translate/useTranslation";

const VOLUME = 0.5;
const FALLBACK_PREVIEW_IMAGE = "/snowflake0.svg";

// People who asked their browser to save data, or on a very slow
// connection, only download a song when they press play.
const shouldSkipPreload = () => {
  const connection = typeof navigator !== "undefined" && navigator.connection;
  if (!connection) return false;
  return Boolean(connection.saveData) || /2g/.test(connection.effectiveType || "");
};

const MusicPlayer = ({ songs, stopSnowfall, setStopSnowfall }) => {
  const { t } = useTranslation("christmas");
  const [currentSongIndex, setCurrentSongIndex] = useState(
    Math.floor(Math.random() * songs.length)
  );
  const [playing, setPlaying] = useState(false);
  const [animateNextSong, setAnimateNextSong] = useState(false);
  const [toggleDownscaleMobile, setToggleDownscaleMobile] = useState(false);
  // The song is preloaded so play is instant, but only once the page has
  // finished loading and the browser is idle, so it never competes with it.
  const [loadAudio, setLoadAudio] = useState(false);
  const [preload, setPreload] = useState("auto");
  const audioRef = useRef(null);

  useEffect(() => {
    if (shouldSkipPreload()) {
      setPreload("none");
      setLoadAudio(true);
      return;
    }

    let idleId;
    let timeoutId;

    const start = () => {
      if (window.requestIdleCallback) {
        idleId = window.requestIdleCallback(() => setLoadAudio(true), {
          timeout: 4000,
        });
      } else {
        timeoutId = setTimeout(() => setLoadAudio(true), 1500);
      }
    };

    if (document.readyState === "complete") {
      start();
    } else {
      window.addEventListener("load", start, { once: true });
    }

    return () => {
      window.removeEventListener("load", start);
      if (idleId) window.cancelIdleCallback(idleId);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !loadAudio) return;

    audio.volume = VOLUME;

    if (!playing) {
      audio.pause();
      return;
    }

    const promise = audio.play();
    if (promise) {
      promise.catch((error) => {
        // Blocked by the browser. Interrupted plays (song changed) are fine.
        if (error.name === "NotAllowedError") setPlaying(false);
      });
    }
  }, [playing, currentSongIndex, loadAudio]);

  const playNextSong = () => {
    setAnimateNextSong(true);

    setTimeout(() => {
      setAnimateNextSong(false);
    }, 410);

    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const togglePlaying = () => {
    setToggleDownscaleMobile(true);

    setTimeout(() => {
      setToggleDownscaleMobile(false);
    }, 410);

    setLoadAudio(true);
    setPlaying((prev) => !prev);
  };

  // Browsers fire "pause" right before "ended"; that one must not stop
  // the playlist from moving on to the next song.
  const handlePause = (event) => {
    if (!event.currentTarget.ended) setPlaying(false);
  };

  const handlePreviewError = (event) => {
    if (!event.currentTarget.src.endsWith(FALLBACK_PREVIEW_IMAGE)) {
      event.currentTarget.src = FALLBACK_PREVIEW_IMAGE;
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <audio
          ref={audioRef}
          src={loadAudio ? songs[currentSongIndex].url : undefined}
          preload={preload}
          onEnded={playNextSong}
          onPause={handlePause}
          onPlay={() => setPlaying(true)}
        />

        <div className={styles.info}>
          <img
            src={songs[currentSongIndex].previewImage}
            alt=""
            onError={handlePreviewError}
            className={styles.preview}
          />
          <p className={styles.title}>{songs[currentSongIndex].title}</p>
        </div>
        <div className={styles.controls}>
          <button
            onClick={togglePlaying}
            aria-label={playing ? t("pauseButton") : t("playButton")}
            className={`${styles.togglePlaying} ${
              toggleDownscaleMobile ? styles.togglePlayingDownScale : ""
            }`}
          >
            {playing ? (
              <PauseIcon style={{ transform: "scale(1.5, 1.5)" }} />
            ) : (
              <PlayIcon style={{ transform: "scale(2, 2.4)" }} />
            )}
          </button>
          <button
            onClick={playNextSong}
            aria-label={t("nextSongButton")}
            className={`${styles.nextSong} ${
              animateNextSong ? styles.animateNextSong : ""
            }`}
          >
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
