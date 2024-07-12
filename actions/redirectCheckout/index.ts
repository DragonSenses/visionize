"use server";

import { auth } from "@clerk/nextjs/server"; // Authentication module

import { createServerAction } from "@/lib/createServerAction"; // Server action creator

import { RedirectCheckout } from "./redirectCheckoutSchema"; // Input validation schema
import { InputType, OutputType } from "./redirectCheckoutTypes"; // Type definitions

/**
 * Defines a server action to redirect the user to the checkout page.
 *
 * @param {InputType} data - 
 * @returns {Promise<OutputType>} - 
 */
async function performAction(data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

}

// Export the server action for external use
export const redirectCheckout = createServerAction(RedirectCheckout, performAction);
