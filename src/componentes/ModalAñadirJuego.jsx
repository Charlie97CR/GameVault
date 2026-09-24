import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../iconos/index'

function ModalAñadirJuego({ cerrarModal }) {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2><FontAwesomeIcon icon={['fas', 'gamepad']} /> Añadir juego</h2>
                    <button className="modal-close-icon" onClick={cerrarModal}>
                        <FontAwesomeIcon icon={['fas', 'xmark']} />
                    </button>
                </div>

                <div className="modal-body">
                    <label htmlFor="nombreJuego">Nombre del juego</label>
                    <input 
                        id="nombreJuego" 
                        type="text" 
                        placeholder="Ej. The Witcher 3" 
                    />
                </div>

                <div className="modal-footer">
                    <button className="btn-secondary" onClick={cerrarModal}>
                        Cancelar
                    </button>
                    <button className="btn-primary" type="button">
                        Guardar juego
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalAñadirJuego