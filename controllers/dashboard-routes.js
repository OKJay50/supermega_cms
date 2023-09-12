const express = require('express');
const router = express.Router();
const { Post, User } = require('./models'); // Adjust the path as needed

// Dashboard route to display user's posts
router.get('/', async (req, res) => {
  try {
    // Get the logged-in user's posts
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'created_at'],
        },
      ],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      user,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
