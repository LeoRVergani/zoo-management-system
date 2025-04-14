const Cuidado = require('../models/Cuidado');

module.exports = {
  async listar(req, res) {
    try {
      const cuidados = await Cuidado.findAll();
      res.json(cuidados);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar os cuidados.' });
    }
  },
  async criar(req, res) {
    try {
      const novo = await Cuidado.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao criar cuidado.' });
    }
  },
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      await Cuidado.update(req.body, { where: { id } });
      res.sendStatus(204);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao atualizar cuidado.' });
    }
  },
  async remover(req, res) {
    try {
      const { id } = req.params;
      await Cuidado.destroy({ where: { id } });
      res.sendStatus(204);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao remover cuidado.' });
    }
  }
};
