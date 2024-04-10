import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAuthContext from "../../context/AuthContext";
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getPreferiti } from '../../slice/preferitiSlice';


export default function ProfileDetail() {
    const preferiti= useSelector(state=>state.preferiti.listaPreferiti)
    const dispatch = useDispatch()
    const { user } = useAuthContext();

    useEffect(()=>{
        console.log(user)
    },[user])

    useEffect(()=>{
        dispatch(getPreferiti())
    },[])

    console.log(preferiti)
  return (
    <>
        {user && 
        <>
        <div className="container px-0 mt-3 rounded-md">
            <div className=" ml-44 rounded-r-md relative">
                <div className="flex justify-center gap-10 box-border py-5 w-1/2">
                    <img src={user.profile_img} alt="" className="h-72 w-72 rounded-3 object-fit-cover" />
                    <div className=''>
                        <p className="font-bold text-4xl pb-2"> {user.name} </p>
                        <p className='font-sans'> {user.email}</p>
                    </div>
                    <Link to="/profile/edit" className='text-dark text-3xl'>
                        <i class="bi bi-gear"></i>
                    </Link>
                </div>
            </div>
        </div>

        <div className="mt-4 rounded-md overflow-hidden">
            <p className='font-sans text-center text-lg bg-dark w-100 text-white py-2'> I tuoi preferiti </p>
            <ul className="font-sans p-0">
                {preferiti && preferiti.map((e,index)=>
                    <div key={index} className='my-2 mx-2 pb-2 cursor-pointer hover:text-blue-800 '>
                        <div className=' w-32'>
                            <img className='w-32 h-40 ' src={e.book.cover_url} alt="" />
                        </div>
                        <div className='p-0 text-center pt-1'>
                            <p className='text-xs'>{e.book.title}</p>
                            <p className='text-sm'>{e.book.author.full_name}</p>
                            <button  className='text-sm mx-auto darkBlue py-2 px-4 text-white hover:text-blue-800 mt-4'> ELIMINA </button>
                        </div>
                    </div>
                )}
            </ul>
        </div>
        </>}
    </>
  )
}
