const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const { urlArray } = require("./eventdata");

const app = express();
app.use(cors(), bodyParser.json());
const events = [];

app.post("/events/", (req, res, next) => {
  const event = req.body;
  events.push(event);
  urlArray.map((url) => {
    axios
      .post(url, event)
      .then(() => true)
      .catch((err) => false); //You are free to add error notification
  });
  res.send({ status: "Ok" });
});

app.get("/events/", (req, res) => {
  res.send(events);
});

const PORT = 4002;
app.listen(PORT, () => {
  console.log(`EventBus Server started at port ${PORT}`);
});
