import { z } from 'zod';

// Import Board, the expected output type, from Prisma client
import { Board } from '@prisma/client';

// Import the 'CreateBoard' schema (validation rules)
import { CreateBoard } from './createBoardSchema';

// Define a TypeScript type named 'Input'
// The type is inferred from the 'CreateBoard' schema using 'z.infer'
export type Input = z.infer<typeof CreateBoard>;