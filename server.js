var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080; // default port 8080
var data = require('./data.json');

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});