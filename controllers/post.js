const Post = require('../models/post.js');

exports.savePost = async (req, res, next) => {

try {

    // if(!req.body.phone) {
    //     //throw new Error('Phone number is mandatory');
    //     //res.sendStatus(400).json({ error: 'Id is missing'});
    //     console.log('Id is missing');
    // }

    const link = req.body.link;
    const description = req.body.description;
    //const email = req.body.email;
    
    // User.create({
    //     name: name,
    //     phone: phone,
    //     email: email
    // })

    const data = await Post.create( { link: link, description: description });
    res.status(201).json({newPostDetail: data});
    
    // .then(result => {
    //     console.log("CREATED USER");
    //     res.send("success");
    //     //res.redirect('/user/get-users');
    // })
    // .catch(err => console.log(err));

   } 
    catch(err) {
        res.status(500).json({error: err});
     }
};
    
exports.getPosts = async (req, res, next) => {

try {

    const posts = await Post.findAll();
    res.status(200).json({allPosts: posts});
} catch(err) {
    res.status(500).json({ error: err });
}
    // User.findAll()
    // .then(users => {
    //    //console.log('users='+users);
    //     res.send(users);
    // }) 
    // .catch(err => console.log(err));
}


// exports.deleteUser = (req, res, next) => {
//     const userId = req.params.userId;
//     console.log('id='+ userId);
//      User.findByPk(userId)
//     .then(user => {
//         return user.destroy();
//   })
//   .then(result => {
//     console.log('DESTROYED USER');
//     res.send('deleted')
    
//   })
//   .catch(err => console.log(err));
// }

// exports.deleteUser = async (req, res, next) => {
//     const userId = req.params.userId;
    
//     await User.destroy({ where: { id: userId } });
//     res.sendStatus(200);
  
    
//   }
  


