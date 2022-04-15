export interface User {
  id: number;
  name: string;
  email: string;
  password: string; // Hashed
}

export interface SignupUserInput {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}
