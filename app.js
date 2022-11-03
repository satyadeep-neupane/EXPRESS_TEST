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
// api route
const categoryApiRoute = require('./app/routes/api/route.category');
const authorApiRoute = require('./app/routes/api/route.author');
const bookApiRoute = require('./app/routes/api/route.book');

//web route
const authorRoute = require('./app/routes/web/route.author');


app.use(logger)
app.use('/api/category', categoryApiRoute);
app.use('/api/author', authorApiRoute);
app.use('/api/book', bookApiRoute);

app.get('/category', (req, res) => {
    res.render('category/index');
});
app.use('/author', authorRoute);

app.listen(process.env.PORT, () => { console.log(`Server is running on port ${process.env.PORT}`) });
