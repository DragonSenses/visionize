import { z } from 'zod';

/**
 * Define the UpdateCard object schema.
 * 
 */
export const UpdateCard = z.object({
  id: z.string(),
  boardId: z.string(),
  description: z.optional(
    z.string({
      required_error: "Description is required",
      invalid_type_error: "Description is required",
    }).min(3, {
      message: "Description must be 3 or more characters long."
    })
  ),
  title: z.optional(z.string({
    required_error: "Title is required", 
    invalid_type_error: "Title is required", 
  }).min(3, {
    message: "Title must be 3 or more characters long.", 
  })),
});