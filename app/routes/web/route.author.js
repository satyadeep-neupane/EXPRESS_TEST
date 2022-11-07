const router = require('express').Router();
const authorController = require('../../controller/web/authorController');

router.route('/')
    .get(authorController.index)
    .post(authorController.store)

router.get('/create', authorController.create)
.get('/delete/:id', authorController.destroy)
.get('/list', authorController.list)

router.delete(authorController.destroy);

module.exports = router;