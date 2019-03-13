var jwt = require("jwt-simple");

var jwtIsValid = function(token) {
  try {
    var decoded = jwt.decode(token, require("../config/secret.js")());
    if (decoded.exp <= Date.now()) {
      return "expired";
    }
    return "valid";
  } catch (err) {
    return "err";
  }
};

module.exports = jwtIsValid;
