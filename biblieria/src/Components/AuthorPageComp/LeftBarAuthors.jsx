import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorie } from '../../slice/categorySlice.js';
import "../../assets/css/Categories.css"
import { useNavigate } from 'react-router-dom'

export default function LeftBarAuthors({categories}) {

    const navigate= useNavigate()

    useEffect(()=>{
        console.log(categories)
    }, [categories])

return (
    <>
        <div className="navigation my-3 rounded-md">
            <p className='uppercase font-sans font-semibold border-b-2 pb-2 text-center'> Autori correlati </p>
            <ul className="uppercase font-sans font-semibold text-center">
                {categories &&
                categories.map((category)=>(
                    category.authors.map((author)=>(
                        <li className="list text-center" key={author.id}>
                            <button className="flex gap-1 no-underline uppercase px-3"  onClick={()=> navigate(`/author/${author.id}`)}>
                                <span className="testoSide"> {author.full_name} </span>
                            </button>
                        </li>
                    ))
                ))
                }
            </ul>
        </div>
    </>
)
}

