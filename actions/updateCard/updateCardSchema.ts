import { z } from 'zod';

/**
 * Define the UpdateCard object schema.
 * 
 */
export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z.string({
      required_error: "Description is required",
      invalid_type_error: "Description is required",
    }).min(3, {
      message: "Description must be 3 or more characters long."
    })
  ),
  title: z.string({
    required_error: "Title is required", 
    invalid_type_error: "Title is required", 
  }).min(3, {
    message: "Title must be 3 or more characters long.", 
  }),
  id: z.string(),
});