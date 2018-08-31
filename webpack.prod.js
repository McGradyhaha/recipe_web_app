const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              //supresses warnings, usually from module minification
              warnings: false
            }
        }),
    ]
});