import { database } from "@/lib/database";

const DAY_IN_MS = 86_400_000;

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

  const isValid =
    (orgSubscription.stripePriceId) &&
    (orgSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now());

  return !!isValid;
}
