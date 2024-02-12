import { z } from 'zod';

// Import Board, the expected output type, from Prisma client
import { Board } from '@prisma/client';

import { ActionState } from '@/lib/createServerAction';

// Import the CreateBoard schema (validation rules)
import { CreateBoard } from './createBoardSchema';

// Define the input type based on the CreateBoard schema
export type InputType = z.infer<typeof CreateBoard>;

// Define the return type (ActionState) with Board as the output data type
export type ReturnType = ActionState<InputType, Board>;