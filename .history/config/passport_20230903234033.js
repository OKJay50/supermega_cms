const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models'); // Make sure the path is correct

const User = db.User; // Assuming your User model is correctly defined in models/User.js

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // Change to 'username' if needed
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        // Find a user with the provided email
        const user = await User.findOne({ where: { email } });

        // If no user found or password doesn't match, return an error
        if (!user || !user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect email or password' });
        }

        // If user and password match, return the user
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
