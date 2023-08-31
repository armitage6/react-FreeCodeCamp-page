import { useState } from 'react'
import Testimonio from './components/Testimonio'
import './App.css'
import emma from "./img/emma.png"
import sarah from "./img/sarah.png"
import shawn from "./img/shawn.png"
import { testimonioShawn, testimonioSarah, testimonioEmma } from './tetimonio'

function App() {



  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        < Testimonio
          nombre={testimonioShawn.nombre}
          pais={testimonioShawn.pais}
          img={testimonioShawn.img}
          cargo={testimonioShawn.cargo}
          empresa={testimonioShawn.empresa}
          testimonio={testimonioShawn.testimonio}
          altImg={testimonioShawn.altImg}
        />

        < Testimonio
          nombre={testimonioSarah.nombre}
          pais={testimonioSarah.pais}
          img={testimonioSarah.img}
          cargo={testimonioSarah.cargo}
          empresa={testimonioSarah.empresa}
          testimonio={testimonioSarah.testimonio}
          altImg={testimonioSarah.altImg}
        />


        < Testimonio
          nombre={testimonioEmma.nombre}
          pais={testimonioEmma.pais}
          img={testimonioEmma.img}
          cargo={testimonioEmma.cargo}
          empresa={testimonioEmma.empresa}
          testimonio={testimonioEmma.testimonio}
          altImg={testimonioEmma.altImg}
        />

      </div>
    </div >
  )
}

export default App
