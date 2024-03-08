import { CONSULTA } from "../database/connection.js"

class ProdutoRepository {
    create (produto, preco) {
      const SQL = 'INSERT INTO produtos (id,produto, preco) VALUES (DEFAULT, ?, ?)'
      return CONSULTA(SQL, [produto, preco], 'Não foi possível criar/cadastrar!')
    }
   
    findAll () {
      const SQL = 'SELECT * FROM produtos'
      return CONSULTA(SQL, 'Não foi possível listar')
    }
   
    findById (id) {
      const SQL = 'SELECT * FROM produtos WHERE id=?'
      return CONSULTA(SQL, id, 'Não foi possível encontrar pelo id fornecido')
    }
   
    update (id, produto, preco) {
      const SQL = 'UPDATE produtos SET produto=?, preco=? WHERE id=?'
      return CONSULTA(SQL, [produto, preco, id], 'Não foi possível encontrar pelo id fornecido')
    }
   
    delete (id) {
      const SQL = 'DELETE FROM produtos WHERE id=?'
      return CONSULTA(SQL, id, 'Não foi possível deletar o produto')
    }
}

export default new ProdutoRepository
