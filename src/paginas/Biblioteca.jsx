import GameCard from '../componentes/GameCard.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../iconos/index'
import './../componentes/styles.css'

// Componente para renderizar la seccion principal de la biblioteca con su cabecera, selector de ordenamiento y cuadricula de juegos
function Biblioteca({ juegos, titulo = "Mi Biblioteca de Juegos", criterioOrden, onCambiarOrden, onEliminar, onCambiarEstado }) {
    return (
        <section className="biblioteca">
      
            {/* Cabecera que contiene el titulo dinamico, descripcion y el selector para ordenar los elementos */}
            <div className="biblioteca-header">
                <div>
                    <h1>{titulo}</h1>
                    <p>Todos tus juegos en un solo lugar.</p>
                </div>

               
                <div className="biblioteca-ordenamiento">
                    <span className="orden-icono">
                        <FontAwesomeIcon icon={['fas', 'filter']} />
                    </span>

                    <select
                        value={criterioOrden}
                        onChange={(e) => onCambiarOrden(e.target.value)}
                        className="select-ordenar"
                    >
                        <option value="reciente">🕒 Más reciente</option>
                        <option value="alfabetico-asc">🔤 Nombre (A - Z)</option>
                        <option value="alfabetico-desc">🔤 Nombre (Z - A)</option>
                    </select>
                </div>
            </div>

      
            {/* Cuadricula para mostrar las tarjetas de los juegos o un mensaje alternativo si la lista se encuentra vacia */}
            <div className="biblioteca-grid">
                {juegos.length === 0 ? (
                    <p className="biblioteca-vacia">No hay juegos en esta sección aún.</p>
                ) : (
                    juegos.map((juego) => (
                        <GameCard
                            key={juego.id}
                            juego={juego}
                            onEliminar={onEliminar}
                            onCambiarEstado={onCambiarEstado}
                        />
                    ))
                )}
            </div>
        </section>
    )
}

export default Biblioteca