const { DateTime } = require("luxon");
const UglifyJS = require("uglify-es");
const htmlmin = require("html-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const componentTabHref = require("./src/_filters/componentTabHref");
const htmlArray = require("./src/_filters/htmlArray");

module.exports = function(eleventyConfig) {

  // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });
  eleventyConfig.addFilter("componentTabHref", componentTabHref);
  eleventyConfig.addFilter("htmlArray", htmlArray);

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  eleventyConfig.addCollection("sortAZ", collection => {
    return collection.getAll().sort(function(a, b) {
      let titleA = a.data.title.toUpperCase();
      let titleB = b.data.title.toUpperCase();
      if (titleA < titleB) return -1;
      else if (titleA > titleB) return 1;
      else return 0;
    });
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy({ "static/": "/"});
  eleventyConfig.addPassthroughCopy("_includes/assets/");
  eleventyConfig.addPassthroughCopy("admin");

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: false,
    level: [2] // only gen ToC anchor id's for <h2>s in .md files
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
  );

  // eleventyConfig.addLinter("inclusive-language", function(content, inputPath, outputPath) {
  //   let words = "simply,obviously,basically,of course,clearly,just,everyone knows,however,easy".split(",");

  //   // Eleventy 1.0+: use this.inputPath and this.outputPath instead
  //   if( inputPath.endsWith(".md") ) {
  //     for( let word of words) {
  //       let regexp = new RegExp("\\b(" + word + ")\\b", "gi");
  //       if(content.match(regexp)) {
  //         console.warn(`Inclusive Language Linter (${inputPath}) Found: ${word}`);
  //       }
  //     }
  //   }
  // });

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
      layouts: "_includes/layouts"
    }
  };
};
