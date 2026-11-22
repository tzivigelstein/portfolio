import { render, screen, fireEvent } from '@testing-library/react'
import MusicPlayer from './index'
import type { Song } from '@/data/songs'
import { getDictionary, type Locale } from '@/lib/i18n'

const songs: Song[] = [
  { id: 1, title: 'First song', url: 'https://example.com/1.mp3', previewImage: 'https://example.com/1.jpg' },
  { id: 2, title: 'Second song', url: 'https://example.com/2.mp3', previewImage: 'https://example.com/2.jpg' }
]

interface Options {
  lang?: Locale
  stopSnowfall?: boolean
  setStopSnowfall?: jest.Mock
}

const renderPlayer = ({ lang = 'en', stopSnowfall = false, setStopSnowfall = jest.fn() }: Options = {}) =>
  render(
    <MusicPlayer
      songs={songs}
      dictionary={getDictionary(lang).christmas}
      stopSnowfall={stopSnowfall}
      setStopSnowfall={setStopSnowfall}
    />
  )

describe('Music player', () => {
  let play: jest.SpyInstance
  let pause: jest.SpyInstance

  beforeEach(() => {
    play = jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve())
    pause = jest.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(() => {})
    jest.spyOn(Math, 'random').mockReturnValue(0)
  })

  afterEach(() => jest.restoreAllMocks())

  test('does not play by itself', () => {
    renderPlayer()
    expect(play).not.toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument()
  })

  test('plays and pauses', () => {
    renderPlayer()

    fireEvent.click(screen.getByRole('button', { name: 'Play' }))
    expect(play).toHaveBeenCalled()

    fireEvent.click(screen.getByRole('button', { name: 'Pause' }))
    expect(pause).toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument()
  })

  test('moves to the next song and wraps around', () => {
    renderPlayer()
    expect(screen.getByText('First song')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Next song' }))
    expect(screen.getByText('Second song')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Next song' }))
    expect(screen.getByText('First song')).toBeInTheDocument()
  })

  test('keeps the playlist going when a song ends', () => {
    const { container } = renderPlayer()
    const audio = container.querySelector('audio')
    if (!audio) throw new Error('No audio element was rendered')

    fireEvent.click(screen.getByRole('button', { name: 'Play' }))
    Object.defineProperty(audio, 'ended', { configurable: true, value: true })
    fireEvent.pause(audio)
    fireEvent.ended(audio)

    expect(screen.getByText('Second song')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument()
  })

  test('falls back to a snowflake when the cover fails to load', () => {
    const { container } = renderPlayer()
    const cover = container.querySelector('img')
    if (!cover) throw new Error('No cover was rendered')

    fireEvent.error(cover)
    expect(cover.src).toMatch(/\/snowflake0\.svg$/)
  })

  test('toggles the snowfall', () => {
    const setStopSnowfall = jest.fn()
    renderPlayer({ setStopSnowfall })

    fireEvent.click(screen.getByRole('button', { name: 'Stop snowfall' }))
    expect(setStopSnowfall).toHaveBeenCalledTimes(1)
  })

  test('names the snowfall button after what it will do', () => {
    renderPlayer({ stopSnowfall: true })
    expect(screen.getByRole('button', { name: 'Start snowfall' })).toBeInTheDocument()
  })

  test('is a labelled region, translated', () => {
    renderPlayer({ lang: 'es' })
    expect(screen.getByRole('complementary', { name: 'Reproductor de música' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Reproducir' })).toBeInTheDocument()
  })
})
