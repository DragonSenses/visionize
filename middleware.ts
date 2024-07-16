import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/", 
  "/sign-in(.*)", 
  "/sign-up(.*)", 
  "/api/webhook"
]);

export default clerkMiddleware((auth, req) => {
  // If user is logged-in and on the landing page, redirect them
  if (auth().userId && req.nextUrl.pathname === "/") {
    const orgSelection = new URL("/org-selection", req.url);
    return NextResponse.redirect(orgSelection);
  }

  if (isPublicRoute(req)) return; // if it's a public route, do nothing

  // For any other route, require auth
  // Also redirects unauthenticated users to the sign-in route automatically
  auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
