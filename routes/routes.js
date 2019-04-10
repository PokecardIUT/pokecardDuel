var express = require("express");
var router = express.Router();
var auth = require("../controller/auth.js");
var about = require("../controller/about.js");
var api = require("../controller/api.js");

// ABOUT

//Api credits
router.get("/", about.aboutApi);

// AUTH

//Params:
//username: username of user to authenticate
//password: password of user to authenticate
router.post("/login/email", auth.loginWithEmail);

//Params:
//username: username of user to sign up
//password: password of user to sign up
router.post("/signup", auth.signup);

//Params:
//username: username of user to authenticate
//secret: using to verify login connection
router.post("/login/service", auth.loginWithService);

// API

//Return all sets of the api
router.get("/api/decks", api.getSets);

//Params:
//id -> set id
//Return all cards of set with id provided in params
router.get("/api/cards/:id/all", api.getAllCardsBySet);

//Params:
//username -> username of user you want to remove card
//card -> card to add
router.post("/api/cardUpdate", api.addCardToUser);

//Params:
//username -> username of user you want to remove card
//card -> card to remove
router.post("/api/cardRemove", api.removeCardToUser);

//Params:
//username -> username of user you want to add a set
//set -> set to add
router.post("/api/setUpdate", api.addSetToUser)

//Params :
//username -> username of user you want add random cards
//setCode, pageSize, page -> params for query url
//Return random cards
router.get("/api/randomCard", api.randomCard)

//Params :
//username -> username of user you want cards count
//setCode, pageSize, page -> params for query url
//Return remaining cards count in a set for a user to get
router.get("/api/cardsCount", api.getCardsCount)

//Return all users from database
router.get("/api/users", api.getUsers)

//Params :
//username -> username of user to find
router.get("/api/user", api.getUser);

//Params :
//users -> Usernames for trading
//cards -> Cards for trading
router.post("/api/trade", api.trade)

//Params : 
//page -> number of page
//pageSize -> number of card in one page
router.get("/api/cards/:id", api.getCardBySetAndPage);

module.exports = router;
