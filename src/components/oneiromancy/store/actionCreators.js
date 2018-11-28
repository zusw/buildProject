import { GET_DREAM_LIST, DIS_DATA } from './constants'
export const getDreamList = () => ({
  type: GET_DREAM_LIST
})
export const disData = (data) => ({
  type: DIS_DATA,
  data
})