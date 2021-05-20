const axios = require("axios");

const url = "http://localhost:4002/events/";

function eventEmitter(type, data, func = () => true) {
  axios
    .post(url, {
      type: type,
      data: data,
    })
    .then((res) => func(res))
    .catch((err) => {
      func(err);
    });
}

module.exports = eventEmitter;
