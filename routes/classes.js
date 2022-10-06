const { response } = require('express');
const express = require('express');
const router = express.Router();
const classesController = require('../controllers/classes');

router.get('/', classesController.getAll);
router.get('/:id', classesController.getOne);
router.post('/', classesController.addOne);
router.put('/:id', classesController.updateOne);
router.delete('/:id', classesController.deleteOne);

module.exports = router;