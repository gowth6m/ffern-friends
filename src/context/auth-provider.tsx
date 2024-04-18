"use client";

import ApiClient from "@/services/api-client";
import validatedEnv from "@/utils/env-parser";
import { createContext, useEffect, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Set auth to Basic auth with the username and password from the environment variables.
   */
  useEffect(() => {
    ApiClient.setAuthToken({
      type: "Basic",
      username: validatedEnv.NEXT_PUBLIC_USERNAME,
      password: validatedEnv.NEXT_PUBLIC_PASSWORD,
    });
    setIsAuthenticated(true);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated: isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
