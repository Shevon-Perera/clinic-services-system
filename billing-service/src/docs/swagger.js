const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Billing Service API',
      version: '1.0.0',
      description: 'API documentation for the Billing Service in the clinic services domain'
    },
    servers: [
      {
        url: 'http://localhost:5005'
      }
    ]
  },
  apis: ['./src/routes/*.js']
};

module.exports = swaggerJSDoc(options);
