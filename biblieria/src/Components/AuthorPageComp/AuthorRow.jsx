import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

export default function AuthorRow({author}) {

    const navigate = useNavigate();

    const urlflag = 'https://restcountries.com/v3.1/name/';
    const [flag, setFlag] = useState('')

    useEffect(()=>{
        const country = author.country.toLowerCase().split(' ').join('%20')
        console.log(country)
        axios(urlflag + country)
        .then(response => {
            console.log(response.data[0].flag)
            setFlag(response.data[0].flag)
        })
        .catch(error => console.error(error))
    }, [author])
        

  return (
    <div className="row m-2 bg-body-secondary rounded-2 d-flex align-items-center btn" onClick={()=> navigate(`/author/${author.id}`)}>
        <div className="col-2">
            <img src={author.profile_img}/>
        </div>
        <div className="col">
            <span className='fw-bold'>{author.full_name}</span>
        </div>
        <div className="col">
            <span className=''>Numero libri: {author.books.length}</span>
        </div>
        {flag ?
            <div className="col">
                <span className='fs-3'>{flag}</span>
            </div>
            :
            <div className="col">
                <span className='fs-3'>/</span>
            </div>

        }
    </div>
  )
}
