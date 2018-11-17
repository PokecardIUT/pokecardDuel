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

// API

router.get("/api/test", api.test);
router.get("/api/decks", api.getDeck);

module.exports = router;
