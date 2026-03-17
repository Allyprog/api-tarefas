const { Sequelize } = require('sequelize');

// Configura o banco de dados para salvar em um arquivo chamado 'database.sqlite'
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/database.sqlite'
});

module.exports = sequelize;
