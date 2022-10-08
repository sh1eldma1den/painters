const { response } = require('express');
const express = require('express');
const router = express.Router();
const validation = require('../checks/validation');
const customersController = require('../controllers/customers');

router.get('/', customersController.getAll);
router.get('/:id', customersController.getOne);
router.post('/', validation.saveCustomer, customersController.addOne);
router.put('/:id', validation.saveCustomer, customersController.updateOne);
router.delete('/:id', customersController.deleteOne);

module.exports = router;
