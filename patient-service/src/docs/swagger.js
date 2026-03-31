const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Patient Service API',
      version: '1.0.0',
      description: 'API documentation for the Patient Service in the clinic services domain'
    },
    servers: [
      {
        url: 'http://localhost:5001'
      }
    ]
  },
  apis: ['./src/routes/*.js']
};

module.exports = swaggerJSDoc(options);
