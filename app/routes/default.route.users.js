const userController = require('../controller/userController');

module.exports = (app) => {
    app.get('/users', userController.listUsers);
    app.post('/users', userController.createUser);
    app.delete('/users/:id', userController.deleteUser);
}