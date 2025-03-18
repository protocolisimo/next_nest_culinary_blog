import { getServerSession } from "next-auth";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.picture = user.image;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                // @ts-expect-error (add id to session type)
                id: token.id,
                name: token.name,
                email: token.email,
                image: token.picture,
            };
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET as string,
};


export async function auth() {
    return await getServerSession(authOptions);
}
