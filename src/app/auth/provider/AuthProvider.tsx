import { ReactNode, useState } from "react";
import { User } from "../auth.types";
import { AuthContext } from "./AuthContext";
import { getSavedSession, saveSession } from "./AuthProvider.helpers";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(getSavedSession());

  function onSignup(user: User) {
    saveSession(user);
    setUser(user);
  }

  function onLogin(user: User) {
    saveSession(user);
    setUser(user);
  }

  function onLogout() {
    setUser(undefined);
  }

  return (
    <AuthContext.Provider value={{ user, onSignup, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
