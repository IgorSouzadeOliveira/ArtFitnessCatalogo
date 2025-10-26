// backend/db.js
const sql = require('mssql');
require('dotenv').config({ path: __dirname + '/.env' });

const {
  DB_SERVER,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_PORT,
  DB_ENCRYPT
} = process.env;

const config = {
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  options: {
    encrypt: DB_ENCRYPT === 'true', // true for azure
    trustServerCertificate: DB_ENCRYPT !== 'true' // para dev local
  }
};

// Se DB_SERVER contém backslash (instância), utiliza-se instanceName:
if (DB_SERVER && DB_SERVER.includes('\\')) {
  const parts = DB_SERVER.split('\\');
  config.server = parts[0];
  config.options.instanceName = parts[1];
  // porta opcional
  if (DB_PORT) config.port = parseInt(DB_PORT, 10);
} else {
  config.server = DB_SERVER || 'localhost';
  if (DB_PORT) config.port = parseInt(DB_PORT, 10);
}

async function connectDB() {
  try {
    console.log('Tentando conectar ao banco com config.server:', config.server, 'instance:', config.options.instanceName || '(nenhuma)');
    await sql.connect(config);
    console.log('Conectado ao SQL Server com sucesso');
  } catch (err) {
    console.error('❌ Erro ao conectar ao banco:', err);
    throw err;
  }
}

module.exports = { sql, connectDB };