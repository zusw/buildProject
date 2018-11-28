import * as constants from './constants'
import { fromJS } from 'immutable'
// 使用 immutable 会让对象不可更改
const defaultState = fromJS({
  newsList: [],
  page: 1,
  totalPage: 1,
});
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.DIS_DATA:
      return state.set('newsList', action.data)
      // return state.merge({
      //   list: action.data,
      //   totalPage: action.totalPage
      // });
    default:
      return state;
  }
}

