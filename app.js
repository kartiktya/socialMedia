const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors');

const sequelize = require('./util/database.js');

const Post = require('./models/post.js');
const Comment = require('./models/comment.js');

const app = express();

app.use(cors());

const postRoutes = require('./routes/post.js');
const commentRoutes = require('./routes/comment.js');

app.use(bodyParser.json({ extended: false }));

app.use('/user', postRoutes);
app.use('/user',commentRoutes);


app.use('/', (req, res, next) => {
    //res.send('hello');
});

Post.hasMany(Comment);



sequelize
//.sync({ force: true})
.sync()
.then()
.catch(err => console.log(err));



app.listen(3000);
