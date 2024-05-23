import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

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
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
