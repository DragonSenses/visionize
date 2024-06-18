import Stripe from "stripe";

// Initialize Stripe with TypeScript support and API version 2024-04-10.
export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2024-04-10",
  typescript: true,
});
