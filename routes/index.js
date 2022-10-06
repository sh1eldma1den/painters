const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/customers', require('./customers'));
// router.use('/', require('./classes'));
// router.use('/',
//     (docData = (req,res) => {
//         let docData = {
//             documentationURL:'https://github.com/sh1eldma1den/painters/tree/main/api-docs',
//         };
//         res.send(docData);
//     })
// );
module.exports = router;