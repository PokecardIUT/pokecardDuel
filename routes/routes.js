var express = require("express");
var router = express.Router();
var auth = require("../controller/auth.js");
var about = require("../controller/about.js");
var api = require("../controller/api.js");

// ABOUT

router.get("/", about.aboutApi);

// AUTH

router.post("/login/email", auth.loginWithEmail);
router.post("/signup", auth.signup);
router.post("/login/service", auth.loginWithService);

// API

router.get("/api/decks", api.getSets);

router.get("/api/cards/:id/all", api.getAllCardsBySet);

router.post("/api/cardUpdate", api.addCardToUser)

router.post("/api/cardRemove", api.removeCardToUser)

router.get("/api/randomCard", api.randomCard)

router.get("/api/user", api.getUser);

//Parms : 
//page -> number of page
//pageSize -> number of card in one page
router.get("/api/cards/:id", api.getCardBySetAndPage);

module.exports = router;
