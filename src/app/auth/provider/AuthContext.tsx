import { useContext } from "react";
import { createContext } from "react";
import { User } from "../auth.types";

interface AuthContextData {
  user?: User;
  onSignup: (u: User) => void;
  onLogout: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

export function useAuth() {
  return useContext(AuthContext);
}
