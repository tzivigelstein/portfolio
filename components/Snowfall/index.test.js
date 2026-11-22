import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import Snowfall from './index'

const setWidth = (width) => {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
}

const flakes = (container) => container.querySelectorAll('img')

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
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true')
    flakes(container).forEach((flake) => expect(flake).toHaveAttribute('alt', ''))
  })

  test('removes the flakes once it has faded out, and starts again', () => {
    setWidth(500)
    const { container, rerender } = render(<Snowfall stopSnowfall={false} />)

    rerender(<Snowfall stopSnowfall />)
    expect(flakes(container)).toHaveLength(20)

    fireEvent.transitionEnd(container.firstChild)
    expect(flakes(container)).toHaveLength(0)

    rerender(<Snowfall stopSnowfall={false} />)
    expect(flakes(container)).toHaveLength(20)
  })
})
