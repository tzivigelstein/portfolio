import React, { useReducer } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import AppContext from './appContext'
import appReducer from './appReducer'
import { SET_THEME } from './types'

const AppState = ({ children }) => {
  const [localTheme, setLocalTheme] = useLocalStorage('theme')

  const getInitialTheme = theme => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    if (typeof theme == 'undefined') {
      setLocalTheme(userPrefersDark ? 'dark' : 'light')
    }

    return theme
  }

  const initialState = {
    theme: getInitialTheme(localTheme),
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const setTheme = newTheme => {
    dispatch({
      type: SET_THEME,
      payload: newTheme,
    })
  }

  return (
    <AppContext.Provider
      value={{
        theme: state.theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppState
