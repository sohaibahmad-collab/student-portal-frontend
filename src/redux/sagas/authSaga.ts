import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from "@src/redux/slices/authSlice";
import AuthApiClient from "@src/api/auth-manager"; 
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IAuthUser } from "@src/api/auth-manager";


function* handleLogin(action: PayloadAction<{ email: string; password: string }>) {
  try {
    const user:IAuthUser = yield call([AuthApiClient, AuthApiClient.login], action.payload);
    yield put(loginSuccess(user));
  } catch (error: any) {
    yield put(loginFailure(error.response?.data?.message || "Login failed"));
  }
}


function* handleRegister(action: PayloadAction<{ name: string; email: string; password: string }>) {
  try {
    const user:IAuthUser = yield call([AuthApiClient, AuthApiClient.register], action.payload);
    yield put(registerSuccess(user));
  } catch (error: any) {
    yield put(registerFailure(error.response?.data?.message || "Registration failed"));
  }
}


function* handleLogout() {
  try {
    yield call([AuthApiClient, AuthApiClient.logout]); 
    yield put(logoutSuccess());
  } catch (error: any) {
    yield put(logoutFailure(error.response?.data?.message || "Logout failed"));
  }
}


export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(registerRequest.type, handleRegister);
  yield takeLatest(logoutRequest.type, handleLogout);
}
