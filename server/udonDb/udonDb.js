import mysql from 'mysql'

const db = mysql.createConnection({
    user : 'bsk',
    host : '101.101.219.43',
    password: 'Ssac000@',
    database: 'udondb',
})

export default db;