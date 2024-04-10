import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Alert, Image, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import useAuthContext from "../../context/AuthContext";
import { cancelBooking, createBooking, extendBooking } from '../../slice/bookingSlice'
import ModBook from '../ModBook'
import { getPreferiti } from '../../slice/preferitiSlice'


export default function BookDetailComponent() {

    const { user } = useAuthContext();

    const mybooking = useSelector(state => state.bookings.listaBooking)

    let { id } = useParams()

    let [book, setBook] = useState({})
    let [copies, setCopies] = useState()
    let [alreadyBooked, setAlreadyBooked] = useState()
    let [alreadyExtended, setAlreadyExtended] = useState()

    let dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        /* console.log('use effect booking') */
        axios('/api/book/' + id).
            then(response => {
                /* console.log(response)   */
                setBook(response.data)
            }).
            catch(err => console.log(err))

    }, [mybooking, id])

    useEffect(() => {
        if (mybooking) {
            setAlreadyBooked(mybooking.find((b) => b.book_id == id && b.is_active == 1))
            setAlreadyExtended(mybooking.find((b) => b.book_id == id && b.is_active == 1 && b.extended == 1))

        }
        setCopies(book.available_copies)
        /* console.log(alreadyBooked) */
    },)

    function handlePreferito() {
        axios.post('/api/favorites' , {book_id:id})
            .then(response => { console.log(response.data); dispatch(getPreferiti())})
            .catch(error => console.log(error))
    }


    return (
        book.author ? 
        <>
            <div className="container rounded-2 my-4 font-sans">
                
                <div className="row">
                    <div className="col-12 flex justify-center align-items-center gap-2">
                        <div className="col-6">
                            <div>
                                <Image src={book.cover_url} className='h-80 w-72 object-fit-cover'></Image>
                            </div>
                        </div>
                        <div className="col-6 relative">
                            {user && !user.is_admin &&
                                <button onClick={() => handlePreferito()} className='absolute top-0 right-3 text-2xl'>
                                    <i class="bi bi-heart"></i>
                                </button>
                            }

                            <h1 className='fs-2'>{book.title}</h1>
                            <h3 className='text-secondary'>
                                <button className="flex no-underline" onClick={() => navigate(`/author/${book.author.id}`)}>
                                    <span className="testoSide"> {book.author.full_name} </span>
                                </button>
                            </h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='my-3'>
                            <p className='m-0'><b>Anno pubblicazione: </b> <span className='text-secondary'>{book.year}</span></p>
                            <p className='m-0'><b>Categoria: </b> <span className='text-secondary'>{book.category.name}</span></p>
                            <p className='m-0'><b>Copie disponibili: </b> <span className='text-secondary'>
                                {copies ? copies : '0'}
                            </span></p> {/* come lo faccio aggiornare in tempo reale? */}
                        </div>
                        {book.abstract}
                    </div>
                </div>
                <div className="row text-center mt-3">
                    <div className="col my-4">
                        {user && user.is_admin ?
                        
                        <div className='flex justify-center gap-3'>
                            <button className='btn btn-dark w-75'>Elimina libro</button>
                            <ModBook />
                        </div>
                        :
                        
                        alreadyBooked ? 
                        <><button className='btn btn-outline-danger w-25 mx-3' onClick={() => dispatch(cancelBooking(alreadyBooked.id))}>Disdici prestito</button>
                            {alreadyExtended ?
                                <button className='btn btn-outline-success w-25 mx-3 disabled' onClick={() => dispatch(extendBooking({ id: alreadyBooked.id, expDate: alreadyBooked.expiring_date }))}>Prestito già esteso</button> 
                                :
                                <button className='btn btn-outline-success w-25 mx-3' onClick={() => dispatch(extendBooking({ id: alreadyBooked.id, expDate: alreadyBooked.expiring_date }))}>Estendi prestito</button>

                            }
                            <Alert variant='secondary' className='my-3'><p className='fw-semibold mb-2'>La richiesta di prestito è andata a buon fine!</p>  Il tuo prestito scadrà il: <span className='fw-semibold'>{alreadyBooked.expiring_date}</span></Alert>
                        </>
                        :
                        <>
                            {copies == 0 ?
                                <button className='btn btn-outline-dark w-50 disabled' >Attualmente non disponile</button>
                                :
                                <button className='btn btn-outline-dark w-50' onClick={() => dispatch(createBooking(book.id))}>Richiedi prestito</button>
                            }
                        </>
                        }
                    </div>
                </div>
            </div>
        </> :
            <div className="container bg-white rounded-2 p-5 my-5 text-center">
                <Spinner></Spinner>
            </div>
    )


}

