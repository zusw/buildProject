import { DIS_DATA, GET_NEWS_LIST } from './constants'
// 类型调用
export const getNewsList = () =>({
  type: GET_NEWS_LIST
})
export const disData = (data) => ({
  type: DIS_DATA,
  data
})