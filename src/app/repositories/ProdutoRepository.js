import connection from "../database/connection.js"

class ProdutoRepository {
    create () {}
   
    findAll (req,res) {
        const SQL = 'SELECT * FROM produtos'
        connection.query(SQL, (error, result) => {
          if(error){
            return error
          } else{
            console.log(`SQL instruction => ${SQL}`)
            return result
          }
        })
    }
   
    findById () {}
   
    update () {}
   
    delete () {}
}

export default new ProdutoRepository
