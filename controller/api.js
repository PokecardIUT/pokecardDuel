const jwt = require("jwt-simple");
const mongoose = require("mongoose");
var urlDatabase = require("../config/database");
var User = require("../model/UserSchema.js");
const message = require("../message/message.js");
require("isomorphic-fetch");

const API_URL_SETS = "https://api.pokemontcg.io/v1/sets";
const API_URL_CARDS = "https://api.pokemontcg.io/v1/cards";

var api = {
  getSets: function (req, res) {
    const url = `${API_URL_SETS}`;
    fetch(url)
      .then(response => response.json())
      .then(sets => {
        return res.json(sets);
      })
      .catch(error => {
        return res.json(error);
      });
  },

  getAllCardsBySet: function (req, res) {
    const query = { id: req.params.id };
    const url = `${API_URL_CARDS}?setCode=${query.id}&pageSize=1000`;
    fetch(url)
      .then(response => response.json())
      .then(cards => {
        return res.json(cards);
      })
      .catch(error => {
        return res.send(error);
      });
  },

  getCardBySetAndPage: function (req, res) {
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
        return res.json(cards);
      })
      .catch(error => {
        return res.send(error);
      });
  },

  addCardToUser: function (req, res) {
    mongoose.connect(urlDatabase.URL_ALL, { useNewUrlParser: true }).then(
      () => { },
      err => {
        res.json(message.error.database);
      }
    );

    User.findOne({ username: req.body.username }, function (err, user) {
      if (err) {
        res.json(message.error.database);
      }
      if (user != null) {
        if (user.cards.length != 0) {
          req.body.card.forEach(card => {
            if (!user.cards.find(element => element.id === card.id)) {
              user.cards.push(card);
            }
          });
        } else {
          req.body.card.forEach(card => {
            user.cards.push(card);
          });
        }
        // save cards to user
        user.save(function (err) {
          if (err) {
            res.json(message.error.database);
          } else {
            mongoose.connection.close();
            res.json(message.success.updateCard);
          }
        });
      } else {
        res.json(message.error.noUser);
      }
    });
  },
  removeCardToUser: function (req, res) {
    mongoose.connect(urlDatabase.URL_ALL, { useNewUrlParser: true }).then(
      () => { },
      err => {
        res.json(message.error.database);
      }
    );

    User.findOne({ username: req.body.username }, function (err, user) {
      if (err) {
        res.json(message.error.database);
      }
      if (user != null) {
        if (user.cards.length != 0) {
          req.body.card.forEach(card => {
            user.cards = user.cards.filter(element => {
              if (card.id !== element.id) {
                return element;
              }
            });
          });
        }
        // save cards to user
        user.save(function (err) {
          if (err) {
            res.json(message.error.database);
          } else {
            mongoose.connection.close();
            res.json(message.success.updateCard);
          }
        });
      } else {
        res.json(message.error.noUser);
      }
    });
  },

  addSetToUser: function (req, res) {
    mongoose.connect(urlDatabase.URL_ALL, { useNewUrlParser: true }).then(
      () => { },
      err => {
        res.json(message.error.database);
      }
    );

    User.findOne({ username: req.body.username }, function (err, user) {
      if (err) {
        res.json(message.error.database);
      }
      if (user != null) {
        obj = JSON.parse(req.body.set)
        user.sets.push(obj);
        // save cards to user
        user.save(function (err) {
          if (err) {
            res.json(message.error.database);
          } else {
            mongoose.connection.close();
            res.json(message.success.updateSet);
          }
        });
      } else {
        res.json(message.error.noUser);
      }
    });
  },
  getCardsCount: (req, res) => {
    mongoose.connect(urlDatabase.URL_ALL, { useNewUrlParser: true }).then(
      () => { },
      err => {
        res.json(message.error.database);
      }
    );

    User.findOne({ username: req.query.username }, function (err, user) {
      if (err) {
        res.json(message.error.database);
      }
      if (user != null) {
        const url = `${API_URL_CARDS}?setCode=${req.query.id}&pageSize=${
          req.query.pageSize
          }&page=${req.query.page}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            user.cards.forEach(element => {
              data.cards = data.cards.filter(card => {
                if (card.id !== element.id) {
                  return card;
                }
              });
            });

            res.json({ result: data.cards.length })
          })
      }
    })
  },
  randomCard: function (req, res) {
    mongoose.connect(urlDatabase.URL_ALL, { useNewUrlParser: true }).then(
      () => { },
      err => {
        res.json(message.error.database);
      }
    );

    User.findOne({ username: req.query.username }, function (err, user) {
      if (err) {
        res.json(message.error.database);
      }
      if (user != null) {
        const url = `${API_URL_CARDS}?setCode=${req.query.id}&pageSize=${
          req.query.pageSize
          }&page=${req.query.page}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            user.cards.forEach(element => {
              data.cards = data.cards.filter(card => {
                if (card.id !== element.id) {
                  return card;
                }
              });
            });

            let cards = [];

            for (let i = 0; i < req.query.nbCard; ++i) {
              let index = Math.floor(
                Math.random() * Math.floor(data.cards.length - 1)
              );
              cards.push(data.cards[index]);
              data.cards.splice(index, 1);
            }
            user.cards.push(...cards);

            user.save(function (err) {
              if (err) {
                res.json(message.error.database);
              } else {
                mongoose.connection.close();
                return res.json(cards);
              }
            });
          })
          .catch(error => {
            return res.send(error);
          });
      } else {
        res.json(message.error.noUser);
      }
    });
  },
  getUser: function (req, res) {
    mongoose.connect(urlDatabase.URL_ALL, { useNewUrlParser: true }).then(
      () => { },
      err => {
        res.json(message.error.database);
      }
    );

    User.findOne({ username: req.query.username }, function (err, user) {
      if (err) {
        res.json(message.error.database);
      }

      if (user != null) {
        let response = { ...message.success.userFind, user };
        res.json(response);
      } else {
        res.json(message.error.noUser);
      }
    });
  },
  getUsers: (req, res) => {
    mongoose.connect(urlDatabase.URL_ALL, { useNewUrlParser: true }).then(
      () => { },
      err => {
        res.json(message.error.database);
      }
    );
    User.find((err, users) => {
      mongoose.connection.close();
      res.json(users);
    });
  },
  trade: (req, res) => {
    mongoose.connect(urlDatabase.URL_ALL, { useNewUrlParser: true }).then(
      () => { },
      err => {
        res.json(message.error.database);
      }
    );
    User.find((err, users) => {
      let firstUser, secondUser;
      users.forEach(user => {
        if (user.username === req.body.users[0]) {
          firstUser = user;
        }
        if (user.username === req.body.users[1]) {
          secondUser = user;
        }
      });
      if (firstUser != undefined && secondUser != undefined) {
        let tmp = firstUser.cards.filter(element => {
          if (req.body.cards[0].id !== element.id) {
            return element;
          }
        });
        if (tmp === undefined) {
          res.json(message.error.existantCard);
        } else {
          firstUser.cards = tmp;

          tmp = secondUser.cards.filter(element => {
            if (req.body.cards[1].id !== element.id) {
              return element;
            }
          });

          if (tmp === undefined) {
            res.json(message.error.existantCard);
          } else {
            secondUser.cards = tmp;

            firstUser.cards.push(req.body.cards[1]);
            secondUser.cards.push(req.body.cards[0]);

            firstUser.save(function (err) {
              if (err) {
                res.json(message.error.database);
              }
            });
            secondUser.save(function (err) {
              if (err) {
                res.json(message.error.database);
              }
            });
            let data = [
              {
                username: firstUser.username,
                message: "A eu cette carte: " + req.body.cards[1].id
              },
              {
                username: secondUser.username,
                message: "A eu cette carte: " + req.body.cards[0].id
              }
            ];
            res.json(message.success.trade(data));
          }
        }
      } else {
        res.json(message.error.noUser);
      }
      mongoose.connection.close();
    });
  }
};

module.exports = api;
