import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthCheck } from "@src/hooks/useAuthCheck";

interface IPrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const {isAuthenticated}=useAuthCheck()
  
  if (isAuthenticated === null) return null;


  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
