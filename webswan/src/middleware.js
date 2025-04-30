import { NextResponse } from "next/server";   // ①

export function middleware(request) {        // ②
  const protectedRoutes = ["/dashboard", "/profil"]; // ③

  // ④ Est-ce qu’on tente d’entrer dans une zone protégée ?
  if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {

    const isLogged = request.cookies.has("laravel_session"); // ⑤

    if (!isLogged) {                             // ⑥
      const loginUrl = new URL("/login", request.url); // ⑦
      return NextResponse.redirect(loginUrl);          // ⑧
    }
  }
  return NextResponse.next();                   // ⑨
}
