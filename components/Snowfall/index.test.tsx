import { render, fireEvent, act } from '@testing-library/react'
import Snowfall from './index'

const setWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
}

const flakes = (container: HTMLElement) => container.querySelectorAll('img')

const root = (container: HTMLElement): Element => {
  if (!container.firstElementChild) throw new Error('Nothing was rendered')
  return container.firstElementChild
}

describe('Snowfall', () => {
  afterEach(() => setWidth(1024))

  test('uses fewer flakes on narrow screens', () => {
    setWidth(390)
    const { container } = render(<Snowfall stopSnowfall={false} />)
    expect(flakes(container)).toHaveLength(15)
  })

  test('never uses more than 50 flakes', () => {
    setWidth(2560)
    const { container } = render(<Snowfall stopSnowfall={false} />)
    expect(flakes(container)).toHaveLength(50)
  })

  test('follows the window width', () => {
    setWidth(1000)
    const { container } = render(<Snowfall stopSnowfall={false} />)
    expect(flakes(container)).toHaveLength(40)

    act(() => {
      setWidth(500)
      window.dispatchEvent(new Event('resize'))
    })
    expect(flakes(container)).toHaveLength(20)
  })

  test('is hidden from assistive technology', () => {
    const { container } = render(<Snowfall stopSnowfall={false} />)
    expect(root(container)).toHaveAttribute('aria-hidden', 'true')
    flakes(container).forEach((flake) => expect(flake).toHaveAttribute('alt', ''))
  })

  test('replaces a flake that has finished falling', () => {
    setWidth(500)
    const { container } = render(<Snowfall stopSnowfall={false} />)
    const flake = root(container).firstElementChild
    if (!(flake instanceof HTMLElement)) throw new Error('No flake was rendered')

    fireEvent.animationEnd(flake)

    expect(flakes(container)).toHaveLength(20)
    expect(flake.style.animationName).toBe('')
    expect(flake.style.width).toMatch(/^\d+px$/)
  })

  test('removes the flakes once it has faded out, and starts again', () => {
    setWidth(500)
    const { container, rerender } = render(<Snowfall stopSnowfall={false} />)

    rerender(<Snowfall stopSnowfall />)
    expect(flakes(container)).toHaveLength(20)

    fireEvent.transitionEnd(root(container))
    expect(flakes(container)).toHaveLength(0)

    rerender(<Snowfall stopSnowfall={false} />)
    expect(flakes(container)).toHaveLength(20)
  })
})
