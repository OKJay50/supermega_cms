const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User   = require('../models/User.js'); // Adjust the path as needed
const bcrypt = require('bcrypt');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // Change this if you use a different field for username
    },
    async (email, password, done) => {
      try {
        // Find a user with the provided email
        const user = await User.findOne({ where: { email } });

        // If no user with the provided email is found, return an error
        if (!user) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }

        // Check if the provided password matches the hashed password in the database
        const validPassword = await bcrypt.compare(password, user.password);

        // If the password is invalid, return an error
        if (!validPassword) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }

        // If the email and password are correct, return the user
        return done(null, user);
      } catch (err) {
        console.error(err);
        return done(err);
      }
    }
  )
);

// Serialize user for session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    console.error(err);
    done(err);
  }
});

module.exports = passport;
