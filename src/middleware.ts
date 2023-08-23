
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { options } from "./app/api/auth/[...nextauth]/options";

export async function middleware(request: any, response: any) {
  let session: any = await getServerSession(options);
  console.log(session);
  const url = request.nextUrl.clone();
  if (session?.user && request.nextUrl.pathname == "/") {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  if (!session?.user && request.nextUrl.pathname != "/") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/dashboard"],
};
