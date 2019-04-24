# pokecard


## Fonctionnalités

 - Création d'utilisateurs (Connexion avec Google	)
 - Echange de cartes
 - Affichage des différents decks de cartes pokémon
 - Affichage des cartes pokémon
 - Création d'un deck
 - Déblocage de carte aléatoirement
 - Classement


## Spécifications techniques

### Framework

 - Node.js (Orienté serveur, facilité de connexion avec la BDD, simple d'utilisation, beaucoup de framework, langage actuel côté serveur)
 - MongoDB (NoSQL, JSON)
 - API: pokemontcg.io (Possède toutes les cartes des différents decks de pokemon)

### Bibliothèques

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
    - Ce dossier contient un middleware afin de vérifier si l'utilisateur a accès à la route.
 - Routes
    - Ce dossier contient toutes les routes de l'API
 - Model
    - Ce dossier contient tous les modèles utilisés par l'API

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
 
 Parametre : 
  ```JSON
  {
   "username":"",
   "password":"",
  }
  ```
  Type : `POST`
  
 - Connexion par email

 Route : `/login/email` 

 Parametre : 
  ```JSON
  {
    "username":"",
    "password":"",
  }
  ```
  
  Type : `POST`
  
- Connexion par un service (Facebook, Google ...)

 Route : `/login/service`

 Parametre : 
  ```JSON
  {
    "username":"",
    "secret":"",
  }
  ```
  
  Type : `POST`

### Decks

- Récupérer les decks

 Route : `/api/decks` 
 
 Type : `GET`

- Mettre à jour les decks de l'utilisateur

 Route : `/api/setUpdate`

 Parametre : 
  ```JSON
  {
   "username":"",
   "set": "Set",
  }
  ```
  
  Type : `POST`

### Cartes

- Récupérer toutes les cartes d'un deck

 Route : `/api/cards/:id/all`
 
 Type : `GET`

- Ajouter une carte à l'utilisateur

 Route : `/api/cardUpdate`

 Parametre : 
  ```JSON
  {
    "username": "",
    "card": "Card",
  }
  ```
  
  Type : `POST`

- Supprimer une carte d'un utilisateur

 Route : `/api/cardRemove`

 Parametre : 
  ```JSON
  {
     "username": "",
     "card": "Card",
  }
  ```
  
  Type : `POST`

- Récuperation de carte aléatoire

 Route : `/api/randomCard`

 Parametre : 
  ```JSON
  {
    "username":"",
    "setCode":"",
    "pageSize":"",
    "page":"",
  }
  ```
  Type : `GET`
  
- Nombre restant de carte dans un deck

 Route : `/api/cardsCount`

 Parametre : 
  ```JSON
  {
    "username":"",
    "setCode":"",
    "pageSize":"",
    "page":"",
  }
  ```
  Type : `GET`
  
- Échanger des cartes entre deux utilisateurs

Route : `/api/trade`

 Parametre : 
  ```JSON
  {
    "users": [
      "",
      "",
    ],
    "cards": [
     "Card",
     "Card",
    ],
  }
  ```
  
  Type : `POST`
  
### Utilisateur

- Récupérer tous les utilisateurs

 Route : `/api/users`

 Type : `GET`

- Récupérer un utilisateur

 Route : `/api/user`

 Parametre : 
  ```JSON
  {
   "username": "",
  }
  ```
  
  Type : `GET`

##	L’application PokeCardDuel

###	Installation

Dans un premier temps il vous faut télécharger `l’installateur` de l’application (`APK`) qui se trouve en release dans le github de l’application que vous pouvez retrouver sur ce lien : 

[https://github.com/PokecardIUT/pokecardApp/releases/tag/v1.0](https://github.com/PokecardIUT/pokecardApp/releases/tag/v1.0)

Lorsque l’`APK` est téléchargée vous devrez la transférer sur votre téléphone puis cliquer dessus, pensez bien à activer l’installation d’application de `sources inconnues`

###	Utilisation

Tout d’abord si vous ne voulez pas vous connecter via `Facebook` ou `Google` il vous faut vous s’inscrire sur l’application en cliquant sur ` Première connexion `, celle-ci s’effectue par le formulaire présenté.

Vous pourrez vous connecter à l’application via `Facebook`, `Google` ou par le formulaire sur l’écran de connexion.
L’onglet `Recherche` vous permet de d’afficher tous les decks de l’api et de naviguer à travers eux, en cliquant dessus vous verrez toutes les cartes appartenant à ce deck et en cliquant sur une carte vous aurez un zoom de cette dernière.

L’onglet `Mes decks` recense tout vos decks, vous pouvez en créer un via le bouton prévu à cet effet visible en cliquant sur le bouton « + », ce bouton montre également `l’échange de cartes` et `la boutique` sur la laquelle on peut récupérer 1, 3 ou 5 cartes de n’importe quel deck, ces cartes permettront justement de créer un deck, pour faire cela, vous devrez choisir 5 cartes parmi celles qui vous appartiennent en cliquant dessus, vous pouvez vous corriger en cliquant sur la carte dans la barre en bas de l’écran, une fois le deck constitué, vous pourrez lui donner un nom et une description en appuyant sur le bouton valider en bas à droite, il sera ensuite visible dans `Mes decks`.

Toujours dans les actions du bouton « + », en cliquant sur `Echange de cartes` vous pourrez échanger des cartes avec un autre utilisateur en cliquant sur la carte que vous voulez échanger puis sur le pseudonyme de l’utilisateur avec qui vous voulez faire l’échange dans la liste déroulante qui vous sera présentée et en choisissant une carte à échanger parmi celles proposées, ensuite vos deux cartes seront échangées.

L’onglet `Classement` montre tous les meilleurs joueurs de l’application.

Et enfin l’onglet `Mon compte` permettant de vous déconnecter ou encore de supprimer votre compte.
