import { z } from 'zod';

/**
 * Define the DeleteCard object schema.
 * 
 */
export const DeleteCard = z.object({
  id: z.string(),
  boardId: z.string(),
});
