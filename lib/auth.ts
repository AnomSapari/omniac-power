import { prisma } from "@/lib/prisma";

import bcrypt from "bcrypt";

import { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {

  pages: {
    signIn: "/login",
  },

  providers: [

    CredentialsProvider({

      name: "credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordMatch) {
          return null;
        }

        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  callbacks: {

    async jwt({ token, user }) {

      if (user) {
        token.role = (user as any).role;
      }

      return token;
    },

    async session({ session, token }) {

      if (session.user) {
        session.user.role = token.role as string;
      }

      return session;
    },
  },
};