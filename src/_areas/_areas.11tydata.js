const fs = require("fs");
const path = require("path");
const fm = require('front-matter')

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
      let parentDirCount = 2;
      if (filePath.endsWith("index.md")) {
        parentDirCount = 3;
      }
      parent = splitOnSlash[splitOnSlash.length - parentDirCount] ?? system;
    }
    permalink = buildPermalink(filePath, system);
  }

  return {
    parent,
    system,
    permalink,
  }
}

/**
 *
 * @param {fs.Dirent} dir
 * @returns
 */
function findFirstFile(dir) {
  const directoryContents = fs.readdirSync(dir, { withFileTypes: true });
  let firstFile = directoryContents.find(x => x.isFile());
  let directory = dir;
  if (!firstFile) {
    // we try once more to find an index file in a child directory, otherwise we fail
    for (const childDir of directoryContents) {
      const childDirContents = fs.readdirSync(path.join(dir, childDir.name), { withFileTypes: true });
      firstFile = childDirContents.find(p => p.isFile());
      directory = path.join(dir, childDir.name);
      if (firstFile) {
        break;
      }
    }
  }

  return {
    file: firstFile,
    directory,
  };
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
      if (data.permalink) {
        return data.permalink;
      }
      const metadata = parseMetadata(data);
      return metadata.permalink;
    },
    parentPermalink: data => {
      let permalink;
      if (data.page?.inputPath?.length) {
        let dirname = path.join(path.dirname(data.page.inputPath), "../");
        if (data.page.inputPath.endsWith("index.md")) {
          dirname = path.join(dirname, "../");
        }
        const files = fs.readdirSync(dirname, { withFileTypes: true });
        const firstFile = files.find(x => x.isFile());
        if (firstFile) {
          permalink = buildPermalink(path.join(dirname, firstFile.name)).replace(/\\/g, '/');
          permalink = permalink.startsWith(`/`) ? `` : `/${permalink}`;
        }
      }
      return permalink;
    },
    navItems: data => {
      // TODO: allow overriding of nav item order
      if (data.page?.inputPath?.length) {
        let dirname = path.join(path.dirname(data.page?.inputPath));
        if (data.page?.inputPath.endsWith("index.md")) {
          dirname = path.join(dirname, "..");
        }
        
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
              const result = findFirstFile(fileFullPath);
              firstParentDirsFile = result.file;
              fileUrl = buildPermalink(path.join(result.directory, firstParentDirsFile.name)).replace(/\\/g, '/');
            }
            fileUrl = fileUrl.startsWith(`/`) ? `` : `/${fileUrl}`;

            // check if current page
            let checkCurrentStatus = false;
            const currentPagePath = data.page?.inputPath?.split('/_areas/')[1].replace('.md', '/');
            const currentFileUrl = buildPermalink(fileFullPath).replace(/\\/g, '/');
            if (currentPagePath == currentFileUrl) {
              checkCurrentStatus = true;
            }

            let name = fileName;
            if (!file.isDirectory()) {
              const fileContents = fs.readFileSync(fileFullPath, 'utf8');
              const frontmatter = fm(fileContents);
              if (frontmatter.attributes?.title || frontmatter.attributes?.navTitle) {
                name = frontmatter.attributes.navTitle ?? frontmatter.attributes.title;
              }
            }

            return {
              url: fileUrl,
              name,
              isCurrent: checkCurrentStatus,
              currentPath: currentPagePath,
              currentFile: currentFileUrl
            };
          });
      }
    }
  }
};
