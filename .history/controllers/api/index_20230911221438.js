const express = require('express');
const router = express.Router();
const comment = require('./comment-routes');
const post = require('./post-routes');
const user = require('./user-routes');

router.use ("/comment",comment)
module.exports = router
