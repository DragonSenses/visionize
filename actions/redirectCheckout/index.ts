"use server";

import { auth, currentUser } from "@clerk/nextjs/server"; // Authentication module
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction"; // Server action creator
import { generateAbsoluteUrl } from "@/lib/generateAbsoluteUrl";

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
  const user = await currentUser();

  // If authentication fails, return an error
  if (!userId || !orgId || !user) {
    return {
      error: "Unauthorized",
    };
  }

  const orgUrl: string = `/org/${orgId}`
  const returnUrl: string = generateAbsoluteUrl(orgUrl);
  let checkoutUrl = "";

  // Revalidate the cache for the updated org path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/org/${orgId}`);

  return {
    data: checkoutUrl,
  };

};

// Export the server action for external use
export const redirectCheckout = createServerAction(RedirectCheckout, performAction);
