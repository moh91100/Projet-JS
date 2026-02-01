// frontend/src/pages/Login.jsx
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Tentative de connexion avec : " + email);
    
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Connexion</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input 
            type="password" 
            placeholder="Mot de passe" 
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Se connecter</button>
        </form>
      </div>
    </div>
  );
}
 



const styles = {
  container: { display: 'flex', justifyContent: 'center', marginTop: '50px' },
  card: { padding: '20px', border: '1px solid #ddd', borderRadius: '8px', width: '300px' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px' },
  button: { padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }
};

export default Login;