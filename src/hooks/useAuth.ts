import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@src/redux/store";
import {
  loginRequest,
  registerRequest,
  logout,
  setAuthenticated
} from "@src/redux/slices/authSlice";
import { isTokenExpired } from "@src/helper/token";


export const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.authSlice);


  const login = (email: string, password: string) => {
    dispatch(loginRequest({ email, password }));
  };
  
  const handleLogout = () => {
    dispatch(logout());
  };

  const checkAuthFromToken = () => {
    const token = localStorage.getItem("authToken");
    if((token)&&(!isTokenExpired(token))){
      dispatch(setAuthenticated(true));
    } else {
      dispatch(setAuthenticated(false));
    }
  };

  const register = (name: string, email: string, password: string) => {
    dispatch(registerRequest({ name, email, password }));
  };

  

  return {
    ...authState, 
    login,
    register,
    handleLogout,
    checkAuthFromToken
  };
};
