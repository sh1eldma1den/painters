const express = require('express');
const router = require('express').Router();

router.use('/', require('./swagger'));
router.use('/', require('./customers'));
// router.use('/', require('./classes'));
router.use('/',
    (docData = (req,res) => {
        let docData = {
            documentationURL:'https://https://github.com/sh1eldma1den/painters/tree/main/api-docs',
        };
        res.send(docData);
    })
);
module.exports = router;