import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
// import { getSessionCookie } from "better-auth/cookies";
// import { auth } from "@/lib/auth";
import { getSession } from "@/lib/auth-client";

export async function middleware(request: NextRequest) {
  // const sessionCookie = getSessionCookie(request);
  //const session = await auth.api.getSession({
  //headers: await headers(),
  //});

  const session = await getSession({
    fetchOption: {
      headers: await headers(),
    },
  });

  console.log("SESSION::", session);

  // if (!sessionCookie) {
  // return NextResponse.redirect(new URL("/login", request.url));
  // }

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
  runtime: "nodejs",
};
