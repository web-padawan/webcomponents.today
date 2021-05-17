const elements = require("./custom-elements/custom-elements.11tydata.js");
const shadowDOM = require("./shadow-dom/shadow-dom.11tydata.js");

module.exports = {
  items: [...elements.items, ...shadowDOM.items],
};
