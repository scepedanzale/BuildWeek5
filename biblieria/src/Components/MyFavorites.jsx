import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPreferiti } from '../slice/preferitiSlice.js';
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'

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
            {loading && <div className='text-center mt-5 mb-10'> <Spinner></Spinner> </div>}

            <div className="mt-4 rounded-md overflow-hidden">
                <p className='font-sans text-center text-lg bg-dark w-100 text-white py-2'> Preferiti </p>
                <ul className="font-sans p-0">
                {preferiti && preferiti.map((preferito, index) => (
                    <div onClick={()=> navigate(`/book/${preferito.book.id}`)} key={index} className='row w-full my-2 pb-2 cursor-pointer  hover:bg-gray-300'>
                        <div className='col-6 w-36'>
                            <img className='copertina' src={preferito.book.cover_url} alt="" />
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