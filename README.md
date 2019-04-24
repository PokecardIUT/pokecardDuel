# pokecard


## Fonctionnalités

 - Création d'utilisateurs (Connexion avec Google	)
 - Echange de cartes
 - Affichage des différents decks de cartes pokémon
 - Affichage des cartes pokémon
 - Création d'un deck
 - Débloquage de carte aléatoirement
 - Classement


## Spécifications techniques

### Framework

 - Node.js (Orienté serveur, facilité de connexion avec la BDD, simple d'utilisation, beaucoup de framework, langage actuel côté serveur)
 - MongoDB (NoSQL, JSON)
 - API: pokemontcg.io (Possède toutes les cartes des différents decks de pokemon)

### Bibliotèques

  - Mongoose est une dépendance qui permet de communiquer avec la base de données.
  - JWT-simple permet de créer des Json web token qui nous permettront de sécuriser l'accès à l'API.
  - Express est une dépendance qui nous permet de faire des routes.

### Architecture

 - Config
    - Ce dossier stocke toutes les configurations du projet
 - Controller 
    - Ce dossier contient tous les controllers des routes de l'API
 - Message
    - Ce dossier permet de centraliser tous les messages renvoyés par l'API
 - Middlewares
    - Ce dossier contient un middleware à fin de vérifier si l'utilisateur à accès à la route.
 - Routes
    - Ce dossier contient toutes les routes de l'API
 - Model
    - Ce dossier contient tous les models utilisés par l'API

## Guide d'installation

Prérequis : 
  - Avoir installé node.js
  - Avoir installé git
  
Dans un premier temps il vous faut cloner le répertoire git : 

     `git clone https://github.com/PokecardIUT/pokecardDuel`

Lorsque le projet est installé il faut se mettre sur la racine et installer les dépendances en utilisant cette commande :

      `npm install`
      
Quand l'installation est finie vous n'avez plus qu'à lancer le serveur avec cette commande : 

      `npm start`

Vous pouvez accéder aux serveurs grâce à cette adresse :

      `localhost:5000`


## Les différentes routes

### Authentification et inscription

- Inscription :

 Route : `/signup` 
 
 Parmetre : 
  ```JSON
  {
   "username":"",
   "password":"",
  }
  ```
  Type : `POST`
  
 - Connexion par email

 Route : `/login/email` 

 Parmetre : 
  ```JSON
  {
    "username":"",
    "password":"",
  }
  ```
  
  Type : `POST`
  
- Connexion par un service (Facebook, Google ...)

 Route : `/login/service`

 Parmetre : 
  ```JSON
  {
    "username":"",
    "secret":"",
  }
  ```
  
  Type : `POST`

### Decks

- Récupere les decks

 Route : `/api/decks` 
 
 Type : `GET`

- Mettre à jour les decks de l'utilisateur

 Route : `/api/setUpdate`

 Parmetre : 
  ```JSON
  {
   "username":""
   "set": Set
  }
  ```
  
  Type : `POST`

### Cartes

- Récuperer toutes les cartes d'un deck

 Route : `/api/cards/:id/all`
 
 Type : `GET`

- Ajouter une carte à l'utilisateur

 Route : `/api/cardUpdate`

 Parmetre : 
  ```JSON
  {
    "username": "",
    "card": Card
  }
  ```
  
  Type : `POST`

- Supprimer une carte d'un utilisateur

 Route : `/api/cardRemove`

 Parmetre : 
  ```JSON
  {
     "username": "",
     "card": Card
  }
  ```
  
  Type : `POST`

- Récuperation de carte aléatoire

 Route : `/api/randomCard`

 Parmetre : 
  ```JSON
  {
    "username":""
    "setCode":""
    "pageSize":""
    "page":""
  }
  ```
  Type : `GET`
  
- Nombre restant de carte dans un deck

 Route : `/api/cardsCount`

 Parmetre : 
  ```JSON
  {
    "username":""
    "setCode":""
    "pageSize":""
    "page":""
  }
  ```
  Type : `GET`
  
- Echangé des cartes entre deux utilisateurs

Route : `/api/trade`

 Parmetre : 
  ```JSON
  {
    "users": [
      "",
      "",
    ],
    "cards": [
     Card,
     Card,
    ]
  }
  ```
  
  Type : `POST`
  
### Utilisateur

- Récuperer tous les utilisateurs

 Route : `/api/users`

 Type : `GET`

- Récuperer un utilisateur

 Route : `/api/user`

 Parmetre : 
  ```JSON
  {
   "username": ""
  }
  ```
  
  Type : `GET`
