const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const res = require("express");
const { eventFunc } = require("./lookup");

const app = express();
app.use(cors(), bodyParser.json());
const AllPosts = {};
app.post("/events", (req, res, next) => {
  const { type, data } = req.body;
  console.log(type, data);
  let id = req.body.data.PostId ?? req.body.data.id;
  console.log(id);
  if (eventFunc[type] && typeof eventFunc[type] === "function") {
    const func = eventFunc[type];
    func(data, AllPosts);
    res.send(AllPosts[id]);
    console.log(AllPosts);
  } else {
    //I let do actually nothing, But feel free if you want to make a noise with it
    //
  }

  console.log(AllPosts);
});

app.get("/posts", (req, res, next) => {
  res.send(AllPosts);
  console.log(AllPosts);
});

const PORT = 4004;
app.listen(PORT, async () => {
  console.log("Query Server is running at port", PORT);
  const res = await axios.get("http://localhost:4002/events/");
  Object.values(res.data).map((body) => {
    const { type, data } = body;
    let id = body.data.id ?? body.data.PostId;
    if (eventFunc[type] && typeof eventFunc[type] === "function") {
      const func = eventFunc[type];
      func(data, AllPosts);
    }
  });
});
