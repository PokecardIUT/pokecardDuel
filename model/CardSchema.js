mongoose = require("mongoose");
(Schema = mongoose.Schema);

Card = new Schema({
    id: { type: String, index: { unique: true } },
    imageUrlHiRes: String
}, { _id: false });

module.exports = Card;