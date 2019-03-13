mongoose = require("mongoose");
(Schema = mongoose.Schema);

Card = new Schema({
    id: { type: String, index: { unique: true } },
    imgUrl: String
});

module.exports = Card;