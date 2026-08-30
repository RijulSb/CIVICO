"use client";

import * as React from "react";
import { apiGetMe, apiSignIn, apiSignUp, apiVerifyAdminKey } from "./api";
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
  unlockWithAdminKey: (adminKey: string) => Promise<UserProfile>;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = "civico_token";
const USER_KEY = "civico_user";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<UserProfile | null>(null);
  const [token, setToken] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  // Initialize session from localStorage on mount
  React.useEffect(() => {
    try {
      const storedToken = localStorage.getItem(TOKEN_KEY);
      const storedUser = localStorage.getItem(USER_KEY);

      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));

        // Validate session with backend in background
        apiGetMe(storedToken)
          .then((freshUser) => {
            setUser(freshUser);
            localStorage.setItem(USER_KEY, JSON.stringify(freshUser));
          })
          .catch(() => {
            // Keep existing cached profile for offline/dev resilience unless explicitly signed out
          });
      }
    } catch {
      // Ignore localStorage read errors in SSR/strict sandbox
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signIn = React.useCallback(async (payload: SignInPayload): Promise<UserProfile> => {
    setIsLoading(true);
    try {
      const res = await apiSignIn(payload);
      setToken(res.access_token);
      setUser(res.user);
      if (typeof window !== "undefined") {
        localStorage.setItem(TOKEN_KEY, res.access_token);
        localStorage.setItem(USER_KEY, JSON.stringify(res.user));
      }
      return res.user;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signUp = React.useCallback(async (payload: SignUpPayload): Promise<UserProfile> => {
    setIsLoading(true);
    try {
      const res = await apiSignUp(payload);
      setToken(res.access_token);
      setUser(res.user);
      if (typeof window !== "undefined") {
        localStorage.setItem(TOKEN_KEY, res.access_token);
        localStorage.setItem(USER_KEY, JSON.stringify(res.user));
      }
      return res.user;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signOut = React.useCallback(() => {
    setUser(null);
    setToken(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
    }
  }, []);

  const unlockWithAdminKey = React.useCallback(async (adminKey: string): Promise<UserProfile> => {
    setIsLoading(true);
    try {
      const res = await apiVerifyAdminKey(adminKey, token || undefined);
      setToken(res.access_token);
      setUser(res.user);
      if (typeof window !== "undefined") {
        localStorage.setItem(TOKEN_KEY, res.access_token);
        localStorage.setItem(USER_KEY, JSON.stringify(res.user));
      }
      return res.user;
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  const isAuthenticated = !!user;
  const isAdmin = user?.role === "admin";
  const isCivilian = user?.role === "civilian";

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        isAdmin,
        isCivilian,
        isLoading,
        signIn,
        signUp,
        signOut,
        unlockWithAdminKey,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
