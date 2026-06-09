const express = require('express');
const app = express();

app.get('/health', (req, res) => {//test7
  res.json({ status: 'ok', version: process.env.VERSION || 'dev' });
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('API running on port 3000'));
}