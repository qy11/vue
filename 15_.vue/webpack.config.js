const { resolve } = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  resolve: {
    modules: [resolve(__dirname, ""), resolve(__dirname, "node_modules")],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "./public/index.html"),
    }),
  ],
};
