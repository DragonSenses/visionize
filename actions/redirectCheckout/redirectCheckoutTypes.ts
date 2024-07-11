import { z } from 'zod';

// Encapsulate the state of various actions (e.g., fetching data, submitting forms, etc.)
// Provides a structured way to handle errors and manage data flow
import { ActionState } from '@/lib/createServerAction';

// Import the schema (validation rules)
import { RedirectCheckout } from './redirectCheckoutSchema';

// Define the input type based on the schema
export type InputType = z.infer<typeof RedirectCheckout>;

// Define the output data type (ActionState) with expected output type
export type OutputType = ActionState<InputType, string>;