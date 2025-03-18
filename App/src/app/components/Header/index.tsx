import Link from "next/link"
import Logo from "../Logo"
import LoginButton from "../LoginButton"
import { auth } from "@/lib/auth"

async function Header() {
    const session = await auth()
    return (<header className="flex justify-between">
        <Logo full={true} />
        <nav>
            <Link href='/' >
                <p>
                    Home
                </p>
            </Link>
            {Boolean(session) && (
                // @ts-expect-error (default session type does not have id field)
                <Link href={`/profile/${session?.user?.id}`} >profile</Link>
            )}
        </nav>
        <div>
            {session?.user?.name}
            <LoginButton isSession={Boolean(session)} />
        </div>
    </header>)
}

export default Header