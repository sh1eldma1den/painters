const { response } = require('express');
const express = require('express');
const router = express.Router();
const middleware = require('../checks/middleware');
const schemas = require('../checks/schemas');
const classController = require('../controllers/class_info');

router.get('/', classController.getClasses);
router.get('/:id', middleware(schemas.classById), classController.getClass);
router.post('/', middleware(schemas.classPostPut),classController.addClass);
router.put('/:id', middleware(schemas.classById), middleware(schemas.classPostPut), classController.updateClass);
router.delete('/:id', middleware(schemas.classById), classController.deleteClass);

module.exports = router;