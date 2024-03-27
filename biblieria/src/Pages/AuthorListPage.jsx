import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom';
import AuthorRow from '../Components/AuthorPageComp/AuthorRow';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors } from '../slice/authorSlice';


export default function AuthorListPage() {
  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors.listaAuthors)

  useEffect(() => {
    dispatch(getAuthors);
  }, [])



  /*  useEffect(()=>{
       console.log(flags)
   }, [flags]) */

  return (
    <>
      <div className="container bg-white rounded-2 my-3 pb-3 font-sans">
        <h1 className='uppercase fs-2 text-center py-3'>autori</h1>
        {authors &&
          authors.map((author) => (
            <AuthorRow key={author.id} author={author} />
          ))}
      </div>
      <Footer />
    </>
  )
}
