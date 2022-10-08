const validator = require('../checks/helpers');

const saveCustomer = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    address: 'required|string',
    email: 'required|email',
    subscribed: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveClass = (req, res, next) => {
    const validationRule = {
      className: 'required|string',
      classDate: 'required|string',
      classTime: 'required|string',
      classLevel: 'required|email',
      suppliesIncluded: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed',
          data: err
        });
      } else {
        next();
      }
    });
  };

module.exports = {
  saveCustomer,
  saveClass
};