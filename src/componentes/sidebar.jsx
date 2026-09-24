import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../iconos/index'

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="brand">
                <div className="brand-icon">🎮</div>
                <div className="brand-name">GameVault</div>
            </div>

            <div className="nav-group">
                <div className="nav-group-title">PRINCIPAL</div>

                <nav className="nav-list">

                    <a href="#" className="nav-link active">
                        <span><FontAwesomeIcon icon={['fas', 'folder-open']} /></span>
                        <span>Biblioteca</span>
                    </a>

                    <a href="#" className="nav-link">
                        <span><FontAwesomeIcon icon={['fas', 'hourglass-half']} /></span>
                        <span>Pendientes</span>
                    </a>

                    <a href="#" className="nav-link">
                        <span><FontAwesomeIcon icon={['fas', 'trophy']} /></span>
                        <span>Completados</span>
                    </a>

                    <a href="#" className="nav-link">
                        <span><FontAwesomeIcon icon={['fas', 'ban']} /></span>
                        <span>Dropeados</span>
                    </a>
                </nav>
            </div>

        </aside>
    )
}

export default Sidebar