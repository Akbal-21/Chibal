import { dbUsers } from "@/db";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    Credentials({
      name: "Custom Login",
      credentials: {
        email: {
          label: "Correo:",
          type: "email",
          placeholder: "correo@google.com",
        },
        password: {
          label: "Contraseña:",
          type: "password",
          placeholder: "Contraseña",
        },
      },
      async authorize(credentials) {
        return (await dbUsers.checkUserEmailPassword(
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          credentials!.email,
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          credentials!.password,
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        )) as any;
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },

  //callbacks

  jwt: {},

  session: {
    maxAge: 259200,
    strategy: "jwt",
    updateAge: 86400,
  },

  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        switch (account.type) {
          case "credentials":
            token.user = user;
            break;

          default:
            break;
        }
      }
      return token;
    },

    async session({ session, token, user }) {
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      session.accessToken = token.accessToken as any;
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      session.user = token.user as any;

      return session;
    },
  },
});
