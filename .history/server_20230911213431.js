const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');

// Create an Express.js app
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js as the view engine
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Session middleware for managing user sessions
app.use(
  session({
    secret: 'your_secret_key_here',
    resave: false,
    saveUninitialized: true,
  })
);

// Define routes
app.use(require('./controllers')); // Assuming your routes are in a separate "controllers" directory

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
