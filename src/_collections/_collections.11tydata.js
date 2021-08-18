module.exports = {
    eleventyComputed: {
      eleventyNavigation: {
        key: data => data.title,
        parent: data => {
          if (!data.page?.inputPath?.length) {
              return undefined;
          }
          const pathParts = data.page.inputPath.split("/");
          const parent = pathParts[pathParts.length - 2];
          return parent;
        }
      }
    }
  };