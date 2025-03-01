import '@/app/sobre/css/style.css'
import Header2 from "../components/pagina-cards/header2/header2"
import Footer from '../components/footer/footer'

export default function Sobre(){
    return (
        <div>
            <header>
                <Header2 />
            </header>
            
            <main className='container-main-sobre'>
                <div className='container-sobre'>
                    <div className='container-text'>
                        <h1>Projeto PokemonTCG</h1>
                        <br />
                        <p>
                            Este projeto foi desenvolvido com o intuito de apresentar a resolução do desafio proposto pela Fábrica de Software.
                        </p>
                        <br />
                        <p>
                            O desafio consiste em desenvolver uma aplicação web que consuma a API do PokemonTCG e exiba as informações dos cards em uma página web.
                        </p>
                    </div>
                    <div className='container-img'>
                        <img src="/images/pikachu02.webp" alt="foto do pikachu" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}