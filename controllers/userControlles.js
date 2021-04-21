const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
require('dotenv').config();

const User = require('../models/User');


module.exports = {
    signup: async(req, res, next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      if (await User.findOne({ email })) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }
      const user = new User({
        name,
        email,
        avatar: gravatar.url(email, { s: '200', r: 'pg', d: 'mm' }),
        password: await bcrypt.hash(password, await bcrypt.genSalt(10)),
      });

      await user.save();
      jwt.sign(
        {
          user: {
            id: user.id,
          },
        },
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },

  inputUser : async(req, res) => {
    try {
        const regex = new RegExp(req.params.input, 'i');
        const users = await User.find({
          email: regex,
        }).select('-password');
    
        res.json(users.filter((user) => user.id !== req.user.id));
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
  },
  login: async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const { email, password } = req.body;
    
        try {
          // See if user exists
          let user = await User.findOne({ email });
          if (!user) {
            return res.status(400).json({
              errors: [{ msg: 'Invalid credentials' }],
            });
          }
    
          // Check for email and password match
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(400).json({
              errors: [{ msg: 'Invalid credentials' }],
            });
          }
    
          // Return jsonwebtoken
          jwt.sign(
            {
              user: {
                id: user.id,
              },
            },
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
              if (err) throw err;
              res.json({ token });
            }
          );
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server error');
        }
      }
}