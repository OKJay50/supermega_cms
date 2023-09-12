const express = require('express');
const router = express.Router();
const dashboard = require('./dashboard-routes')
const home = require('./home-routes')
const api = require('./api')
// Define routes for your application here
router.get('/', (req, res) => {
  res.render('login');
});

router.use('/dashboard', (req, res) => {
  res.render('dashboard');
});


router.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Export the router to use it in other parts of your application
module.exports = router;
