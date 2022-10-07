const Joi = require('joi');

const schemas = {
    customerById: Joi.object().keys({
        userId: Joi.string().alphanum().required()
    }),
    customerPostPut: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        address: Joi.string().required(),
        email: Joi.string().email({minDomainSegments: 2}).required(),
        subscribed: Joi.string().required(),
    }),
    classById: Joi.object().keys({
        userId: Joi.string().alphanum().required()
    }),
    classPostPut: Joi.object().keys({
        className: Joi.string().required(),
        classDate: Joi.string().required(),
        classTime: Joi.string().required(),
        classLevel: Joi.string().required(),
        suppliesIncluded: Joi.string().required()
    })
};

module.exports = schemas;