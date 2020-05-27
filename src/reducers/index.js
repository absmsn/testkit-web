import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import user from './modules/user'

const reducers = combineReducers({
  user
})

export default createStore(reducers, composeWithDevTools())