import { z } from "zod";

/* Types */
// Define a generic type for field errors.
export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

// Define a generic type for action state.
export type ActionState<InputType, OutputType> = {
  fieldErrors?: FieldErrors<InputType>; // Optional field errors
  error?: string | null; // Optional general error message
  data?: OutputType; // Optional output data
};

/**
 * Creates a type-safe server action, an async function that runs on the server
 * and can be invoked from the client using a special URL. This returns another
 * function  that takes the input data as a parameter and returns a promise 
 * that resolves to an object that contains the output data or any errors. 
 * 
 * This function does the following:
 * - It validates the input data using the provided schema. It uses Zod, a 
 *  library that allows defining and parsing TypeScript types at runtime.
 * - If the validation fails, it returns an object with a fieldErrors property
 *  that contains an array of error messages for each invalid field.
 * - If the validation succeeds, it invokes the handler function with the 
 *  validated data and returns the result of the handler function.
 * 
 * The createServerAction function can be used to create different server 
 * actions for different purposes. For example, the code you provided creates
 * a server action called createBoard that creates a new board in the database. 
 * 
 * @param schema - defines the shape and validation rules of the input data for the server action.
 * @param performAction - handler function performs the actual logic of the server action and 
 * returns an object that contains the output data or any errors.
 * @returns  another function that takes the input data as a parameter and 
 * returns a promise that resolves to an object that contains the output data
 * or any errors.
 */
export function createServerAction<InputType, OutputType>(
  // Input validation schema
  schema: z.Schema<InputType>,
  // Handler function
  performAction: (validatedData: InputType) => Promise<ActionState<InputType, OutputType>> 
): (data: InputType) => Promise<ActionState<InputType, OutputType>> {
  return async (data: InputType): Promise<ActionState<InputType, OutputType>> => {
    // Validate input data using the provided schema.
    const validation = schema.safeParse(data);

    if (!validation.success) {
      // If validation fails, return field errors.
      return {
        fieldErrors: validation.error.flatten().fieldErrors as FieldErrors<InputType>,
      };
    }

    // Otherwise, invoke the performAction handler with validated data.
    return performAction(validation.data);
  };
}
