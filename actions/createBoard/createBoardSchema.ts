import { z } from 'zod';

/**
 * Define the CreateBoard object schema.
 * 
 * Add custom error messages for: required fields, 
 * invalid type and minimum length.
 */
export const CreateBoard = z.object({
  title: z.string({
    required_error: "Title is required", 
    invalid_type_error: "Title is required", 
  }).min(3, {
    message: "Must be 3 or more characters long.", 
  }),
  image: z.string({
    required_error: "Image is required",
    invalid_type_error: "Image is required",
  }),
});