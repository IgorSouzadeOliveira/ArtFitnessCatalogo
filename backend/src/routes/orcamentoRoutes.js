const express = require('express');
const router = express.Router();
const orcamentoController = require('../controllers/orcamentoController');

router.post('/', orcamentoController.create);

module.exports = router;