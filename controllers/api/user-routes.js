const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// / get all users http://localhost:3001/api/user/
router.get('/', async (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get user and associated items by id  http://localhost:3001/user/:id/
router.get('/:id', async (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Post,
      },
      {
        model: Comment,
        include: {
          model: Post,
        }
      },

    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//Create User http://localhost:3001/api/user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      user_name: req.body.user_name,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.user_name = dbUserData.user_name;
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// POST / (login User) http://localhost:3001/api/user/login
router.post('/login', async (req, res) => {
  console.log("data: ", req.body)
  try {
    const dbUserData = await User.findOne({
      where: {
        user_name: req.body.user_name,

      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;


      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// log out route
// POST http://localhost:3001/api/user/logout
router.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res
        .status(204)
        .json({ message: 'You are now logged out!' })
        .end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;
