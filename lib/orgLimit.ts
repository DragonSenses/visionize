import { auth } from "@clerk/nextjs";

import { FREE_BOARD_THRESHOLD } from "@/constants/boards";
import { database } from "@/lib/database";

/**
 * Increments the available board count.
 */
export async function incrementAvailableCount() {}

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
