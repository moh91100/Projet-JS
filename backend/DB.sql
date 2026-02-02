-- 1. NETTOYAGE (On supprime d'abord les tables existantes)
-- On supprime 'documents' en premier car elle dépend de 'users'
DROP TABLE IF EXISTS documents;
DROP TABLE IF EXISTS users;

-- 2. CRÉATION TABLE UTILISATEURS
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. CRÉATION TABLE DOCUMENTS (Le cœur du projet)
CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, -- Si on supprime le user, ses docs disparaissent
    type VARCHAR(50) NOT NULL, -- Sera 'cv', 'letter' ou 'interview'
    input_data JSON,          -- Stocke toutes les infos du formulaire en vrac (JSON)
    output_text TEXT,          -- Le résultat généré par l'IA
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);