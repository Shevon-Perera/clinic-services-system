const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
const doctorRoutes = require('./routes/doctorsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/doctors', doctorRoutes);

app.get('/', (req, res) => {
  res.send('Doctor Service is running');
});

module.exports = app;