const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/customers', require('./customers'));
router.use('/class_info', require('./class_info'));

module.exports = router;