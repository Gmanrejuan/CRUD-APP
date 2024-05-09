// services/taskService.js

const Task = require('../models/Task');

// Create task service
exports.createTask = async (taskData) => {
  try {
    const newTask = await Task.create(taskData);
    return newTask;
  } catch (error) {
    throw error;
  }
};

// Get task by ID service
exports.getTaskById = async (taskId) => {
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  } catch (error) {
    throw error;
  }
};

// Update task service
exports.updateTask = async (taskId, taskData) => {
  try {
    const updatedTask = await Task.update(taskId, taskData);
    return updatedTask;
  } catch (error) {
    throw error;
  }
};

// Delete task service
exports.deleteTask = async (taskId) => {
  try {
    await Task.delete(taskId);
  } catch (error) {
    throw error;
  }
};
