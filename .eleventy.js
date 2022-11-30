const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const eleventyRssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function (config) {
  config.setDataDeepMerge(true);
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("img");
  config.addPassthroughCopy("favicon.ico");
  config.addPassthroughCopy("site.webmanifest");
  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(eleventyRssPlugin);

  // https://www.11ty.io/docs/config/#configuration-options
  return {
    dir: {
      input: "./content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
