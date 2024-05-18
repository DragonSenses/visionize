import { auth, currentUser } from "@clerk/nextjs";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

interface AuditLogProps {
  entityId: StringConstructor;
  entityType: ENTITY_TYPE;
  entityTitle: string;
  action: ACTION;
}

export async function createAuditLog(props: AuditLogProps) {
  try {
    const { orgId } = auth();
    const user = await currentUser();

    if (!user || !orgId) {
      throw new Error("User not found.");
    }
    
    // Create an audit log
  } catch (error) {
    // Handle any error that may occur within the scope of the audit log
    console.error("[AUDIT_LOG_ERROR]", error);
  }
}