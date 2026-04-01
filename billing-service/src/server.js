require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log('Billing Service running on port ' + PORT);
});
