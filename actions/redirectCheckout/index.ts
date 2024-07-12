"use server";

import { auth, currentUser } from "@clerk/nextjs/server"; // Authentication module
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction"; // Server action creator
import { generateAbsoluteUrl } from "@/lib/generateAbsoluteUrl";
import { database } from "@/lib/database";
import { stripe } from "@/lib/stripe";

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

  try {
    // Fetch the organization subscription
    const orgSubscription = await database.orgSubscription.findUnique({
      where: {
        orgId,
      }
    });

    // If the user already has an organization subscription
    if (orgSubscription && orgSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: orgSubscription.stripeCustomerId,
        return_url: returnUrl,
      });

      // Set the checkoutUrl to the billing portal instead
      checkoutUrl = stripeSession.url;
    } else {
      // If no subscription then create a stripe checkout session
      const stripeSession = await stripe.checkout.sessions.create({
        success_url: returnUrl,
        cancel_url: returnUrl,
        mode: "subscription",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        customer_email: user.emailAddresses[0].emailAddress,
        line_items: [
          {
            price_data: {
              currency: "USD",
              product_data: {
                name: "Visionize Pro",
                description: "Visionize Pro provides unlimited boards for your organization."
              },
              unit_amount: 2000,
              recurring: {
                interval: "month"
              },
            },
            quantity: 1,
          },
        ],
        metadata: {
          orgId,
        },
      });

      // Set the checkout URL to the stripe session URL
      checkoutUrl = stripeSession.url || "";
    }
  } catch {
    return {
      error: "An error occurred when redirecting to checkout."
    };
  }

  // Revalidate the cache for the updated org path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/org/${orgId}`);

  return {
    data: checkoutUrl,
  };

};

// Export the server action for external use
export const redirectCheckout = createServerAction(RedirectCheckout, performAction);
