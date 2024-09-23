import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;

    // Si no hay token (usuario no autenticado), redirigir a la página de inicio de sesión
    if (!token) {
      const loginUrl = new URL("/api/auth/signin", req.url); // Redirige a la página de login
      return NextResponse.redirect(loginUrl);
    }

    // Si el usuario está autenticado, permitir que continúe
    return NextResponse.next();
  },
  {
    callbacks: {
      // Verificar si el token existe para autorizar el acceso
      authorized: ({ token }) => !!token,  // Si hay un token, el usuario está autenticado
    },
  }
);

// Configurar las rutas protegidas
export const config = { matcher: ["/dashboard", "/test-pages"] };
