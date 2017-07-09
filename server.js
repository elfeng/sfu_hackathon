var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080; // default port 8080
var data = require('./data.json');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
