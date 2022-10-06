module.exports = (app, dependencies) => {

const { response } = require('express');
const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customers');
console.log('routes');
router.get('/', customersController.getAll);
router.get('/:id', customersController.getOne);
router.post('/', customersController.addOne);
router.put('/:id', customersController.updateOne);
router.delete('/:id', customersController.deleteOne);
};