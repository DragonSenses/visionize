import { z } from 'zod';

// Import List, the expected output type, from Prisma client
import { List } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the DeleteList schema (validation rules)
import { DeleteList } from './deleteListSchema';

// Define the input type based on the DeleteList schema
export type InputType = z.infer<typeof DeleteList>;

// Define the output data type (ActionState) with List
export type OutputType = ActionState<InputType, List>;