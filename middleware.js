import { auth } from "@/auth";

export default auth((req) => {
  // redirecting to home if accessing Dashboard without admin account
  if (
    req?.auth?.user?.role !== "admin" &&
    req.nextUrl.pathname === "/dashboard"
  ) {
    return Response.redirect(req.nextUrl.origin);
  }

  if (
    req.auth?.user &&
    (req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/signup")
  ) {
    const newUrl = new URL(req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
