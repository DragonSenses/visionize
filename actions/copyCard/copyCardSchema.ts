import { z } from 'zod';

/**
 * Define the CopyCard object schema.
 * 
 */
export const CopyCard = z.object({
  id: z.string(),
  boardId: z.string(),
});