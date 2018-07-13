import { getFeeds } from '../utils/api'
import * as actionTypes from '../constants/actionTypes'

const onFeedsActionSuccess = (feeds) => {
  return {
    type: actionTypes.GET_FEEDS_SUCCESS,
    payload: {feeds}
  }
}

const onFeedsActionError = () => {
  return {
    type: actionTypes.GET_FEEDS_ERROR,
    payload: {}
  }
}

export const feedsAction = () => {
  return async (dispatch, getState) => {
    try {
      const req = await getFeeds()

      if (req.status === 200) {
        const feeds = req.data.data.map(feed => {
          const sender = req.data.included.filter(data => { return (data.type === 'user' && data.id === feed.relationships.sender.data.id) })[0]
          const message = req.data.included.filter(data => { return (data.type === 'feed-message' && data.id === feed.relationships['feed-message'].data.id) })[0]
          return {...feed, sender, message}
        })

        return dispatch(onFeedsActionSuccess(feeds))
      } else {
        return dispatch(onFeedsActionError())
      }
    } catch (e) {
      return dispatch(onFeedsActionError())
    }
  }
}
