var express = require("express");
var router = express.Router();
var auth = require("../controller/auth.js");
var about = require("../controller/about.js");
var apiSet = require("../controller/apiSet.js");
var apiCard = require("../controller/apiCard.js");
var apiUser = require("../controller/apiUser.js");

// ABOUT

router.get("/", about.aboutApi);

// AUTH

router.post("/login/email", auth.loginWithEmail);
router.post("/signup", auth.signup);
router.post("/login/service", auth.loginWithService);

// API

router.get("/api/decks", apiSet.getSets);

router.get("/api/cards/:id/all", apiCard.getAllCardsBySet);

router.post("/api/cardUpdate", apiCard.addCardToUser);

router.post("/api/cardRemove", apiCard.removeCardToUser);

router.post("/api/setUpdate", apiSet.addSetToUser)

router.get("/api/randomCard", apiCard.randomCard)

router.get("/api/cardsCount", apiCard.getCardsCount)

router.get("/api/users", apiUser.getUsers)

router.get("/api/user", apiUser.getUser);

router.post("/api/trade", apiCard.trade)

//Parms : 
//page -> number of page
//pageSize -> number of card in one page
router.get("/api/cards/:id", apiCard.getCardBySetAndPage);

module.exports = router;
