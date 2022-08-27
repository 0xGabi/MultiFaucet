import NextAuth from "next-auth"; // Next auth
import Providers from "next-auth/providers"; // Twitter provider

export default NextAuth({
  providers: [
    // Discord OAuth provider
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  // Custom page:
  pages: {
    // On error, throw to home
    error: "/",
  },
  // Use JWT
  session: {
    jwt: true,
    // 30 day expiry
    maxAge: 30 * 24 * 60 * 60,
    // Refresh JWT on each login
    updateAge: 0,
  },
  jwt: {
    // JWT secret
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  callbacks: {
    // On signin + signout
    jwt: async (token, user) => {
      // Check if user is signing in (versus logging out)
      const isSignIn = user ? true : false;

      // If signing in
      if (isSignIn) {
        // Attach additional parameters (twitter id + handle + anti-bot measures)
        token.discord_id = user?.id;
        token.discord_name = user?.name;
      }

      // Resolve JWT
      return Promise.resolve(token);
    },
    // On session retrieval
    session: async (session, user) => {
      // Attach additional params from JWT to session
      session.discord_id = user.discord_id;
      session.discord_name = user.discord_name;

      // Resolve session
      return Promise.resolve(session);
    },
  },
});
