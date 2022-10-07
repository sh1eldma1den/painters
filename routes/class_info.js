const { response } = require('express');
const express = require('express');
const router = express.Router();
const classController = require('../controllers/class_info');

router.get('/', classController.getClasses);
router.get('/:id', classController.getClass);
router.post('/', classController.addClass);
router.put('/:id', classController.updateClass);
router.delete('/:id', classController.deleteClass);

module.exports = router;