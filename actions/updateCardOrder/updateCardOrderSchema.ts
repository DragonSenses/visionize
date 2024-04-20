import { z } from 'zod';

/**
 * Define the UpdateCardOrder object schema.
 * 
 */
export const UpdateCardOrder = z.object({
  listId: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      listId: z.string(),
      title: z.string(),
      order: z.number(),
      createdAt: z.date(),
      updatedAt: z.date(),
    }),
  ),
});