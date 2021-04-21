const express = require('express');
const router = express.Router();
const isAuth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
require('dotenv').config();
const {MONGO_URI, JWT_SECRET} = require('../../config/key')

const User = require('../../models/User');
const userControlles = require('../../controllers/userControlles');


router.get('/', isAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
router.post('/', [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password is required').exists(),
  ],userControlles.login
);

module.exports = router;
