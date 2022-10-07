const { response } = require('express');
const express = require('express');
const router = express.Router();
const middleware = require('../checks/middleware');
const schemas = require('../checks/schemas');
const customersController = require('../controllers/customers');

router.get('/', customersController.getAll);
router.get('/:id', middleware(schemas.customerById), customersController.getOne);
router.post('/', middleware(schemas.customerPostPut), customersController.addOne);
router.put('/:id', middleware(schemas.customerPostPut), customersController.updateOne);
router.delete('/:id', middleware(schemas.customerById), customersController.deleteOne);

module.exports = router;