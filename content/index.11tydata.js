const a11y = require("./accessibility/accessibility.11tydata.js");
const basics = require("./basics/basics.11tydata.js");
// const bestPractices = require("./best-practices/best-practices.11tydata.js");
// const caseStudies = require("./case-studies/case-studies.11tydata.js");
// const codelabs = require("./codelabs/codelabs.11tydata.js");
const componentLibraries = require("./component-libraries/component-libraries.11tydata.js");
const elements = require("./custom-elements/custom-elements.11tydata.js");
const designSystems = require("./design-systems/design-systems.11tydata.js");
// const documenting = require("./documenting/documenting.11tydata.js");
const formParticipation = require("./form-participation/form-participation.11tydata.js");
// const frameworksRecipes = require("./frameworks-recipes/frameworks-recipes.11tydata.js");
// const guidesAndTutorials = require("./guides-and-tutorials/guides-and-tutorials.11tydata.js");
const history = require("./history/history.11tydata.js");
const htmlTemplates = require("./html-templates/html-templates.11tydata.js");
const librariesAndTools = require("./libraries-and-tools/libraries-and-tools.11tydata.js");
// const opinionsAndTakes = require("./opinions-and-takes/opinions-and-takes.11tydata.js");
// const polyfillsAndShims = require("./polyfills-and-shims/polyfills-and-shims.11tydata.js");
// const proposalsAndDrafts = require("./proposals-and-drafts/proposals-and-drafts.11tydata.js");
const shadowDOM = require("./shadow-dom/shadow-dom.11tydata.js");
const shadowParts = require("./shadow-parts/shadow-parts.11tydata.js");
// const showcase = require("./showcase/showcase.11tydata.js");
// const stylingAndTheming = require("./styling-and-theming/styling-and-theming.11tydata.js");
// const testAutomation = require("./test-automation/test-automation.11tydata.js");

module.exports = {
  items: [
    ...a11y.items,
    ...basics.items,
    //   ...bestPractices.items,
    //   ...caseStudies.items,
    //   ...codelabs.items,
    ...componentLibraries.items,
    ...elements.items,
    ...designSystems.items,
    //   ...documenting.items,
    ...formParticipation.items,
    //   ...frameworksRecipes.items,
    //   ...guidesAndTutorials.items,
    ...history.items,
    ...htmlTemplates.items,
    ...librariesAndTools.items,
    //   ...opinionsAndTakes.items,
    //   ...polyfillsAndShims.items,
    //   ...proposalsAndDrafts.items,
    ...shadowDOM.items,
    ...shadowParts.items,
    // ...showcase.items,
    //   ...stylingAndTheming.items,
    //   ...testAutomation.items,
  ].sort((a, b) => {
    const textA = a.title.toUpperCase();
    const textB = b.title.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  }),
};
