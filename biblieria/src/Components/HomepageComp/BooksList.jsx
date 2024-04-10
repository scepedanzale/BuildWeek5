import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../../slice/bookSlice';
import CardLibro from '../CardLibro';
import ComponentePaginazioneHome from './ComponentePaginazioneHome';

export default function BooksList() {

  const dispatch = useDispatch()

  const books = useSelector( state => state.libri.listaLibri)
  const loading = useSelector( state => state.libri.loading)
  
  useEffect(() => {
    dispatch(getAllBooks())
  }, [])

  /* console.log(books); */

  return (
      <>
        <div className="container-fluid bg-white">
            <div className="flex flex-wrap justify-content-between gap-2 mt-4">
                { books.map((book, index) => (
                    <CardLibro key={index} libro={book} />
                ))}
            </div>
            <div className='d-flex justify-content-center py-3'>
              <ComponentePaginazioneHome/>
            </div>
        </div>
      </>
  )
}
