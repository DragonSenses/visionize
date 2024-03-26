import { z } from 'zod';

/**
 * Define the CopyList object schema.
 * 
 */
export const CopyList = z.object({
  id: z.string(),
  boardId: z.string(),
});