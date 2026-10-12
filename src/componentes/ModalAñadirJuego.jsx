import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../iconos/index'
import { buscarJuegos } from '../servicios/rawg.js'

function ModalAñadirJuego({ cerrarModal, onAgregarJuego }) {

    const [busqueda, setBusqueda] = useState('')
    const [resultados, setResultados] = useState([])

    async function manejarBusqueda() {
        if (!busqueda.trim()) {
            return
        }

        const juegosEncontrados = await buscarJuegos(busqueda)
        setResultados(juegosEncontrados)
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>
                        <FontAwesomeIcon icon={['fas', 'gamepad']} />
                        Añadir juego
                    </h2>

                    <button
                        className="modal-close-icon"
                        onClick={cerrarModal}
                    >
                        <FontAwesomeIcon icon={['fas', 'xmark']} />
                    </button>
                </div>

                <div className="modal-body">
                    <label htmlFor="nombreJuego">
                        Nombre del juego
                    </label>

                    <input
                        id="nombreJuego"
                        type="text"
                        placeholder="Ej. The Witcher 3"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />

                    {resultados.map((juego) => (
                        <div 
                            key={juego.id} 
                            className="resultado-juego"
                            
                            onClick={() => {
                                onAgregarJuego(juego);
                                cerrarModal();         
                            }}
                        >
                            <img src={juego.background_image} alt={juego.name} width="50" />
                            <div>
                                <h4>{juego.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="modal-footer">
                    <button
                        className="btn-secondary"
                        onClick={cerrarModal}
                    >
                        Cancelar
                    </button>

                    <button
                        className="btn-primary"
                        type="button"
                        onClick={manejarBusqueda}
                    >
                        Buscar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalAñadirJuego