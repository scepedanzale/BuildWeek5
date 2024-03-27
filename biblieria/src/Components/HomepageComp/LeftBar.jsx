import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { getCategorie } from '../../slice/categorySlice.js';
import "../../assets/css/Categories.css"
import { selezionaCategoria } from '../../slice/bookSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../../slice/bookSlice';
import LeftBarList from './LeftBarList.jsx';

export default function LeftBar() {

    const dispatch = useDispatch()

    const category = useSelector(state=>state.categorie.listaCategorie)
    const categoriaSelezionata = useSelector(state => state.libri.categoriaSelezionata)

    useEffect(()=>{
        dispatch(getCategorie())
    },[])
    
    useEffect(()=>{
        console.log(categoriaSelezionata)
    },[categoriaSelezionata]) 

return (
    <>
        <div className="navigation mt-4 rounded-md text-center">
            <p className='uppercase font-sans font-semibold text-lg'> Categorie </p>
            <ul className="uppercase font-sans font-semibold text-center">
            <li className={"list text-center tastoNascosto hidden" + (!categoriaSelezionata ? 'active' : '')} >
                <button className="flex gap-1 no-underline uppercase "  onClick={() => { dispatch(getAllBooks()); dispatch(selezionaCategoria(null)) }}>
                    <span className="hidden testoSide hover:bg-transparent"> QUALSIASI </span>
                </button>
            </li>
                { category.map((categoria, index) => (
                    <LeftBarList key={index} categoria={categoria} />
                ))}
            </ul>
        </div>
    </>
)
}

