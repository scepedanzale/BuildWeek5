import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {

  const navigate = useNavigate();

  return (
    <div className='flex flex-wrap justify-center mx-20 mt-24'>
      
        <div className="w-full h-96 flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
        <img src="https://pbs.twimg.com/media/Bp3AUoSCEAALBUe.png:large" alt="" className='rounded-lg' />
        </div>

        <button onClick={()=> navigate(`/`)} className='bg-black text-white font-bold font-sans p-3 rounded-md'> TORNA ALLA HOME </button>

    </div>

  )
}
