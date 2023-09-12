const express = require('express');
const router = express.Router();
const { Comment } = require('../../models'); // Adjust the path as needed

// Create a new comment
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      text: req.body.text, // Assuming text is sent in the request body
      user_id: req.session.user_id, // Assuming user_id is set in the session
      post_id: req.body.post_id, // Assuming post_id is sent in the request body
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Other comment-related routes can be defined here

module.exports = router;
