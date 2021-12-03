import { SET_THEME } from './types'

const appReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_THEME:
      window.localStorage.setItem('theme', JSON.stringify(payload))
      return {
        ...state,
        theme: payload,
      }
  }
}

export default appReducer
