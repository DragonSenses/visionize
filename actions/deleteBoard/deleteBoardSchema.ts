import { z } from 'zod';

/**
 * Define the DeleteBoard object schema.
 * 
 */
export const DeleteBoard = z.object({
  id: z.string(),
});