var express = require('express');
var router = express.Router();
var auth = require("../controller/auth.js")
var about = require("../controller/about.js")

// ABOUT

router.get('/',about.aboutApi);

// AUTH

router.post('/login', auth.login);

module.exports = router;