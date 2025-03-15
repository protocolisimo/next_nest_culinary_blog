import Header from "./components/Header";
import { auth } from "../lib/auth";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await auth()

  console.log(session)

  return (
    <div className="bg-background h-screen">
      {session?.user?.name}
      <form action="/api/auth/signin" method="post">
        <button type="submit" className="bg-green-500 px-4 py-2 rounded">
          Login with Google
        </button>
      </form>
      <form action="/api/auth/signout" method="post">
        <button type="submit" className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      </form>
      <Header />
    </div>
  );
}
