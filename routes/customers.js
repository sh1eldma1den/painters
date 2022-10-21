const { response } = require('express');
const express = require('express');
const router = express.Router();
const validation = require('../checks/validation');
const customersController = require('../controllers/customers');
const authentication = require('../controllers/authentication');

router.get('/', customersController.getAll);
router.get('/:id', customersController.getOne);
router.post('/', validation.saveCustomer, authentication.authenticationRule, customersController.addOne);
router.put('/:id', validation.saveCustomer, authentication.authenticationRule, customersController.updateOne);
router.delete('/:id', authentication.authenticationRule, customersController.deleteOne);

module.exports = router;
