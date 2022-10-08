const { response } = require('express');
const express = require('express');
const router = express.Router();
const validation = require('../checks/validation');
const classController = require('../controllers/class_info');

router.get('/', classController.getClasses);
router.get('/:id', classController.getClass);
router.post('/', validation.saveClass, classController.addClass);
router.put('/:id', validation.saveClass, classController.updateClass);
router.delete('/:id', classController.deleteClass);

module.exports = router;
