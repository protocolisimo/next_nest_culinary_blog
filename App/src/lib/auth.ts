import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

// Helper function to get session on the server
export async function auth() {
    return await getServerSession(authOptions);
}