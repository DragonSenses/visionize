import { z } from 'zod';

// Import Board, the expected output type, from Prisma client
import { Board } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the DeleteBoard schema (validation rules)
import { DeleteBoard } from './deleteBoardSchema';

// Define the input type based on the DeleteBoard schema
export type InputType = z.infer<typeof DeleteBoard>;

// Define the output data type (ActionState) with Board
export type OutputType = ActionState<InputType, Board>;