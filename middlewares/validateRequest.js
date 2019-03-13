var isValidJwt = require("./decodeJwt.js");

var verifToken = function(req, res, next) {
  var token =
    (req.body && req.body.access_token) ||
    (req.query && req.query.access_token) ||
    req.headers["x-access-token"];
  var key =
    (req.body && req.body.x_key) ||
    (req.query && req.query.x_key) ||
    req.headers["x-key"];

  if (token || key) {
    var result = isValidJwt(token);

    if (result === "expired") {
      res.status(400);
      res.json({
        status: 400,
        message: "Token Expired"
      });
      return;
    } else if(result === "err") {
      res.status(500);
      res.json({
        status: 500,
        message: "Oops something went wrong",
      });
    }
    next();
  } else {
    res.status(401);
    res.json({
      status: 401,
      message: "Invalid Token or Key"
    });
    return;
  }
};

module.exports = verifToken;
