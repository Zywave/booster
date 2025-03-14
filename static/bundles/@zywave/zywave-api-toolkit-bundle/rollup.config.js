import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";
import terser from "@rollup/plugin-terser";
import minifyHTML from "rollup-plugin-minify-html-literals";
import summary from "rollup-plugin-summary";

const input = {
  bundle: "src/bundle.js",
  "components/api-proxy": "src/components/api-proxy.js",
  "components/analytics": "src/components/analytics.js",
};

export default [
  /* production bundle */
  {
    input,
    preserveEntrySignatures: "strict",
    output: {
      dir: "dist",
      chunkFileNames: "internals/_[hash].js",
      entryFileNames: "[name].js",
      format: "es",
    },
    plugins: [
      nodeResolve(),
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
      minifyHTML.default(),
      terser({
        mangle: {
          properties: {
            // mangles every property that ends with an underscore (_) (i.e. foo_ => a)
            // see https://github.com/terser/terser#mangle-properties-options
            regex: /_$/,
          },
        },
      }),
      summary(),
      copy({
        targets: [
          { src: "src/loader.js", dest: "dist" },
          {
            src: "../../../node_modules/@oddbird/popover-polyfill/dist/popover.css",
            dest: "dist/internals/_polyfills/popover",
          },
        ],
      }),
    ],
  },
  /* development bundle */
  {
    input,
    preserveEntrySignatures: "strict",
    output: {
      dir: "dev",
      chunkFileNames: "internals/_[name]-[hash].js",
      entryFileNames: "[name].js",
      format: "es",
    },
    plugins: [
      nodeResolve({ exportConditions: ["development"] }),
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
        targets: [
          {
            src: "../../../node_modules/@oddbird/popover-polyfill/dist/popover.css",
            dest: "dev/internals/_polyfills/popover",
          },
        ],
      }),
    ],
  },
];
