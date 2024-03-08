import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'dbprodutos'
})

connection.connect()

/**
 * Executa um código SQL com ou sem valores 
 * @param {*} SQL SQL instruction
 * @param {string=id / [produto, preco, id]} values  
 * @param {string} messageReject mensagem a ser exibida em caso de erro 
 * @returns objeto da Promise
 */

export const CONSULTA = (SQL, values='', messageReject) => {
    return new Promise((resolve, reject) => {
        connection.query(SQL, values, (error, result) => {
            if (error) {
                return reject(messageReject)
            }
            const ROW = JSON.parse(JSON.stringify(result))
            return resolve(ROW)
        })
    })
}


export default connection
