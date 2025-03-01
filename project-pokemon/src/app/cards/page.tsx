'use client'
import React, {useState, useEffect} from "react"
import '@/app/cards/css/style.css'
import Header from "../components/header/header"

//pegar os parametros da url
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Header2 from "../components/pagina-cards/header2/header2"
import Footer from "../components/footer/footer"

interface PokemonCard {
    id: string,
    name: string,
    types: string[],
    images: {
        small: string
    }
}

export default function Principal(){
    //ao pesquisar
    const searchParams = useSearchParams()
    //pegar o parametro da url
    const searchTerm = searchParams.get('search') || ''
    //array de cartas
    const [pokemon, setPokemon] = useState<PokemonCard[]>([]) 
    //loading
    const [loading, setLoading] = useState<boolean>(true) 

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                //api
                let url = 'https://api.pokemontcg.io/v2/cards'
                //buscar nome ou tipo (q - query)
                if(searchTerm){
                    url += `?q=name:${searchTerm} OR types:${searchTerm}`
                }

                const response = await fetch(url)
                const data = await response.json()
                //limitar o número de cards
                const limit = data.data.slice(1, 25)
                //mostrar cards
                setPokemon(limit)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [searchTerm]) //searchTerm mudar a cada pesquisa

    

    return(
       <div>
        <Header2 />
        <main className="main-bg">
            
            <h1>Cards</h1>
            {/* quando estiver carregando a busca */}
            {searchTerm && <p>Resultados para: {searchTerm}</p>} 
            {loading ?  (<p>carregando...</p>) : pokemon.length === 1 ? (<p>não existe ou foi escrito incorretamente</p>): (
            <div className="container-main">
            {pokemon.map((pokemon) => (
            <div key={pokemon.id} className="card">
                <img  src={pokemon.images.small} alt={pokemon.name} width={220} height={280} />
                <br />
                <hr />
                <p className="mt-4 text-xl font-bold">{pokemon.name}</p>
                <p className="mt-4 text-xl font-lightt-">{pokemon.types}</p>
            </div>

             
            ))}
            </div>
    )}
        </main>

        <footer className='footer-bg'>
            <div className="container-footer">
                <p>
                    <span>PokémonTCG - &copy; 2025 </span>
                </p>
                
            </div>
        </footer>
    </div>
    )
}