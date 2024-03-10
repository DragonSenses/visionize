import { z } from 'zod';

/**
 * Define the UpdateBoard object schema.
 * 
 */
export const UpdateBoard = z.object({
  title: z.string({
    required_error: "Title is required", 
    invalid_type_error: "Title is required", 
  }).min(3, {
    message: "Must be 3 or more characters long.", 
  }),
  id: z.string(),
});