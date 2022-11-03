const router = require('express').Router();
const categoryController = require('../../controller/api/categoryController');

router.route('/')
    .get(categoryController.list)
    .post(categoryController.store)

router.delete('/:id', categoryController.destroy);

module.exports = router;