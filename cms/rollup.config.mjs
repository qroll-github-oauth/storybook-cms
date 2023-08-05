import typescript from "@rollup/plugin-typescript";
import linaria from "@linaria/rollup";
import css from "rollup-plugin-css-only";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

// ref: https://stackoverflow.com/questions/51291553/how-to-bundle-react-app-with-rollup

export default {
  input: "src/index.ts",
  output: {
    dir: "../public/admin",
    format: "cjs",
    entryFileNames: "cms.js"
  },
  external: ["netlify-cms-app"],
  plugins: [
    nodeResolve({
      browser: true,
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    commonjs(),
    typescript({

    }),
    linaria({
      sourceMap: false,
    }),
    css({
      output: "cms.css",
    }),
  ],
};
