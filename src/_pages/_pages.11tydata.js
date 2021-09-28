module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      if (data.permalink) {
        return data.permalink;
      }
      let result = data.page?.inputPath;
      if (result) {
        result = result
          .replace("src/_pages/", "")
          .replace(/\.[^/.]+$/, "")
          .replace("/index", "")
           + "/";
      }
      return result;
    },
  },
};
