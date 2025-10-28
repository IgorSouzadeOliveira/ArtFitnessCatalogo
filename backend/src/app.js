const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const productsRouter = require('./routes/products');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

// Middlewares globais
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas da API
app.use('/api/products', productsRouter);

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '..', 'public', 'frontend')));

// Rota 404 para qualquer página inexistente
app.get('*', (req, res) => {
  res.status(404).send('Página não encontrada');
});

// Middleware de tratamento de erro global
app.use(errorHandler);

module.exports = app;