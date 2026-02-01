# Projet JS Louis, Mohamed, Jahed

Application de génération de CV, conteneurisée avec Docker.

##  Stack Technique

**Infrastructure**
* Docker & Docker Compose
* Node.js 

**Backend**
* Node.js / Express
* PostgreSQL (Base de données)
* Bcryptjs (Sécurité & Hachage)
* PG (Client PostgreSQL)

**Frontend**
* React.js
* Vite 

**Testing**
* Cypress 

##  Prérequis

* Docker Engine
* Docker Compose

##  Installation et Démarrage

1.  **Cloner le dépôt**
    ```
    git clone https://github.com/moh91100/Projet-JS.git
    cd Projet-JS
    ```

2.  **Lancer les conteneurs**
    ```
    docker compose up --build -d
    ```

3.  **Arrêter l'application**
    ```
    docker compose down
    ```

##  Configuration et Accès

### Endpoints
| Service | URL | Description |
| **Frontend** | `http://localhost:5173` | Interface Utilisateur |
| **API** | `http://localhost:3000` | Serveur Backend |
| **Base de données** | `localhost:5432` | Serveur PostgreSQL |

### Base de données (Défaut)
Les identifiants sont configurés dans le fichier `docker-compose.yml`.

* **Host** : `localhost`
* **Database** : `career_app_db`
* **User** : `mlj1234`
* **Password** : `********************`

##  Tests (End-to-End)

Les tests sont gérés par Cypress côté client.

1.  Accéder au répertoire frontend :
    ```
    cd frontend
    ```

2.  Installer les dépendances de test :
    ```
    npm install
    ```

3.  Lancer l'interface de test :
    ```
    npx cypress open
    ```

##  Architecture du projet

```text
Projet-JS/
├── backend/                 # API Node.js/Express
│   ├── db.js               # Configuration pool PostgreSQL
│   ├── index.js            # Point d'entrée et routes
│   ├── Dockerfile
│   └── package.json
├── frontend/                # Application React
│   ├── src/
│   ├── cypress/            # Tests E2E
│   ├── vite.config.js      # Configuration Vite 
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml      # Orchestration des services
└── README.md