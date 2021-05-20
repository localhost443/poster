/**
 * Please add , edit or modify your urls here
 * You don't need to touch index.js files for
 * doing something this simple
 */

let mainUrlCreator = (port) => {
  return `http://localhost:${port}/events`;
};
let urlArray = [
  mainUrlCreator(4000),
  mainUrlCreator(4001),
  mainUrlCreator(4004),
  mainUrlCreator(4005),
];

exports.urlArray = urlArray;
