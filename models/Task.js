// models/Task.js

const connection = require('../config/database');

class Task {
  constructor(title, description, status, userId) {
    this.title = title;
    this.description = description;
    this.status = status;
    this.userId = userId;
  }

  // Create a new task
  static async create(taskData) {
    const { title, description, status, userId } = taskData;
    const sql = 'INSERT INTO tasks (title, description, status, userId) VALUES (?, ?, ?, ?)';
    const values = [title, description, status, userId];
    
    return new Promise((resolve, reject) => {
      connection.query(sql, values, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve({ id: result.insertId, ...taskData });
        }
      });
    });
  }

  // Retrieve a task by ID
  static async findById(taskId) {
    const sql = 'SELECT * FROM tasks WHERE id = ?';
    
    return new Promise((resolve, reject) => {
      connection.query(sql, [taskId], (error, results) => {
        if (error) {
          reject(error);
        } else if (results.length === 0) {
          resolve(null);
        } else {
          resolve(results[0]);
        }
      });
    });
  }

  // Update an existing task
  static async update(taskId, taskData) {
    const { title, description, status } = taskData;
    const sql = 'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?';
    const values = [title, description, status, taskId];
    
    return new Promise((resolve, reject) => {
      connection.query(sql, values, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({ id: taskId, ...taskData });
        }
      });
    });
  }

  // Delete a task
  static async delete(taskId) {
    const sql = 'DELETE FROM tasks WHERE id = ?';
    
    return new Promise((resolve, reject) => {
      connection.query(sql, [taskId], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = Task;
