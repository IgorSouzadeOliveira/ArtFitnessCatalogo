const orcamentoModel = require('../models/orcamentoModel');

exports.createOrcamento = async (orcamentoData) => {
  return await orcamentoModel.create(orcamentoData);
};