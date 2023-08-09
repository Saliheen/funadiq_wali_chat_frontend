import { NextResponse } from "next/server";

export default async function middleware(NextRequest, NextFetchEvent) {
  console.log("Midelware called.")
  const userData = NextRequest.cookies?.FUNADIQWALICHATCLONE;
  const pathName = NextRequest.nextUrl.pathname;
  const baseUrl = NextRequest.nextUrl.origin;

  const publicPages = ["/auth/login"];

  if (userData && publicPages.includes(pathName)) {
    return NextResponse.redirect(baseUrl + "/");
  } else if (!userData && !publicPages.includes(pathName)) {
     return NextResponse.redirect(baseUrl + publicPages[0])
  }
}
