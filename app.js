const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors');

const sequelize = require('./util/database.js');

const app = express();

app.use(cors());

const postRoutes = require('./routes/post.js');

app.use(bodyParser.json({ extended: false }));

app.use('/user', postRoutes);

// app.post('/add-user', (req, res, next) => {
//     res.send('hello1');
// });

// app.get('/add-user', (req, res, next) => {
//     res.send('hello2');
// });

app.use('/', (req, res, next) => {
    res.send('hello');
});

sequelize.sync()
.then()
.catch(err => console.log(err));



app.listen(3000);
