const express = require('express');
const cors = require('cors');
const pg = require('pg'); 
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const client = new pg.Client({
  connectionString: 'postgres://lmj1234:lmj1234@db:5432/db_postgresql'
});

client.connect()
  .then(() => {
    console.log("Connexion a la base de donnees reussie");
  })
  .catch((erreur) => {
    console.log("Erreur lors de la connexion a la base de donnees");
    console.log(erreur);
  });

app.post('/inscription', async (req, res) => {
    const emailRecu = req.body.email;
    const passwordRecu = req.body.password;
    console.log("J'ai recu une demande pour : " + emailRecu);
    const requeteSQL = 'INSERT INTO users (email, password) VALUES ($1, $2)';
    const valeurs = [emailRecu, passwordRecu];  
    try {
        await client.query(requeteSQL, valeurs);
        res.send("Utilisateur inscrit avec succes.");
        console.log("Utilisateur ajoute en base de donnees.");
    } catch (erreur) {
        console.log("Erreur lors de l'inscription");
        console.log(erreur);
        res.status(500).send("Erreur Impossible d'inscrire cet utilisateur.");
    }
});

app.listen(port, () => {
  console.log("Le serveur est demarre sur le port " + port);
});

