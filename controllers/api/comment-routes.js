const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//get all comments http://localhost:3001/api/comment/
router.get("/", (req, res) => {
    Comment.findAll()
        .then((dbCommentData) => res.json(dbCommentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Add comment http://localhost:3001/api/comment/
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create(req.body)
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});


module.exports = router;