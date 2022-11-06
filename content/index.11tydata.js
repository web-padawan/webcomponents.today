const a11y = require("./accessibility/accessibility.11tydata.js");
const bestPractices = require("./best-practices/best-practices.11tydata.js");
const caseStudies = require("./case-studies/case-studies.11tydata.js");
const codelabs = require("./codelabs/codelabs.11tydata.js");
const elements = require("./custom-elements/custom-elements.11tydata.js");
const shadowDOM = require("./shadow-dom/shadow-dom.11tydata.js");
const styling = require("./styling/styling.11tydata.js");

module.exports = {
  items: [
    ...a11y.items,
    ...bestPractices.items,
    ...caseStudies.items,
    ...codelabs.items,
    ...elements.items,
    ...shadowDOM.items,
    ...styling.items,
  ].sort((a, b) => {
    const textA = a.title.toUpperCase();
    const textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  }),
};
