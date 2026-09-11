"use client";

import * as React from "react";
import { apiGetMe, apiSignIn, apiSignUp } from "./api";
import type { SignInPayload, SignUpPayload, UserProfile } from "./types";

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isCivilian: boolean;
  isLoading: boolean;
  signIn: (payload: SignInPayload) => Promise<UserProfile>;
  signUp: (payload: SignUpPayload) => Promise<UserProfile>;
  signOut: () => void;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = "civico_token";
const USER_KEY = "civico_user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<UserProfile | null>(null);
  const [token, setToken] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      const storedToken = localStorage.getItem(TOKEN_KEY);
      const storedUser = localStorage.getItem(USER_KEY);
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
        apiGetMe(storedToken)
          .then((freshUser) => {
            setUser(freshUser);
            localStorage.setItem(USER_KEY, JSON.stringify(freshUser));
          })
          .catch(() => {
            // Keep the cached profile available when the backend is offline.
          });
      }
    } catch {
      // Ignore localStorage read errors during SSR or restricted browser sessions.
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signIn = React.useCallback(async (payload: SignInPayload) => {
    setIsLoading(true);
    try {
      const res = await apiSignIn(payload);
      setToken(res.access_token);
      setUser(res.user);
      localStorage.setItem(TOKEN_KEY, res.access_token);
      localStorage.setItem(USER_KEY, JSON.stringify(res.user));
      return res.user;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signUp = React.useCallback(async (payload: SignUpPayload) => {
    setIsLoading(true);
    try {
      const res = await apiSignUp(payload);
      setToken(res.access_token);
      setUser(res.user);
      localStorage.setItem(TOKEN_KEY, res.access_token);
      localStorage.setItem(USER_KEY, JSON.stringify(res.user));
      return res.user;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signOut = React.useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin",
        isCivilian: user?.role === "civilian",
        isLoading,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
