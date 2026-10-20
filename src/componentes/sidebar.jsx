import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../iconos/index'

// Componente para renderizar la barra lateral de navegacion con la marca y los botones de filtro por categorias y contadores
function Sidebar({ vistaActual, onCambiarVista, conteos }) {
    return (
        <aside className="sidebar">
            {/* Contenedor de la identidad e icono principal de la aplicacion */}
            <div className="brand">
                <div className="brand-icon"><FontAwesomeIcon icon={['fas', 'headset']} /></div>
                <div className="brand-name">GameVault</div>
            </div>

            <div className="nav-group">
                <div className="nav-group-title">PRINCIPAL</div>

                {/* Lista de botones de navegacion para alternar entre las diferentes vistas y categorias de juegos */}
                <nav className="nav-list">
                    <button
                        onClick={() => onCambiarVista('biblioteca')}
                        className={`nav-link ${vistaActual === 'biblioteca' ? 'active' : ''}`}
                    >
                        <span className="nav-text">
                            <FontAwesomeIcon icon={['fas', 'folder-open']} /> Biblioteca
                        </span>
                        <span className="nav-counter">{conteos?.biblioteca || 0}</span>
                    </button>

                    <button
                        onClick={() => onCambiarVista('completado')}
                        className={`nav-link ${vistaActual === 'completado' ? 'active' : ''}`}
                    >
                        <span className="nav-text">
                            <FontAwesomeIcon icon={['fas', 'trophy']} /> Completados
                        </span>
                        <span className="nav-counter">{conteos?.completado || 0}</span>
                    </button>

                    <button
                        onClick={() => onCambiarVista('pendiente')}
                        className={`nav-link ${vistaActual === 'pendiente' ? 'active' : ''}`}
                    >
                        <span className="nav-text">
                            <FontAwesomeIcon icon={['fas', 'hourglass-half']} /> Pendientes
                        </span>
                        <span className="nav-counter">{conteos?.pendiente || 0}</span>
                    </button>

                    <button
                        onClick={() => onCambiarVista('dropeado')}
                        className={`nav-link ${vistaActual === 'dropeado' ? 'active' : ''}`}
                    >
                        <span className="nav-text">
                            <FontAwesomeIcon icon={['fas', 'ban']} /> Dropeados
                        </span>
                        <span className="nav-counter">{conteos?.dropeado || 0}</span>
                    </button>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar