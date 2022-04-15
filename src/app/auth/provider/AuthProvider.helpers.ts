import { User } from "../auth.types";

export const SESSION_KEY = "session";

/**
 * @returns The current user saved in browser storage
 */
export function getSavedSession() {
  const stored = localStorage.getItem(SESSION_KEY);
  const user: User | undefined = stored ? JSON.parse(stored) : undefined;

  return user;
}

/**
 * Saves the user as the current session in browser storage
 */
export function saveSession(user: User) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}
