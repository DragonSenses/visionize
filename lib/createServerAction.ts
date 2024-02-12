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

export function createServerAction<InputType, OutputType>(
  schema: z.Schema<InputType>,
  performAction: (validatedData: InputType) => Promise<ActionState<InputType, OutputType>>
): (data: InputType) => Promise<ActionState<InputType, OutputType>> {
  return async (data: InputType): Promise<ActionState<InputType, OutputType>> => {
    const validation = schema.safeParse(data);

    if (!validation.success) {
      return {
        fieldErrors: validation.error.flatten().fieldErrors as FieldErrors<InputType>,
      };
    }

    return performAction(validation.data);
  };
}
