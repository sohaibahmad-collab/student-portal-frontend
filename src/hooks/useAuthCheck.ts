import { useState, useEffect } from "react";
import { isTokenExpired } from "@src/helper/token";
import { useSelector } from "react-redux";
import type { RootState } from "@src/redux/store";


export function useAuthCheck() {
 const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
 const user = useSelector((state: RootState)=> state?.authSlice)

  

  const checkAuth = () => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token && !isTokenExpired(token));
  };

  useEffect(() => {
    
    checkAuth();

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "authToken") {
        checkAuth();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [user]);

  return { isAuthenticated, checkAuth };
}
