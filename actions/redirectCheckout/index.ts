"use server";

import { createServerAction } from "@/lib/createServerAction"; // Server action creator

import { RedirectCheckout } from "./redirectCheckoutSchema"; // Input validation schema
import { InputType, OutputType } from "./redirectCheckoutTypes"; // Type definitions

async function performAction(data: InputType): Promise<OutputType> {
  return {};
}

// Export the server action for external use
export const redirectCheckout = createServerAction(RedirectCheckout, performAction);
