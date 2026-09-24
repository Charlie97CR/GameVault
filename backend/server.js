import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 3000

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

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`)
})