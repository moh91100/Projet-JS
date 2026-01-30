const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('le backend node.js marche gg wl a mohamed le boss');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
