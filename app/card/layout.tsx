import Link from "next/link";

export default function CardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <ul>
                <li><Link href="/card/hip-hop">Hip-hop</Link></li>
                <li><Link href="/card/soultracks">Soul</Link></li>
                <li><Link href="/card/russianrap">Russian Pain</Link></li>
            </ul>
            {children}
        </div>
    )
}