function parseMetadata(data) {
  let parent;
  let system;
  if (data.page?.inputPath?.length) {
    const inputPath = data.page.inputPath;
    const parts = inputPath.split("/_areas/");
    if (parts.length > 1) {
      const rightPart = parts[1];
      const splitOnSlash = rightPart.split("/");
      system = splitOnSlash[0];
      parent = splitOnSlash[splitOnSlash.length - 2] ?? system;
    }
  }

  return {
    data,
    parent,
    system
  }
}

module.exports = {
  eleventyComputed: {
    key: data => data.title,
    parent: data => {
      const metadata = parseMetadata(data);
      return metadata.parent;
    },
    system: data => {
      const metadata = parseMetadata(data);
      return metadata.system;
    },
    permalink: data => {
      const metadata = parseMetadata(data);
      if (!metadata.system) {
        return undefined;
      }

      let restOfPath = data.page.inputPath.split(`${metadata.system}/`)[1];
      if (!restOfPath) {
        console.log(data.page.inputPath);
      }
      restOfPath = restOfPath.replace(/\.[^/.]+$/, "");
      console.log(restOfPath);
      return `${metadata.system}/${restOfPath}/`;
    }
  }
};