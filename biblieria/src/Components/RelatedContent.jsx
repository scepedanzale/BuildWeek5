import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../api/axios'

export default function RelatedContent() {
  let {id}= useParams()

  const navigate = useNavigate();

  const [author, setAuthor] = useState({})

  useEffect(() => {
    axios('/api/book/'+id).
        then(response => {
            console.log(response.data.author.books)    
            setAuthor(response.data.author)
            }).
        catch(err => console.log(err))
    
},[id])


  return (
    <>
      <div className="mt-4 rounded-md overflow-hidden">
        <p className='font-sans text-center text-lg bg-dark w-100 text-white py-2'> 
          <button className=" no-underline"  onClick={()=> navigate(`/author/${author.id}`)}>
            Altri libri di {author.full_name}
          </button>
        </p>
        <ul className="font-sans p-0">
        {author.books &&
          author.books.map((book) => (
            book.id != id ?
            <div key={book.id} onClick={()=> navigate(`/book/${book.id}`)} className='row w-full my-2 pb-2 cursor-pointer hover:bg-gray-300 '>
              <div className='col-6 w-36'>
                <img className=' w-32 h-40 ' src={book.cover_url} alt="" />
              </div>
              <div className='col-6 p-0 pt-1'>
                <p className='text-xs'>{book.title}</p>
              </div>
            </div>
            :
            ''
         ))}
        </ul>
      </div>
    </>
  )
}
