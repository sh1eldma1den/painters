const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Painters'Corner",
        description: 'Classes, supplies, and customer information.',
    },
    host: 'painters-ui6d.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';

const endpointsFiles = ['./routes/index.js'];

// swaggerAutogen(outputFile, endpointsFiles, doc);

swaggerAutogen(outputFile, endpointsFiles,doc).then(async () => {
    await import('./server.js');
});