import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
} from "@src/redux/slices/authSlice";
import AuthApiClient from "@src/api/auth-manager"; 
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IAuthUser } from "@src/api/auth-manager";
import { toast } from "react-toastify";
;

function* handleLogin(action: PayloadAction<{ email: string; password: string }>) {
  try {
    const user: IAuthUser = yield call([AuthApiClient, AuthApiClient.login], action.payload);
    yield put(loginSuccess(user));
    toast.success("Logged in successfully!");
  } catch (error: any) {
    const message = error.response?.data?.message || "Login failed";
    yield put(loginFailure(message));
    toast.error(message);
  }
}


function* handleRegister(action: PayloadAction<{ name: string; email: string; password: string }>) {
  try {
    const user: IAuthUser = yield call([AuthApiClient, AuthApiClient.register], action.payload);
    yield put(registerSuccess(user));
    toast.success("Registered successfully!");
  } catch (error: any) {
    const message = error.response?.data?.message || "Registration failed";
    yield put(registerFailure(message));
    toast.error(message);
  }
}




export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(registerRequest.type, handleRegister);
}
