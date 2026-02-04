import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState("accueil")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 
  const [metier, setMetier] = useState("")
  const [competences, setCompetences] = useState("")
  const [resultat, setResultat] = useState("")

  const envoyerInscription = async () => {
    try {
      const response = await fetch('http://localhost:5000/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }) 
      })
      
      if (response.ok) {
        alert("Succès : Compte créé pour " + email)
      } else {
        alert("Erreur lors de l'inscription")
      }
    } catch (err) {
      alert("Impossible de contacter le serveur (Vérifie qu'il est lancé !)")
    }
  }

  const envoyerAuServeur = async (e) => {
    e.preventDefault()
    setResultat("Connexion au serveur en cours...")
    
    try {
      const response = await fetch('http://localhost:5000/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ metier, competences })
      })
      const data = await response.json()
      setResultat(data.output_text)
    } catch (err) {
      setResultat("Erreur : Le serveur ne répond pas sur le port 5000.")
    }
  }

  return (
    <div className="centre-tout">
      
      <h1>Mon Application Job-IA</h1>
      
      <nav>
        <button onClick={() => setPage("accueil")}>Accueil</button> | 
        <button onClick={() => setPage("inscription")}>Inscription</button> | 
        <button onClick={() => setPage("cv")}>Créateur CV</button>
      </nav>

      <hr />

      {page === "accueil" && (
        <div>
          <h2>Bienvenue</h2>
          <p>Utilise le menu pour naviguer.</p>
        </div>
      )}

      {/* adresse mail */}
      {page === "inscription" && (
        <div>
          <h2>Créer un compte</h2>
          <input 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <br /><br />
          {/* mot de passe */}
          <input 
            type="password"
            placeholder="Mot de passe" 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <br /><br />
          <button onClick={envoyerInscription}>
            Valider l'inscription
          </button>
        </div>
      )}
      {                                       }

      {page === "cv" && (
        <div>
          <h2>Générateur de CV</h2>
          <form onSubmit={envoyerAuServeur}>
            <input 
              placeholder="Métier (ex: Développeur)" 
              onChange={(e) => setMetier(e.target.value)} 
            /><br/>
            <textarea 
              placeholder="Tes compétences..." 
              onChange={(e) => setCompetences(e.target.value)} 
            /><br/>
            <button type="submit">Générer avec l'IA</button>
          </form>
          
          {resultat && (
            <div className="result-box">
              <strong>Réponse du serveur :</strong>
              <p>{resultat}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App