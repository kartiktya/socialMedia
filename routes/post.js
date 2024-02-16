const express = require('express');

const postController = require('../controllers/post.js');


const router  = express.Router();

//const userController = require('../controllers/user.js');


router.post('/add-post', postController.savePost);

router.get('/get-posts', postController.getPosts);

//router.delete('/delete-user/:userId',userController.deleteUser);

//router.get('/', userController.allUsers);

module.exports = router;