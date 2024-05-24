import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ENTITY_TYPE } from "@prisma/client";

import { database } from "@/lib/database";

export async function GET(
  request: Request,
  { params }: { params: { cardId: string } }
) {
  try {
    // Authenticate the user using Clerk authentication.
    const { userId, orgId } = auth();

    // If the user is not authenticated, return an "Unauthorized" response.
    if (!userId || !orgId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Query to fetch first 3 audit log records related to the specific card
    const auditLogs = await database.auditLog.findMany({
      where: {
        orgId,
        entityId: params.cardId,
        entityType: ENTITY_TYPE.CARD,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });

    return NextResponse.json(auditLogs);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
