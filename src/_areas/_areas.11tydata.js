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

  permalink = permalink.replace(/(\\|\/)index\//, "/");
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

function* getFiles(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield { file: dirent, directory: path.dirname(res) };
    }
  }
}

/**
 *
 * @param {fs.Dirent} dir
 * @returns
 */
function findFirstFile(dir) {
  let f, d;
  for (const { file, directory } of getFiles(dir)) {
    if (file) {
      f = file;
      d = directory;
      break;
    }
  }

  return {
    file: f,
    directory: d,
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
        const dirname = path.join(path.dirname(data.page?.inputPath));

        // we need to find stupid folder/index files
        const contents = fs.readdirSync(dirname, { withFileTypes: true })
          .map(x => { return { dirent: x, fullPath: path.join(dirname, x.name) }; });

        const parentDir = path.join(dirname, "..");
        if (data.page.inputPath.endsWith("index.md") && !parentDir.endsWith("_areas")) {
          for (const dirent of fs.readdirSync(parentDir, { withFileTypes: true }).filter(x => x.isDirectory())) {
            const indexFilename = path.join(parentDir, dirent.name, "index.md");
            if (fs.existsSync(indexFilename) && indexFilename !== path.join(".", data.page.inputPath)) {
              const indexFile = fs
                .readdirSync(path.dirname(indexFilename), { withFileTypes: true })
                .find(x => x.isFile() && x.name === "index.md");
              contents.push({
                dirent: indexFile,
                fullPath: indexFilename,
              });
            }
          }
        }

        return contents
          .filter(( { dirent, _ }) => dirent.isDirectory() || dirent.name.endsWith('.html') || dirent.name.endsWith('.md'))
          .map(({ dirent, fullPath: fileFullPath }) => {
            // get the file name without the extension only
            const fileName = path.parse(dirent.name).name;

            // create the file URL
            let fileUrl = buildPermalink(fileFullPath.replace(/\\/g, '/'));
            //check if current entry is a directory
            if (dirent.isDirectory()) {
              const result = findFirstFile(fileFullPath);
              fileUrl = buildPermalink(path.join(result.directory, result.file.name)).replace(/\\/g, '/');
            }
            fileUrl = fileUrl.startsWith(`/`) ? `` : `/${fileUrl}`;

            // check if current page
            let checkCurrentStatus = false;
            const currentPagePath = data.page?.inputPath?.split('/_areas/')[1].replace('.md', '/');
            const currentPagePathSansIndex = currentPagePath.replace(/(\/|\\)index\//, '/');
            const currentFileUrl = buildPermalink(fileFullPath).replace(/\\/g, '/');
            if (currentPagePathSansIndex == currentFileUrl) {
              checkCurrentStatus = true;
            }

            let name = fileName;
            if (name === 'index') {
              name = path.basename(path.dirname(fileFullPath));
            }

            let order = 0;
            if (!dirent.isDirectory()) {
              const fileContents = fs.readFileSync(fileFullPath, 'utf8');
              const frontmatter = fm(fileContents);
              if (frontmatter.attributes?.title || frontmatter.attributes?.navTitle) {
                name = frontmatter.attributes.navTitle ?? frontmatter.attributes.title;
              }
              if (frontmatter.attributes?.order) {
                order = frontmatter.attributes.order;
              }
            }

            return {
              url: fileUrl,
              name,
              isCurrent: checkCurrentStatus,
              currentPath: currentPagePath,
              currentFile: currentFileUrl,
              order,
            };
          }).sort((a, b) => {
            if (a.order || b.order) {
              return b.order - a.order;
            } else {
              return a.name.localeCompare(b.name);
            }
          });
      }
    }
  }
};
