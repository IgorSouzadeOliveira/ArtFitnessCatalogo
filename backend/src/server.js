require('dotenv').config({ path: __dirname + '/../.env' });
const app = require('./app');
const { connectDB } = require('./config/db');
const path = require('path');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
      console.log(`📂 Servindo frontend de: ${path.join(__dirname, '..', 'public', 'frontend')}`);
    });
  } catch (err) {
    console.error('❌ Servidor não iniciado devido a erro de DB:', err);
  }
})();