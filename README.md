# IA Job Assistant - Fullstack Dockerized

Ce projet est une plateforme d'assistance à la recherche d'emploi (génération de CV, lettres de motivation) utilisant une architecture micro-services conteneurisée.

## Architecture du Projet

L'application est orchestrée avec **Docker Compose** et se divise en trois services :

* **Frontend** : React + Vite (Port 5173)
* **Backend** : Node.js + Express (Port 5001 -> 5000 interne)
* **Database** : PostgreSQL 15 (Port 5432)

---

## Prérequis

* [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé et lancé.
* [Node.js](https://nodejs.org/) installé (nécessaire pour lancer Cypress en local).

---

## Installation et Démarrage

1. **Cloner le projet** :
   ```
   git clone [https://github.com/moh91100/Projet-JS.git](https://github.com/moh91100/Projet-JS.git)
   cd Projet-JS

2. **Lancer l'environnement avec Docker** :

docker compose up --build

3. **Accéder aux interfaces** :

Web : http://localhost:5173

API (Backend) : http://localhost:5001


4. **Allez dans le dossier frontend** :

Configuration de la Base de Données
La base de données est automatiquement initialisée via le script Database/init.sql.

Hôte : localhost

Port : 5432

Utilisateur : ######

Mot de passe : ######

Base de données : db_postgresql

# Structure des Dossiers
.
├── Backend/api/            # Code serveur et routes API (Node.js)
├── Frontend/web/           # Application React, Vite et tests Cypress
├── Database/               # Scripts d'initialisation SQL (Tables users/docs)
├── docker-compose.yml      # Orchestration des conteneurs Docker
├── .gitignore              # Exclusion des fichiers inutiles (node_modules, etc.)
└── README.md               # Documentation du projet

# Auteurs:

Mohamed (@moh91100)
Louis   (cptpinguin)
Jahed   (jahed94)