import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const user: any = structuredClone(session?.user);
  console.log(user?.roll);

  if (req.nextUrl.pathname.startsWith("/student") && user?.roll !== "Alumno") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (req.nextUrl.pathname.startsWith("/teacher") && user?.roll !== "Maestro") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (
    req.nextUrl.pathname.startsWith("/admin") &&
    user?.roll !== "Administrador"
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (
    req.nextUrl.pathname.startsWith("/superAdmin") &&
    user?.roll !== "SuperAdmin"
  ) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (!session) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    "/student/:path*",
    "/teacher/:path*",
    "/admin/:path*",
    "/superAdmin/:path*",
    "/",
  ],
};
