import axios from 'axios'
import { apiUrl, authorization } from '../constants'

const api = axios.create({
  baseURL: apiUrl,
  timeout: 30 * 1000
})

axios.defaults.headers.common['Authorization'] = authorization

export const getFeeds = async () => {
  return api.get(`feed_items`)
}
