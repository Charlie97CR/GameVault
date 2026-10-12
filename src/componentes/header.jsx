import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../iconos/index'
import { useState } from 'react'
import ModalAñadirJuego from './ModalAñadirJuego.jsx'

// 1. Recibimos 'onAgregarJuego' en las props del Header
function Header({ onAgregarJuego }) {

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
                <div className="search-box">
                    <span>
                        <FontAwesomeIcon icon={['fas', 'magnifying-glass']} />
                    </span>

                    <input
                        type="text"
                        placeholder="Buscar en la biblioteca"
                    />
                </div>

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