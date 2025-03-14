import { copyFile } from "fs/promises";

await copyFile("dist/bundle.js", "dist/zui-bundle.js");
