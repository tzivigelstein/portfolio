'use client'

import { useState } from 'react'
import MusicPlayer from '@/components/MusicPlayer'
import Snowfall from '@/components/Snowfall'
import songs from '@/data/songs'
import type { Dictionary } from '@/lib/i18n'

export default function Christmas ({ dictionary }: { dictionary: Dictionary['christmas'] }) {
  const [stopSnowfall, setStopSnowfall] = useState(false)

  return (
    <>
      <MusicPlayer
        songs={songs}
        dictionary={dictionary}
        stopSnowfall={stopSnowfall}
        setStopSnowfall={setStopSnowfall}
      />
      <Snowfall stopSnowfall={stopSnowfall} />
    </>
  )
}
