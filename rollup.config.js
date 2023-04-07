import typescript from "@rollup/plugin-typescript";
import glob from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";
import terser from "@rollup/plugin-terser";

export default {
  input: Object.fromEntries(
    glob
      .sync("src/*.ts")
      .map((file) => [
        path.relative(
          "src",
          file.slice(0, file.length - path.extname(file).length)
        ),
        fileURLToPath(new URL(file, import.meta.url)),
      ])
  ),
  output: [
    {
      dir: "dist",
      format: "cjs",
      sourcemap: "inline",
    },
    {
      dir: "dist",
      format: "cjs",
      entryFileNames: "[name].min.js",
      plugins: [terser()],
    },
  ],
  plugins: [typescript()],
};
