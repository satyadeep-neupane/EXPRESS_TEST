const route = require('express').Router();
const userController = require('../controller/userController');

route.get('/', userController.listUsers)
    .post('/', userController.createUser)
    .delete('/:id', userController.deleteUser);

module.exports = route;