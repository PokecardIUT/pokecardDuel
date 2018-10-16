var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const uri = "mongodb://loic:admin123@pokecardduel-shard-00-00-f4df5.mongodb.net:27017,pokecardduel-shard-00-01-f4df5.mongodb.net:27017,pokecardduel-shard-00-02-f4df5.mongodb.net:27017/Pokecard?ssl=true&replicaSet=PokecardDuel-shard-0&authSource=admin&retryWrites=true";
var auth = require("../controller/auth.js")

router.get('/',auth.login);

module.exports = router;