/* eslint-disable @typescript-eslint/naming-convention */
const glob = require("glob");
const path = require("path");
const webpack = require("webpack");

const target = "web";
const distdir = path.join(__dirname, "dist", "web");

module.exports = [
  {
    // bundle used for Karma tests
    target: target,
    entry: glob.sync("./build/**/*.spec.js"),
    output: {
      path: distdir,
      filename: "tests.js",
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        SIMAPP44_ENABLED: "",
        SLOW_SIMAPP44_ENABLED: "",
        SIMAPP46_ENABLED: "",
        SLOW_SIMAPP46_ENABLED: "",
        SIMAPP47_ENABLED: "",
        SLOW_SIMAPP47_ENABLED: "",
      }),
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    resolve: {
      fallback: {
        buffer: false,
        crypto: false,
        events: false,
        path: false,
        stream: false,
        string_decoder: false,
      },
    },
  },
];
