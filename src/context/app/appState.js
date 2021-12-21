import { useReducer } from 'react'
import AppContext from './appContext'
import appReducer from './appReducer'

const AppState = ({ children }) => {
  const initialState = {}

  const [state, dispatch] = useReducer(appReducer, initialState)

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}

export default AppState
