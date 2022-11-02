const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

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
app.use('/category', categoryRoute);
app.use('/author', authorRoute);
app.use('/book', bookRoute);


app.listen(process.env.PORT, () => { console.log(`Server is running on port ${process.env.PORT}`) });
