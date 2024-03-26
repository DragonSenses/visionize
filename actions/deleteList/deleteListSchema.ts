import { z } from 'zod';

/**
 * Define the DeleteList object schema.
 * 
 */
export const DeleteList = z.object({
  id: z.string(),
  boardId: z.string(),
});