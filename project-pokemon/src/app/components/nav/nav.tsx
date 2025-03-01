import Link from "next/link"
import '@/app/components/nav/css/style.css'

export default function Nav(){
    return (
        <nav>
            <ul className="ul-nav">
                <li>
                    <Link href="/">Início</Link>
                </li>
                <li>
                    <Link href="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link href="/cards">Cartas</Link>
                </li>
            </ul>
        </nav>
    )
}