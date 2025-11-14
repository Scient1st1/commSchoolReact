"use client";

import api from "@/util/api";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from "react";

type userType = {
  id: number;
  username: string;
  email: string;
  image: string;
  // add other user properties as needed
};

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  user: userType | null;
  setUser: (user: userType | null) => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => {},
  user: null,
  setUser: (user: userType | null) => {},
});
export default AuthContext;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<userType | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      api
        .get<userType>("auth/me")
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

export const useAuthCustomHook = () => {
  return useContext(AuthContext);
};
