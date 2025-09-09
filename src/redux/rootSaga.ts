import { all, fork } from "redux-saga/effects";
import studentsSaga from "./sagas/studentSaga";
import authSaga from "./sagas/authSaga";
export default function* rootSaga() {
  yield all([fork(studentsSaga),fork(authSaga)]);
}
