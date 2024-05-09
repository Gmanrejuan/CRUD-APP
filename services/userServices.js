// services/userService.js

const User = require('../models/User');

// Create user service
exports.createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw error;
  }
};

// Get user by ID service
exports.getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw error;
  }
};

// Update user service
exports.updateUser = async (userId, userData) => {
  try {
    const updatedUser = await User.update(userId, userData);
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

// Delete user service
exports.deleteUser = async (userId) => {
  try {
    await User.delete(userId);
  } catch (error) {
    throw error;
  }
};
