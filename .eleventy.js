const UglifyJS = require("uglify-es");
const htmlmin = require("html-minifier");
const componentTabHref = require("./src/_filters/componentTabHref");
const htmlArray = require("./src/_filters/htmlArray");
const fs = require("fs");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

/**
 * Adds all lit 3rd party dependencies required for client-side hydration
 * @param {*} eleventyConfig
 */
function addLitDependencies(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("node_modules/@webcomponents");
  eleventyConfig.addPassthroughCopy("node_modules/@lit");
  eleventyConfig.addPassthroughCopy("node_modules/@lit-labs");
  eleventyConfig.addPassthroughCopy("node_modules/lit");
  eleventyConfig.addPassthroughCopy("node_modules/lit-element");
  eleventyConfig.addPassthroughCopy("node_modules/lit-html");
}

module.exports = function(eleventyConfig) {

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);
  new Intl.DateTimeFormat('en-US',{month:'2-digit',day:'2-digit', year:'numeric'})
  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    const opts = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return new Intl.DateTimeFormat("en-US", opts).format(dateObj);
  });
  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {
    return dateObj.toISOString();
  });

  eleventyConfig.addFilter("componentTabHref", componentTabHref);
  eleventyConfig.addFilter("htmlArray", htmlArray);

  // Sentence case titles and replace all hyphens with spaces
  // TODO: Improve title formating since some titles, such as "CSS guide", are outputting as "Css guide"
  eleventyConfig.addFilter("sentenceCase", function(title) {
    if (!title) {
      return title;
    }
    const sentenceCase = title.charAt(0).toUpperCase() + title.slice(1);
    return sentenceCase.replaceAll(/-/gm, ' ');
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

  eleventyConfig.addCollection("blogPosts", function(collectionApi) {
    return collectionApi
      .getAll()
      .filter(function(item) {
        return item.data.type === "blogPost";
      })
      .sort(function(a, b) {
        return b.date - a.date;
      });
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy({ "static/": "/"});
  eleventyConfig.addPassthroughCopy("_includes/assets/");
  eleventyConfig.addPassthroughCopy("admin");

  addLitDependencies(eleventyConfig);

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
    level: [2, 3, 4] // only gen ToC anchor id's for <h2>s, <h3>s and <h4>s in .md files
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
  );

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('_site/404.html');
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don't worry about it.
    // If you don't have a subdirectory, use "" or "/" (they do the same thing)
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
