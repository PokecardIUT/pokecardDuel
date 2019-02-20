const jwt = require("jwt-simple");
const mongoose = require("mongoose");
var urlDatabase = require("../config/database");
var User = require("../model/UserSchema.js");
const message = require("../message/message.js");
require("isomorphic-fetch");

const API_URL_SETS = "https://api.pokemontcg.io/v1/sets";
const API_URL_CARDS = "https://api.pokemontcg.io/v1/cards";

var api = {
  getSets: function(req, res) {
    const url = `${API_URL_SETS}`;
    fetch(url)
      .then(response => response.json())
      .then(sets => {
        console.log(sets);
        return res.json(sets);
      })
      .catch(error => {
        console.log(error);
        return res.json(error);
      });
  },

  getAllCardsBySet: function(req, res) {
    const query = { id: req.params.id };
    const url = `${API_URL_CARDS}?setCode=${query.id}&pageSize=1000`;
    fetch(url)
      .then(response => response.json())
      .then(cards => {
        console.log(cards);
        return res.json(cards);
      })
      .catch(error => {
        console.log(error);
        return res.send(error);
      });
  },

  getCardBySetAndPage: function(req, res) {
    const query = {
      id: req.params.id,
      page: req.query.page,
      pageSize: req.query.pageSize
    };
    const url = `${API_URL_CARDS}?setCode=${query.id}&pageSize=${
      query.pageSize
    }&page=${query.page}`;
    fetch(url)
      .then(response => response.json())
      .then(cards => {
        console.log(cards);
        return res.json(cards);
      })
      .catch(error => {
        console.log(error);
        return res.send(error);
      });
  }
};

module.exports = api;
