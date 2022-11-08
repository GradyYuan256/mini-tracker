import ts from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import path from "path";

export default [
  {
    //入口文件
    input: "./src/core/index.ts",
    output: [
      {
        file: path.resolve(__dirname, "./dist/index.esm.js"),
        format: "es", //打包生成 es Module
      },
      {
        file: path.resolve(__dirname, "./dist/index.cjs.js"),
        format: "cjs", //打包生成 common js
      },
      {
        input: "./src/core/index.ts",
        file: path.resolve(__dirname, "./dist/index.js"),
        format: "umd", //打包生成 AMD CMD UMD
        name: "mini-tracker",
      },
    ],
    plugins: [ts()],
  },
  {
    //打包声明文件
    input: "./src/core/index.ts",
    output: {
      file: path.resolve(__dirname, "./dist/index.d.ts"),
      format: "es",
    },
    plugins: [dts()],
  },
];
