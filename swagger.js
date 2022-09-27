const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts',
        description: 'Attempt to gather and display contacts',
    },
    host: 'cse341-770w.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';

const endpointsFiles = ['./routes/index.js'];

// swaggerAutogen(outputFile, endpointsFiles, doc);

swaggerAutogen(outputFile, endpointsFiles,doc).then(async () => {
    await import('./server.js');
});