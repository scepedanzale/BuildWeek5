import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function LeftBarAuthors({categories}) {

    const navigate= useNavigate()

    useEffect(()=>{
        console.log(categories)
    }, [categories])

return (
        <div className="mt-4 rounded-md overflow-hidden">
                <p className='font-sans text-center text-lg bg-dark w-100 text-white py-2'> Autori correlati </p>
                <ul className="p-0">
                {categories &&
                categories.map((category)=>(
                    category.authors.map((author)=>(
                        <li className="list-item p-1 hover:bg-gray-300" key={author.id}>
                            <button className="flex gap-1 no-underline"  onClick={()=> navigate(`/author/${author.id}`)}>
                                <span className="testoSide"> {author.full_name} </span>
                            </button>
                        </li>
                    ))
                ))
                }
                </ul>
            </div>
)
}

