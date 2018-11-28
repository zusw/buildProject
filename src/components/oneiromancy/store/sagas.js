import { put, takeEvery } from 'redux-saga/effects'
import { GET_DREAM_LIST } from './constants'
import { disData } from './actionCreators';
import axios from 'axios'

function* getJokeLists() {
  try{
    const res = yield axios.get('/api/dream/dreamType.json')
    const action = disData(res.data.result)
    yield put(action)
  } catch(e) {
    console.log('muke_todolist 网络请求失败')
  }
}
// generator 函数
function* dreamSaga() {
  yield takeEvery(GET_DREAM_LIST, getJokeLists);
}

export default dreamSaga;