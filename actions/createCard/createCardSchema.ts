import { z } from 'zod';

/**
 * Define the CreateCard object schema.
 * 
 */
export const CreateCard = z.object({
  title: z.string({
    required_error: "Title is required", 
    invalid_type_error: "Title is required", 
  }).min(1, {
    message: "Must be 1 or more characters long.", 
  }),
  boardId: z.string(),
  listId: z.string(),
});