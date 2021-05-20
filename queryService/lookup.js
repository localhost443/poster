/**
 * All the functions about moderation goes here as I do not want to touch the index.js
 * files as well as it will be easy to add, edit or modify data at a later time
 * It's much cleaner this why, Don't you think so ?
 */
const axios = require("axios");

//Well, As I always emitting events to the event broker, Why not writing a function
//Just to do this for me. Isn't it a good thing ? Umm, Should I hire someone else to do this job ?
async function EventEmitter(type, data, url = "http://localhost:4002/events/") {
  const ev = {
    type,
    data,
  };
  await axios.post(url, ev).then().catch(); //Add anything if you may.
}

const eventFunc = {
  /** Add, delete or modify your functions here, But please remember to match
   * function name with eventEmitter name . You can also write everything jumble
   * up in the Index.js Too. I don't think I mind it.
   */
  commentCreated(data, AllPosts) {
    const { commentId, PostId, comment } = data;
    AllPosts[PostId].comments[commentId] = data;
    return AllPosts[PostId];
  },
  postCreated(data, AllPosts) {
    const { id, title } = data;
    AllPosts[id] = {
      id,
      title,
      comments: {},
    };
    return AllPosts[id];
  },
  commentUpdated(data, AllPosts) {
    const { commentId, PostId } = data;
    AllPosts[PostId].comments[commentId] = data;
    return AllPosts[PostId];
  },
};
exports.eventFunc = eventFunc;
