import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // const { isLoggedIn } = useLoginUser();

  // console.log(isLoggedIn);

  // if (!isLoggedIn) {
  if (req.nextUrl.pathname.startsWith("/admin/teacher/")) {
    console.log("Hola");

    // return NextResponse.redirect(new URL("/auth/login", req.url));
  }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/teacher/:path"],
};
