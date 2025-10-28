const { sql, connectDB } = require('../config/db');

exports.getAll = async () => {
  const pool = await connectDB();
  const result = await pool.request().query('SELECT * FROM Products');
  return result.recordset;
};