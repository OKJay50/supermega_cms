const express = require('express');
const app = express()
const comment = require('./comment-routes');
const post = require('./post-routes');
const user = require('./user-routes');

app.use ("/comment",comment)
module.exports = router
