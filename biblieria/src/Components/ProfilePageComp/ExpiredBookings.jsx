import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getBookings } from '../../slice/bookingSlice';

export default function ExpiredBookings() {
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
const dispatch = useDispatch()

const bookings= useSelector(state=>state.bookings.listaBooking)

useEffect(()=>{
    dispatch(getBookings())
},[])

useEffect(()=>{
    console.log(bookings)
},[bookings])

return (
    
    <div className="mt-4 rounded-md overflow-hidden">
        <p className='font-sans text-center text-lg bg-dark w-100 text-white py-2'> Prestiti scaduti </p>
        <ul className="font-sans p-0">
            {bookings && bookings.filter(b => b.is_active == 0).map((booking, index) => (
                <div key={index} className='row w-full my-2 pb-2 cursor-pointer hover:text-gray-300 '>
                    <div className='col-6 w-36'>
                        <Link to={`/book/${booking.book_id}`}>
                            <img className=' w-32 h-40 ' src={booking.book.cover_url} alt="" /> {/* mettere immagine casuale */}
                        </Link>
                    </div>
                    <div className='col-6 p-0 pt-1'>
                        <Link to={`/book/${booking.book_id}`} className='text-decoration-none'>
                            <p className='text-xs'>{booking.book.title}</p>
                        </Link>
                        <Link to={`/book/${booking.book.author_id}`} className='text-decoration-none'>
                            <p className='text-sm capitalize mt-2'>{booking.book.author.full_name}</p>
                        </Link>
                    </div>    
                </div>
            ))}
        </ul>        
    </div>
    
)
}