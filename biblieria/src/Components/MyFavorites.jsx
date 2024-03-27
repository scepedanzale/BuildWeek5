import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/profilo.css"
import { useNavigate } from 'react-router-dom'
import "../assets/css/babyStyle.css"
import { getPreferiti } from '../slice/preferitiSlice.js';
import { useDispatch, useSelector } from 'react-redux'
import { Image, Spinner } from 'react-bootstrap'


export default function MyFavorites() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const array = [
        'prenotazione',
        'prenotazione',
        'prenotazione',
        'prenotazione',
        'prenotazione',
        'prenotazione',
        'prenotazione',
        'prenotazione'
    ]

    const preferiti = useSelector(state => state.preferiti.listaPreferiti)
    const loading = useSelector(state => state.preferiti.loading)

    useEffect(() => {
        dispatch(getPreferiti())
        console.log(preferiti);
    }, [])

    return (
        <>
            <div className="bg-white py- mt-4 rounded-md">
                <p className='uppercase font-sans font-semibold text-lg text-center py-3 my-4'> i tuoi preferiti </p>
                <ul className="uppercase font-sans font-semibold pl-2">
                {loading ?
                        <div className='text-center mt-5 mb-10'> <Spinner></Spinner> </div>
                        :
                        preferiti && preferiti.map((preferito, index) => (
                            <div onClick={()=> navigate(`/book/${preferito.book.id}`)} key={index} className='row w-full my-2 pb-2 cursor-pointer hover:text-blue-800'>
                                <div className='col-6 w-36'>
                                    <img className='w-32 h-40' src={preferito.book.cover_url} alt="" />
                                </div>
                                <div className='col-6 p-0 pt-1 pl-0'>
                                    <p className='text-xs mb-3'>{preferito.book.title}</p>
                                    <p className='text-sm'> {preferito.book ? preferito.book.author.full_name : ""} </p>
                                </div>
                            </div>
                        ))}
                </ul>
            </div>
        </>

    )
}


