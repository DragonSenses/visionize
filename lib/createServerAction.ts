/* Imports */
import { z } from "zod";

/* Types */

/* Function */
function createServerActionEffect<T, U, V>(input: T, schema: z.Schema<U>, handler: (output: U) => Promise<V>)

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