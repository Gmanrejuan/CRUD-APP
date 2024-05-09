// services/authService.js

const bcrypt = require('bcrypt');
const jwtUtils = require('../utils/jwtUtils');
const userService = require('./userService');

// User registration service
exports.registerUser = async (userData) => {
  try {
    // Check if the email is already registered
    const existingUser = await userService.getUserByEmail(userData.email);
    if (existingUser) {
      throw new Error('Email is already registered');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create the user in the database
    const newUser = await userService.createUser({
      username: userData.username,
      email: userData.email,
      password: hashedPassword,
      role: userData.role || 'user', // Default role is 'user'
    });

    return newUser;
  } catch (error) {
    throw error;
  }
};

// User login service
exports.loginUser = async (userData) => {
  try {
    // Check if the user exists
    const user = await userService.getUserByEmail(userData.email);
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(userData.password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid email or password');
    }

    // Generate JWT token
    const token = jwtUtils.generateToken({ userId: user.id });

    return token;
  } catch (error) {
    throw error;
  }
};
