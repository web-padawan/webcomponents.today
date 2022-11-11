const a11y = require("./accessibility/accessibility.11tydata.js");
const bestPractices = require("./best-practices/best-practices.11tydata.js");
const caseStudies = require("./case-studies/case-studies.11tydata.js");
const codelabs = require("./codelabs/codelabs.11tydata.js");
const elements = require("./custom-elements/custom-elements.11tydata.js");
const designSystems = require("./design-systems/design-systems.11tydata.js");
const frameworksRecipes = require("./frameworks-recipes/frameworks-recipes.11tydata.js");
const librariesAndTools = require("./libraries-and-tools/libraries-and-tools.11tydata.js");
const opinions = require("./opinions/opinions.11tydata.js");
const shadowDOM = require("./shadow-dom/shadow-dom.11tydata.js");
const shadowParts = require("./shadow-parts/shadow-parts.11tydata.js");
const stylingAndTheming = require("./styling-and-theming/styling-and-theming.11tydata.js");
const testAutomation = require("./test-automation/test-automation.11tydata.js");

module.exports = {
  items: [
    ...a11y.items,
    ...bestPractices.items,
    ...caseStudies.items,
    ...codelabs.items,
    ...elements.items,
    ...designSystems.items,
    ...frameworksRecipes.items,
    ...librariesAndTools.items,
    ...opinions.items,
    ...shadowDOM.items,
    ...shadowParts.items,
    ...stylingAndTheming.items,
    ...testAutomation.items,
  ].sort((a, b) => {
    const textA = a.title.toUpperCase();
    const textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  }),
};
