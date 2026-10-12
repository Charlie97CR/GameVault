import { useState } from 'react'
import Header from './componentes/header.jsx'
import Sidebar from './componentes/sidebar.jsx'
import Biblioteca from './paginas/Biblioteca.jsx'

function App() {
  // Creamos el estado global de la biblioteca aquí en App
  const [juegosBiblioteca, setJuegosBiblioteca] = useState([])

  // Creamos una función para añadir un nuevo juego a la lista
  const agregarJuegoABiblioteca = (juegoNuevo) => {
    // Evitamos duplicados o simplemente añadimos el juego al arreglo actual
    setJuegosBiblioteca([...juegosBiblioteca, juegoNuevo])
  }

  return (
    <>
      <Sidebar />

      <div className="main-wrapper">
        {/* Le pasamos la función al Header por si el modal la necesita */}
        <Header onAgregarJuego={agregarJuegoABiblioteca} />

        <main className="content-area">
          {/* Le pasamos la lista de juegos a la Biblioteca para que los pinte */}
          <Biblioteca juegos={juegosBiblioteca} />
        </main>
      </div>
    </>
  )
}

export default App