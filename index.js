// index.js
const express = require("express");
const app = express();
const care = require("./care");

app.get("/", (req, res) => {
  res.send(`CARE Status: ${care.status()}`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...");
});
