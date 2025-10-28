const orcamentoService = require('../services/orcamentoService');

exports.create = async (req, res) => {
  try {
    const novoOrcamento = await orcamentoService.createOrcamento(req.body);
    res.status(201).json(novoOrcamento);
  } catch (error) {
    console.error('Erro ao criar orçamento:', error);
    res.status(500).json({ error: 'Erro ao salvar orçamento.' });
  }
};