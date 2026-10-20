import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import pool from './db.js'

// Carga las variables de entorno desde el archivo de configuracion local
dotenv.config()

const app = express()

// Habilita el intercambio de recursos de origen cruzado y permite procesar cuerpos de peticion en formato JSON
app.use(cors())
app.use(express.json()) 

const PORT = 3000

// Ruta para buscar videojuegos consultando de manera externa a la API de RAWG
app.get('/api/juegos', async (req, res) => {
  const { search } = req.query

  if (!search) {
    return res.status(400).json({
      error: 'Debes indicar qué juego quieres buscar'
    })
  }

  try {
    const respuesta = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&search=${encodeURIComponent(search)}`
    )

    if (!respuesta.ok) {
      throw new Error(`RAWG respondió con ${respuesta.status}`)
    }

    const datos = await respuesta.json()
    res.json(datos)

  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'No se pudieron obtener los juegos de RAWG'
    })
  }
})

// Ruta para obtener todos los juegos guardados junto con sus plataformas y generos desde la base de datos local
app.get('/api/juegos-guardados', async (req, res) => {
    try {
        const [juegos] = await pool.query('SELECT * FROM juegos ORDER BY id DESC')
        const juegosCompletos = []

        for (const juego of juegos) {
            const [plataformas] = await pool.query(
                'SELECT nombre_plataforma FROM plataformas WHERE juego_id = ?', 
                [juego.id]
            )

            const [generos] = await pool.query(
                'SELECT nombre_genero FROM generos WHERE juego_id = ?', 
                [juego.id]
            )

            juegosCompletos.push({
                id: juego.rawg_id,
                name: juego.nombre,
                background_image: juego.imagen,
                released: juego.lanzamiento,
                estado: juego.estado || 'biblioteca',
                platforms: plataformas.map(p => ({
                    platform: { id: Math.random(), name: p.nombre_plataforma }
                })),
                genres: generos.map(g => ({
                    id: Math.random(),
                    name: g.nombre_genero
                }))
            })
        }

        res.json(juegosCompletos)

    } catch (error) {
        console.error('Error al recuperar los juegos de la base de datos:', error)
        res.status(500).json({ error: 'Error interno al obtener la biblioteca' })
    }
})

// Ruta para registrar un nuevo juego o actualizarlo si ya existe, incluyendo sus plataformas y generos asociados
app.post('/api/juegos', async (req, res) => {
    try {
        const { rawg_id, nombre, imagen, lanzamiento, plataformas, genres } = req.body

        const queryJuego = `
            INSERT INTO juegos (rawg_id, nombre, imagen, lanzamiento, estado) 
            VALUES (?, ?, ?, ?, 'biblioteca')
            ON DUPLICATE KEY UPDATE nombre=VALUES(nombre), imagen=VALUES(imagen)
        `
        const [resultado] = await pool.query(queryJuego, [rawg_id, nombre, imagen, lanzamiento])
        const juegoId = resultado.insertId || (await pool.query('SELECT id FROM juegos WHERE rawg_id = ?', [rawg_id]))[0][0].id

        if (plataformas && plataformas.length > 0) {
            await pool.query('DELETE FROM plataformas WHERE juego_id = ?', [juegoId])
            for (const plat of plataformas) {
                await pool.query(
                    'INSERT INTO plataformas (juego_id, nombre_plataforma) VALUES (?, ?)',
                    [juegoId, plat.platform.name]
                )
            }
        }

        if (genres && genres.length > 0) {
            await pool.query('DELETE FROM generos WHERE juego_id = ?', [juegoId])
            for (const gen of genres) {
                await pool.query(
                    'INSERT INTO generos (juego_id, nombre_genero) VALUES (?, ?)',
                    [juegoId, gen.name]
                )
            }
        }

        res.status(201).json({ mensaje: '¡Juego guardado exitosamente en MySQL!', juegoId })
    } catch (error) {
        console.error('Error al guardar el juego:', error)
        res.status(500).json({ error: 'Hubo un error en el servidor al guardar el juego' })
    }
})

// Ruta para eliminar un juego y todos sus registros relacionados de plataformas y generos usando su identificador externo
app.delete('/api/juegos/:rawg_id', async (req, res) => {
    try {
        const { rawg_id } = req.params

        const [filas] = await pool.query('SELECT id FROM juegos WHERE rawg_id = ?', [rawg_id])
        
        if (filas.length === 0) {
            return res.status(404).json({ error: 'El juego no fue encontrado en la base de datos' })
        }

        const juegoId = filas[0].id

        await pool.query('DELETE FROM plataformas WHERE juego_id = ?', [juegoId])
        await pool.query('DELETE FROM generos WHERE juego_id = ?', [juegoId])

        await pool.query('DELETE FROM juegos WHERE id = ?', [juegoId])

        res.json({ mensaje: 'Juego eliminado con éxito de la base de datos' })

    } catch (error) {
        console.error('Error al eliminar el juego:', error)
        res.status(500).json({ error: 'Error en el servidor al intentar eliminar el juego' })
    }
})

// Ruta para actualizar el estado operativo de un juego especifico dentro de la biblioteca
app.put('/api/juegos/:rawg_id/estado', async (req, res) => {
    try {
        const { rawg_id } = req.params
        const { estado } = req.body 

        const estadosValidos = ['biblioteca', 'pendiente', 'completado', 'dropeado']
        if (!estado || !estadosValidos.includes(estado)) {
            return res.status(400).json({ error: 'Estado inválido proporcionado' })
        }

        const [resultado] = await pool.query(
            'UPDATE juegos SET estado = ? WHERE rawg_id = ?',
            [estado, rawg_id]
        )

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ error: 'El juego no existe en la base de datos' })
        }

        res.json({ mensaje: `El estado del juego cambió exitosamente a '${estado}'` })

    } catch (error) {
        console.error('Error al actualizar estado:', error)
        res.status(500).json({ error: 'Error en el servidor al actualizar el estado' })
    }
})

// Inicia el servidor web escuchando en el puerto configurado
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`)
})