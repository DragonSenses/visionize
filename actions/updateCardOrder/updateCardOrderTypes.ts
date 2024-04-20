import { z } from 'zod';

// Import Card, the expected output type, from Prisma client
import { Card } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the UpdateCardOrder schema (validation rules)
import { UpdateCardOrder } from './updateCardOrderSchema';

// Define the input type based on the schema
export type InputType = z.infer<typeof UpdateCardOrder>;

// Define the output data type (ActionState)
export type OutputType = ActionState<InputType, Card[]>;