const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(DATABASE_URL);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true, useUnifiedTopology: true });



const logger = require('./app/middleware/logger');
const categoriesRoute = require('./app/routes/route.categories');
const userRoute = require('./app/routes/route.user');
const bookRoute = require('./app/routes/route.book');

app.use(logger)
app.use('/categories', categoriesRoute);
app.use('/users', userRoute);
app.use('/books', bookRoute);


app.listen(3000, () => { console.log('Server is running on port 3000') });
