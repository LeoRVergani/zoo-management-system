const express = require('express');
const router = express.Router();
const cuidadoController = require('../controllers/cuidadoController');

// Rota GET: lista todos os cuidados
router.get('/', cuidadoController.listar);

// Rota POST: cria um novo cuidado
router.post('/', cuidadoController.criar);

// Rota PUT: atualiza um cuidado existente
router.put('/:id', cuidadoController.atualizar);

// Rota DELETE: remove um cuidado
router.delete('/:id', cuidadoController.remover);

module.exports = router;
