const router = require("express").Router();
const { Comment, Post, User } = require("../models/");
const withAuth = require('../utils/auth');

// homepage  http://localhost:3001/
router.get("/", async (req, res) => {
    res.render("home", {
      loggedIn: req.session.loggedIn,
    });
    
  });

  module.exports = router;