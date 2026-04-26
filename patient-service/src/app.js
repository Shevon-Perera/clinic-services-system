require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
const patientsRoutes = require('./routes/patientsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Patient Service is running',
    docs: '/docs'
  });
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/patients', patientsRoutes);

app.use((err, req, res, next) => {
  const statusCode = Number(err?.statusCode ?? err?.status) || 500;

  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  res.status(statusCode).json({
    message: statusCode >= 500 ? 'Internal server error' : err.message || 'Request failed'
  });
});

module.exports = app;
