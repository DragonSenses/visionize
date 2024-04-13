import { z } from 'zod';

/**
 * Define the UpdateListOrder object schema.
 * 
 */
export const UpdateListOrder = z.object({
  boardId: z.string(),
});