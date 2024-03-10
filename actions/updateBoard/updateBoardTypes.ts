import { z } from 'zod';

// Import Board, the expected output type, from Prisma client
import { Board } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handlee errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the UpdateBoard schema (validation rules)
import { UpdateBoard } from './updateBoardSchema';

// Define the input type based on the UpdateBoard schema
export type InputType = z.infer<typeof UpdateBoard>;

// Define the output data type (ActionState) with Board
export type OutputType = ActionState<InputType, Board>;