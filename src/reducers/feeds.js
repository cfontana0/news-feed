import * as actionTypes from '../constants/actionTypes'

const initialState = {
  form: {
    list: []
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_FEEDS_SUCCESS:
      return {...state, list: action.payload.feeds}
    default:
      return state
  }
}
