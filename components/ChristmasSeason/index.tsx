'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { CHRISTMAS, SEASON_ATTRIBUTE } from '@/lib/season'
import type { Dictionary } from '@/lib/i18n'

// Loaded on demand, only during the season, so the snowfall and the music
// player stay out of the bundle for the rest of the year.
const Christmas = dynamic(() => import('./Christmas'), { ssr: false })

export default function ChristmasSeason ({ dictionary }: { dictionary: Dictionary['christmas'] }) {
  const [isChristmasSeason, setIsChristmasSeason] = useState(false)

  useEffect(() => {
    // The season is decided by an inline script, before the first paint
    // (see lib/season.ts).
    setIsChristmasSeason(
      document.documentElement.getAttribute(SEASON_ATTRIBUTE) === CHRISTMAS
    )
  }, [])

  return isChristmasSeason ? <Christmas dictionary={dictionary} /> : null
}
