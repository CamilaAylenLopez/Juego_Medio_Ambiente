import './Home.css'
import React, { Fragment } from "react"
import { Link, Outlet } from "react-router-dom";

const Home = (props) => {

    return (
        <>
            <h1 className='titulo'>Cuidemos al medio ambiente</h1>
            <div className='centrar'>
                <div className='cuadro'>
                    <p className='texto'>El medioambiente es el espacio en el que se desarrolla la vida de los distintos organismos favoreciendo su interacción. En él se encuentran tanto seres vivos como elementos sin vida y otros creados por la mano del hombre.</p>
                    <p className='texto'>Por eso creamos esta página, para concentizar a través de información y juegos para niños.</p>
                </div>
            </div>
        </>
    )
}

export default Home