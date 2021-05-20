const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const eventEmitter = require("./evintEmitter");

const app = express();
app.use(cors(), bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const comments = {};

app.get("/posts/:id/comments", (req, res) => {
  const id = req.params.id;
  const com = comments[id] || [];
  res.send(com);
});
app.post("/posts/:id/comments/", (req, res) => {
  console.log("Post Request received", req.body);
  const commentId = randomBytes(4).toString("hex");
  const id = req.params.id;
  const { comment } = req.body;
  if (!comment) {
    return;
  }
  const currentComment = { commentId, PostId: id, comment, status: "pending" };
  comments[commentId] = currentComment;
  console.log(comments);
  eventEmitter("commentCreated", currentComment);
  res.status(201).send(comments[id]);
});

app.post("/events", (req, res, next) => {
  if (req.body.type === "commentModerated") {
    const { commentId, PostId, comment, status } = req.body.data;
    comments[commentId] = {
      commentId,
      PostId,
      comment,
      status,
    };
    eventEmitter("commentUpdated", comments[commentId]);
    res.send({});
  }
});

let PORT = 4001;
app.listen(PORT, () => {
  console.log("Server comments started at PORT : ", PORT);
});
