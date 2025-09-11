import { useDispatch,useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@src/redux/store";
import {
  loginRequest,
  registerRequest,
  logout,
  stopLoading
} from "@src/redux/slices/authSlice";



export const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
    const { loading, error } = useSelector((state: RootState) => state.authSlice);

  const login = (email: string, password: string) => {
    dispatch(loginRequest({ email, password }));
  };

  const stop_Loading =()=>{
    dispatch(stopLoading())
  }
  
  const handleLogout = () => {
    dispatch(logout());
  };


  const register = (name: string, email: string, password: string) => {
    dispatch(registerRequest({ name, email, password }));
  };

  

  return {
    login,
    register,
    handleLogout,
    stop_Loading,
    loading,
    error
  };
};
