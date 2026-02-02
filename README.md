## Projet-JS Louis, Mohamed, Jahed

Ce projet est une app web moderne utilisant une architecture conteneurisée avec Docker. Elle permet de gére des CV et des lettres de motivation assistés par IA.

## Architecture du projet

Le projet est divisé en troix services :
**Frontend** : Application react / vite (Port 5173)
**Backend** : API Node.js / Express (Port 5001:5000)
**Database** : POstgreSQL (Port 5432)

## Prérequis

* [Docker Desktop](https://www.docker.com/products/docker-desktop/) installé et lancé.
* [Node.js](https://nodejs.org/)

## Démarrage rapide

CLoner le projet
Se placer à la racine du projet
Lancer l'environnement complet (docker compose up --build)

Accéder aux services : 
Interface Web : http://localhost:5173
API Backend : http://localhost:5001
DB : localhost:5432

## Config DB

Type : PostgreSQL
Hôte : localhost
Port : 5432
User : lmj1234
Mdp : 
DB : db_postgresql

## Stucture du projet

Projet-JS/
├── Backend/
│   └── api/
│       ├── Dockerfile      # Construction de l'image Node.js
│       ├── index.js        # Serveur Express principal
│       └── package.json    # Dépendances (express, etc.)
├── Frontend/
│   └── web/
│       ├── Dockerfile      # Construction de l'image Vite/React
│       ├── index.html      # Point d'entrée de l'application
│       └── package.json    # Dépendances (react, vite, etc.)
├── docker-compose.yml      # Orchestration de tous les services
└── README.md               # Documentation du projet

