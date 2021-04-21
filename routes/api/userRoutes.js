const express = require('express');
const router = express.Router();
const isAuth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const userControlles = require('../../controllers/userControlles');

// Register user
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({
      min: 6,
    }),
  ],userControlles.signup
);
router.post('/login', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({
      min: 6,
    }),
  ],userControlles.login
);
router.get('/:input', isAuth, userControlles.inputUser);

module.exports = router;
