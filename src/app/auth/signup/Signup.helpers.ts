import { z } from "zod";

/**
 * Defines the shape of the form data
 */
export type Inputs = {
  name: string;
  email: string;
  password: string;
};

/**
 * Schema validation for the form data
 */
export const schema = z.object({
  name: z.string().min(1, "Please enter a name"),
  email: z.string().email(),
  password: z.string().min(1, "Please enter a password"),
});

/**
 * @returns The initial values to be used in the submit review form
 */
export function getInitialValues(): Inputs {
  return {
    name: "",
    email: "",
    password: "",
  };
}
