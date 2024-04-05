import { z } from 'zod';

// Import Card, the expected output type, from Prisma client
import { Card } from '@prisma/client';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the CreateCard schema (validation rules)
import { CreateCard } from './createCardSchema';

// Define the input type based on the CreateCard schema
export type InputType = z.infer<typeof CreateCard>;

// Define the output data type (ActionState) with Card
export type OutputType = ActionState<InputType, Card>;