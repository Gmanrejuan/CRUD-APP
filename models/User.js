// models/User.js

const connection = require('../config/database');

class User {
  constructor(username, email, password, role) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  // Create a new user
  static async create(userData) {
    const { username, email, password, role } = userData;
    const sql = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
    const values = [username, email, password, role];
    
    return new Promise((resolve, reject) => {
      connection.query(sql, values, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve({ id: result.insertId, ...userData });
        }
      });
    });
  }

  // Retrieve a user by ID
  static async findById(userId) {
    const sql = 'SELECT * FROM users WHERE id = ?';
    
    return new Promise((resolve, reject) => {
      connection.query(sql, [userId], (error, results) => {
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

  // Update an existing user
  static async update(userId, userData) {
    const { username, email, password, role } = userData;
    const sql = 'UPDATE users SET username = ?, email = ?, password = ?, role = ? WHERE id = ?';
    const values = [username, email, password, role, userId];
    
    return new Promise((resolve, reject) => {
      connection.query(sql, values, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve({ id: userId, ...userData });
        }
      });
    });
  }

  // Delete a user
  static async delete(userId) {
    const sql = 'DELETE FROM users WHERE id = ?';
    
    return new Promise((resolve, reject) => {
      connection.query(sql, [userId], (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = User;
