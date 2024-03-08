import { Router } from "express"
import ProdutoController from './app/controllers/ProdutoController.js'

const ROUTER = Router()

ROUTER.get('/', (req, res) => {
    res.send('1.0.0')
})
ROUTER.get('/produtos', ProdutoController.index)
ROUTER.get('/produtos/:id', ProdutoController.show)
ROUTER.post('/produtos', ProdutoController.store)
ROUTER.put('/produtos/:id', ProdutoController.update)
ROUTER.delete('/produtos/:id', ProdutoController.delete)

export default ROUTER
