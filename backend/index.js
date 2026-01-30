// backend/index.js
const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Ça lance la connexion au dessus

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Test Infrastructure OK : Backend actif gg wl mohamed');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
