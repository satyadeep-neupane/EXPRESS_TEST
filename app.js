const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

app.set('layout', __dirname+'/layouts/index');
app.set('view engine', 'ejs');
app.set('views', 'views');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true, useUnifiedTopology: true });

const logger = require('./app/middleware/logger');
const categoryRoute = require('./app/routes/route.category');
const authorRoute = require('./app/routes/route.author');
const bookRoute = require('./app/routes/route.book');

app.use(logger)
app.use('/api/category', categoryRoute);
app.use('/api/author', authorRoute);
app.use('/api/book', bookRoute);

app.get('/category', (req, res) => {
    res.render('category/index');
});

app.get('/author', (req, res) => {
    res.render('author/index', {
        authors: [
            {
                "_id": "63624d1cf74f879a24a7d7f8",
                "name": "Ram Khanal",
                "image": "https://fakeimg.pl/300/",
                "createdAt": "2022-11-02T10:57:32.328Z",
                "updatedAt": "2022-11-02T10:57:32.328Z",
                "__v": 0
            },
            {
                "_id": "6362526437907062056a84e7",
                "name": "Hari Sharma",
                "image": "https://fakeimg.pl/300/",
                "createdAt": "2022-11-02T11:20:04.422Z",
                "updatedAt": "2022-11-02T11:20:04.422Z",
                "__v": 0
            }
        ]
    });
});


app.listen(process.env.PORT, () => { console.log(`Server is running on port ${process.env.PORT}`) });
