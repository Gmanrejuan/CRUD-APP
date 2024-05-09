// controllers/taskController.js

const taskService = require('../services/taskService');

// Create task controller
exports.createTask = async (req, res) => {
  try {
    const newTask = await taskService.createTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get task controller
exports.getTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await taskService.getTaskById(taskId);
    res.json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update task controller
exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedTask = await taskService.updateTask(taskId, req.body);
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete task controller
exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    await taskService.deleteTask(taskId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
