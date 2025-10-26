// backend/server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' });

const { connectDB } = require('./db');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas da API
app.use('/api/products', productsRouter);

/* =====================================================
   🔧 ALTERAÇÃO IMPORTANTE AQUI:
   Servir a pasta correta onde está o frontend real:
   backend/public/frontend/
   ===================================================== */
app.use(express.static(path.join(__dirname, 'public', 'frontend')));

/* =====================================================
   🔁 Fallback para Single Page Application (SPA)
   ou rotas desconhecidas → retorna index.html
   ===================================================== */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'frontend', 'index.html'));
});

// (opcional) se tiver outros arquivos públicos, ex: imagens, uploads
// app.use('/static', express.static(path.join(__dirname, 'public')));

async function start() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
      console.log(`📂 Servindo frontend de: ${path.join(__dirname, 'public', 'frontend')}`);
    });
  } catch (err) {
    console.error('❌ Servidor não iniciado devido a erro de DB:', err);
  }
}

start();