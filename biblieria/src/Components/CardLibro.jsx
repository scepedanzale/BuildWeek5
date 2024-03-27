import React from 'react'
import "../assets/css/profilo.css"
import { useNavigate } from 'react-router-dom'

export default function CardLibro( {libro} ) {
    const navigate= useNavigate()

    //console.log(libro.author);

  return (
    <>
        <div onClick={()=> navigate(`/book/${libro.id}`)} className="card w text-center position-relative card rounded-sm" >
            <img src={libro.cover_url} className="card-img-top copertina img-fluid rounde-sm" alt="..."/>
            <div className="pe-none mt-5 position-absolute top-0 start-50 translate-middle-x text-white cont w-full rounded-sm">
                <h5 className="card-title font-sans text-xl pb-2">{libro.title}</h5>
                <p className="card-text font-sans pb-1">{ libro.author ? libro.author.full_name : ""}</p>
                <p className="card-text font-sans pb-1">{libro.year}</p>
                <p className="card-text font-sans pb-5">{ libro.category ? libro.category.name : ""}</p>
                <p className="card-text font-sans">Copie disponibili: {libro.available_copies}</p>
            </div>
            <p className='py-2 uppercase font-bold font-sans'>{libro.title}</p>
        </div>
    </>
  )
}