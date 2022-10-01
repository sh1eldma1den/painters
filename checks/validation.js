module.exports = (check) => {
    return{
        createCustomerValidation: [
            check('firstName', 'First name is required.').not().isEmpty(),
            check('lastName', 'Last name is required.').not().isEmpty(),
            check('firstName', 'First name is required').not().isEmpty(),
            check('address', 'Address is required').not().isEmpty(),
            check('email', 'Email is required').not().isEmpty()
        ],
        createClassValidation: [
            check('className', 'Class name is required').not().isEmpty(),
            check('classDate', 'Class date is required').not().isEmpty(),
            check('classTime', 'Class time is required').not().isEmpty(),
            check('classLevel', 'Class level is required').not().isEmpty(),
            check('suppliesIncluded', 'Supplies included is required').not().isEmpty()
        ],
        viewOneCustomerValidation: [
            check('customer_info_id', 'ID is invalid.').isLength({ min: 24, max: 24 })
        ],
        viewOneClassValidation: [
            check('class_info_id', 'ID is invalid.').isLength({ min: 24, max: 24 })
        ],
        deleteOneCustomerValidation: [
            check('customer_info_id', 'ID is invalid.').isLength({ min: 24, max: 24 })
        ],
        deleteOneClassValidation: [
            check('class_info_id', 'ID is invalid.').isLength({ min: 24, max: 24 })
        ]
    };
};