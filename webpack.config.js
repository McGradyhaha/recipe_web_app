const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    app: "./src/index.jsx"
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  devtool: "inline-source-map",

  devServer: {
    proxy: {
      '/':{
        target: 'http://localhost:5000',
        secure: false
      }

    },
    contentBase: "./dist",
    hot: true,
    inline: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { cacheDirectory: true, plugins: ["react-hot-loader/babel"] }
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
      },

    ]
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(
        JSON.parse(process.env.NODE_ENV == "development" || "false")
      )
    })
  ],

};
