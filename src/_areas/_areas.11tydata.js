const fs = require("fs");
const path = require("path");

function buildPermalink(filePath, system) {
  if (!filePath) {
    return filePath;
  }
  let permalink;
  if (system) {
    let restOfPath = filePath.split(`${system}/`)[1];
    if (restOfPath !== undefined) {
      restOfPath = restOfPath.replace(/\.[^/.]+$/, "");
      permalink = `${system}/${restOfPath}/`;
    }
  }

  if (!permalink) {
    let parts = [];
    if (filePath.includes("\\")) {
      parts = filePath.split("\\_areas\\");
    } else {
      parts = filePath.split("/_areas/");
    }
    const rightPart = parts[1];
    if (rightPart) {
      permalink = parts[1].replace(/\.[^/.]+$/, "") + "/";
    }
  }

  return permalink;
}

function parseMetadata(dataOrFilePath) {
  let parent;
  let system;
  let permalink;
  let filePath;
  
  if (typeof dataOrFilePath === 'string') {
    filePath = dataOrFilePath;
  } else if (dataOrFilePath.page?.inputPath?.length) {
    filePath = dataOrFilePath.page.inputPath;
  }

  if (filePath) {
    const parts = filePath.split("/_areas/");
    if (parts.length > 1) {
      const rightPart = parts[1];
      const splitOnSlash = rightPart.split("/");
      system = splitOnSlash[0];
      parent = splitOnSlash[splitOnSlash.length - 2] ?? system;
    }
    permalink = buildPermalink(filePath, system);
  }

  return {
    parent,
    system,
    permalink,
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
      return metadata.permalink;
    },
    parentPermalink: data => {
      let permalink;
      if (data.page?.inputPath?.length) {
        const dirname = path.join(path.dirname(data.page?.inputPath), "../");
        const files = fs.readdirSync(dirname, { withFileTypes: true });
        const firstFile = files.find(x => x.isFile());
        if (firstFile) {
          permalink = buildPermalink(path.join(dirname, firstFile.name));
        }
      }
      return permalink;
    },
    navItems: data => {
      // TODO: allow overriding of nav item order
      if (data.page?.inputPath?.length) {
        const dirname = path.join(path.dirname(data.page?.inputPath));
        
        return fs.readdirSync(dirname, { withFileTypes: true })
        .filter(dirEnt => dirEnt.isDirectory() || dirEnt.name.endsWith('.html') || dirEnt.name.endsWith('.md'))
        .map(file => {
          const fileFullPath = path.join(dirname, file.name);

          // get the file name without the extension only
          const fileName = path.parse(file.name).name;

          // create the file URL
          let fileUrl = buildPermalink(fileFullPath.replace(/\\/g, '/'));
          //check if current entry is a directory
          if (file.isDirectory()) {
            const parentDirs = fs.readdirSync(fileFullPath, { withFileTypes: true });
            const firstParentDirsFile = parentDirs.find(p => p.isFile());
            fileUrl = buildPermalink(path.join(dirname, file.name, firstParentDirsFile.name));
          }

          // check if current page
          let checkCurrentStatus = false;
          const currentPagePath = data.page?.filePathStem?.split('/_areas/')[1];
          const currentFileUrl = buildPermalink(fileFullPath).replace('/', '').replace(/\\/g, '/');
          if (currentPagePath == currentFileUrl) {
            checkCurrentStatus = true;
          }

          return {
            url: fileUrl,
            name: fileName,
            isCurrent: checkCurrentStatus,
            currentPath: currentPagePath,
            currentFile: currentFileUrl
          };
        });
      }
    }
  }
};
