const Animal = require('../models/Animal');

module.exports = {
  async listar(req, res) {
    const animais = await Animal.findAll();
    res.json(animais);
  },

  async criar(req, res) {
    const novo = await Animal.create(req.body);
    res.status(201).json(novo);
  },

  async atualizar(req, res) {
    const { id } = req.params;
    await Animal.update(req.body, { where: { id } });
    res.sendStatus(204);
  },

  async remover(req, res) {
    const { id } = req.params;
    await Animal.destroy({ where: { id } });
    res.sendStatus(204);
  }
};
