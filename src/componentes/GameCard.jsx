import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../iconos/index'
import { useState } from 'react'

// Componente para renderizar la tarjeta individual de cada videojuego con sus detalles y opciones de gestion
function GameCard({ juego, onEliminar, onCambiarEstado }) {

    // Estado local para controlar la apertura y el cierre del menu desplegable de opciones de la tarjeta
    const [menuAbierto, setMenuAbierto] = useState(false)

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto)
    }

    const estadoActual = juego.estado || 'biblioteca'
    
    return (
        <div className="game-card">
 
            {/* Contenedor del boton flotante y el menu desplegable de acciones */}
            <div className="game-card-menu-container">
                <button className="game-card-menu-btn" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={['fas', 'ellipsis-vertical']} />
                </button>

                {menuAbierto && (
                    <div className="game-card-dropdown" >
                        <button className="btn-completado" onClick={() => { onCambiarEstado(juego.id, 'completado'); setMenuAbierto(false); }}>
                            <FontAwesomeIcon icon={['fas', 'check']} /> Completado
                        </button>
                        <button className="btn-pendiente" onClick={() => { onCambiarEstado(juego.id, 'pendiente'); setMenuAbierto(false); }}>
                            <FontAwesomeIcon icon={['fas', 'hourglass-half']} /> Pendiente
                        </button>
                        <button className="btn-dropeado" onClick={() => { onCambiarEstado(juego.id, 'dropeado'); setMenuAbierto(false); }}>
                            <FontAwesomeIcon icon={['fas', 'ban']} /> Dropeado
                        </button>
                        <hr className="dropdown-divider" />
                        <button className="btn-eliminar" onClick={() => { onEliminar(juego.id); setMenuAbierto(false); }}>
                            <FontAwesomeIcon icon={['fas', 'trash-can']} /> Eliminar
                        </button>
                    </div>
                )}
            </div>

            {/* Contenedor visual de la imagen de portada y la etiqueta de estado actual */}
            <div className="game-card-image-container">
                <img
                    src={juego.background_image}
                    alt={juego.name}
                    className="game-card-image"
                />
   
                <span className={`estado-badge estado-${estadoActual}`}>
                    {estadoActual.toUpperCase()}
                </span>
            </div>

            {/* Contenedor de la informacion textual, plataformas y generos del videojuego */}
            <div className="game-card-info">
                <h3>{juego.name}</h3>

                <div className="game-card-platforms">
                    {juego.platforms && juego.platforms.map((item, index) => (
                        <span key={index} className="tag-plataforma">
                            {item.platform.name}
                        </span>
                    ))}
                </div>

                <div className="game-card-genres">
                    {juego.genres && juego.genres.map((item, index) => (
                        <span key={index} className="tag-genero">
                            {item.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GameCard