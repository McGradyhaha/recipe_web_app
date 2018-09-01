const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    app: "./src/index.js"
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  devtool: "inline-source-map",

  devServer: {
    contentBase: "./dist",
    hot: true
  },

  module: {
    rules: [
      {
        // babel is for compiling ES6, jsx to ES5
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          plugins: ["react-hot-loader/babel"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
        loader: "url-loader",
        options: {
          limit: 8000
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({ template:"./public/index.html" }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(
        JSON.parse(process.env.NODE_ENV == "development" || "false")
      )
    })
  ]
};
