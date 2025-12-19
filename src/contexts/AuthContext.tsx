import React from "react";
import { useAuth, type AuthHook } from "../hooks/useAuth";

interface AuthContextProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext<AuthHook | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const authHook = useAuth();
  return (
    <AuthContext.Provider value={authHook}>{children}</AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = (): AuthHook => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
