const express = require('express');
const router = express.Router();
const { User } = require('../../models'); // Adjust the path as needed
const bcrypt = require('bcrypt');

// Create a new user
router.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password
    const newUser = await User.create({
      username: req.body.username, // Assuming username is sent in the request body
      email: req.body.email, // Assuming email is sent in the request body
      password: hashedPassword, // Store the hashed password
    });

    res.status(200).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Other user-related routes can be defined here

module.exports = router;
