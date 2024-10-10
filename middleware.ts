// middleware.ts
import { NextResponse } from 'next/server';  // Import the NextResponse helper to handle the response

export function middleware(req: { nextUrl: { clone: () => any; }; }) {
  // Clone the request URL
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // If the pathname contains any uppercase letters
  if (/[A-Z]/.test(pathname)) {
    // Convert the pathname to lowercase
    url.pathname = pathname.toLowerCase();

    // Return a redirect to the lowercase URL
    return NextResponse.redirect(url);
  }

  // Continue with the request if no uppercase letters are found
  return NextResponse.next();
}
