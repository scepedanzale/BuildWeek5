import React, { useEffect, useState } from 'react'
import '../../assets/css/babyStyle.css'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import axios from '../../api/axios';
import CardLibro from '../CardLibro';

export default function AuthorDetail({author}) {

    

    return (
        <>
            {author && 
                <div className="container px-0 bg-white mt-3 rounded-md overflow-hidden">
                    <div className="row overflow-hidden">
                        <div className="col-12 col-lg-6 d-flex justify-content-center overflow-hidden">
                            <img src={author.profile_img} />
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='h-100 p-3 rounded-lg darkText'>
                                <p className="font-bold font-serif text-2xl pb-2 inline-block"> {author.full_name} </p>
                                <p className='font-sans mb-2'> {author.country} - {author.year}</p>
                                <p className='font-sans '> {author.biography} </p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        <div className="container bg-white mt-3 rounded-md">
            <div className="row gap-3 mt-4 pt-3">
                <h3 className='darkText font-sans font-bold text-lg uppercase'>altri libri dello stesso autore</h3>
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-5 py-3">
                    {author.books &&
                    author.books.map((b)=>(
                        <CardLibro libro={b}/>
                    ))
                    }
                </div>
            </div>
        </div>

        </>
      )
}
