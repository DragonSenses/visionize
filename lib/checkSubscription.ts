import { database } from "@/lib/database";

// Define the number of milliseconds in a day
const DAY_IN_MS = 86_400_000;

/**
 * Checks the subscription status for an organization.
 *
 * @param {string} orgId - The organization ID.
 * @returns {Promise<boolean>} - Returns `true` if the subscription is valid, otherwise `false`.
 */
export async function checkSubscription(orgId: string): Promise<boolean> {
  // Validate input: ensure orgId is provided
  if (!orgId) {
    return false;
  }

  try {
    // Query the database for the organization's subscription details
    const orgSubscription = await database.orgSubscription.findUnique({
      where: {
        orgId,
      },
      select: {
        stripeCurrentPeriodEnd: true,
        stripeCustomerId: true,
        stripePriceId: true,
        stripeSubscriptionId: true,
      },
    });

    // If no subscription is found, or the end of the current period
    // that the subscription has been invoiced for is undefined
    if (!orgSubscription || !orgSubscription.stripeCurrentPeriodEnd) {
      return false;
    }

    // Calculate validity based on subscription data
    const isValid =
      orgSubscription.stripePriceId &&
      orgSubscription.stripeCurrentPeriodEnd.getTime() + DAY_IN_MS > Date.now();

    return !!isValid;
  } catch (error) {
    console.error("Error checking subscription:", error);
    return false;
  }
}
