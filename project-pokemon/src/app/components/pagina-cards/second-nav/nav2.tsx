import Link from "next/link";
import '@/app/components/nav/css/style.css'

export default function Nav2(){
   return(
    <nav>
        <ul className="ul-nav">
            <li>
                <Link href="/">Início</Link>
            </li>
    
            <li>
                <Link href="/abrir-pacote">Abrir Pacote</Link>
            </li>
            
            <Link href='/' className="linkInit"><span>Buscar Por...</span></Link>
        </ul>
    </nav>
   )
}