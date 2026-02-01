// frontend/src/pages/Dashboard.jsx
function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Mon Espace IA </h1>
      <p>Bienvenue ! Que souhaitez-vous générer aujourd'hui ?</p>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <button style={styles.btn}> Créer un CV</button>
        <button style={styles.btn}> Lettre de Motivation</button>
        <button style={styles.btn}> Entraînement Entretien</button>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>Votre Historique</h3>
        <p style={{ color: 'gray' }}>Aucun document généré pour le moment.</p>
      </div>
    </div>
  );
}

const styles = {
  btn: { padding: '20px', fontSize: '16px', borderRadius: '10px', cursor: 'pointer', border: '1px solid #007bff' }
};

export default Dashboard;