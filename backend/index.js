const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Backend Node.js fonctionne avec Docker ! 🚀');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});
