import { auth } from "@clerk/nextjs";

import { FREE_BOARD_THRESHOLD } from "@/constants/boards";
import { database } from "@/lib/database";

/**
 * Increments the available board count.
 */
export async function incrementAvailableBoardCount() {
  const { orgId } = auth();

  if (!orgId) {
    throw new Error("Unauthorized");
  }

  // Fetch the orgLimit
  const orgLimit = await database.orgLimit.findUnique({
    where: { orgId },
  });

  if (orgLimit) {
    await database.orgLimit.update({
      where: { orgId },
      data: { count: orgLimit.count + 1 }
    });
  } else {
    // If orgLimit does not exist, it could indicate that a board is being
    // create for the first time. So create the orgLimit with a count of 1.
    await database.orgLimit.create({
      data: { orgId, count: 1}
    });
  }
}

/**
 * Decrements the available board count.
 */
export async function decreaseAvailableCount() {}

/**
 * Checks whether user can create a new free board
 */
export function hasAvailableCount() {}

/**
 * Retrieves the number of available boards created within an organization
 */
export function getAvailableCount() {}
