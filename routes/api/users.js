const User = require('../../models/User');
const auth = require('../../middleware/auth');

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

// @route   Post api/users
// @desc    Make Admin. Activate to create new Admin
// @access  Public
// router.post('/', [
//   check('username', 'Username is required').not().isEmpty(),
//   check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { username, password } = req.body;
//     try {
//       let user = await User.findOne({ username });

//       if (user) {
//         return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
//       }

//       user = new User({
//         username,
//         password,
//       });

//       // Encrypt password
//       const salt = await bcrypt.genSalt(10);

//       user.password = await bcrypt.hash(password, salt);

//       await user.save();

//       const payload = {
//         user: {
//           id: user.id,
//         },
//       };

//       jwt.sign(payload, process.env.JWTSECRET, { expiresIn: '1h' }, (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       });
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server error');
//     }
//   },
// ]);

// @route   PUT api/users
// @desc    Change Admin Password
// @access  Private
router.put('/', auth, [
  check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { password } = req.body;
    const postItem = {};
    // Encrypt password
    const salt = await bcrypt.genSalt(10);

    postItem.password = await bcrypt.hash(password, salt);
    try {
      let user = await User.findOneAndUpdate({ username: 'Admin' }, postItem);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, process.env.JWTSECRET, { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
]);

module.exports = router;
