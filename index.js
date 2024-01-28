const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.send("Welcome to Shivani's first Node app! Keep things Jiggy ;-) ")
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
