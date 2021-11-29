import React from 'react'
import useApp from '../../hooks/useApp'

const Container = ({ children }) => {
  const { theme } = useApp()

  return <main data-theme={theme}>{children}</main>
}

export default Container
