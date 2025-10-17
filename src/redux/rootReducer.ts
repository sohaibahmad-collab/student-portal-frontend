import { combineReducers } from "@reduxjs/toolkit";
import studentsSlice from "@src/redux/slices/studentEntrySlice";
import authSlice from "@src/redux/slices/authSlice"

const rootReducer = combineReducers({
  studentsSlice:studentsSlice,
  authSlice:authSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
