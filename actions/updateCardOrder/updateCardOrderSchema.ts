import { z } from 'zod';

/**
 * Define the UpdateCardOrder object schema.
 * 
 */
export const UpdateCardOrder = z.object({
  boardId: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      order: z.number(),
      createdAt: z.date(),
      updatedAt: z.date(),
    }),
  ),
});