import { ACTION, AuditLog } from "@prisma/client";

export function generateLogMessage(log: AuditLog) {
  const { action, entityTitle, entityType } = log;

  if (!action || !entityTitle || !entityType) {
    return `Error: could not generate message for audit log\n ${log}`;
  }

  switch (action) {
    case ACTION.CREATE:
      return `created ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.DELETE:
      return `deleted ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.UPDATE:
      return `updated ${entityType.toLowerCase()} "${entityTitle}"`;
    default:
      return `unknown action performed on ${entityType.toLowerCase()} "${entityTitle}"`;
  }
}
