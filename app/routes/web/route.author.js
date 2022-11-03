const router = require('express').Router();
const authorController = require('../../controller/web/authorController');

router.route('/')
    .get(authorController.list)
    .post(authorController.store)

router.get('/create', authorController.create)
.get('/delete/:id', authorController.destroy)

router.delete(authorController.destroy);

module.exports = router;