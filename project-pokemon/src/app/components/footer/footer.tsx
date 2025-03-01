import '@/app/components/footer/css/style.css'
import Link from 'next/link'

export default function Footer(){
    return (
        <footer className='footer-bg'>
            <div className="container-footer">
                <p>
                    <span>PokémonTCG - &copy; 2025 </span>
                </p>
                <div className='link'>
                        <Link href='/cards'>
                            <span>Mais Cartas</span>
                        </Link>
                    </div>
            </div>
        </footer>
    )   
}