module.exports = (app, dependencies) => {

const { response } = require('express');
const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customers')(request, response, dependencies);

router.get('/', (request, response) => {customersController.getAll});
router.get('/:id', dependencies.viewOneCustomerValidation, (request, response) => {customersController.getOne});
router.post('/', dependencies.createCustomerValidation, (request, response) => {customersController.addOne});
router.put('/:id', dependencies.createCustomerValidation, (request, response) => {customersController.updateOne});
router.delete('/:id', deleteOneCustomerValidation, (request, response) => {customersController.deleteOne});
};