const { response } = require('express');
const express = require('express');
const router = express.Router();
const classController = require('../controllers/class_info');

router.get('/', classController.getAll);
router.get('/:id', classController.getOne);
router.post('/', classController.addOne);
router.put('/:id', classController.updateOne);
router.delete('/:id', classController.deleteOne);

module.exports = router;