import Header from "./components/Header";
import { auth } from "../lib/auth";
import LoginButton from "./components/LoginButton";

export default async function Home() {
  const session = await auth()

  console.log(session)

  return (
    <div className="bg-background h-screen">
      {session?.user?.name}
      <LoginButton isSession={Boolean(session)} />
      <Header />
    </div>
  );
}
