import './Home.css'
import React, { Fragment} from "react"

const Home = (props) => {

    return (
        <>
            <h1 className='titulo'>Bienvenidos</h1>
            <div className='cuadro'>
                <p className='texto'>El medioambiente es el espacio en el que se desarrolla la vida de los distintos organismos favoreciendo su interacción. En él se encuentran tanto seres vivos como elementos sin vida y otros creados por la mano del hombre.</p>
            </div>
            <h3>Jueguitos para aprender sobre el medio ambiente y el calentamiento</h3>
            <ol>Reciclar</ol>
            <ol>Trivia</ol>
            <ol>Sopa de letras</ol>
            <h3>Aprende más aquí....</h3>
            <img src="https://thumbs.gfycat.com/BlissfulOffbeatBrownbear-size_restricted.gif" />
        </>
    )
}

export default Home