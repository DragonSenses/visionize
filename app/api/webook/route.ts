import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { database } from "@/lib/database";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    // On error, log and return the error message
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  // Successfully constructed event

  // Save the event as a Stripe checkout session
  const session = event.data.object as Stripe.Checkout.Session;

  // Check if the event type is 'checkout.session.completed'
  if (event.type === "checkout.session.completed") {
    // Retrieve the subscription details using the subscription ID from the session
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    // Check if the session metadata contains an organization ID
    if (!session?.metadata?.orgId) {
      // If the organization ID is missing, return an error response
      return new NextResponse("Organization ID is required", { status: 400 });
    }

    // Additional logic can be added here for handling the completed checkout session

  }
}
