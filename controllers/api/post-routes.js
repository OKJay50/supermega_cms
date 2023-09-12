const express = require('express');
const router = express.Router();
const { Post } = require('../../models'); // Adjust the path as needed

// Create a new post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title, // Assuming title is sent in the request body
      content: req.body.content, // Assuming content is sent in the request body
      user_id: req.session.user_id, // Assuming user_id is set in the session
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Other post-related routes can be defined here

module.exports = router;
