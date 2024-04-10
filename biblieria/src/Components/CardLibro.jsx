import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CardLibro( {libro} ) {
    const navigate= useNavigate()

    //console.log(libro.author);

  return (
    <>
        <div onClick={()=> navigate(`/book/${libro.id}`)} className="card w position-relative border-0" >
            <img src={libro.cover_url} className="card-img-top copertina w-fluid" alt="..."/>
            <div className="pe-none mt-5 position-absolute top-0 start-50 translate-middle-x text-white cont w-full rounded-sm">
                <h5 className="card-title font-sans text-xl font-bold pb-2">{libro.title}</h5>
                <p className="card-text font-sans ">{ libro.author ? libro.author.full_name : ""} - {libro.year}</p>
            </div>
            <p className='py-2 font-sans'>{libro.title}</p>
        </div>
    </>
  )
}