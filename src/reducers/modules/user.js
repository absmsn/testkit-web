import { SAVE_USER } from '../constants'

export default function (state = {}, action = {}) {
  switch (action.type) {
    case SAVE_USER:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}