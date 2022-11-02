const router = require('express').Router();
const bookController = require('../controller/bookController');

router.route('/')
    .get(bookController.list)
    .post(bookController.store);

router.delete('/:id', bookController.destroy);

module.exports = router;