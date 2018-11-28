import { put, takeEvery } from 'redux-saga/effects'
import { GET_JOKE_LIST } from './constants'
import { getJokesLists } from './actionCreators';
import axios from 'axios'

function* getJokeLists() {
  try{
    const res = yield axios.get('/api/joke.json')
    const action = getJokesLists(res.data.result.data)
    yield put(action)
  } catch(e) {
    console.log('muke_todolist 网络请求失败')
  }
}
// generator 函数
function* jokeSaga() {
  yield takeEvery(GET_JOKE_LIST, getJokeLists);
}

export default jokeSaga;