const express = require('express');
const app = express();



// Routes
require('./app/routes/route.users')(app);

app.use(express.json());


const categoriesRoute = require('./app/routes/route.categories');
app.use('/categories', categoriesRoute);


app.listen(3000, () => { console.log('Server is running on port 3000') });