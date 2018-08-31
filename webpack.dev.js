const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common,{
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',  
            options: {
                cacheDirectory: true,
                plugins: ['react-hot-loader/babel']
            }
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, 
            loader:'url-loader',
            options:{
                limit:8000
            } 
          }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});