import { auth, currentUser } from "@clerk/nextjs";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { database } from "@/lib/database";

interface AuditLogProps {
  entityId: string;
  entityType: ENTITY_TYPE;
  entityTitle: string;
  action: ACTION;
}

/**
 * Creates an audit log entry in the database.
 * @param props - Properties for the audit log.
 */
export async function createAuditLog(props: AuditLogProps) {
  try {
    // Retrieve organization ID from authentication
    const { orgId } = auth();

    // Get information about the currently logged-in user
    const user = await currentUser();

    // Ensure user and organization ID exist
    if (!user || !orgId) {
      throw new Error("User not found.");
    }

    // Destructure properties from the input
    const { action, entityId, entityTitle, entityType } = props;

    // Create an audit log entry in the database
    await database.auditLog.create({
      data: {
        orgId, // Organization ID
        entityId, // ID of the affected entity (e.g., card, board, list)
        entityTitle, // Title or description of the affected entity
        entityType, // Type of the affected entity (e.g., "Card", "Board", etc.)
        action, // The action performed (e.g., "Create", "Update", "Delete")
        userId: user.id, // ID of the user who triggered the action
        userImage: user?.imageUrl, // URL to the user's profile image (if available)
        userName: user?.firstName + " " + user?.lastName, // Full name of the user
      },
    });
  } catch (error) {
    // Handle any error that may occur within the scope of the audit log
    console.error("[AUDIT_LOG_ERROR]", error);
  }
}
