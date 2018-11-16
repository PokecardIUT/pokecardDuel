const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const bodyParser = require("body-parser");

var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.all("/api/*", [require("./middlewares/validateRequest")]);

app.use("/", require("./routes/routes"));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
