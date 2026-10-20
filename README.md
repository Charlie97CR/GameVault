# 🎮 GameVault

GameVault es una aplicación web full-stack diseñada para gestionar y organizar tu colección personal de videojuegos. Permite buscar títulos mediante una API externa, guardarlos en una base de datos local y clasificarlos según tu progreso actual (completados, pendientes o dropeados).

---

## 🚀 Características Principales

* **Búsqueda en Tiempo Real**: Conexión directa con la API de RAWG para encontrar cualquier videojuego al instante.
* **Gestión de Biblioteca**: Guarda juegos con sus respectivas portadas, plataformas y géneros.
* **Control de Estados**: Organiza tu biblioteca filtrando entre juegos pendientes, completados o dropeados con contadores dinámicos.
* **Ordenamiento Dinámico**: Ordena tu colección por fecha de registro (más reciente) o alfabéticamente (A-Z / Z-A).
* **Diseño Responsivo**: Interfaz limpia y moderna adaptada para una experiencia fluida.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend**: React, Vite, CSS y FontAwesome.
* **Backend**: Node.js, Express y CORS.
* **Base de Datos**: MySQL (utilizando `mysql2` con soporte para promesas).
* **API Externa**: RAWG Video Games Database API.
