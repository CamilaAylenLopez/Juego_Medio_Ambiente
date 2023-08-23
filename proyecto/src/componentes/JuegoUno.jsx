import './JuegoUno.css'
import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const JuegoUno = (props) => {
  const [objetoActual, setObjetoActual] = useState(0)
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

  const [tachoBasura, setTachoBasura] = useState([{
    color: 'azul',
    descripcion: 'AZUL: Folios, libretas, periódicos, revistas, papel de regalo y de envolver, sobres (sin ventanilla), folletos de publicidad. Cajas, piezas de cartón y envases (de cereales, galletas, comidas pre-cocinadas y congeladas, comida rápida, zapatos, etc.).',
    imagen: 'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_PAPEL_Y_CARTON.jpg'
  },
  {
    color: 'marron',
    descripcion: 'Los materiales que se pueden depositar en este contenedor son: restos de comida de origen animal (carne y pescado, caparazones y conchas de marisco, queso, cáscaras de huevo) y vegetal (verduras, frutas, semillas, frutos secos y sus cáscaras, cereales, restos vegetales) y, no cocinados o cocinados restos de flores, ...',
    imagen: 'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_ORGANICOS.jpg'
  },
  {
    color: 'verde',
    descripcion: 'El contenedor verde, también conocido como iglú verde, es el destinado para depositar vidrio. En esta categoría deben reciclarse las botellas de vidrio, tarros, trozos de espejos y cristales rotos, entre otros.',
    imagen: 'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_APROVECHABLES.jpg'
  },
  {
    color: 'negro',
    descripcion: 'Color negro: Para depositar residuos no aprovechables como el papel higiénico; servilletas, papeles y cartones contaminados con comida; papeles metalizados, entre otros. Color verde: Para depositar residuos orgánicos aprovechables como los restos de comida, desechos agrícolas etc.',
    imagen: 'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_NO_APROVECHABLES.jpg'
  },
  ])
  useEffect(() => {
    setObjetoActual(Math.floor(Math.random() * objeto.length))
  }, [])

  return (
    <>
      <h1>Juego de reciclar</h1>
      <form >
        
          <img className='centrar' alt='' src={objeto[objetoActual].imagen} />
        

        <div className='contenedor'>
          <img className='imagenes' src={'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_PAPEL_Y_CARTON.jpg'}/>
          <img className='imagenes' src={'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_ORGANICOS.jpg'}/>
          <img className='imagenes' src={'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_APROVECHABLES.jpg'}/>
          <img className='imagenes' src={'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_NO_APROVECHABLES.jpg'}/>
        </div>
      </form>
    </>
  )
}
/**{tachoBasura && tachoBasura.map((tachoBasura, i) => (
            <div key={i}>
              <button>
                <img className='' src={tachoBasura.imagen} />
              </button>
            </div>
          ))} */

export default JuegoUno