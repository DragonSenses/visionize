import { z } from 'zod';

// Import List, the expected output type, from Prisma client
import { List } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the CopyList schema (validation rules)
import { CopyList } from './copyListSchema';

// Define the input type based on the CopyList schema
export type InputType = z.infer<typeof CopyList>;

// Define the output data type (ActionState) with List
export type OutputType = ActionState<InputType, List>;