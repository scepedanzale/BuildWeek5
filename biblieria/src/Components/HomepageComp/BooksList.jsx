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
        <div className="container bg-white rounded-md">
          
          
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 mt-4 pt-3">
                {loading && 
                <div className='w-full flex justify-center py-12'>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                </div>}
                
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
