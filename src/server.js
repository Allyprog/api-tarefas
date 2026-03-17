const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json()); // Permite que a API receba dados em formato JSON
app.use(routes); // Usa as rotas que vamos definir abaixo

app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});