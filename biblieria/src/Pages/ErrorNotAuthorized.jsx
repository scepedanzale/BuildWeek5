import React from 'react'
import Example from '../Components/MyNavbar'
import divieto from "../assets/img/divieto.png"
import { useNavigate } from 'react-router-dom'


export default function ErrorNotAuthorized() {
  const navigate = useNavigate()
  return (
    <>
      <div className='container ' >
          <img src={divieto} className='rounded-5 position-absolute top-50 start-50 translate-middle' alt="" />
          <button onClick={()=>{
            navigate("/")
          }} type="button" class="btn btn-dark position-absolute top-50 start-50 translate-middle">Torna alla Home</button>
      </div>
    </>
  )
}
