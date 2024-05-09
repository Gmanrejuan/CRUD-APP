// routes/taskRoutes.js

const express = require('express');
const taskController = require('../controllers/taskController');
const { authenticateUser, authorizeUser } = require('../middleware');

const router = express.Router();

// Task routes
router.post('/', authenticateUser, taskController.createTask);
router.get('/:id', authenticateUser, authorizeUser, taskController.getTask);
router.put('/:id', authenticateUser, authorizeUser, taskController.updateTask);
router.delete('/:id', authenticateUser, authorizeUser, taskController.deleteTask);

module.exports = router;
