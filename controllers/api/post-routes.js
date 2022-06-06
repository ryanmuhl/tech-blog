const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// / get all posts http://localhost:3001/api/post/
router.get('/', async (req, res) => {
    Post.findAll({
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // get user and associated items by id  http://localhost:3001/api/post/:id/
router.get('/:id', async (req, res) => {
    Post.findAll({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      },
      include: [{
        model: User,
        attributes: ["user_name"],
    },
    {
        model: Comment,
        attributes: ["id", "blog_comments", "post_id", "user_id", "created_at"],
        include: {
            model: User,
            attributes: ["user_name"],
        },
    },
],
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