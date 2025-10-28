const sql = require('mssql');
require('dotenv').config({ path: __dirname + '/../.env' });

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

let poolPromise;

async function connectDB() {
  try {
    if (!poolPromise) {
      console.log(`Tentando conectar ao banco com config.server: ${config.server}`);
      poolPromise = sql.connect(config);
      await poolPromise;
      console.log('Conectado ao SQL Server com sucesso');
    }
    return poolPromise;
  } catch (err) {
    console.error('Erro ao conectar ao banco:', err);
    throw err;
  }
}

module.exports = { sql, connectDB };