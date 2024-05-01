import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { database } from "@/lib/database";

export async function GET(
  req: Request,
  { params }: { params: { cardId: string } }
) {
  try {
    // Authenticate the user using Clerk authentication.
    const { userId, orgId } = auth();

    // If the user is not authenticated, return an "Unauthorized" response.
    if (!userId || !orgId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Fetch the card data from the database.
    const card = await database.card.findUnique({
      where: {
        id: params.cardId,
        list: {
          board: {
            orgId,
          },
        },
      },
      include: {
        list: {
          select: {
            title: true,
          },
        },
      },
    });

    // Return the card data as a JSON response.
    return NextResponse.json(card);
  } catch (error) {
    // Handle any internal errors and return a 500 status.
    return new NextResponse("Internal Error", { status: 500 });
  }
}
