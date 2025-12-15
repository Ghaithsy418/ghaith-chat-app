import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("userToken")?.value;

  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";

  if (!isPublicPath && !token)
    return NextResponse.redirect(new URL("/login", request.url));

  if (isPublicPath && token)
    return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
