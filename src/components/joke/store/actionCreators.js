import { GET_JOKE_LIST, GET_JOKES_LISTS } from './constants'
// 类型调用
export const getJokesList = () =>({
  type: GET_JOKE_LIST
})
export const getJokesLists = (data) => ({
  type: GET_JOKES_LISTS,
  data
})