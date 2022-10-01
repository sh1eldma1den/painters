module.exports = (app, dependencies) => {

const express = require('express');
const router = express.Router();
const classesController = require('../controllers/classes')(request, response, dependencies);

router.get('/', (request, response) => {classesController.getAll});
router.get('/:id', dependencies.viewOneClassValidation, (request, response) => {classesController.getOne});
router.post('/', dependencies.createClassValidation,(request, response) => {classesController.addOne});
router.put('/:id', dependencies.createClassValidation, (request, response) => {classesController.updateOne});
router.delete('/:id', dependencies.deleteOneClassValidation, (request, response) => {classesController.deleteOne});

};