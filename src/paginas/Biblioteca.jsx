import { useState } from 'react'

// Recibimos los juegos por props
function Biblioteca({ juegos }) {
    
    // Cada vez que el componente se dibuje, imprimirá los juegos en la consola
    console.log("Juegos actuales en la biblioteca:", juegos);

    return (
        <section className="biblioteca">
            <div className="biblioteca-header">
                <div> 
                    <h1>Mi Biblioteca de Juegos</h1>
                    <p>Todos tus juegos en un solo lugar.</p>
                </div>
            </div>
        </section>
    )
} 

export default Biblioteca