// middleware/authorization.js

const { Task } = require('../models');

// Authorization middleware
exports.authorizeUser = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.userId !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to access this task' });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
