import { ACTION, AuditLog } from "@prisma/client";

export function generateLogMessage(log: AuditLog) {
  const { action, entityTitle, entityType } = log;

  console.log(log);
}