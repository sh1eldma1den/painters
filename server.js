const express = require('express');
const app = express();
app.use(express.json());

require('dotenv').config();

const port = process.env.PORT || 8000;

const cors = require('cors');
app.use(cors());

const mongodb = require('./db/connections');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const axios = require('axios');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control--Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const url = require('url');

app.use('/', require('./routes'));

// const {validationResult, check} = require('express-validator');
// const {
//     createCustomerValidation,
//     createClassValidation,
//     viewOneCustomerValidation,
//     viewOneClassValidation,
//     deleteOneCustomerValidation,
//     deleteOneClassValidation
// }  = require('./checks/validation.js')(check);

// const dependencies = {
//     db: db,
//     url: url,
//     objectId: objectId,
//     validationResult: validationResult,
//     createCustomerValidation: createCustomerValidation,
//     createClassValidation: createClassValidation,
//     viewOneCustomerValidation: viewOneCustomerValidation,
//     viewOneClassValidation: viewOneClassValidation,
//     deleteOneCustomerValidation: deleteOneCustomerValidation,
//     deleteOneClassValidation: deleteOneClassValidation
// };

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to the DB and lisening on ${port}`);
    }
});












