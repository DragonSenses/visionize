import { FREE_BOARD_THRESHOLD } from "@/constants/boards";
import { database } from "@/lib/database";

/**
 * Increments the available board count.
 * @param {string} orgId - The organization ID.
 */
export async function incrementAvailableBoardCount(orgId: string) {
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
 * @param {string} orgId - The organization ID.
 */
export async function decreaseAvailableBoardCount(orgId: string) {
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
 * @param {string} orgId - The organization ID.
 * @returns {boolean} True if the user has available board slots, false otherwise.
 */
export async function hasAvailableBoardCount(orgId: string): Promise<boolean> {
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
 * Retrieves the number of available boards within an organization.
 * If the user is unauthorized or no organization ID is available, returns 0.
 * @param {string} orgId - The organization ID.
 * @returns {number} The count of available boards or 0 if none.
 */
export async function getAvailableBoardCount(orgId: string): Promise<number> {
  if (!orgId) {
    return 0;
  }

  const orgLimit = await database.orgLimit.findUnique({
    where: { orgId },
  });

  return (orgLimit) ? orgLimit.count : 0;
}
