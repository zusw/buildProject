// import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import jokeSaga from "Components/joke/store/sagas";
import newsSaga from 'Components/news/store/sagas';
import dreamSaga from 'Components/oneiromancy/store/sagas'
function* rootSaga() {
  yield [
    fork(jokeSaga),
    fork(newsSaga),
    fork(dreamSaga)
  ];
}

export default rootSaga;