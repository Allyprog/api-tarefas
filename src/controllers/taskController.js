let tasks = []; // Nossa lista de tarefas (fica salva na memória do PC)

module.exports = {
  // Função para retornar todas as tarefas
  list(req, res) {
    return res.json(tasks);
  },

  // Função para criar uma nova tarefa
  create(req, res) {
    const { title } = req.body;
    
    const newTask = {
      id: tasks.length + 1,
      title: title,
      done: false
    };

    tasks.push(newTask);

    return res.status(201).json(newTask);
  }
};