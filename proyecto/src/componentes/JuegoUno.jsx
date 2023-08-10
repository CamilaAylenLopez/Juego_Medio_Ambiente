import './JuegoUno.css'
import React, { useEffect, useState } from "react"


const JuegoUno = (props) => {

  const [objeto, setObjeto] = useState([{
    objeto: 'cuaderno',
    tacho: 'azul',
    imagen: 'https://img.freepik.com/foto-gratis/cuaderno-rayado-blanco-sobre-mesa-blanca_53876-165405.jpg?w=2000'
  },
  {
    objeto: 'banana',
    tacho: 'marron',
    imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/semana/V4Z6O774F5BKLDY2ZNKEHE6MVI.jpg'
  },
  {
    objeto: 'botella de vidrio',
    tacho: 'verde',
    imagen: 'https://www.laeditorial.com.ar/21963-home_default/botella-vidrio-500cc-jugo-agua-leche-t-38.jpg'
  },
  {
    objeto: 'pañal usado',
    tacho: 'negro',
    imagen: 'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/panales-que-son_0.jpg'
  }
])
  return (
    <>
      <h1>Juego de reciclar</h1>
    </>
  )
}

export default JuegoUno