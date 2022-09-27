const express = require('express');
const router = express.Router();
const postModController = require('../controllers/post_modern');

router.get('/', postModController.getAll);
router.get('/:id', postModController.getOne);
router.post('/', postModController.addOne);
router.put('/:id', postModController.updateOne);
router.delete('/:id', postModController.deleteOne);

module.exports = router;