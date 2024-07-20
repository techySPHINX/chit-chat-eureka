import { clerkMiddleware } from "@clerk/nextjs/server"; //for protection

export default clerkMiddleware();

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};