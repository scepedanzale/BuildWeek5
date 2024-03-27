import React from 'react'
import "../assets/css/babyStyle.css"


export default function Footer() {
  return (
    <>
      <footer class="bg-white mt-auto footer border-t-4 border-black">
        <div class="p-x text-white mx-auto text-center">
            <h1 class="text-2xl">Footer</h1>
            <div class="flex mb-5  ">
                <div class="flex-grow flex flex-col">
                    <a className='no-underline text-black font-sans my-3' href="/#home">I grandi successi</a>
                    <a className='no-underline text-black font-sans my-3' href="/#home">Buoni Regalo</a>
                    <a className='no-underline text-black font-sans my-3' href="/#home">Libri più venduti</a>
                </div>
                <div class="flex-grow flex flex-col">
                <a className='no-underline text-black font-sans my-3' href="/author-list">Tutti gli Autori</a>
                    <a className='no-underline text-black font-sans my-3' href="/#home">Tutti gli Editori</a>
                    <a className='no-underline text-black font-sans my-3' href="/#home">Tutte le categorie</a>
                </div>
                <div class="flex-grow flex flex-col">
                <a className='no-underline text-black font-sans my-3' href="/#home">Libri più venduti</a>
                    <a className='no-underline text-black font-sans my-3' href="/#home">Classifica Libri Italia</a>
                    <a className='no-underline text-black font-sans my-3' href="/#home">Prossime Uscite</a>
                </div>
                <div class="flex-grow flex flex-col">
                <a className='no-underline text-black font-sans my-3' href="/#home">Bonus Cultura 18App</a>
                    <a className='no-underline text-black font-sans my-3' href="/#home">Bonus Carta Docente</a>
                    <a className='no-underline text-black font-sans my-3' href="/#home">Diventa partner</a>
                </div>
            </div>
        <div class=" text-xs pt-5 text-center darkBlue align-middle pb-5">
            <a className='no-underline text-white text-2xl' href="">&copy;2024 Alessandro, Gregorio, Anna, Vincenzo, Victor, Cielo </a>
        </div>
    </div>
</footer>
    </>
  )
}
