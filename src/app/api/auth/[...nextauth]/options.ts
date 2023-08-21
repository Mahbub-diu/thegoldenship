import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { User } from "../../../../../helper/types";
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();
export type LoginType = {
  remember?: boolean;
  email: string;
  password: string;
};
export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        ///prisma user check
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.email,
          },
        });
        // password check
        if (user && bcrypt.compareSync(credentials?.password, user.password)) {
          return user;
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: true,
  secret: "secret",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser, trigger }) {
      let userDb;
      if (user) {
        console.log("signIn", trigger);
        userDb = await prisma.user.findFirst({
          where: {
            email: user?.email,
          },
        });
        console.log(userDb);
        return {
          ...token,
          user: userDb,
        };
      }

      return token;
    },
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider) {
        //check if user exists if not create user
        const userExists = await prisma.user.findFirst({
          where: {
            email: user.email,
          },
        });
        console.log("userExists", userExists);
        if (!userExists) {
          console.log("userExists", userExists);
          let userCreate = await prisma.user.create({
            data: {
              email: profile?.email,
              name: profile?.name,
              provider: account?.provider,
              providerId: account?.providerAccountId,
            },
          });
          user = userCreate;
        }
      }

      return true;
    },

    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user;
        return session;
      }
      return session;
    },
  },
};
