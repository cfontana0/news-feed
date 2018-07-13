import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistState } from 'redux-devtools'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'

const router = routerMiddleware(hashHistory)
const enhancer = compose(
  applyMiddleware(thunk, router),
  persistState(
    window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
  )
)

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState, enhancer)
}
