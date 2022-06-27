const router = require("express").Router();
const { Comment, Post, User } = require("../models/");
const withAuth = require('../utils/auth');

// homepage  http://localhost:3001/
router.get("/", async (req, res) => {
    res.render("home", {
      loggedIn: req.session.loggedIn,
    });
    
  });

  // Login route /Login  http://localhost:3001/login/
router.get('/login', async (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    res.render('signup');
});

  module.exports = router;