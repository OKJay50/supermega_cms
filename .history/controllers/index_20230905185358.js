const express = require('express');
const router = express.Router();

// Define routes for your application here
router.get('/', (req, res) => {
  res.render('../views/home.handlebars');
});

router.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Export the router to use it in other parts of your application
module.exports = router;
