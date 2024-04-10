import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../../slice/bookSlice';
import { selezionaCategoria } from '../../slice/bookSlice';

export default function LeftBarList( {categoria} ) {

    const dispatch = useDispatch()

    const categoriaSelezionata = useSelector(state => state.libri.categoriaSelezionata);
    useEffect(()=>{
        console.log((categoriaSelezionata == categoria.id));
    },[categoriaSelezionata])

    /* console.log(categoria) */;

    return (
            <li className={"list "+ (categoriaSelezionata == categoria.id ? 'active' : '')}  key={categoria.id} >
                <button className="text-left w-100 px-3 no-underline hover:bg-gray-300"  onClick={() => { dispatch(getAllBooks({category_id: categoria.id})); dispatch(selezionaCategoria(categoria.id)) }}>
                    <div className='flex justify-between'>
                        <p className=""> {categoria.name} </p> 
                        <p className='text-sm font-light '>  ({categoria.books.length}) </p> 
                    </div>
                </button>
            </li>
    )
}
