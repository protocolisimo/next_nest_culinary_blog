import Link from "next/link"
import Logo from "../Logo"

function Header() {
    return (<header>
        <Logo full={true} />
        <nav>
            <Link href='/' >
                <p>
                    Home
                </p>
            </Link>
            <Link href='/search' />
        </nav>
    </header>)
}

export default Header