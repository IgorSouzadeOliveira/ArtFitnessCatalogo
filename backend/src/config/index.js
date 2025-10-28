require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    server: process.env.DB_SERVER,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    encrypt: process.env.DB_ENCRYPT === 'true',
    trustServerCertificate: process.env.DB_TRUSTSERVERCERTIFICATE === 'true',
  }
};