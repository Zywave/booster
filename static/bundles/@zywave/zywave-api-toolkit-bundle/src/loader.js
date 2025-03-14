/* eslint-disable */

(function () {
  "use strict";
  const rootPath = getScriptPath();

  if (rootPath.includes("-pre") || rootPath.includes("@next")) {
    alert("loader.js in both ZUI and ZAPI has been removed. See https://booster.zywave.dev/application-framework/developers/installation/ for up-to-date instructions.");
  } else {
    addScript(rootPath + "bundle.js");
  }

  function getScriptPath() {
    const src = document.currentScript.src;

    const dir = src.substring(0, src.lastIndexOf("/"));
    return dir + "/";
  }

  function addScript(src) {
    const tag = document.createElement("script");
    tag.src = src;
    tag.type = "module";
    document.head.appendChild(tag);
  }
})();
