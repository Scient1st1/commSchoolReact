"use client";

import api from "@/util/api";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: any;
  setUser: (user: any) => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => {},
  user: null,
  setUser: (user: any) => {},
});
export default AuthContext;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      api
        .get("auth/me")
        .then((response) => {
          setUser(response.data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
        });
    }
  }, [isLoggedIn]);

  const value: AuthContextType = { isLoggedIn, setIsLoggedIn, user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
