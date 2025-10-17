import { all, fork } from "redux-saga/effects";
import studentsSaga from "@src/redux/sagas/studentSaga";
import authSaga from "@src/redux/sagas/authSaga";
export default function* rootSaga() {
  yield all([fork(studentsSaga),fork(authSaga)]);
}
