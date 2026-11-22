import {
  PauseIcon,
  PlayIcon,
  SkipNextIcon,
  SnowflakeIcon,
} from "@components/Icons";
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
  // The song is preloaded so play is instant, but only once the page has
  // finished loading and the browser is idle, so it never competes with it.
  const [loadAudio, setLoadAudio] = useState(false);
  const [preload, setPreload] = useState("auto");
  const audioRef = useRef(null);
  const progressRef = useRef(null);

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

  const setProgress = (ratio) => {
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${ratio})`;
    }
  };

  const playNextSong = () => {
    setProgress(0);
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const togglePlaying = () => {
    setLoadAudio(true);
    setPlaying((prev) => !prev);
  };

  // Browsers fire "pause" right before "ended"; that one must not stop
  // the playlist from moving on to the next song.
  const handlePause = (event) => {
    if (!event.currentTarget.ended) setPlaying(false);
  };

  // The progress bar is updated straight on the element: no re-renders.
  const handleTimeUpdate = (event) => {
    const { currentTime, duration } = event.currentTarget;
    setProgress(duration ? Math.min(currentTime / duration, 1) : 0);
  };

  const handlePreviewError = (event) => {
    if (!event.currentTarget.src.endsWith(FALLBACK_PREVIEW_IMAGE)) {
      event.currentTarget.src = FALLBACK_PREVIEW_IMAGE;
    }
  };

  const song = songs[currentSongIndex];
  const snowfallLabel = `${
    stopSnowfall ? t("startSnowfallButton") : t("stopSnowfallButton")
  } ${t("textShowfallButton")}`;

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.player} ${playing ? styles.playing : ""}`}>
        <audio
          ref={audioRef}
          src={loadAudio ? song.url : undefined}
          preload={preload}
          onEnded={playNextSong}
          onPause={handlePause}
          onPlay={() => setPlaying(true)}
          onTimeUpdate={handleTimeUpdate}
        />

        <div className={styles.cover}>
          <img
            key={song.id}
            src={song.previewImage}
            alt=""
            onError={handlePreviewError}
            className={styles.preview}
          />
          <span className={styles.equalizer} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </div>

        <div className={styles.info}>
          <p key={song.id} className={styles.title}>
            {song.title}
          </p>
          <div className={styles.progress} aria-hidden="true">
            <div ref={progressRef} className={styles.progressFill} />
          </div>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            onClick={togglePlaying}
            aria-label={playing ? t("pauseButton") : t("playButton")}
            className={`${styles.button} ${styles.primaryButton}`}
          >
            {playing ? <PauseIcon aria-hidden="true" /> : <PlayIcon aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={playNextSong}
            aria-label={t("nextSongButton")}
            className={styles.button}
          >
            <SkipNextIcon aria-hidden="true" />
          </button>
          <span className={styles.divider} aria-hidden="true" />
          <button
            type="button"
            onClick={() => setStopSnowfall((prev) => !prev)}
            aria-label={snowfallLabel}
            title={snowfallLabel}
            className={`${styles.button} ${
              stopSnowfall ? styles.snowfallOff : ""
            }`}
          >
            <SnowflakeIcon aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
