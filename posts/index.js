const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const posts = {};
app.get("/", (req, res, next) => {
  res.send(posts);
});

app.post("/", (req, res) => {
  console.log("data received", req.body);
  let id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  axios
    .post("http://localhost:4002/events/", {
      type: "postCreated",
      data: posts[id],
    })
    .then(() => true) //You are free to report anything you want
    .catch(() => false); //You are free to report an error anywhere you want
  res.status(201).send(posts[id]);
});

app.post("/events", (req, res, next) => {
  console.log(req.body);
  res.send({});
});

app.listen(4000, () => {
  console.log("listening in port 4000");
});
