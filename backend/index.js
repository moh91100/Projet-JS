const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs'); // Outil pour masquer les mots de passe
const pool = require('./db'); // Ta connexion à la DB

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Permet de lire les JSON envoyés par le Frontend

// --- 1. La partie "Maintenance" (Crée la table si besoin) ---
const initDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,   
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("✅ Table 'users' prête !");
  } catch (err) {
    console.error("❌ Erreur table :", err);
  }
};
initDb();

// --- 2. TON VRAI TRAVAIL (Les Routes) ---

// Route pour s'inscrire
// Le Frontend va envoyer une requête POST ici : http://localhost:3000/register
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body; // On récupère ce que l'utilisateur a tapé

    // Étape A : Sécurité (Hachage)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Étape B : Insertion en Base de Données
    const newUser = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
      [email, hashedPassword]
    );

    // Étape C : Réponse au Frontend
    res.json(newUser.rows[0]);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Erreur serveur (Email déjà pris ?)");
  }
});

// Juste pour vérifier que le serveur tourne
app.get('/', (req, res) => {
  res.send('API Backend en ligne 🚀');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});