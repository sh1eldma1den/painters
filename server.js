const createError = require('http-errors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');
const [db, objectId] = require('./db/connections')(
    process.env.MONGODB_URI,
    MongoClient);
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const url = require('url');
const cors = require('cors');
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use((req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    // res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control--Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log('Connected to the DB and lisening on {$port}');
    }
});

const {validationResult, check} = require('express-validator');
const {
    createCustomerValidation,
    createClassValidation,
    viewOneCustomerValidation,
    viewOneClassValidation,
    deleteOneCustomerValidation,
    deleteOneClassValidation
}  = require('./checks/validation.js')(check);

const dependencies = {
    db: db,
    url: url,
    objectId: objectId,
    validationResult: validationResult,
    createCustomerValidation: createCustomerValidation,
    createClassValidation: createClassValidation,
    viewOneCustomerValidation: viewOneCustomerValidation,
    viewOneClassValidation: viewOneClassValidation,
    deleteOneCustomerValidation: deleteOneCustomerValidation,
    deleteOneClassValidation: deleteOneClassValidation
};

require('./routes')(app, dependencies);












