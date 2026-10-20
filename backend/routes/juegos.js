import express from 'express'
import pool from '../db.js'

const router = express.Router()

// Ruta encargada de recibir la informacion del juego y almacenarla en la base de datos
router.post('/juegos', async (req, res) => {
    try {
        const { rawg_id, nombre, imagen, lanzamiento, plataformas, generos } = req.body

        // Inserta el registro principal del juego o actualiza sus datos principales si ya se encontraba registrado
        const queryJuego = `
            INSERT INTO juegos (rawg_id, nombre, imagen, lanzamiento, estado) 
            VALUES (?, ?, ?, ?, 'biblioteca')
            ON DUPLICATE KEY UPDATE nombre=VALUES(nombre), imagen=VALUES(imagen)
        `
        const [resultado] = await pool.query(queryJuego, [rawg_id, nombre, imagen, lanzamiento])
        const juegoId = resultado.insertId || (await pool.query('SELECT id FROM juegos WHERE rawg_id = ?', [rawg_id]))[0][0].id

        // Elimina los registros anteriores de plataformas y almacena las nuevas plataformas asociadas al juego
        if (plataformas && plataformas.length > 0) {
            await pool.query('DELETE FROM plataformas WHERE juego_id = ?', [juegoId])
            for (const plat of plataformas) {
                await pool.query(
                    'INSERT INTO plataformas (juego_id, nombre_plataforma) VALUES (?, ?)',
                    [juegoId, plat.platform.name]
                )
            }
        }

        res.status(201).json({ mensaje: '¡Juego guardado exitosamente en MySQL!', juegoId })
    } catch (error) {
        console.error('Error al guardar el juego:', error)
        res.status(500).json({ error: 'Hubo un error en el servidor al guardar el juego' })
    }
})

export default router