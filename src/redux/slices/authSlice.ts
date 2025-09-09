import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "@src/types/user";
import { isTokenExpired } from "@src/helper/token";
interface IAuthState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (
      state,
      _action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      const token = action.payload.token;

      if (isTokenExpired(token)) {
        state.error = "Session expired. Please login again.";
        state.isAuthenticated = false;
        state.user = null;
        localStorage.removeItem("authToken");
      } else {
        state.user = action.payload;
        state.isAuthenticated = true;
        localStorage.setItem("authToken", token);
      }

      state.loading = false;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("authToken");
    },

    registerRequest: (
      state,
      _action: PayloadAction<{ name: string; email: string; password: string }>
    ) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuthenticated = false;
      state.loading = false;
      localStorage.setItem("authToken", action.payload.token);
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registerRequest,
  registerSuccess,
  registerFailure,
} = authSlice.actions;

export default authSlice.reducer;
