import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    
    // Redirección tras la autenticación
    async redirect({ url, baseUrl }) {
      // Si la redirección es a una URL interna
      if (url.startsWith(baseUrl)) {
        return url;
      }
      // De lo contrario, redirige a /dashboard por defecto
      return baseUrl + '/dashboard';
    },
     

    async signIn() {
      // Permite el inicio de sesión si es exitoso
      return true;
    },
    
  },
  
});

export { handler as GET, handler as POST };
