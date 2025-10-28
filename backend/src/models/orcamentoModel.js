const sql = require('mssql');
const dbConfig = require('../config/dbConfig');

exports.create = async (orcamentoData) => {
  try {
    const pool = await sql.connect(dbConfig);

    const request = pool.request();
    request.input('nome', sql.NVarChar, orcamentoData.nome);
    request.input('email', sql.NVarChar, orcamentoData.email);
    request.input('telefone', sql.NVarChar, orcamentoData.telefone);
    request.input('mensagem', sql.NVarChar, orcamentoData.mensagem);

    const result = await request.query(`
      INSERT INTO dbo.Orcamento (Nome, Email, Telefone, Mensagem)
      OUTPUT INSERTED.Id, INSERTED.Nome, INSERTED.Email, INSERTED.Telefone, INSERTED.Mensagem, INSERTED.DataCriacao
      VALUES (@nome, @email, @telefone, @mensagem);
    `);

    return result.recordset[0];
  } catch (err) {
    console.error('Erro ao salvar orçamento:', err);
    throw err;
  }
};