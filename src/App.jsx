import { useState, useEffect } from 'react'
import Header from './componentes/header.jsx'
import Sidebar from './componentes/Sidebar.jsx'
import Biblioteca from './paginas/Biblioteca.jsx'

// Componente principal de la aplicacion que gestiona el estado global, la comunicacion con la API y el enrutamiento visual de vistas
function App() {
  const [juegosBiblioteca, setJuegosBiblioteca] = useState([])
  const [vistaActual, setVistaActual] = useState('biblioteca')

  const [terminoBusqueda, setTerminoBusqueda] = useState('')
  const [criterioOrden, setCriterioOrden] = useState('reciente')

  // Calcula los contadores dinamicos de los juegos segun su estado actual para mostrarlos en el menu lateral
  const totalBiblioteca = juegosBiblioteca.length
  const totalCompletados = juegosBiblioteca.filter(j => j.estado === 'completado').length
  const totalPendientes = juegosBiblioteca.filter(j => j.estado === 'pendiente').length
  const totalDropeados = juegosBiblioteca.filter(j => j.estado === 'dropeado').length

  // Efecto inicial para sincronizar y cargar los juegos guardados desde el servidor backend al iniciar la aplicacion
  useEffect(() => {
    const obtenerJuegosGuardados = async () => {
      try {
        const respuesta = await fetch('http://localhost:3000/api/juegos-guardados')
        if (!respuesta.ok) throw new Error('No se pudo conectar con la base de datos')
        const datos = await respuesta.json()
        setJuegosBiblioteca(datos)
      } catch (error) {
        console.error('Error al sincronizar la biblioteca:', error)
      }
    }
    obtenerJuegosGuardados()
  }, [])

  // Funcion asincrona para registrar un nuevo juego en el backend y actualizar el estado local
  const agregarJuegoABiblioteca = async (juegoNuevo) => {
    try {
      const datosParaEnviar = {
        rawg_id: juegoNuevo.id,
        nombre: juegoNuevo.name,
        imagen: juegoNuevo.background_image,
        lanzamiento: juegoNuevo.released || 'Desconocido',
        plataformas: juegoNuevo.platforms,
        genres: juegoNuevo.genres
      }

      const respuesta = await fetch('http://localhost:3000/api/juegos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosParaEnviar),
      })

      if (!respuesta.ok) throw new Error('Error al guardar el juego')

      setJuegosBiblioteca([...juegosBiblioteca, { ...juegoNuevo, estado: 'biblioteca' }])
    } catch (error) {
      console.error('Fallo en la comunicación:', error)
    }
  }

  // Funcion asincrona para eliminar un juego de la base de datos y removerlo de la interfaz
  const eliminarJuego = async (rawg_id) => {
    try {
      const respuesta = await fetch(`http://localhost:3000/api/juegos/${rawg_id}`, { method: 'DELETE' })
      if (!respuesta.ok) throw new Error('No se pudo eliminar')
      setJuegosBiblioteca(juegosBiblioteca.filter(juego => juego.id !== rawg_id))
    } catch (error) {
      console.error('Error al eliminar:', error)
    }
  }

  // Funcion asincrona para actualizar el estado operativo de un juego especifico
  const cambiarEstadoJuego = async (rawg_id, nuevoEstado) => {
    try {
      const respuesta = await fetch(`http://localhost:3000/api/juegos/${rawg_id}/estado`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: nuevoEstado }),
      })
      if (!respuesta.ok) throw new Error('No se pudo actualizar el estado')

      setJuegosBiblioteca(juegosBiblioteca.map(juego => {
        if (juego.id === rawg_id) return { ...juego, estado: nuevoEstado }
        return juego
      }))
    } catch (error) {
      console.error('Error al cambiar el estado:', error)
    }
  }

  // Procesa la lista de juegos aplicando filtros de vista, terminos de busqueda y criterios de ordenamiento alfabeticos o temporales
  const juegosProcesados = juegosBiblioteca
    .filter(juego => {
      const coincideVista = vistaActual === 'biblioteca' ? true : juego.estado === vistaActual
      const coincideBusqueda = juego.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
      return coincideVista && coincideBusqueda
    })
    .sort((a, b) => {
      if (criterioOrden === 'alfabetico-asc') return a.name.localeCompare(b.name)
      if (criterioOrden === 'alfabetico-desc') return b.name.localeCompare(a.name)
      return 0 // 'reciente' por defecto
    })

  // Obtiene el titulo correspondiente que se mostrara en la cabecera segun la seccion seleccionada
  const obtenerTituloVista = () => {
    switch (vistaActual) {
      case 'completado': return 'Juegos Completados'
      case 'pendiente': return 'Juegos Pendientes'
      case 'dropeado': return 'Juegos Dropeados'
      default: return 'Mi Biblioteca de Juegos'
    }
  }

  return (
    <>
      <Sidebar
        vistaActual={vistaActual}
        onCambiarVista={setVistaActual}
        conteos={{
          biblioteca: totalBiblioteca,
          completado: totalCompletados,
          pendiente: totalPendientes,
          dropeado: totalDropeados
        }}
      />

      <div className="main-wrapper">
        <Header
          onAgregarJuego={agregarJuegoABiblioteca}
          terminoBusqueda={terminoBusqueda}
          onBuscar={setTerminoBusqueda}
        />

        <main className="content-area">
          <Biblioteca
            juegos={juegosProcesados}
            titulo={obtenerTituloVista()}
            criterioOrden={criterioOrden}
            onCambiarOrden={setCriterioOrden}
            onEliminar={eliminarJuego}
            onCambiarEstado={cambiarEstadoJuego}
          />
        </main>
      </div>
    </>
  )
}

export default App