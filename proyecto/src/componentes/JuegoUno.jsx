import './JuegoUno.css'
import React, { useEffect, useState } from "react"


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
    imagen: 'https://www.zinner.com.ec/wp-content/uploads/2021/05/FG295773BLUE.jpg'
  },
  {
    color: 'marron',
    descripcion: 'Los materiales que se pueden depositar en este contenedor son: restos de comida de origen animal (carne y pescado, caparazones y conchas de marisco, queso, cáscaras de huevo) y vegetal (verduras, frutas, semillas, frutos secos y sus cáscaras, cereales, restos vegetales) y, no cocinados o cocinados restos de flores, ...',
    imagen: 'https://ecoinventos.com/wp-content/uploads/2018/07/contenedor-marr%C3%B3n-de-contenur.jpg'
  },
  {
    color: 'verde',
    descripcion: 'El contenedor verde, también conocido como iglú verde, es el destinado para depositar vidrio. En esta categoría deben reciclarse las botellas de vidrio, tarros, trozos de espejos y cristales rotos, entre otros.',
    imagen: 'https://previews.123rf.com/images/nerthuz/nerthuz1604/nerthuz160400041/56148206-tacho-de-la-basura-de-la-basura-con-recicla-s%C3%ADmbolo.jpg'
  },
  {
    color: 'negro',
    descripcion: 'Color negro: Para depositar residuos no aprovechables como el papel higiénico; servilletas, papeles y cartones contaminados con comida; papeles metalizados, entre otros. Color verde: Para depositar residuos orgánicos aprovechables como los restos de comida, desechos agrícolas etc.',
    imagen: 'data:image/jpeg;base64,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'
  },
])
  useEffect(() => {
    setObjetoActual(Math.floor(Math.random() * objeto.length))
  }, [])

  return (
    <>
      <h1>Juego de reciclar</h1>
      <img alt='' src={objeto[objetoActual].imagen}/>
      
    </>
  )
}

export default JuegoUno