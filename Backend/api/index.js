const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('L\'API est en vie !');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});