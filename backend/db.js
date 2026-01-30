// backend/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect((err) => {
  if (err) {
    console.error(' Erreur de connexion à la DB', err);
  } else {
    console.log('Connecté à PostgreSQL avec succès !');
  }
});

module.exports = pool;
