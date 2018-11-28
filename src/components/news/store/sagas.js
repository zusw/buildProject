import { put, takeEvery } from 'redux-saga/effects'
import { GET_NEWS_LIST } from './constants'
import { disData } from './actionCreators';
import axios from 'axios'

function* getNewsLists() {
  try{
    const res = yield axios.get('/api/news.json')
    const action = disData(res.data.result.data)
    yield put(action)
  } catch(e) {
    console.log('muke_todolist 网络请求失败')
  }
}
// generator 函数
function* newsSaga() {
  yield takeEvery(GET_NEWS_LIST, getNewsLists);
}

export default newsSaga;