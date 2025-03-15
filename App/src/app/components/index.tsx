import Link from "next/link"

function Header() {
    return (<header>
        <Logo full={true} />
        <nav>
            <Link href='/' />
        </nav>
    </header>)
}

export default Header