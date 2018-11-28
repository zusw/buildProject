import * as constants from './constants'
import { fromJS } from 'immutable'
// 使用 immutable 会让对象不可更改
const defaultState = fromJS({
  jokeList: [],
  page: 1,
  totalPage: 1,
});
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.GET_JOKES_LISTS:
      return state.set('jokeList', action.data)
      // return state.merge({
      //   list: action.data,
      //   totalPage: action.totalPage
      // });
    default:
      return state;
  }
}

