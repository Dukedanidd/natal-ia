import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import config from "@/config";
import connectMongo from "./mongo";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.given_name ? profile.given_name : profile.name,
          email: profile.email,
          image: profile.picture,
          createdAt: new Date(),
          role: "user",
          lastLogin: new Date(),
        };
      },
    }),
  ],
  // Configure custom signin page
  pages: {
    signIn: config.auth.loginUrl,
  },

  // MongoDB adapter configuration
  ...(connectMongo && { adapter: MongoDBAdapter(connectMongo) }),

  callbacks: {
    signIn: async ({ user, account }) => {
      if (account && user) {
        try {
          const User = (await import("@/models/User")).default;

          await User.findByIdAndUpdate(user.id, {
            lastLogin: new Date(),
          });

          user.lastLogin = new Date();
        } catch (error) {
          console.error("Error updating lastLogin:", error);
        }
      }
      return true;
    },

    jwt: async ({ token, user, account, profile }) => {
      if (account && user) {
        token.role = user.role;
        token.lastLogin = user.lastLogin;
      }
      return token;
    },

    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.lastLogin = token.lastLogin;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};
