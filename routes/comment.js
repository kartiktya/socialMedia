const express = require('express');

const postController = require('../controllers/comment.js');

const router = express.Router();

router.post('/add-comment/:postId', postController.saveComment);

router.get('/get-comments/:postId', postController.getComments);

module.exports = router;