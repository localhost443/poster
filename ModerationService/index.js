const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { eventFunc } = require("./Moderations");

const app = express();

app.use(cors(), bodyParser.json());

app.post("/events/", (req, res) => {
  const eventName = req.body.type;
  console.log(req.body);
  //Check if a function with the name of event exist , if exist , executes with data we have
  if (eventFunc[eventName] && typeof eventFunc[eventName] === "function") {
    const func = eventFunc[eventName];
    func(req.body.data);
  } else {
    //I let do actually nothing, But feel free if you want to make a noise with it
    //As harder as you want . How about making a DDOS attack on Google server ?
  }
  res.send({});
});

const PORT = 4005;
app.listen(PORT, () => {
  console.log(`Moderation service is running at PORT ${PORT}`);
});
