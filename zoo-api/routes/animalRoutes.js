const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

router.get('/', animalController.listar);
router.post('/', animalController.criar);
router.put('/:id', animalController.atualizar);
router.delete('/:id', animalController.remover);

module.exports = router;
