import { useMutation } from "react-query";
import { SignupUserInput, User } from "./auth.types";

export const USERS_KEY = "users";

/**
 * @returns The list of stored users
 */
function getUsers() {
  const stored = localStorage.getItem(USERS_KEY);
  const list: User[] = JSON.parse(stored ?? "[]");

  return list;
}

/**
 * @returns The created User
 */
export function useSignup() {
  return useMutation((input: SignupUserInput) => {
    return new Promise<User>((resolve) => {
      const list = getUsers();
      const newUser = {
        ...input,
        id: Date.now(),
      };

      // TODO: Check for dupes
      const newList = list.concat(newUser);

      setTimeout(() => {
        localStorage.setItem(USERS_KEY, JSON.stringify(newList));
        resolve(newUser);
      }, 2000);
    });
  });
}
