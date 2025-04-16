import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Export as default function
export default function middleware(request: NextRequest) {
  // Check if the path matches any of our redirect paths
  if (
    request.nextUrl.pathname === "/docs/components" ||
    request.nextUrl.pathname === "/docs/sections"
  ) {
    // Redirect to /docs
    return NextResponse.redirect(new URL("/docs", request.url));
  }
}

export const config = {
  matcher: ["/docs/components", "/docs/sections/"],
};
