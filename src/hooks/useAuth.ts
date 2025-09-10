import { useDispatch } from "react-redux";
import type { AppDispatch } from "@src/redux/store";
import {
  loginRequest,
  registerRequest,
  logout,
} from "@src/redux/slices/authSlice";



export const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();

  const login = (email: string, password: string) => {
    dispatch(loginRequest({ email, password }));
  };
  
  const handleLogout = () => {
    dispatch(logout());
  };


  const register = (name: string, email: string, password: string) => {
    dispatch(registerRequest({ name, email, password }));
  };

  

  return {
    login,
    register,
    handleLogout
  };
};
