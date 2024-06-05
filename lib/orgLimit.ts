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
export async function decreaseAvailableBoardCount() {
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
      data: { count: orgLimit.count > 0 ? orgLimit.count - 1 : 0 }
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
 * Checks whether the user can create a new free board.
 * @returns {boolean} True if the user has available board slots, false otherwise.
 */
export async function hasAvailableBoardCount(): Promise<boolean> {
  const { orgId } = auth();

  if (!orgId) {
    throw new Error("Unauthorized");
  }

  // Fetch the orgLimit
  const orgLimit = await database.orgLimit.findUnique({
    where: { orgId },
  });

  return (!orgLimit || orgLimit.count < FREE_BOARD_THRESHOLD);
}

/**
 * Retrieves the number of available boards created within an organization
 */
export function getAvailableCount() {}
