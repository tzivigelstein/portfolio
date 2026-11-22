'use client'

import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
  type SyntheticEvent
} from 'react'
import styles from './index.module.css'
import { Pause, Play, SkipForward, Snowflake } from 'lucide-react'
import type { Song } from '@/data/songs'
import type { Dictionary } from '@/lib/i18n'

const VOLUME = 0.5
const FALLBACK_PREVIEW_IMAGE = '/snowflake0.svg'

// Not part of the standard DOM types yet.
interface NetworkInformation {
  saveData?: boolean
  effectiveType?: string
}

// People who asked their browser to save data, or on a very slow
// connection, only download a song when they press play.
const shouldSkipPreload = (): boolean => {
  const { connection } = navigator as Navigator & { connection?: NetworkInformation }
  if (!connection) return false
  return Boolean(connection.saveData) || /2g/.test(connection.effectiveType ?? '')
}

interface MusicPlayerProps {
  songs: Song[]
  dictionary: Dictionary['christmas']
  stopSnowfall: boolean
  setStopSnowfall: Dispatch<SetStateAction<boolean>>
}

export default function MusicPlayer ({
  songs,
  dictionary,
  stopSnowfall,
  setStopSnowfall
}: MusicPlayerProps) {
  const [currentSongIndex, setCurrentSongIndex] = useState(() =>
    Math.floor(Math.random() * songs.length)
  )
  const [playing, setPlaying] = useState(false)
  // The song is preloaded so play is instant, but only once the page has
  // finished loading and the browser is idle, so it never competes with it.
  const [loadAudio, setLoadAudio] = useState(false)
  const [preload, setPreload] = useState<'auto' | 'none'>('auto')
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (shouldSkipPreload()) {
      setPreload('none')
      setLoadAudio(true)
      return
    }

    let idleId: number | undefined
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const start = () => {
      if (typeof window.requestIdleCallback === 'function') {
        idleId = window.requestIdleCallback(() => setLoadAudio(true), {
          timeout: 4000
        })
      } else {
        timeoutId = setTimeout(() => setLoadAudio(true), 1500)
      }
    }

    if (document.readyState === 'complete') {
      start()
    } else {
      window.addEventListener('load', start, { once: true })
    }

    return () => {
      window.removeEventListener('load', start)
      if (idleId !== undefined) window.cancelIdleCallback(idleId)
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !loadAudio) return

    audio.volume = VOLUME

    if (!playing) {
      audio.pause()
      return
    }

    audio.play()?.catch((error: unknown) => {
      // Blocked by the browser. Interrupted plays (song changed) are fine.
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        setPlaying(false)
      }
    })
  }, [playing, currentSongIndex, loadAudio])

  const setProgress = (ratio: number) => {
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${ratio})`
    }
  }

  const playNextSong = () => {
    setProgress(0)
    setCurrentSongIndex((previous) => (previous + 1) % songs.length)
  }

  const togglePlaying = () => {
    setLoadAudio(true)
    setPlaying((previous) => !previous)
  }

  // Browsers fire "pause" right before "ended"; that one must not stop
  // the playlist from moving on to the next song.
  const handlePause = (event: SyntheticEvent<HTMLAudioElement>) => {
    if (!event.currentTarget.ended) setPlaying(false)
  }

  // The progress bar is updated straight on the element: no re-renders.
  const handleTimeUpdate = (event: SyntheticEvent<HTMLAudioElement>) => {
    const { currentTime, duration } = event.currentTarget
    setProgress(duration ? Math.min(currentTime / duration, 1) : 0)
  }

  const handlePreviewError = (event: SyntheticEvent<HTMLImageElement>) => {
    if (!event.currentTarget.src.endsWith(FALLBACK_PREVIEW_IMAGE)) {
      event.currentTarget.src = FALLBACK_PREVIEW_IMAGE
    }
  }

  const song = songs[currentSongIndex]
  if (!song) return null

  const snowfallLabel = `${
    stopSnowfall ? dictionary.startSnowfallButton : dictionary.stopSnowfallButton
  } ${dictionary.textShowfallButton}`

  return (
    <aside className={styles.wrapper} aria-label={dictionary.playerLabel}>
      <div className={`${styles.player} ${playing ? styles.playing : ''}`}>
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
          {/* Covers come from another site, so they are not optimized. */}
          <img
            key={song.id}
            src={song.previewImage}
            alt=''
            onError={handlePreviewError}
            className={styles.preview}
          />
          <span className={styles.equalizer} aria-hidden='true'>
            <span />
            <span />
            <span />
          </span>
        </div>

        <div className={styles.info}>
          <p key={song.id} className={styles.title}>
            {song.title}
          </p>
          <div className={styles.progress} aria-hidden='true'>
            <div ref={progressRef} className={styles.progressFill} />
          </div>
        </div>

        <div className={styles.controls}>
          <button
            type='button'
            onClick={togglePlaying}
            aria-label={playing ? dictionary.pauseButton : dictionary.playButton}
            className={`${styles.button} ${styles.primaryButton}`}
          >
            {playing
              ? <Pause fill='currentColor' aria-hidden='true' />
              : <Play fill='currentColor' aria-hidden='true' />}
          </button>
          <button
            type='button'
            onClick={playNextSong}
            aria-label={dictionary.nextSongButton}
            className={styles.button}
          >
            <SkipForward fill='currentColor' aria-hidden='true' />
          </button>
          <span className={styles.divider} aria-hidden='true' />
          <button
            type='button'
            onClick={() => setStopSnowfall((previous) => !previous)}
            aria-label={snowfallLabel}
            title={snowfallLabel}
            className={`${styles.button} ${stopSnowfall ? styles.snowfallOff : ''}`}
          >
            <Snowflake aria-hidden='true' />
          </button>
        </div>
      </div>
    </aside>
  )
}
