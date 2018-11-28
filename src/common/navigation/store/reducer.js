import * as constants from './constants'
import { fromJS } from 'immutable'
// 使用 immutable 会让对象不可更改
const defaultState = fromJS({
  navIndex: 1,
});
export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.NAV_CHANGE:
      return state.set('navIndex', action.index)
    default:
      return state;
  }
}