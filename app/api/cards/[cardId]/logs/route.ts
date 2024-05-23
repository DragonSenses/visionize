import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { cardId: string } }
) {
  try {
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
