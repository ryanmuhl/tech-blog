const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// / get all posts http://localhost:3001/api/post/
router.get('/', async (req, res) => {
    Post.findAll({
        attributes: ['id', 'content', 'title', 'created_at'],
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
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  //Get post by id http://localhost:3001/api/post/id
router.get('/:id', async (req, res) => {
    Item.findOne({
  
      where: {
        id: req.params.id
      },
     
      include: [
        {
          model: User,
          attributes: ['user_name']
        },
        {
          model: Comment,
          attributes: ['id', 'blog_comments', 'post_id', 'user_id', 'created_at' ],
        include: { 
            model: User,
            attributes: ['user_name']
        }
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//add post  http://localhost:3001/api/post/
  router.post('/', withAuth, async(req, res) => {
    req.body.user_id=req.session.userId;
    Post.create(req.body)
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });