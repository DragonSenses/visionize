import { database } from "@/lib/database";

/**
 * Checks the subscription
 * @param {string} orgId - The organization ID.
 */
export async function checkSubscription(orgId: string) {
  if (!orgId) {
    return false;
  }

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

  if (!orgSubscription) {
    return false;
  }

}
