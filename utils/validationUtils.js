// utils/validationUtils.js

const { validationResult } = require('express-validator');

// Validate request inputs
exports.validateInputs = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
