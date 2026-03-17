const { DataTypes } = require('sequelize');
const sequelize = require('./index'); // Ele puxa a conexão que está no index.js

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Task;
