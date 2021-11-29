import React from 'react'
import { SET_THEME } from './types'

export default (state, { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      }
  }
}
