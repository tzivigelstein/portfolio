'use client'

import {
  useEffect,
  useRef,
  useState,
  type AnimationEvent,
  type CSSProperties,
  type TransitionEvent
} from 'react'
import styles from './index.module.css'

const MAX_SNOWFLAKES = 50
const MIN_WIDTH = 12
const MAX_WIDTH = 24
const MIDDLE_WIDTH = (MAX_WIDTH - MIN_WIDTH) / 2 + MIN_WIDTH
// Distance travelled beyond the viewport, above and below (see the keyframes).
const OFFSCREEN_OFFSET = 40
// A new flake starts this far above the viewport, so it takes a while to show up.
const MIN_START_OFFSET = 25
const MAX_START_OFFSET = 1000
// Flakes are added one after another when the snowfall starts.
const SPAWN_INTERVAL = 0.02

interface Snowflake {
  type: number
  width: number
  left: number
  opacity: number
  blur: number
  rotate: number
  duration: number
  delay: number
}

interface SnowflakeWithId extends Snowflake {
  id: number
}

const getMaxSnowflakes = (): number =>
  Math.min(MAX_SNOWFLAKES, Math.floor(window.innerWidth / 25))

const generateSnowflake = (): Snowflake => {
  const width = Math.floor(Math.random() * (MAX_WIDTH - MIN_WIDTH + 1)) + MIN_WIDTH
  const isBig = width > MIDDLE_WIDTH

  // Small flakes can fall faster than big ones. Speed in px per second.
  const speed = (Math.random() * (isBig ? 1.75 : 3.25) + 1) * 50
  const distance = window.innerHeight + OFFSCREEN_OFFSET * 2
  const startOffset =
    Math.random() * (MAX_START_OFFSET - MIN_START_OFFSET) + MIN_START_OFFSET

  return {
    type: Math.floor(Math.random() * 4),
    width,
    left: Math.random() * 100,
    opacity: width < 18 ? 0.5 : 1,
    blur: isBig ? 0.7 : 1,
    rotate: Math.floor(Math.random() * 361),
    duration: distance / speed,
    delay: startOffset / speed
  }
}

const getSnowflakeStyle = (flake: Snowflake, extraDelay = 0) => ({
  left: `min(calc(100vw - ${MAX_WIDTH * 2}px), ${flake.left.toFixed(2)}vw)`,
  width: `${flake.width}px`,
  opacity: String(flake.opacity),
  filter: `blur(${flake.blur}px)`,
  animationDuration: `${flake.duration.toFixed(2)}s`,
  animationDelay: `${(flake.delay + extraDelay).toFixed(2)}s`
}) satisfies CSSProperties

const getIconSrc = (flake: Snowflake): string => `/snowflake${flake.type}.svg`
const getIconTransform = (flake: Snowflake): string => `rotate(${flake.rotate}deg)`

// Each flake falls once, driven by a CSS animation. When it leaves the
// viewport it is replaced by a brand new one (size, speed, column, shape)
// by updating the same element, so React never re-renders while it snows.
export default function Snowfall ({ stopSnowfall }: { stopSnowfall: boolean }) {
  const nextId = useRef(0)
  const createSnowflakes = (count: number): SnowflakeWithId[] =>
    Array.from({ length: count }, () => ({
      id: nextId.current++,
      ...generateSnowflake()
    }))

  const [snowflakes, setSnowflakes] = useState(() =>
    createSnowflakes(getMaxSnowflakes())
  )
  const [hidden, setHidden] = useState(false)

  // Keep the amount of flakes in line with the window width.
  useEffect(() => {
    const handleResize = () => {
      const count = getMaxSnowflakes()

      setSnowflakes((previous) => {
        if (previous.length === count) return previous
        if (previous.length > count) return previous.slice(0, count)
        return [...previous, ...createSnowflakes(count - previous.length)]
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Starting again after a stop: a fresh snowfall, from the top.
  useEffect(() => {
    if (!stopSnowfall && hidden) {
      setSnowflakes(createSnowflakes(getMaxSnowflakes()))
      setHidden(false)
    }
  }, [stopSnowfall])

  // Once faded out, stop rendering the flakes so nothing keeps animating.
  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && stopSnowfall) setHidden(true)
  }

  const handleAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    const element = event.target
    if (!(element instanceof HTMLElement)) return

    const icon = element.firstElementChild
    if (!(icon instanceof HTMLImageElement)) return

    const flake = generateSnowflake()

    element.style.animationName = 'none'
    Object.assign(element.style, getSnowflakeStyle(flake))
    icon.src = getIconSrc(flake)
    icon.style.transform = getIconTransform(flake)
    // Reading a layout property restarts the CSS animation.
    element.getBoundingClientRect()
    element.style.animationName = ''
  }

  return (
    <div
      aria-hidden='true'
      className={`${styles.container} ${stopSnowfall ? styles.stopped : ''}`}
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
            {/* Tiny decorative SVGs, swapped by hand when a flake restarts. */}
            <img
              style={{ transform: getIconTransform(flake) }}
              className={styles.icon}
              src={getIconSrc(flake)}
              alt=''
            />
          </div>
        ))}
    </div>
  )
}
