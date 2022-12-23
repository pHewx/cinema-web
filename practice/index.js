const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  try {
    res.json("hello");
  } catch (err) {
    res.json(err);
  }
});

app.listen(3000, function () {
  console.log("app is running");
});
