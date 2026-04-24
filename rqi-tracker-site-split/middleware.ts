import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  (req) => {
  const { nextUrl } = req;
  const isAuthed = !!req.nextauth?.token;

  const isPublic =
    nextUrl.pathname.startsWith("/auth/") ||
    nextUrl.pathname.startsWith("/api/auth/") ||
    nextUrl.pathname.startsWith("/assets/");

  if (isPublic) return NextResponse.next();
  if (isAuthed) return NextResponse.next();

  const signInUrl = new URL("/auth/signin", nextUrl);
  signInUrl.searchParams.set("callbackUrl", nextUrl.pathname);
  return NextResponse.redirect(signInUrl);
  },
  {
    callbacks: {
      authorized: () => true,
    },
  }
);

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

