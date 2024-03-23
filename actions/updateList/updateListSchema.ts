import { z } from 'zod';

/**
 * Define the UpdateList object schema.
 * 
 */
export const UpdateList = z.object({
  title: z.string({
    required_error: "Title is required", 
    invalid_type_error: "Title is required", 
  }).min(3, {
    message: "Must be 3 or more characters long.", 
  }),
  id: z.string(),
  boardId: z.string(),
});