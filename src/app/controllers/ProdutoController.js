import ProdutoRepository from "../repositories/ProdutoRepository.js"

class ProdutoController {
    index (req,res) {
        const row = ProdutoRepository.findAll()
        res.json(row)
    }

    show (req, res) {
        const { id } = req.params
        const SQL = 'SELECT * FROM produtos WHERE id=?'
        connection.query(SQL, id, (error, result) => {
          const resultado = result[0]
          if(error){
            res.status(404).json({'error': error})
          } else{
            console.log(`SQL instruction => ${SQL}`)
            res.status(200).json(resultado)
          }
        })
    }

    store (req,res) {
        const { produto, preco } = req.body
        const SQL = 'INSERT INTO produtos (id,produto, preco) VALUES (DEFAULT, ?, ?)'
        connection.query(SQL, [produto,preco], (error, result) => {
          if(error){
            res.status(400).json({'error': error})
          } else{
            console.log(`SQL instruction => ${SQL}`)
            res.status(201).json(result)
          }
        })
    }

    update (req, res) {
        const { id } = req.params
        const { produto, preco } = req.body
        const SQL = 'UPDATE produtos SET produto=?, preco=? WHERE id=?'
        connection.query(SQL, [produto,preco,id], (error, result) => {
          if(error){
            res.status(404).json({'error': error})
          } else{
            console.log(`SQL instruction => ${SQL}`)
            res.status(201).json(result)
          }
        })
    }

    delete (req, res) {
        const { id } = req.params
        const SQL = 'DELETE FROM produtos WHERE id=?'
        connection.query(SQL, id, (error, result) => {
          if(error){
            res.status(404).json({'error': error})
          } else{
            console.log(`SQL instruction => ${SQL}`)
            res.status(201).json(result)
          }
        })
      }
}

// Padrão SINGLETON
export default new ProdutoController
