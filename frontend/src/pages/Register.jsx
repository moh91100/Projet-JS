// frontend/src/pages/Register.jsx
import { useState } from 'react';

function Register() {
  // On crée une sorte de conteneur pour stocker ce que l'utilisateur tape
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("");

  // Lorsque l'on écrit dans le champ l'évènement se produit
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Cette fonction se lance quand on clique sur S'inscrire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche la page de se recharger par précaution
    setMessage("Envoi en cours...");

    try {
      // On envoie les infos a Louis
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage(" Compte créé avec succès !");
      } else {
        setMessage(" Erreur lors de l'inscription.");
      }
    } catch (error) {
      setMessage(" Impossible de contacter le serveur.");
    }
  };


  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', display: 'inline-block' }}>
        <h2>Créer un compte</h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          <input 
            type="email" 
            name="email"
            placeholder="Votre Email"
            value={formData.email}
            onChange={handleChange}
            required 
            style={{ padding: '8px' }}
          />

          <input 
            type="password" 
            name="password"
            placeholder="Votre Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required 
            style={{ padding: '8px' }}
          />

          <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
            S'inscrire
          </button>

        </form>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default Register;