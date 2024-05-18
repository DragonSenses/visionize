import { ACTION, ENTITY_TYPE } from "@prisma/client";

interface AuditLogProps {
  entityId: StringConstructor;
  entityType: ENTITY_TYPE;
  entityTitle: string;
  action: ACTION;
}

export async function createAuditLog(props: AuditLogProps) {
  try {
    // Create an audit log
  } catch(error) {
    console.error(error);
  }
}