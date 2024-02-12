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

// Create a function called createServerAction.
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
