import React, { useEffect, useState } from 'react'

import CardLibro from '../CardLibro';

export default function AuthorDetail({author}) {

    return (
        <>
            {author && 
                <div className="container px-0 bg-white mt-4 rounded-md overflow-hidden">
                    <div className="row overflow-hidden">
                        <div className="col-12 col-lg-4 d-flex justify-content-center overflow-hidden">
                            <img src={author.profile_img} className='h-80 w-72 object-fit-cover'/>
                        </div>
                        <div className='col-12 col-lg-8'>
                            <div className='h-100 p-3 rounded-lg darkText'>
                                <p className="font-bold text-2xl pb-2 inline-block"> {author.full_name} </p>
                                <p className='mb-2 font-italic'> {author.country} - {author.year}</p>
                                <p className='font-sans '> {author.biography} </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        <div className="mt-4 rounded-md overflow-hidden">
            <p className='font-sans text-center text-lg bg-dark w-100 text-white py-2'> Libri dell'autore </p>
                <ul className="p-0 flex gap-3">
                {author.books &&
                    author.books.map((b)=>(
                        <CardLibro libro={b}/>
                    ))
                    }
                </ul>
            </div>
        </>
      )
}
