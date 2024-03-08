import ProdutoRepository from "../repositories/ProdutoRepository.js"

class ProdutoController {
    async index (req,res) {
        const ROW = await ProdutoRepository.findAll()
        res.json(ROW)
    }

    async show (req, res) {
      const { id } = req.params
      const ROW = await ProdutoRepository.findById(id)
      res.json(ROW)
    }

    async store (req,res) {
      const { produto, preco } = req.body
      const ROW = await ProdutoRepository.create(produto, preco)
      res.json(ROW)
    }

    async update (req, res) {
      const { id } = req.params
      const { produto, preco } = req.body
      const ROW = await ProdutoRepository.update(id, produto, preco)
      res.json(ROW)
    }

    async delete (req, res) {
      const { id } = req.params
      const ROW = await ProdutoRepository.delete(id)
      res.json(ROW)
    }
}

// Padrão SINGLETON
export default new ProdutoController
