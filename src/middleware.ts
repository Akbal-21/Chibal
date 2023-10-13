import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const user: any = structuredClone(session?.user);
  console.log(user);

  if (req.nextUrl.pathname.startsWith("/teacher") && user.role !== "Maestro") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (req.nextUrl.pathname.startsWith("/student") && user.role !== "Alumno") {
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
  matcher: ["/:path", "/student/:path", "/teacher/:path"],
};
