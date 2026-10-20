const API_URL = 'http://localhost:3000'

// Funcion asincrona para consultar la API local y buscar videojuegos mediante un termino de busqueda codificado
export async function buscarJuegos(busqueda) {
  const respuesta = await fetch(
    `${API_URL}/api/juegos?search=${encodeURIComponent(busqueda)}`
  )

  if (!respuesta.ok) {
    throw new Error('No se pudieron obtener los juegos')
  }

  const datos = await respuesta.json()

  return datos.results
}