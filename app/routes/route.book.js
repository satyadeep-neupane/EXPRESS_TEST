const bookController = require('../controller/bookController');

const route = require('express').Router();

route.get('/', bookController.listBooks)
    .post('/', bookController.createBook)
    .delete('/:id', bookController.deleteBook);

module.exports = route;