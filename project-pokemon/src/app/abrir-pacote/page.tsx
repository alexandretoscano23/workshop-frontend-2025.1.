//sortear cartas aleatórias - 6
//ao clicar no botão - abrir pacote
//exibir as cartas sorteadas
'use client'

import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import "@/app/abrir-pacote/css/style.css"

import { useState } from "react"

interface PokemonTask {
    id: string;
    name: string;
    types: string;
    images: {
        small: string;
    }

}

export default function AbrirPacote(){
    const [pokemon, setPokemon] = useState<PokemonTask[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    async function getPokemon(){
        setLoading(true)
        try{
            const response = await fetch("https://api.pokemontcg.io/v2/cards/")
            const data = await response.json()
            const cards = data.data

            const randomCards: PokemonTask[] = []
            //6 cartas aleatórias
            for(let i = 0; i < 6; i++){
                //sortear um número aleatório
                const index = Math.floor(Math.random() * cards.length)
                //adicionar a carta
                randomCards.push(cards[index])
            }
            //adicionar as cartas em setPokemon
            setPokemon(randomCards)
        } catch(error){
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    return (
        <div>
            <header>
                <Header />
            </header>
            
            <main className="main-pacote">
                <div>
                    <div className="container-pacote">
                        <div>
                            <h1>Vamos testar sua sorte!</h1>
                            <p>Clique no botão abaixo para abrir o pacote.</p>
                        </div>
                        <br />
                        <div>
                            {/* evitar que click mais de uma vez */}
                            <button onClick={getPokemon} disabled={loading}>
                                {loading ? "carregando..." : "Abrir pacote"}
                            </button>
                        </div>
                    </div>

                    <div className="cards-container">
                    {pokemon.map((card)=> (
                        <div key={card.id} className="cards">
                            <div><img src={card.images.small} alt={card.name} /></div>
                            <br />
                            <hr />
                            <br />
                            <h1>{card.name}</h1>
                            <p>{card.types}</p>
                        </div>
                    ))}
                </div>
                </div>

               
            </main>
           
           <footer className="footer-pacote">
            <Footer />
           </footer>
        </div>
    )
}

