import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../iconos/index'
import { useState } from 'react'
import ModalAñadirJuego from './ModalAñadirJuego.jsx'

// Componente para renderizar la barra superior con el buscador, el boton para abrir el modal de registro y el perfil del usuario
function Header({ onAgregarJuego, terminoBusqueda, onBuscar }) {

    // Estado local para gestionar la visibilidad del modal para añadir nuevos videojuegos
    const [modalAbierto, setModalAbierto] = useState(false)

    return (
        <>
            {modalAbierto && (
                <ModalAñadirJuego
                    cerrarModal={() => setModalAbierto(false)}
                    onAgregarJuego={onAgregarJuego} 
                />
            )}

            <header className="topbar">
                {/* Contenedor del campo de busqueda en tiempo real para filtrar la biblioteca */}
                <div className="search-box">
                    <span>
                        <FontAwesomeIcon icon={['fas', 'magnifying-glass']} />
                    </span>

                    <input
                        type="text" 
                    placeholder="Buscar en mi biblioteca..." 
                    value={terminoBusqueda}
                    onChange={(e) => onBuscar(e.target.value)}
                    className="search-input"
                    />
                </div>

                {/* Contenedor de acciones principales incluyendo el boton de añadir y la informacion del usuario */}
                <div className="topbar-actions">
                    <button onClick={() => setModalAbierto(true)} className="btn-primary">
                        <span><FontAwesomeIcon icon={['fas', 'plus']} />  Añadir Juego</span>
                    </button>

                    <div className="user-profile">
                        <img
                            src="/profile-app.png"
                            alt="Avatar"
                            className="avatar"
                        />
                        <div className="user-info">
                            <div className="user-name">
                                Charlie97CR
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header