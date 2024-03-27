import React from 'react'

export default function LittleSideBook() {
    return (
        <button className="btn btn-blue my-2.5 w-44 preferito">
            <img src="https://www.ibs.it/images/9788832970944_0_536_0_75.jpg" alt="metamask" className="col-6 w-18 h-22" />
            <div className='col-6 flex flex-col align-middle justify-center preferitoText'>
                <p className='font-sans font-bold text-white no-underline  '>Casa di Foglie</p>
                <p className='font-sans font-bold text-white no-underline  '>Mark Danielwski</p>
            </div>

        </button>
    )
}
