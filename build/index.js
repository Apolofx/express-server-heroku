"use strict";

var express = require("express");

var app = express();
app.get("/", function (req, res) {
  return res.status(200).send("Hello World");
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  return console.log("Server listening on port ".concat(port));
});