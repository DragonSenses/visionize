/* Imports */
import { z } from "zod";

/* Types */
export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<InputType, OutputType> = {
  fieldErrors?: FieldErrors<InputType>;
  error?: string | null;
  data?: OutputType;
};

/* Function */

export const createServerAction = <Input, Output>(
  schema: string,
  handler: (data: object) => null
) => {
  return async (data: Input): Promise<V> => {
    // Handle validation for schema
    // Safely parse result
    // Return errors

    let validatedData = { 1: "test" };
    return handler(validatedData);
  }
}