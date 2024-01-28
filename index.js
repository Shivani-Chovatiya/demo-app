const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) =>
  res.send("Welcome to Shivani's first Node app! Keep things Jiggy ;-) ")
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
