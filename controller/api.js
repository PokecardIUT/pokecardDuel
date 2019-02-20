const jwt = require("jwt-simple");
const mongoose = require("mongoose");
var urlDatabase = require("../config/database");
var User = require("../model/UserSchema.js");
const message = require("../message/message.js");
require("isomorphic-fetch");

const API_URL_CARDS = "https://api.pokemontcg.io/v1/sets";

var api = {
  getSets: function(req, res) {
    const url = `${API_URL_CARDS}`;
    fetch(url)
      .then(response => response.json())
      .then(sets => {
        console.log(sets)
        return res.json(sets);
      })
      .catch(error => {
        console.log(error)
        return res.json(error);
      });
  }
};

module.exports = api;
