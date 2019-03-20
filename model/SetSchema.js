mongoose = require("mongoose");
Card = require("./CardSchema.js");
Schema = mongoose.Schema;

Deck = new Schema(
  {
    title: String,
    description: String,
    cards: [Card]
  },
  { _id: false }
);

module.exports = Deck;
