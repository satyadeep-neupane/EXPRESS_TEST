const router = require('express').Router();
const authorController = require('../controller/authorController');

router.route('/')
    .get(authorController.list)
    .post(authorController.store)

router.delete(authorController.destroy);

module.exports = router;