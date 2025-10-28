// backend/src/models/productModel.js
const { sql, connectDB } = require('../config/db');

exports.getAll = async () => {
  const pool = await connectDB();
  const result = await pool.request().query('SELECT Id, Name, Description, Price FROM dbo.Products');
  return result.recordset;
};

exports.insert = async ({ name, description, price }) => {
  const pool = await connectDB();
  const request = pool.request();

  // use tipos do mssql para maior segurança
  request.input('name', sql.NVarChar(255), name);
  request.input('description', sql.NVarChar(sql.MAX), description || null);
  request.input('price', sql.Decimal(10, 2), price);

  const result = await request.query(`
    INSERT INTO dbo.Products (Name, Description, Price)
    OUTPUT INSERTED.Id, INSERTED.Name, INSERTED.Description, INSERTED.Price
    VALUES (@name, @description, @price);
  `);

  return result.recordset[0];
};