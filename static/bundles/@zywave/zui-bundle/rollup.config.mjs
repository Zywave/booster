import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";
import terser from "@rollup/plugin-terser";
import cleanup from "rollup-plugin-cleanup";
import pkgMinifyHTML from "rollup-plugin-minify-html-literals";
import summary from "rollup-plugin-summary";
import { visualizer } from "rollup-plugin-visualizer";

const minifyHTML = pkgMinifyHTML.default;

const input = {
  bundle: "src/bundle.js",
  "components/table": "src/components/table.js",
  "components/step-flow": "src/components/step-flow.js",
};

export default [
  /* production bundle */
  {
    input,
    output: {
      dir: "dist",
      chunkFileNames: "internals/_[hash].js",
      entryFileNames: "[name].js",
      // we want the main entry point to be bundle.js, which is a chunked file
      format: "es",
    },
    plugins: [
      nodeResolve({
        browser: true,
      }),
      babel({
        babelHelpers: "runtime",
        presets: [
          [
            "@babel/preset-env",
            {
              bugfixes: true,
            },
          ],
        ],
        plugins: [
          [
            "@babel/plugin-transform-runtime",
            {
              absoluteRuntime: false,
              corejs: false,
              helpers: true,
              regenerator: false,
            },
          ],
        ],
      }),
      copy({
        targets: [{ src: "src/zui-loader.js", dest: "dist" }],
      }),
      minifyHTML(),
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
      }),
      summary(),
      visualizer({
        filename: "dist/zui-bundle-metrics-visualizer.html",
      }),
      cleanup({
        comments: "none",
      }),
    ],
  },
  /* development bundle */
  {
    input,
    output: {
      dir: "dev",
      chunkFileNames: "internals/_[hash].js",
      entryFileNames: "[name].js",
      // we want the main entry point to be bundle.js, which is a chunked file
      format: "es",
    },
    plugins: [
      nodeResolve({
        browser: true,
        exportConditions: ["development"],
      }),
      babel({
        babelHelpers: "runtime",
        presets: [
          [
            "@babel/preset-env",
            {
              bugfixes: true,
            },
          ],
        ],
        plugins: [
          [
            "@babel/plugin-transform-runtime",
            {
              absoluteRuntime: false,
              corejs: false,
              helpers: true,
              regenerator: false,
            },
          ],
        ],
      }),
    ],
  },
];
