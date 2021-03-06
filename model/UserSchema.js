mongoose = require("mongoose");
Schema = mongoose.Schema;
bcrypt = require("bcrypt-nodejs");
SALT_WORK_FACTOR = 10;
Card = require("./CardSchema.js");
Deck = require("./SetSchema.js");

User = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  cards: [Card],
  sets: [Deck],
  level: Number,
  nbWin: Number
});

User.pre("save", function (next) {
  var user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

User.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", User, "User");
