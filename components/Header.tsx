import Link from "next/link"

const Header = () => {
    return (
        <header className="container header">
            <Link href="/" className="link">home</Link>
            <Link href="/card" className="link">cards</Link>
            <Link href="/need" className="link">need</Link>
            <Link href="/contacts" className="link">contacts</Link>
        </header>
    )
}

export {Header};