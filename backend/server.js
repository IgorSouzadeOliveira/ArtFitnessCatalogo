const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' });

const { connectDB } = require('./db');
const productsRouter = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/products', require('./routes/products'));

app.use(express.static(path.join(__dirname, 'public', 'frontend')));

app.get('*', (req, res) => {
  res.status(404).send('Página não encontrada');
});

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