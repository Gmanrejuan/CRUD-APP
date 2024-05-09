// utils/jwtUtils.js

const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Replace with your secret key

// Generate JWT token
exports.generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

// Verify JWT token
exports.verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
