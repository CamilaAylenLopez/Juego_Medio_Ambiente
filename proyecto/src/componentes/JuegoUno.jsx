import './JuegoUno.css'
import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const JuegoUno = (props) => {
  const [objetoActual, setObjetoActual] = useState(0)
  const [juegoTerminado, setJuegoTerminado] = useState(false)
  const [puntos, setPuntos] = useState(0)
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

  ])

  useEffect(() => {
    setObjetoActual(Math.floor(Math.random() * objeto.length))
  }, [])

  const verificar = (e) => {
    e.preventDefault();
    if (juegoTerminado === false) {
      if (objeto[objetoActual].tacho === e.target.alt) {
        //setObjetoActual(Math.floor(Math.random() * objeto.length));
        setPuntos(puntos + 20)

        const objetosSinUsar = objeto.slice()
        objetosSinUsar.splice(objetoActual, 1)
        setObjeto(objetosSinUsar)

        if (objetosSinUsar.length === 0) {
          setJuegoTerminado(true)
          alert('El juego termino!!!')
        }
        else {
          setObjetoActual(Math.floor(Math.random() * objetosSinUsar.length));
        }
      }
      else {
        alert('Prueba otra vez :)');
      }
    }
    else {
      alert('EL JUEGO TERMINO. EL GATO NO ES UN OBJETO. NO VA A LA BASURAAAAAAAAAAAA!!!!!!!!!')
    }

  }

  return (
    <>
      <h1>Juego de reciclar</h1>
      <h2>puntos: {puntos}</h2>
      <div className='centrar'>
        <img alt='' src={Object.keys(objeto).length === 0 ? "https://assets.epuzzle.info/puzzle/079/716/original.jpg" : objeto[objetoActual].imagen} />
      </div>

      <div className='contenedor'>
        <img className='imagenes' src={'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_PAPEL_Y_CARTON.jpg'} value='azul' onClick={verificar} alt='azul' />
        <img className='imagenes' src={'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_ORGANICOS.jpg'} value='marron' onClick={verificar} alt='marron' />
        <img className='imagenes' src={'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_APROVECHABLES.jpg'} value='verde' onClick={verificar} alt='verde' />
        <img className='imagenes' src={'https://www.reyplast.pe/imagenes/PAPELERA_COSMOS_80_NO_APROVECHABLES.jpg'} value='negro' onClick={verificar} alt='negro' />
        <img className='imagenes' src={'https://www.jqs-consulting.com/wp-content/uploads/2023/03/63.png'} value='amarillo' onClick={verificar} alt='amarillo' />
      </div>


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