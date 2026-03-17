const Task = require('../database/Task');

module.exports = {
  // Lista tudo o que está salvo no banco
  async list(req, res) {
    const tasks = await Task.findAll();
    return res.json(tasks);
  },

  // Cria uma tarefa nova no banco
  async create(req, res) {
    const { title } = req.body;
    const newTask = await Task.create({ title });
    return res.status(201).json(newTask);
  },

  // Marca como feita/pendente no banco
  async update(req, res) {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
    
    task.done = !task.done;
    await task.save();
    return res.json(task);
  },

  // Deleta do banco
  async delete(req, res) {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });

    await task.destroy();
    return res.status(204).send();
  }
};