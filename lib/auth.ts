import {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
import { compare } from "bcrypt";



export const authOptions: NextAuthOptions = {
<<<<<<< HEAD
    // pages: {
    //     signIn: '/sign-in',
    // },
=======
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: 'jwt'
    },
    pages: {
        signIn: '/sign-in',
    },
>>>>>>> 4b6dc90 (updated new)
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "email", type: "email", placeholder: "example@email.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {     
            if (!credentials?.email || !credentials?.password) {
              return null;
            }
            
            const existingUser = await db.user.findUnique({
              where: { email: credentials.email}
            });
            if(!existingUser) {
              return null;
            }

            const passwordMatch = await compare(
              credentials.password, 
              existingUser.password
            );
            if(!passwordMatch) {
              return null;
            }

            return {
              id: `${existingUser.id}`,
              username: existingUser.username,
              email: existingUser.email
            }
          }
        })
      ]
}