import { z } from 'zod';

// Import Card, the expected output type, from Prisma client
import { Card } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the UpdateCard schema (validation rules)
import { UpdateCard } from './updateCardSchema';

// Define the input type based on the UpdateCard schema
export type InputType = z.infer<typeof UpdateCard>;

// Define the output data type (ActionState) with Card
export type OutputType = ActionState<InputType, Card>;