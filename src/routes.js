const express = require('express');
const router = express.Router();
const taskController = require('./controllers/taskController');

// Rota para listar tarefas (GET)
router.get('/tasks', taskController.list);

// Rota para criar uma tarefa (POST)
router.post('/tasks', taskController.create);

module.exports = router;