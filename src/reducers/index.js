import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import feeds from './feeds'

const rootReducer = combineReducers({
  routing,
  feeds
})

export default rootReducer
