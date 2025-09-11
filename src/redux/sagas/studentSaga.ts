import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  fetchStudentsRequest,
  fetchStudentsSuccess,
  fetchStudentsFailure,
  addStudentsRequest,
  addStudentsSuccess,
  addStudentsFailure,
  updateStudentsRequest,
  updateStudentsSuccess,
  updateStudentsFailure,
  deleteStudentsRequest,
  deleteStudentsSuccess,
  deleteStudentsFailure,
} from "@src/redux/slices/studentEntrySlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IStudententry } from "@src/types/studentEntry";
import StudentApiClient from "@src/api/student-manager";
import { toast } from "react-toastify";  


function* fetchStudentsSaga() {
  try {
    const response: IStudententry[] = yield call(
      [StudentApiClient, StudentApiClient.getStudents]
    );
    yield put(fetchStudentsSuccess(response));
    // toast.success("Students fetched successfully 🎉");
  } catch (error: any) {
    const message = error.message || "Failed to fetch students";
    yield put(fetchStudentsFailure(message));
    toast.error(message);
  }
}

function* addStudentSaga(action: PayloadAction<Omit<IStudententry, "id">>) {
  try {
    const response: IStudententry = yield call(
      [StudentApiClient, StudentApiClient.createStudent],
      action.payload
    );
    yield put(addStudentsSuccess(response));
    toast.success("Student added successfully ✅");
  } catch (error: any) {
    const message = error.message || "Failed to add student";
    yield put(addStudentsFailure(message));
    toast.error(message);
  }
}

function* updateStudentSaga(
  action: PayloadAction<{ id: string; updated: Partial<IStudententry> }>
) {
  try {
    const { id, updated } = action.payload;
    const response: IStudententry = yield call(
      [StudentApiClient, StudentApiClient.updateStudent],
      id,
      updated
    );
    yield put(updateStudentsSuccess(response));
    toast.success("Student updated successfully ✏️");
  } catch (error: any) {
    const message = error.message || "Failed to update student";
    yield put(updateStudentsFailure(message));
    toast.error(message);
  }
}

function* deleteStudentSaga(action: PayloadAction<string>) {
  try {
    yield call([StudentApiClient, StudentApiClient.deleteStudent], action.payload);
    yield put(deleteStudentsSuccess(action.payload));
    toast.success("Student deleted successfully 🗑️");
  } catch (error: any) {
    const message = error.message || "Failed to delete student";
    yield put(deleteStudentsFailure(message));
    toast.error(message);
  }
}

export default function* studentsSaga() {
  yield all([
    takeLatest(fetchStudentsRequest.type, fetchStudentsSaga),
    takeLatest(addStudentsRequest.type, addStudentSaga),
    takeLatest(updateStudentsRequest.type, updateStudentSaga),
    takeLatest(deleteStudentsRequest.type, deleteStudentSaga),
  ]);
}
