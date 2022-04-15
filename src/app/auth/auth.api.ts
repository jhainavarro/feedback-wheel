import { useMutation } from "react-query";
import { LoginUserInput, SignupUserInput, User } from "./auth.types";

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
        password: input.password, // TODO: Hash me
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

/**
 * @returns The user with the given credentials
 */
export function useLogin() {
  return useMutation((input: LoginUserInput) => {
    return new Promise<User>((resolve) => {
      const list = getUsers();
      const hashedPw = input.password; // TODO: Hash me
      const user = list.find(
        (u) => u.email === input.email && u.password === hashedPw
      );

      if (!user) {
        throw new Error("User does not exist");
      }

      setTimeout(() => {
        resolve(user);
      }, 2000);
    });
  });
}
