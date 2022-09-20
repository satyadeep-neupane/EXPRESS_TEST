const route = require('express').Router();
const categoryController = require('../controller/categoryController');

route.get('/', categoryController.listCategories)
    .post('/', categoryController.createCategory)
    .delete('/:id', categoryController.deleteCategory);

module.exports = route;