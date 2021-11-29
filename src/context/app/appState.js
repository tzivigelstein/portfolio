import React, { useReducer } from 'react'
import AppContext from './appContext'
import appReducer from './appReducer'
import { SET_THEME } from './types'

const AppState = ({ children }) => {
  const initialState = {
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
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
