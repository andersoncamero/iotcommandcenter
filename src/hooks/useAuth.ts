import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export interface AppClaims {
  user_id: string;
  exp: string | number;
}

export interface AuthHook {
  user: AppClaims | null;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuth = (): AuthHook => {
  const [user, setUser] = useState<AppClaims | null>(null);

  const loadUserFromToken = (token: string | null) => {
    if (!token) {
      setUser(null);
      return;
    }

    try {
      const decoded = jwtDecode<AppClaims>(token);

      const exp =
        typeof decoded.exp === "string"
          ? parseInt(decoded.exp, 10)
          : decoded.exp;

      if (typeof exp === "number" && exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        localStorage.removeItem("controllers");
        setUser(null);
        return;
      }

      setUser(decoded);
    } catch {
      localStorage.removeItem("token");
      localStorage.removeItem("controllers");

      setUser(null);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setTimeout(() => loadUserFromToken(token), 0);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    loadUserFromToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return {
    user,
    login,
    logout,
  };
};
