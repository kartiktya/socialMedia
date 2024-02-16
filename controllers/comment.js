const Comment = require('../models/comment.js');
const Post = require('../models/post.js');

exports.saveComment = async (req, res, next) => {

    
        const postId = req.params.postId;
        const comment = req.body.comment;
        
        const data = await Comment.create({ 
            comment: comment,
            postId: postId
        });
        res.status(201).send({ newCommentDetail: data});
        

        
        
        // Post.findByPk(postId)
        // .then(post => {
        //     console.log(postId);
        //     console.log(post);
        //     return post.addComment({ comment: comment});
        // })
        // .then(result => {
        //     res.status(201).send(result);
        // })

    };


    exports.getComments = (req, res, next) => {

          
              const postId = req.params.postId;
              console.log("11111111");
              
              Post.findByPk(postId)
              .then(post => {
                  console.log(postId);
                  console.log(post);
                  return post.getComments();
              })
              .then(result => {
                  res.status(200).send({ allComments : result});
              })
              .catch(err => console.log(err));
      
      
          };