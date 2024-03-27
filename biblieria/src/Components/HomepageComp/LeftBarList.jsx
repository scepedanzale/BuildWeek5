import React, { useEffect , useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../../slice/bookSlice';
import "../../assets/css/Categories.css"
import { selezionaCategoria } from '../../slice/bookSlice';

export default function LeftBarList( {categoria} ) {

    const dispatch = useDispatch()

    const categoriaSelezionata = useSelector(state => state.libri.categoriaSelezionata);
    useEffect(()=>{
        console.log((categoriaSelezionata == categoria.id));
    },[categoriaSelezionata])

    /* console.log(categoria) */;

    return (
        <>
           
            <li className={"list text-center "+ (categoriaSelezionata == categoria.id ? 'active' : '')}  key={categoria.id} >
                <button className="flex gap-1 no-underline uppercase "  onClick={() => { dispatch(getAllBooks({category_id: categoria.id})); dispatch(selezionaCategoria(categoria.id)) }}>
                    <div className='flex justify-between'>
                        <p className="pl-2 w-32 mr-5"> {categoria.name} </p> 
                        <p className='testoSide text-sm font-light '>  {categoria.books.length} </p> 
                    </div>
                </button>
            </li>
        </>
    )
}
