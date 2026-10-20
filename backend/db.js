import mysql from 'mysql2/promise'

// Crea un grupo de conexiones asíncronas para gestionar de forma eficiente la comunicación con la base de datos MySQL local
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gamevault_db'
})

export default pool