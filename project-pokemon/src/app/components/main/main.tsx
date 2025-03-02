'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import '@/app/components/main/css/destaque.css'
import Link from 'next/link'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Destaque(){
    const [search, setSearch] = useState<string>('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(search.trim()){
            router.push(`./cards?search=${encodeURIComponent(search)}`)
        }
        
    }
    return(
        
        <div>
            {/* pesquisa de cards */}
            <form onSubmit={handleSearch}>
                <div className='container-form'>
                    <input type="text" placeholder='nome ou tipo (inglês)...' value={search} onChange={(e)=> setSearch(e.target.value)}/>
                    
                    <button type='submit'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                        </button>
                </div>
            </form>

            {/* carrosssel */}
            <div className='destaque'>
                <h1>Pokémons em Destaque</h1>
            </div>
                

                <section className='swiper'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation       
                        slidesPerView={1}
                        onSlideChange={()=>{
                            console.log('slide mudou')
                        }}
                        onSwiper={(Swiper)=>{
                            console.log(Swiper)
                        }}
                    >

                    <SwiperSlide>
                        <img src="/images/picachu.png" alt="imagem do pikachu" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/crocodile.png" alt="imagem do crocodile" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/rayquasa.png" alt="imagem do rayquasa" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/hoopa.png" alt="imagem do hoopa" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/miwtwo.png" alt="imagem do miwtwo" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/arceus.png" alt="imagem do arceus" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="/images/dialga.png" alt="imagem do dialga" />
                    </SwiperSlide>

                    </Swiper>
                </section>
                
        </div>
    )
}