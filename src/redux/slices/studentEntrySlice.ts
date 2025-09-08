import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IStudententry } from "@src/types/studentEntry";

interface IStudentState {
  items: IStudententry[];
  loading: boolean;
  error: string | null;
}

const initialState: IStudentState = {
  items: [],
  loading: false,
  error: null,
};

const studentsSlice = createSlice({
  name: "studentsentry",
  initialState,
  reducers: {
    fetchStudentsRequest: (state) => {
      state.loading = true;
    },
    fetchStudentsSuccess: (state, action: PayloadAction<IStudententry[]>) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchStudentsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    addStudentsRequest: (
      state,
      _action: PayloadAction<Omit<IStudententry, "_id">>
    ) => {
      state.loading = true;
    },
    addStudentsSuccess: (state, action: PayloadAction<IStudententry>) => {
      state.items.push(action.payload);
      state.loading = false;
    },
    addStudentsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    updateStudentsRequest: (
      state,
      _action: PayloadAction<{ id: string; updated: Partial<IStudententry> }>
    ) => {
      state.loading = true;
    },
    updateStudentsSuccess: (state, action: PayloadAction<IStudententry>) => {
      state.items = state.items.map((exp) =>
        exp._id === action.payload._id ? action.payload : exp
      );
      state.loading = false;
    },
    updateStudentsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    deleteStudentsRequest: (state, _action: PayloadAction<string>) => {
      state.loading = true;
    },
    deleteStudentsSuccess: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((exp) => exp._id !== action.payload);
      state.loading = false;
    },
    deleteStudentsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
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
} = studentsSlice.actions;

export default studentsSlice.reducer;
