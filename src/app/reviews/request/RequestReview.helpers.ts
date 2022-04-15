import { z } from "zod";

/**
 * Defines the shape of the form data
 */
export type Inputs = {
  url: string;
};

/**
 * Schema validation for the form data
 */
export const schema = z.object({
  url: z.string().url(),
});

/**
 * @returns The initial values to be used in the submit review form
 */
export function getInitialValues(): Inputs {
  return {
    url: "",
  };
}
