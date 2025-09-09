import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@src/hooks/useAuth";

interface IPrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
