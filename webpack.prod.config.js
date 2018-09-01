const pkg = require("./package.json");
const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  entry: {
    app: path.resolve(__dirname, "src/index.jsx"),
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].[chunkhash:8].js"
  },

  mode: "production",

  optimization: {
    minimizer: [new UglifyJsPlugin()]
  }
});
