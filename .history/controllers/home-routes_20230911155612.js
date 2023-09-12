const express = require('express');
const router = express.Router();
const { Post, User, Comment } = require("../models"); // Adjust the path as needed

// Home route to display existing blog posts
router.get('/', async (req, res) => {
  try {
    // Fetch all existing blog posts with associated user and comments
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['text', 'created_at', 'user_id'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('home', {
      posts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
