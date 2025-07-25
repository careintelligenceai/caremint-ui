// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mint = require('./mint');
const care = require('./care');

app.get('/', (req, res) => {
  res.send('<h1>🚀 CAREMint Console Running</h1><p>Mint Tier: ' + mint.tier() + '</p><p>CARE Status: ' + care.status() + '</p>');
});

app.listen(port, () => {
  console.log(`CAREMint app running on port ${port}`);
});
