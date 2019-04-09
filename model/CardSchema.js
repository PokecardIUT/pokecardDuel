mongoose = require("mongoose");
(Schema = mongoose.Schema);

Card = new Schema({
    id: String,
    imageUrlHiRes: String,
    imageUrl: String,
}, { _id: false });

module.exports = Card;