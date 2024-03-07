import express from 'express'
import ProdutoController from './app/controllers/ProdutoController.js'
const app = express()

app.use(express.json())

const Produto = class {
  constructor(id, nome, preco) {
    this.id =id, 
    this.nome = nome;
    this.preco = preco
  }
}
// ROTAS
app.get('/', (req, res) => {
  res.send('1.0.0')
})
app.get('/produtos', ProdutoController.index)
app.get('/produtos/:id', ProdutoController.show)
app.post('/produtos', ProdutoController.store)
app.put('/produtos/:id', ProdutoController.update)
app.delete('/produtos/:id', ProdutoController.delete)

export default app
